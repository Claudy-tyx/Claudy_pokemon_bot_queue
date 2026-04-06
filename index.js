require('dotenv').config();
const {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  Client,
  EmbedBuilder,
  Events,
  GatewayIntentBits,
  REST,
  Routes,
  SlashCommandBuilder,
} = require('discord.js');
const Database = require('better-sqlite3');
const { VALID_POKEMON } = require('./validPokemon');
const { CHOICE_GROUPS } = require('./choiceGroups');

const SLOT_DEFS = [
  { key: 'rare', label: 'Rare', maxPokemon: 1, type: 'normal' },
  { key: 'regional', label: 'Regional', maxPokemon: 1, type: 'normal' },
  { key: 'gmax', label: 'Gmax', maxPokemon: 1, type: 'normal' },
  { key: 'eevos', label: 'Eevos', maxPokemon: 1, type: 'normal' },
  { key: 'choice1', label: 'Choice1', maxPokemon: 0, type: 'choice' },
  { key: 'choice2', label: 'Choice2', maxPokemon: 0, type: 'choice' },
  { key: 'res1', label: 'Res1', maxPokemon: 1, type: 'normal' },
  { key: 'res2', label: 'Res2', maxPokemon: 1, type: 'normal' },
  { key: 'res3', label: 'Res3', maxPokemon: 1, type: 'normal' },
  { key: 'res4', label: 'Res4', maxPokemon: 1, type: 'normal' },
  { key: 'res5', label: 'Res5', maxPokemon: 1, type: 'normal' },
  { key: 'res6', label: 'Res6', maxPokemon: 1, type: 'normal' },
  { key: 'res7', label: 'Res7', maxPokemon: 1, type: 'normal' },
  { key: 'booster1', label: 'Booster1', maxPokemon: 1, type: 'normal' },
  { key: 'booster2', label: 'Booster2', maxPokemon: 1, type: 'normal' },
  { key: 'donor', label: 'Donor', maxPokemon: 1, type: 'normal' },
  { key: 'org', label: 'Org', maxPokemon: 1, type: 'normal' },
  { key: 'reserver', label: 'Reserver', maxPokemon: 1, type: 'normal' },
];

const SLOT_KEYS = new Set(SLOT_DEFS.map((slot) => slot.key));
const MAJOR_SLOT_KEYS = new Set(['rare', 'regional', 'gmax', 'eevos', 'choice1', 'choice2']);
const SLOT_COUNT = SLOT_DEFS.length;
const BANNED_POKEMON = new Set(['mewtwo', 'rayquaza', 'arceus']);
const CHOICE_GROUP_NAMES = Object.keys(CHOICE_GROUPS || {});
const MAX_SLASH_CHOICES = 25;

const dbPath = process.env.DB_PATH || 'queue.db';
const db = new Database(dbPath);
db.pragma('journal_mode = WAL');

db.exec(`
CREATE TABLE IF NOT EXISTS queue_state (
  guild_id TEXT PRIMARY KEY,
  channel_id TEXT NOT NULL,
  message_id TEXT NOT NULL,
  is_active INTEGER NOT NULL DEFAULT 0,
  created_by TEXT NOT NULL,
  created_at TEXT NOT NULL,
  phase TEXT NOT NULL DEFAULT 'staff'
);

CREATE TABLE IF NOT EXISTS slots (
  guild_id TEXT NOT NULL,
  slot_key TEXT NOT NULL,
  slot_label TEXT NOT NULL,
  slot_type TEXT NOT NULL,
  max_pokemon INTEGER NOT NULL DEFAULT 1,
  user_id TEXT,
  pokemon_names TEXT,
  claimed_at TEXT,
  choice_group_name TEXT,
  PRIMARY KEY (guild_id, slot_key)
);

CREATE TABLE IF NOT EXISTS user_claim_history (
  guild_id TEXT NOT NULL,
  user_id TEXT NOT NULL,
  last_slot_key TEXT,
  PRIMARY KEY (guild_id, user_id)
);
`);

function ensureSchema() {
  const slotColumns = db.prepare(`PRAGMA table_info(slots)`).all().map((column) => column.name);
  const requiredSlotColumns = [
    'guild_id',
    'slot_key',
    'slot_label',
    'slot_type',
    'max_pokemon',
    'user_id',
    'pokemon_names',
    'claimed_at',
    'choice_group_name',
  ];

  const needsSlotReset =
    slotColumns.includes('slot_number') ||
    requiredSlotColumns.some((column) => !slotColumns.includes(column));

  if (needsSlotReset) {
    db.exec(`DROP TABLE IF EXISTS slots`);
    db.exec(`
      CREATE TABLE IF NOT EXISTS slots (
        guild_id TEXT NOT NULL,
        slot_key TEXT NOT NULL,
        slot_label TEXT NOT NULL,
        slot_type TEXT NOT NULL,
        max_pokemon INTEGER NOT NULL DEFAULT 1,
        user_id TEXT,
        pokemon_names TEXT,
        claimed_at TEXT,
        choice_group_name TEXT,
        PRIMARY KEY (guild_id, slot_key)
      );
    `);
  }

  const queueColumns = db.prepare(`PRAGMA table_info(queue_state)`).all().map((column) => column.name);
  if (!queueColumns.includes('phase')) {
    db.exec(`DROP TABLE IF EXISTS queue_state`);
    db.exec(`
      CREATE TABLE IF NOT EXISTS queue_state (
        guild_id TEXT PRIMARY KEY,
        channel_id TEXT NOT NULL,
        message_id TEXT NOT NULL,
        is_active INTEGER NOT NULL DEFAULT 0,
        created_by TEXT NOT NULL,
        created_at TEXT NOT NULL,
        phase TEXT NOT NULL DEFAULT 'staff'
      );
    `);
  }

  const historyColumns = db.prepare(`PRAGMA table_info(user_claim_history)`).all().map((column) => column.name);
  if (historyColumns.includes('last_slot_number')) {
    db.exec(`DROP TABLE IF EXISTS user_claim_history`);
    db.exec(`
      CREATE TABLE IF NOT EXISTS user_claim_history (
        guild_id TEXT NOT NULL,
        user_id TEXT NOT NULL,
        last_slot_key TEXT,
        PRIMARY KEY (guild_id, user_id)
      );
    `);
  }
}

ensureSchema();

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

function normalizePokemonName(name) {
  return name.trim().toLowerCase().replace(/\s+/g, ' ');
}

function prettyPokemonName(name) {
  return name
    .split(' ')
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

function prettyGroupName(name) {
  return name
    .split(/[_\-\s]+/)
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

function getSlotDef(slotKey) {
  return SLOT_DEFS.find((slot) => slot.key === slotKey) || null;
}

function isChoiceSlot(slotKey) {
  return getSlotDef(slotKey)?.type === 'choice';
}

function hasStaffRole(member) {
  const staffRoleId = process.env.STAFF_ROLE_ID?.trim();
  if (!staffRoleId) return false;
  return member?.roles?.cache?.has(staffRoleId) ?? false;
}

function getChoiceGroupByName(groupName) {
  return (CHOICE_GROUPS?.[groupName] || []).map(normalizePokemonName);
}

function parsePokemonList(text) {
  if (!text) return [];
  try {
    const parsed = JSON.parse(text);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function getQueueState(guildId) {
  return db.prepare(`SELECT * FROM queue_state WHERE guild_id = ? AND is_active = 1`).get(guildId);
}

function getSlots(guildId) {
  return db
    .prepare(`SELECT * FROM slots WHERE guild_id = ?`)
    .all(guildId)
    .sort((a, b) => SLOT_DEFS.findIndex((slot) => slot.key === a.slot_key) - SLOT_DEFS.findIndex((slot) => slot.key === b.slot_key));
}

function getSlot(guildId, slotKey) {
  return db.prepare(`SELECT * FROM slots WHERE guild_id = ? AND slot_key = ?`).get(guildId, slotKey);
}

function getUserMajorClaimCount(guildId, userId) {
  const rows = db.prepare(`SELECT slot_key FROM slots WHERE guild_id = ? AND user_id = ?`).all(guildId, userId);
  return rows.filter((row) => MAJOR_SLOT_KEYS.has(row.slot_key)).length;
}

function getLastClaimedSlot(guildId, userId) {
  const row = db.prepare(`SELECT last_slot_key FROM user_claim_history WHERE guild_id = ? AND user_id = ?`).get(guildId, userId);
  return row?.last_slot_key ?? null;
}

function setLastClaimedSlot(guildId, userId, slotKey) {
  db.prepare(`
    INSERT INTO user_claim_history (guild_id, user_id, last_slot_key)
    VALUES (?, ?, ?)
    ON CONFLICT(guild_id, user_id)
    DO UPDATE SET last_slot_key = excluded.last_slot_key
  `).run(guildId, userId, slotKey);
}

function resetSlot(guildId, slotKey) {
  db.prepare(`
    UPDATE slots
    SET user_id = NULL,
        pokemon_names = ?,
        claimed_at = NULL,
        choice_group_name = NULL
    WHERE guild_id = ? AND slot_key = ?
  `).run(JSON.stringify([]), guildId, slotKey);
}

function savePokemonList(guildId, slotKey, pokemonList) {
  db.prepare(`UPDATE slots SET pokemon_names = ? WHERE guild_id = ? AND slot_key = ?`).run(JSON.stringify(pokemonList), guildId, slotKey);
}

function setChoiceGroupName(guildId, slotKey, groupName) {
  db.prepare(`UPDATE slots SET choice_group_name = ?, pokemon_names = ? WHERE guild_id = ? AND slot_key = ?`).run(
    groupName,
    JSON.stringify([]),
    guildId,
    slotKey
  );
}

function getClaimedAtValue(slot) {
  if (!slot?.claimed_at) return Number.MAX_SAFE_INTEGER;
  const time = new Date(slot.claimed_at).getTime();
  return Number.isNaN(time) ? Number.MAX_SAFE_INTEGER : time;
}

function slotOwnsPokemon(slot, pokemonName) {
  if (!slot?.user_id) return false;

  const chosenPokemon = parsePokemonList(slot.pokemon_names);
  if (chosenPokemon.includes(pokemonName)) return true;

  if (isChoiceSlot(slot.slot_key) && slot.choice_group_name) {
    return getChoiceGroupByName(slot.choice_group_name).includes(pokemonName);
  }

  return false;
}

function getConflictingOwner(guildId, pokemonName, currentSlotKey) {
  const currentSlot = getSlot(guildId, currentSlotKey);
  const currentClaimTime = getClaimedAtValue(currentSlot);

  const matchingSlots = getSlots(guildId)
    .filter((otherSlot) => otherSlot.slot_key !== currentSlotKey)
    .filter((otherSlot) => otherSlot.user_id)
    .filter((otherSlot) => slotOwnsPokemon(otherSlot, pokemonName))
    .sort((a, b) => getClaimedAtValue(a) - getClaimedAtValue(b));

  if (!matchingSlots.length) return null;

  const earliestOwner = matchingSlots[0];
  if (getClaimedAtValue(earliestOwner) <= currentClaimTime) {
    return earliestOwner;
  }

  return null;
}

function getChoiceGroupConflicts(guildId, slotKey, groupName) {
  const groupPokemon = getChoiceGroupByName(groupName);
  const conflicts = [];

  for (const pokemonName of groupPokemon) {
    const ownerSlot = getConflictingOwner(guildId, pokemonName, slotKey);
    if (ownerSlot) conflicts.push({ pokemonName, ownerSlot });
  }

  return conflicts;
}

function buildQueueEmbed(guildId) {
  const state = getQueueState(guildId);
  const slots = getSlots(guildId);
  const phaseText = state?.phase === 'public' ? 'Public phase' : 'Staff phase';

  const embed = new EmbedBuilder()
    .setTitle('Pokemon Queue')
    .setDescription(`Click a slot button to claim or release your slot. Use /pick for normal slots. Use /choosegroup for choice slots.`)
    .setColor(0x5865f2);

  for (const slot of slots) {
    const ownerText = slot.user_id ? `<@${slot.user_id}>` : 'Open';
    const chosenPokemon = parsePokemonList(slot.pokemon_names);

    let value = `Owner: ${ownerText}`;
    if (isChoiceSlot(slot.slot_key)) {
      value += `\nGroup: ${slot.choice_group_name ? prettyGroupName(slot.choice_group_name) : 'Not selected'}`;
    } else {
      value += `\nPokemon: ${chosenPokemon.length ? chosenPokemon.map(prettyPokemonName).join(', ') : 'Not set'}`;
    }

    embed.addFields({
      name: slot.slot_label,
      value,
      inline: true,
    });
  }

  embed.setFooter({ text: `${slots.filter((slot) => slot.user_id).length}/${SLOT_COUNT} slots claimed` });
  return embed;
}

function buildButtons(guildId) {
  const slots = getSlots(guildId);
  const rows = [];

  for (let i = 0; i < slots.length; i += 5) {
    const row = new ActionRowBuilder();
    for (const slot of slots.slice(i, i + 5)) {
      row.addComponents(
        new ButtonBuilder()
          .setCustomId(`claim:${guildId}:${slot.slot_key}`)
          .setLabel(slot.slot_label)
          .setStyle(slot.user_id ? ButtonStyle.Secondary : ButtonStyle.Success)
      );
    }
    rows.push(row);
  }

  return rows;
}

async function refreshQueueMessage(guild) {
  const state = getQueueState(guild.id);
  if (!state) return;

  const channel = await guild.channels.fetch(state.channel_id).catch(() => null);
  if (!channel) return;

  const message = await channel.messages.fetch(state.message_id).catch(() => null);
  if (!message) return;

  await message.edit({
    embeds: [buildQueueEmbed(guild.id)],
    components: buildButtons(guild.id),
  });
}

function buildFinalLists(guildId) {
  const slots = getSlots(guildId);
  const taggedUsers = [];
  const choiceLines = [];
  const reservePokemon = [];
  const removePokemon = [];

  for (const slot of slots) {
    if (slot.user_id) taggedUsers.push(`<@${slot.user_id}>`);

    if (isChoiceSlot(slot.slot_key) && slot.choice_group_name) {
      const groupPokemon = getChoiceGroupByName(slot.choice_group_name)
        .map(prettyPokemonName)
        .sort((a, b) => a.localeCompare(b));

      choiceLines.push(`${prettyGroupName(slot.choice_group_name)}: ${groupPokemon.join(', ') || 'None'}`);
      removePokemon.push(...groupPokemon);
      continue;
    }

    for (const pokemonName of parsePokemonList(slot.pokemon_names)) {
      const pretty = prettyPokemonName(pokemonName);
      reservePokemon.push(pretty);
      removePokemon.push(pretty);
    }
  }

  reservePokemon.sort((a, b) => a.localeCompare(b));
  const uniqueRemovePokemon = [...new Set(removePokemon)].sort((a, b) => a.localeCompare(b));

  return {
    mentions: [...new Set(taggedUsers)].join(' '),
    choiceList: choiceLines.length ? choiceLines.join('\n') : 'None',
    reservesList: reservePokemon.length ? reservePokemon.join('\n') : 'None',
    removeList: uniqueRemovePokemon.length ? uniqueRemovePokemon.join(', ') : 'None',
  };
}

async function finishQueueAndAnnounce(guild, finishedBy) {
  const state = getQueueState(guild.id);
  if (!state) return false;

  const channel = await guild.channels.fetch(state.channel_id).catch(() => null);
  if (!channel) return false;

  const summary = buildFinalLists(guild.id);

  await channel.send({
    content:
      `${summary.mentions}\nQueue finished by <@${finishedBy}>.\n\n` +
      `Choice list\n${summary.choiceList}\n\n` +
      `Reserves list\n${summary.reservesList}\n\n` +
      `N!cl remove list\n${summary.removeList}`,
  });

  db.prepare(`UPDATE queue_state SET is_active = 0 WHERE guild_id = ?`).run(guild.id);
  return true;
}

function addAllSlotChoices(option) {
  option.setRequired(true);
  for (const slot of SLOT_DEFS) {
    option.addChoices({ name: slot.label, value: slot.key });
  }
  return option;
}

function addChoiceSlotChoices(option) {
  option
    .setRequired(true)
    .addChoices(
      { name: 'Choice1', value: 'choice1' },
      { name: 'Choice2', value: 'choice2' }
    );
  return option;
}

function addChoiceGroupChoices(option) {
  option.setRequired(true);
  for (const groupName of CHOICE_GROUP_NAMES.slice(0, MAX_SLASH_CHOICES)) {
    option.addChoices({ name: prettyGroupName(groupName), value: groupName });
  }
  return option;
}

const commands = [
  new SlashCommandBuilder()
    .setName('startqueue')
    .setDescription('Start a new staff queue in this channel'),

  new SlashCommandBuilder()
    .setName('openqueue')
    .setDescription('Post the current queue in this public channel'),

  new SlashCommandBuilder()
    .setName('endqueue')
    .setDescription('End the current queue and post final lists'),

  new SlashCommandBuilder()
    .setName('finish')
    .setDescription('Finish the queue early and post final lists'),

  new SlashCommandBuilder()
    .setName('choosegroup')
    .setDescription('Choose a group for a claimed choice slot')
    .addStringOption((option) => addChoiceSlotChoices(option.setName('slot').setDescription('Your claimed choice slot')))
    .addStringOption((option) => addChoiceGroupChoices(option.setName('group').setDescription('Choice group name'))),

  new SlashCommandBuilder()
    .setName('pick')
    .setDescription('Assign a Pokemon to one of your claimed normal slots')
    .addStringOption((option) => addAllSlotChoices(option.setName('slot').setDescription('Your claimed slot')))
    .addStringOption((option) => option.setName('pokemon1').setDescription('Pokemon name').setRequired(true)),

  new SlashCommandBuilder()
    .setName('withdraw')
    .setDescription('Release one of your claimed slots')
    .addStringOption((option) => addAllSlotChoices(option.setName('slot').setDescription('Slot to release'))),

  new SlashCommandBuilder()
    .setName('adminremove')
    .setDescription('Admin remove a player from a claimed slot')
    .addStringOption((option) => addAllSlotChoices(option.setName('slot').setDescription('Slot to clear'))),
].map((command) => command.toJSON());

async function registerCommands() {
  const rest = new REST({ version: '10' }).setToken(process.env.DISCORD_TOKEN);
  await rest.put(
    Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID),
    { body: commands }
  );
}

client.once(Events.ClientReady, () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.on(Events.InteractionCreate, async (interaction) => {
  try {
    if (interaction.isChatInputCommand()) {
      const { guild, user } = interaction;
      if (!guild) {
        return interaction.reply({ content: 'Use this in a server.', ephemeral: true });
      }

      if (interaction.commandName === 'startqueue') {
        if (!hasStaffRole(interaction.member)) {
          return interaction.reply({ content: 'Only staff can use this command.', ephemeral: true });
        }

        if (getQueueState(guild.id)) {
          return interaction.reply({ content: 'A queue is already active.', ephemeral: true });
        }

        const tx = db.transaction(() => {
          db.prepare(`DELETE FROM slots WHERE guild_id = ?`).run(guild.id);
          db.prepare(`DELETE FROM queue_state WHERE guild_id = ?`).run(guild.id);

          for (const slot of SLOT_DEFS) {
            db.prepare(`
              INSERT INTO slots (
                guild_id, slot_key, slot_label, slot_type, max_pokemon,
                user_id, pokemon_names, claimed_at, choice_group_name
              ) VALUES (?, ?, ?, ?, ?, NULL, ?, NULL, NULL)
            `).run(guild.id, slot.key, slot.label, slot.type, slot.maxPokemon, JSON.stringify([]));
          }
        });
        tx();

        const queueMessage = await interaction.channel.send({
          embeds: [buildQueueEmbed(guild.id)],
          components: buildButtons(guild.id),
        });

        db.prepare(`
          INSERT INTO queue_state (
            guild_id,
            channel_id,
            message_id,
            is_active,
            created_by,
            created_at,
            phase
          )
          VALUES (?, ?, ?, 1, ?, ?, 'staff')
        `).run(
          guild.id,
          interaction.channel.id,
          queueMessage.id,
          user.id,
          new Date().toISOString()
        );

        return interaction.reply({
          content: 'Staff queue started in this channel. When staff are done, run /openqueue in the public channel.',
          ephemeral: true,
        });
      }

      if (interaction.commandName === 'openqueue') {
        if (!hasStaffRole(interaction.member)) {
          return interaction.reply({
            content: 'Only staff can use this command.',
            ephemeral: true,
          });
        }

        const state = getQueueState(guild.id);
        if (!state) {
          return interaction.reply({ content: 'No active queue.', ephemeral: true });
        }

        const oldChannel = await guild.channels.fetch(state.channel_id).catch(() => null);
        if (oldChannel) {
          const oldMessage = await oldChannel.messages.fetch(state.message_id).catch(() => null);
          if (oldMessage) {
            await oldMessage.edit({
              embeds: [buildQueueEmbed(guild.id)],
              components: [],
            }).catch(() => null);
          }
        }

        const queueMessage = await interaction.channel.send({
          embeds: [buildQueueEmbed(guild.id)],
          components: buildButtons(guild.id),
        });

        db.prepare(`
          UPDATE queue_state
          SET channel_id = ?, message_id = ?, phase = 'public'
          WHERE guild_id = ?
        `).run(interaction.channel.id, queueMessage.id, guild.id);

        return interaction.reply({
          content: 'Queue opened to public in this channel.',
          ephemeral: true,
        });
      }

      if (interaction.commandName === 'endqueue' || interaction.commandName === 'finish') {
        if (!hasStaffRole(interaction.member)) {
          return interaction.reply({ content: 'Only staff can use this command.', ephemeral: true });
        }

        if (!getQueueState(guild.id)) {
          return interaction.reply({ content: 'No active queue.', ephemeral: true });
        }

        await finishQueueAndAnnounce(guild, user.id);
        return interaction.reply({
          content: interaction.commandName === 'finish' ? 'Queue finished.' : 'Queue ended and final lists posted.',
          ephemeral: true,
        });
      }

      if (interaction.commandName === 'choosegroup') {
        if (!getQueueState(guild.id)) {
          return interaction.reply({ content: 'No active queue right now.', ephemeral: true });
        }

        const slotKey = interaction.options.getString('slot', true);
        const groupName = interaction.options.getString('group', true);
        const slot = getSlot(guild.id, slotKey);
        const slotDef = getSlotDef(slotKey);

        if (!slotDef || slotDef.type !== 'choice') {
          return interaction.reply({ content: 'That is not a choice slot.', ephemeral: true });
        }

        if (!slot || slot.user_id !== user.id) {
          return interaction.reply({ content: 'You can only choose a group for your own claimed choice slot.', ephemeral: true });
        }

        if (!CHOICE_GROUP_NAMES.includes(groupName)) {
          return interaction.reply({ content: 'That choice group does not exist.', ephemeral: true });
        }

        setChoiceGroupName(guild.id, slotKey, groupName);
        await refreshQueueMessage(guild);

        const conflicts = getChoiceGroupConflicts(guild.id, slotKey, groupName);
        if (conflicts.length) {
          const warningText = conflicts
            .slice(0, 8)
            .map(({ pokemonName, ownerSlot }) => `${prettyPokemonName(pokemonName)} → ${ownerSlot.slot_label}`)
            .join('\n');

          return interaction.reply({
            content:
              `${slotDef.label} is now using **${prettyGroupName(groupName)}**.\n` +
              `Some Pokémon in this group are already taken by earlier claims:\n${warningText}`,
          });
        }

        return interaction.reply({
          content: `${slotDef.label} is now using **${prettyGroupName(groupName)}**.`,
          ephemeral: true,
        });
      }

      if (interaction.commandName === 'pick') {
        if (!getQueueState(guild.id)) {
          return interaction.reply({ content: 'No active queue right now.', ephemeral: true });
        }

        const slotKey = interaction.options.getString('slot', true);
        const pokemonName = normalizePokemonName(interaction.options.getString('pokemon1', true));
        const slot = getSlot(guild.id, slotKey);
        const slotDef = getSlotDef(slotKey);

        if (!slotDef || !slot || slot.user_id !== user.id) {
          return interaction.reply({ content: 'You can only set Pokemon for your own claimed slot.', ephemeral: true });
        }

        if (slotDef.type === 'choice') {
          return interaction.reply({
            content: `Choice slots only use **/choosegroup**. You do not need /pick for ${slotDef.label}.`,
            ephemeral: true,
          });
        }

        if (!VALID_POKEMON.has(pokemonName)) {
          return interaction.reply({ content: `**${prettyPokemonName(pokemonName)}** is not a valid base Pokemon name.`, ephemeral: true });
        }

        if (BANNED_POKEMON.has(pokemonName)) {
          return interaction.reply({ content: `**${prettyPokemonName(pokemonName)}** is not allowed in this queue.`, ephemeral: true });
        }

        const conflictingSlot = getConflictingOwner(guild.id, pokemonName, slotKey);
        if (conflictingSlot) {
          return interaction.reply({
            content: `**${prettyPokemonName(pokemonName)}** belongs to ${conflictingSlot.slot_label} because that slot was claimed earlier.`,
            ephemeral: true,
          });
        }

        savePokemonList(guild.id, slotKey, [pokemonName]);
        await refreshQueueMessage(guild);
        return interaction.reply({
          content: `Set ${slotDef.label} to **${prettyPokemonName(pokemonName)}**. Run /pick again if you need to change it.`,
        });
      }

      if (interaction.commandName === 'withdraw') {
        if (!getQueueState(guild.id)) {
          return interaction.reply({ content: 'No active queue right now.', ephemeral: true });
        }

        const slotKey = interaction.options.getString('slot', true);
        const slot = getSlot(guild.id, slotKey);
        const slotDef = getSlotDef(slotKey);

        if (!slotDef || !slot || slot.user_id !== user.id) {
          return interaction.reply({ content: 'That is not your slot.', ephemeral: true });
        }

        resetSlot(guild.id, slotKey);
        await refreshQueueMessage(guild);
        return interaction.reply({ content: `You withdrew from ${slotDef.label}.`, ephemeral: true });
      }

      if (interaction.commandName === 'adminremove') {
        if (!hasStaffRole(interaction.member)) {
          return interaction.reply({ content: 'Only staff can use this command.', ephemeral: true });
        }

        if (!getQueueState(guild.id)) {
          return interaction.reply({ content: 'No active queue right now.', ephemeral: true });
        }

        const slotKey = interaction.options.getString('slot', true);
        const slot = getSlot(guild.id, slotKey);
        const slotDef = getSlotDef(slotKey);

        if (!slotDef || !slot || !slot.user_id) {
          return interaction.reply({ content: 'That slot is already empty.', ephemeral: true });
        }

        resetSlot(guild.id, slotKey);
        await refreshQueueMessage(guild);
        return interaction.reply({ content: `${slotDef.label} has been cleared by admin.`, ephemeral: true });
      }
    }

    if (interaction.isButton()) {
      const [action, guildId, slotKey] = interaction.customId.split(':');
      if (action !== 'claim') return;
      if (!interaction.guild || interaction.guild.id !== guildId) return;
      if (!SLOT_KEYS.has(slotKey)) return;

      if (!getQueueState(interaction.guild.id)) {
        return interaction.reply({ content: 'No active queue right now.', ephemeral: true });
      }

      const slot = getSlot(interaction.guild.id, slotKey);
      const slotDef = getSlotDef(slotKey);
      const userId = interaction.user.id;

      if (!slotDef || !slot) {
        return interaction.reply({ content: 'Invalid slot.', ephemeral: true });
      }

      if (slot.user_id === userId) {
        resetSlot(interaction.guild.id, slotKey);
        await refreshQueueMessage(interaction.guild);
        return interaction.reply({ content: `You released ${slotDef.label}.`, ephemeral: true });
      }

      if (slot.user_id) {
        return interaction.reply({ content: `${slotDef.label} is already taken.`, ephemeral: true });
      }

      if (MAJOR_SLOT_KEYS.has(slotKey) && getUserMajorClaimCount(interaction.guild.id, userId) >= 2) {
        return interaction.reply({
          content: 'You cannot hold more than 2 major groups at once.',
          ephemeral: true,
        });
      }

      if (getLastClaimedSlot(interaction.guild.id, userId) === slotKey) {
        return interaction.reply({
          content: `You cannot claim ${slotDef.label} this session because it was your last session slot.`,
          ephemeral: true,
        });
      }

      db.prepare(`
        UPDATE slots
        SET user_id = ?, pokemon_names = ?, claimed_at = ?, choice_group_name = NULL
        WHERE guild_id = ? AND slot_key = ?
      `).run(userId, JSON.stringify([]), new Date().toISOString(), interaction.guild.id, slotKey);
      setLastClaimedSlot(interaction.guild.id, userId, slotKey);

      await refreshQueueMessage(interaction.guild);

      if (slotDef.type === 'choice') {
        return interaction.reply({
          content: `You claimed ${slotDef.label}. Next use **/choosegroup** to select a group.`,
          ephemeral: true,
        });
      }

      return interaction.reply({
        content: `You claimed ${slotDef.label}. Now use **/pick** to choose your Pokémon.`,
        ephemeral: true,
      });
    }
  } catch (error) {
    console.error(error);
    if (interaction.isRepliable() && !interaction.replied && !interaction.deferred) {
      await interaction.reply({ content: 'Something went wrong.', ephemeral: true }).catch(() => null);
    }
  }
});

process.on('unhandledRejection', (error) => {
  console.error('Unhandled promise rejection:', error);
});

process.on('uncaughtException', (error) => {
  console.error('Uncaught exception:', error);
});

(async () => {
  try {
    await registerCommands();
    console.log('Slash commands registered.');
    await client.login(process.env.DISCORD_TOKEN);
    console.log('Login call completed.');
  } catch (error) {
    console.error('Startup failed:', error);
  }
})();