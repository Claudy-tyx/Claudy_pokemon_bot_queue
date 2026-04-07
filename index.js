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

const EPHEMERAL = 64;

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
const BOOSTER_SLOT_KEYS = new Set(['booster1', 'booster2', 'donor']);
const MAJOR_SLOT_KEYS = new Set(['rare', 'regional', 'gmax', 'eevos', 'choice1', 'choice2']);
const CHOOSE_RARE_SLOT_KEYS = new Set(['gmax', 'choice1', 'choice2']);
const CHOICE_SLOT_KEYS = new Set(['choice1', 'choice2']);
const SLOT_COUNT = SLOT_DEFS.length;
const MAIN_SLOT_COUNT = SLOT_DEFS.filter((slot) => !BOOSTER_SLOT_KEYS.has(slot.key)).length;
const BANNED_POKEMON = new Set(['mewtwo', 'rayquaza', 'arceus']);
const CHOICE_GROUP_NAMES = Object.keys(CHOICE_GROUPS || {});
const MAX_SLASH_CHOICES = 25;
const MISSINGNO_NAME = 'missingno';
const RES_SLOT_REGEX = /^res[1-7]$/;
const MAX_NOTES_PER_SLOT = 5;
const FIXED_REMOVE_TAIL = [
  'All Eevee',
  'Vaporeon',
  'Jolteon',
  'Flareon',
  'Espeon',
  'Umbreon',
  'Leafeon',
  'Glaceon',
  'Sylveon',
  'All Pikachu',
  'Missingno',
  'Rare',
  'Regional',
  'Gmax',
  'Paradox',
];

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
  phase TEXT NOT NULL DEFAULT 'staff',
  booster_locked INTEGER NOT NULL DEFAULT 1
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
  chosen_rare TEXT,
  PRIMARY KEY (guild_id, slot_key)
);

CREATE TABLE IF NOT EXISTS slot_notes (
  guild_id TEXT NOT NULL,
  slot_key TEXT NOT NULL,
  note_index INTEGER NOT NULL,
  note_text TEXT NOT NULL,
  PRIMARY KEY (guild_id, slot_key, note_index)
);

CREATE TABLE IF NOT EXISTS user_claim_history (
  guild_id TEXT NOT NULL,
  user_id TEXT NOT NULL,
  last_slot_key TEXT,
  PRIMARY KEY (guild_id, user_id)
);

CREATE TABLE IF NOT EXISTS finished_history (
  guild_id TEXT PRIMARY KEY,
  finished_at TEXT NOT NULL,
  summary_json TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS readiness (
  guild_id TEXT NOT NULL,
  user_id TEXT NOT NULL,
  is_ready INTEGER NOT NULL DEFAULT 0,
  PRIMARY KEY (guild_id, user_id)
);
`);

function ensureColumn(tableName, columnName, sqlTypeWithDefault) {
  const columns = db.prepare(`PRAGMA table_info(${tableName})`).all().map((col) => col.name);
  if (!columns.includes(columnName)) {
    db.exec(`ALTER TABLE ${tableName} ADD COLUMN ${columnName} ${sqlTypeWithDefault}`);
  }
}

function ensureSchema() {
  ensureColumn('queue_state', 'phase', `TEXT NOT NULL DEFAULT 'staff'`);
  ensureColumn('queue_state', 'booster_locked', `INTEGER NOT NULL DEFAULT 1`);
  ensureColumn('slots', 'chosen_rare', `TEXT`);

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
  return String(name)
    .split(' ')
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

function prettyGroupName(name) {
  return String(name)
    .split(/[_\-\s]+/)
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

function getSlotDef(slotKey) {
  return SLOT_DEFS.find((slot) => slot.key === slotKey) || null;
}

function isChoiceSlot(slotKey) {
  return CHOICE_SLOT_KEYS.has(slotKey);
}

function isResSlot(slotKey) {
  return RES_SLOT_REGEX.test(slotKey);
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

function serializePokemonList(list) {
  return JSON.stringify(list);
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

function getSlotNotes(guildId, slotKey) {
  return db
    .prepare(`
      SELECT note_index, note_text
      FROM slot_notes
      WHERE guild_id = ? AND slot_key = ?
      ORDER BY note_index ASC
    `)
    .all(guildId, slotKey);
}

function addSlotNote(guildId, slotKey, noteText) {
  const existing = getSlotNotes(guildId, slotKey);
  if (existing.length >= MAX_NOTES_PER_SLOT) {
    return { ok: false, reason: 'max_notes' };
  }

  const nextIndex = existing.length + 1;
  db.prepare(`
    INSERT INTO slot_notes (guild_id, slot_key, note_index, note_text)
    VALUES (?, ?, ?, ?)
  `).run(guildId, slotKey, nextIndex, noteText.trim());

  return { ok: true, noteIndex: nextIndex };
}

function clearSlotNotes(guildId, slotKey) {
  db.prepare(`
    DELETE FROM slot_notes
    WHERE guild_id = ? AND slot_key = ?
  `).run(guildId, slotKey);
}

function clearAllSlotNotesForGuild(guildId) {
  db.prepare(`
    DELETE FROM slot_notes
    WHERE guild_id = ?
  `).run(guildId);
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
        choice_group_name = NULL,
        chosen_rare = NULL
    WHERE guild_id = ? AND slot_key = ?
  `).run(serializePokemonList([]), guildId, slotKey);

  clearSlotNotes(guildId, slotKey);
}

function savePokemonList(guildId, slotKey, pokemonList) {
  db.prepare(`UPDATE slots SET pokemon_names = ? WHERE guild_id = ? AND slot_key = ?`)
    .run(serializePokemonList(pokemonList), guildId, slotKey);
}

function setChoiceGroupName(guildId, slotKey, groupName) {
  db.prepare(`UPDATE slots SET choice_group_name = ?, pokemon_names = ? WHERE guild_id = ? AND slot_key = ?`)
    .run(groupName, serializePokemonList([]), guildId, slotKey);
}

function setChosenRare(guildId, slotKey, rareText) {
  db.prepare(`UPDATE slots SET chosen_rare = ? WHERE guild_id = ? AND slot_key = ?`)
    .run(rareText.trim(), guildId, slotKey);
}

function setBoosterLocked(guildId, locked) {
  db.prepare(`UPDATE queue_state SET booster_locked = ? WHERE guild_id = ? AND is_active = 1`)
    .run(locked ? 1 : 0, guildId);
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

function getCurrentHolderMentions(guildId) {
  return [...new Set(getSlots(guildId).filter((slot) => slot.user_id).map((slot) => `<@${slot.user_id}>`))].join(' ');
}

function buildSummaryFromCurrentSlots(guildId) {
  const slots = getSlots(guildId);
  const choiceLines = [];
  const reservePokemon = [];
  const removePokemon = [];
  const chosenRares = [];

  for (const slot of slots) {
    if (slot.chosen_rare && CHOOSE_RARE_SLOT_KEYS.has(slot.slot_key)) {
      chosenRares.push(slot.chosen_rare.trim());
    }

    if (isChoiceSlot(slot.slot_key) && slot.choice_group_name) {
      const groupPokemon = getChoiceGroupByName(slot.choice_group_name)
        .filter((name) => name !== MISSINGNO_NAME)
        .map(prettyPokemonName)
        .sort((a, b) => a.localeCompare(b));

      choiceLines.push(`${prettyGroupName(slot.choice_group_name)}: ${groupPokemon.join(', ') || 'None'}`);
      removePokemon.push(...groupPokemon);
      continue;
    }

    for (const pokemonName of parsePokemonList(slot.pokemon_names)) {
      if (pokemonName === MISSINGNO_NAME) continue;
      const pretty = prettyPokemonName(pokemonName);
      reservePokemon.push(pretty);
      removePokemon.push(pretty);
    }
  }

  reservePokemon.sort((a, b) => a.localeCompare(b));
  const uniqueRemovePokemon = [...new Set(removePokemon)].sort((a, b) => a.localeCompare(b));
  const uniqueChosenRares = [...new Set(chosenRares.filter(Boolean))];

  const choiceGroupNames = slots
    .filter((slot) => isChoiceSlot(slot.slot_key) && slot.choice_group_name)
    .map((slot) => slot.choice_group_name.toLowerCase());

  return {
    finishedAt: new Date().toISOString(),
    choiceList: choiceLines.length ? choiceLines.join('\n') : 'None',
    reservesList: reservePokemon.length ? reservePokemon.join('\n') : 'None',
    removeList: [...uniqueRemovePokemon, ...FIXED_REMOVE_TAIL].join(', '),
    chosenRares: uniqueChosenRares.length ? uniqueChosenRares.join(', ') : 'None',
    choicePikasTaken: choiceGroupNames.some((name) => name.includes('pika')),
    choiceParadoxTaken: choiceGroupNames.some((name) => name.includes('paradox')),
    holderIds: [...new Set(slots.filter((slot) => slot.user_id).map((slot) => slot.user_id))],
    slotSnapshot: slots.map((slot) => ({
      slot_key: slot.slot_key,
      slot_label: slot.slot_label,
      slot_type: slot.slot_type,
      user_id: slot.user_id,
      pokemon_names: parsePokemonList(slot.pokemon_names),
      choice_group_name: slot.choice_group_name,
      chosen_rare: slot.chosen_rare,
      notes: getSlotNotes(guildId, slot.slot_key).map((n) => n.note_text),
    })),
  };
}

function saveFinishedHistory(guildId, summary) {
  db.prepare(`
    INSERT INTO finished_history (guild_id, finished_at, summary_json)
    VALUES (?, ?, ?)
    ON CONFLICT(guild_id)
    DO UPDATE SET finished_at = excluded.finished_at, summary_json = excluded.summary_json
  `).run(guildId, summary.finishedAt, JSON.stringify(summary));
}

function getFinishedHistory(guildId) {
  const row = db.prepare(`SELECT * FROM finished_history WHERE guild_id = ?`).get(guildId);
  if (!row) return null;
  try {
    return JSON.parse(row.summary_json);
  } catch {
    return null;
  }
}

function resetReadiness(guildId, userIds) {
  db.prepare(`DELETE FROM readiness WHERE guild_id = ?`).run(guildId);
  const insert = db.prepare(`
    INSERT INTO readiness (guild_id, user_id, is_ready)
    VALUES (?, ?, 0)
  `);
  for (const userId of userIds) insert.run(guildId, userId);
}

function getReadinessRows(guildId) {
  return db.prepare(`SELECT * FROM readiness WHERE guild_id = ? ORDER BY user_id`).all(guildId);
}

function setReadiness(guildId, userId, isReady) {
  db.prepare(`
    INSERT INTO readiness (guild_id, user_id, is_ready)
    VALUES (?, ?, ?)
    ON CONFLICT(guild_id, user_id)
    DO UPDATE SET is_ready = excluded.is_ready
  `).run(guildId, userId, isReady ? 1 : 0);
}

function buildReadinessEmbed(guildId) {
  const rows = getReadinessRows(guildId);
  const readyLines = rows.map((row) => `${row.is_ready ? '✅ Ready' : '❌ Not Ready'} - <@${row.user_id}>`);
  return new EmbedBuilder()
    .setTitle('Readiness Checker')
    .setDescription(readyLines.length ? readyLines.join('\n') : 'No buyers found.')
    .setColor(0x5865f2);
}

function getMainFilledCount(slots) {
  return slots.filter((slot) => !BOOSTER_SLOT_KEYS.has(slot.slot_key) && slot.user_id).length;
}

function getBoosterFilledCount(slots) {
  return slots.filter((slot) => BOOSTER_SLOT_KEYS.has(slot.slot_key) && slot.user_id).length;
}

function buildQueueEmbedFromSlots(slots, options = {}) {
  const phaseText = options.phaseText ?? 'Public phase';
  const boosterLocked = !!options.boosterLocked;
  const mainFilled = getMainFilledCount(slots);
  const boosterFilled = getBoosterFilledCount(slots);

  const embed = new EmbedBuilder()
    .setTitle(options.title ?? 'Eevee Org Bot')
    .setDescription(
      `Phase: **${phaseText}**\n` +
      `${mainFilled}/${MAIN_SLOT_COUNT} slots filled\n` +
      `Boosters + Donor ${boosterFilled}/3 filled\n` +
      `Booster status: **${boosterLocked ? 'Locked' : 'Unlocked'}**\n` +
      `Use /pick for normal slots. Use /choosegroup for choice slots.`
    )
    .setColor(0x5865f2);

  for (const slot of slots) {
    const ownerText = slot.user_id ? `<@${slot.user_id}>` : 'Open';
    const chosenPokemon = Array.isArray(slot.pokemon_names) ? slot.pokemon_names : parsePokemonList(slot.pokemon_names);
    let value = `Owner: ${ownerText}`;

    if (isChoiceSlot(slot.slot_key)) {
      value += `\nGroup: ${slot.choice_group_name ? prettyGroupName(slot.choice_group_name) : 'Not selected'}`;
    } else {
      value += `\nPokemon: ${chosenPokemon.length ? chosenPokemon.map(prettyPokemonName).join(', ') : 'Not set'}`;
    }

    if (slot.chosen_rare && CHOOSE_RARE_SLOT_KEYS.has(slot.slot_key)) {
      value += `\nChosen rare: ${slot.chosen_rare}`;
    }

    const notes = Array.isArray(slot.notes)
      ? slot.notes
      : getSlotNotes(options.guildIdForNotes ?? '', slot.slot_key).map((n) => n.note_text);

    notes.forEach((note, index) => {
      value += `\n${index === 0 ? 'Note' : `Note ${index + 1}`}: ${note}`;
    });

    embed.addFields({
      name: slot.slot_label,
      value,
      inline: true,
    });
  }

  embed.setFooter({ text: `${slots.filter((slot) => slot.user_id).length}/${SLOT_COUNT} total slots claimed` });
  return embed;
}

function buildQueueEmbed(guildId) {
  const state = getQueueState(guildId);
  const slots = getSlots(guildId);
  const phaseText = state?.phase === 'public' ? 'Public phase' : 'Staff phase';

  return buildQueueEmbedFromSlots(slots, {
    title: 'Eevee Org Bot',
    phaseText,
    boosterLocked: !!state?.booster_locked,
    guildIdForNotes: guildId,
  });
}

function getOpenButtonStyle(slotKey) {
  if (BOOSTER_SLOT_KEYS.has(slotKey)) return ButtonStyle.Secondary;
  if (slotKey === 'org' || slotKey === 'reserver') return ButtonStyle.Primary;
  return ButtonStyle.Success;
}

function buildButtons(guildId) {
  const state = getQueueState(guildId);
  const slots = getSlots(guildId);
  const rows = [];

  for (let i = 0; i < slots.length; i += 5) {
    const row = new ActionRowBuilder();
    for (const slot of slots.slice(i, i + 5)) {
      const isLockedBooster = BOOSTER_SLOT_KEYS.has(slot.slot_key) && !!state?.booster_locked && !slot.user_id;
      row.addComponents(
        new ButtonBuilder()
          .setCustomId(`claim:${guildId}:${slot.slot_key}`)
          .setLabel(slot.slot_label)
          .setStyle(slot.user_id ? ButtonStyle.Secondary : getOpenButtonStyle(slot.slot_key))
          .setDisabled(isLockedBooster)
      );
    }
    rows.push(row);
  }

  rows.push(
    new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId(`boosterlock:${guildId}:lock`)
        .setLabel('Lock Boosters')
        .setStyle(ButtonStyle.Danger),
      new ButtonBuilder()
        .setCustomId(`boosterlock:${guildId}:unlock`)
        .setLabel('Unlock Boosters')
        .setStyle(ButtonStyle.Success)
    )
  );

  return rows;
}

function buildWithdrawConfirmButtons(guildId, slotKey) {
  return [
    new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId(`confirmrelease:${guildId}:${slotKey}:yes`)
        .setLabel('Yes')
        .setStyle(ButtonStyle.Danger),
      new ButtonBuilder()
        .setCustomId(`confirmrelease:${guildId}:${slotKey}:no`)
        .setLabel('No')
        .setStyle(ButtonStyle.Secondary)
    ),
  ];
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

function buildReserveListMessage(summary) {
  return (
    `**Choice list** \n${summary.choiceList}\n\n` +
    `**Reserves list** \n${summary.reservesList}\n\n` +
    `**N!cl remove list** \n${summary.removeList}`
  );
}

async function sendReadinessPost(channel, guildId, holderIds, labelText) {
  resetReadiness(guildId, holderIds);

  const mentions = holderIds.map((id) => `<@${id}>`).join(' ');
  await channel.send({
    content: `${mentions}\n${labelText}`,
    embeds: [buildReadinessEmbed(guildId)],
    components: [
      new ActionRowBuilder().addComponents(
        new ButtonBuilder()
          .setCustomId(`ready:${guildId}:yes`)
          .setLabel('Ready')
          .setStyle(ButtonStyle.Success),
        new ButtonBuilder()
          .setCustomId(`ready:${guildId}:no`)
          .setLabel('Not Ready')
          .setStyle(ButtonStyle.Danger)
      ),
    ],
  });
}

async function finishQueueAndAnnounce(guild, finishedBy) {
  const state = getQueueState(guild.id);
  if (!state) return false;

  const channel = await guild.channels.fetch(state.channel_id).catch(() => null);
  if (!channel) return false;

  const summary = buildSummaryFromCurrentSlots(guild.id);
  saveFinishedHistory(guild.id, summary);

  const mentions = summary.holderIds.map((id) => `<@${id}>`).join(' ');
  await channel.send({
    content:
      `${mentions}\nQueue finished by <@${finishedBy}>.\n\n` +
      `Chosen rares: ${summary.chosenRares}\n` +
      `Choice pikas taken? ${summary.choicePikasTaken}\n` +
      `Choice paradox taken? ${summary.choiceParadoxTaken}`,
  });

  await sendReadinessPost(channel, guild.id, summary.holderIds, 'Readiness check opened.');

  db.prepare(`UPDATE queue_state SET is_active = 0, phase = 'finished' WHERE guild_id = ?`).run(guild.id);
  return true;
}

async function cancelQueueAndAnnounce(guild, cancelledBy) {
  const state = getQueueState(guild.id);
  if (!state) return false;

  const channel = await guild.channels.fetch(state.channel_id).catch(() => null);
  if (!channel) return false;

  const mentions = getCurrentHolderMentions(guild.id) || 'No slot holders';
  await channel.send({
    content: `${mentions}\nRound is cancelled by <@${cancelledBy}>.`,
  });

  db.prepare(`UPDATE queue_state SET is_active = 0, phase = 'cancelled' WHERE guild_id = ?`).run(guild.id);
  db.prepare(`DELETE FROM readiness WHERE guild_id = ?`).run(guild.id);
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

function addChooseRareSlotChoices(option) {
  option
    .setRequired(true)
    .addChoices(
      { name: 'Gmax', value: 'gmax' },
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
    .setDescription('Cancel the current round and tag slot holders'),

  new SlashCommandBuilder()
    .setName('finish')
    .setDescription('Finish the current round and run readiness checker'),

  new SlashCommandBuilder()
    .setName('readiness')
    .setDescription('Repost readiness checker for the latest finished round'),

  new SlashCommandBuilder()
    .setName('reservelist')
    .setDescription('Show the latest stored reserve list'),

  new SlashCommandBuilder()
    .setName('pasthistory')
    .setDescription('Show the previous finished round queue UI'),

  new SlashCommandBuilder()
    .setName('choosegroup')
    .setDescription('Choose a group for a claimed choice slot')
    .addStringOption((option) => addChoiceSlotChoices(option.setName('slot').setDescription('Your claimed choice slot')))
    .addStringOption((option) => addChoiceGroupChoices(option.setName('group').setDescription('Choice group name'))),

  new SlashCommandBuilder()
    .setName('chooserare')
    .setDescription('Choose a rare for Gmax, Choice1 or Choice2')
    .addStringOption((option) => addChooseRareSlotChoices(option.setName('slot').setDescription('Your slot')))
    .addStringOption((option) => option.setName('rare').setDescription('Rare name').setRequired(true)),

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
    .setName('transfer')
    .setDescription('Transfer one of your claimed slots to another user')
    .addStringOption((option) => addAllSlotChoices(option.setName('slot').setDescription('Your claimed slot')))
    .addUserOption((option) => option.setName('user').setDescription('New owner').setRequired(true)),

  new SlashCommandBuilder()
    .setName('addnote')
    .setDescription('Add a note to a slot')
    .addStringOption((option) => addAllSlotChoices(option.setName('slot').setDescription('Target slot')))
    .addStringOption((option) => option.setName('note').setDescription('Short note').setRequired(true)),

  new SlashCommandBuilder()
    .setName('removenotes')
    .setDescription('Staff remove all notes from a slot')
    .addStringOption((option) => addAllSlotChoices(option.setName('slot').setDescription('Target slot'))),

  new SlashCommandBuilder()
    .setName('adminremove')
    .setDescription('Admin remove a player from a claimed slot')
    .addStringOption((option) => addAllSlotChoices(option.setName('slot').setDescription('Slot to clear'))),
].map((command) => command.toJSON());

client.once(Events.ClientReady, () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.on(Events.InteractionCreate, async (interaction) => {
  try {
    if (interaction.isChatInputCommand()) {
      const { guild, user } = interaction;
      if (!guild) {
        return interaction.reply({ content: 'Use this in a server.', flags: EPHEMERAL });
      }

      if (interaction.commandName === 'startqueue') {
        if (!hasStaffRole(interaction.member)) {
          return interaction.reply({ content: 'Only staff can use this command.', flags: EPHEMERAL });
        }

        const tx = db.transaction(() => {
          db.prepare(`DELETE FROM slots WHERE guild_id = ?`).run(guild.id);
          db.prepare(`DELETE FROM queue_state WHERE guild_id = ?`).run(guild.id);
          db.prepare(`DELETE FROM readiness WHERE guild_id = ?`).run(guild.id);
          db.prepare(`DELETE FROM finished_history WHERE guild_id = ?`).run(guild.id);
          clearAllSlotNotesForGuild(guild.id);

          for (const slot of SLOT_DEFS) {
            db.prepare(`
              INSERT INTO slots (
                guild_id, slot_key, slot_label, slot_type, max_pokemon,
                user_id, pokemon_names, claimed_at, choice_group_name, chosen_rare
              ) VALUES (?, ?, ?, ?, ?, NULL, ?, NULL, NULL, NULL)
            `).run(guild.id, slot.key, slot.label, slot.type, slot.maxPokemon, serializePokemonList([]));
          }
        });
        tx();

        const queueMessage = await interaction.channel.send({
          embeds: [buildQueueEmbed(guild.id)],
          components: buildButtons(guild.id),
        });

        db.prepare(`
          INSERT INTO queue_state (
            guild_id, channel_id, message_id, is_active, created_by, created_at, phase, booster_locked
          )
          VALUES (?, ?, ?, 1, ?, ?, 'staff', 1)
        `).run(
          guild.id,
          interaction.channel.id,
          queueMessage.id,
          user.id,
          new Date().toISOString()
        );

        await refreshQueueMessage(guild);

        return interaction.reply({
          content: 'Staff queue started in this channel. Run /openqueue in the public channel when ready.',
          flags: EPHEMERAL,
        });
      }

      if (interaction.commandName === 'openqueue') {
        if (!hasStaffRole(interaction.member)) {
          return interaction.reply({ content: 'Only staff can use this command.', flags: EPHEMERAL });
        }

        const state = getQueueState(guild.id);
        if (!state) {
          return interaction.reply({ content: 'No active queue.', flags: EPHEMERAL });
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
          WHERE guild_id = ? AND is_active = 1
        `).run(interaction.channel.id, queueMessage.id, guild.id);

        return interaction.reply({
          content: 'Queue opened to public in this channel.',
          flags: EPHEMERAL,
        });
      }

      if (interaction.commandName === 'endqueue') {
        if (!hasStaffRole(interaction.member)) {
          return interaction.reply({ content: 'Only staff can use this command.', flags: EPHEMERAL });
        }

        if (!getQueueState(guild.id)) {
          return interaction.reply({ content: 'No active queue.', flags: EPHEMERAL });
        }

        await cancelQueueAndAnnounce(guild, user.id);
        return interaction.reply({
          content: 'Current round cancelled.',
          flags: EPHEMERAL,
        });
      }

      if (interaction.commandName === 'finish') {
        if (!hasStaffRole(interaction.member)) {
          return interaction.reply({ content: 'Only staff can use this command.', flags: EPHEMERAL });
        }

        if (!getQueueState(guild.id)) {
          return interaction.reply({ content: 'No active queue.', flags: EPHEMERAL });
        }

        await finishQueueAndAnnounce(guild, user.id);
        return interaction.reply({
          content: 'Round finished and readiness checker posted.',
          flags: EPHEMERAL,
        });
      }

      if (interaction.commandName === 'readiness') {
        if (!hasStaffRole(interaction.member)) {
          return interaction.reply({ content: 'Only staff can use this command.', flags: EPHEMERAL });
        }

        const summary = getFinishedHistory(guild.id);
        if (!summary || !Array.isArray(summary.holderIds) || !summary.holderIds.length) {
          return interaction.reply({ content: 'No finished round buyers found.', flags: EPHEMERAL });
        }

        await sendReadinessPost(interaction.channel, guild.id, summary.holderIds, 'Readiness check reopened.');
        return interaction.reply({
          content: 'Readiness checker reposted.',
          flags: EPHEMERAL,
        });
      }

      if (interaction.commandName === 'reservelist') {
        const summary = getFinishedHistory(guild.id);
        if (!summary) {
          return interaction.reply({ content: 'No finished reserve list stored yet.', flags: EPHEMERAL });
        }

        return interaction.reply({
          content: buildReserveListMessage(summary),
          components: [
            new ActionRowBuilder().addComponents(
              new ButtonBuilder()
                .setCustomId(`copylist:${guild.id}:choice`)
                .setLabel('Choice list')
                .setStyle(ButtonStyle.Primary),
              new ButtonBuilder()
                .setCustomId(`copylist:${guild.id}:reserves`)
                .setLabel('Reserves list')
                .setStyle(ButtonStyle.Success),
              new ButtonBuilder()
                .setCustomId(`copylist:${guild.id}:remove`)
                .setLabel('N!cl remove list')
                .setStyle(ButtonStyle.Secondary)
            ),
          ],
        });
      }

      if (interaction.commandName === 'pasthistory') {
        const summary = getFinishedHistory(guild.id);
        if (!summary || !summary.slotSnapshot) {
          return interaction.reply({ content: 'No finished round history stored yet.', flags: EPHEMERAL });
        }

        const embed = buildQueueEmbedFromSlots(summary.slotSnapshot, {
          title: 'Previous Round Queue',
          phaseText: 'Previous finished round',
          boosterLocked: false,
        });

        return interaction.reply({ embeds: [embed] });
      }

      if (interaction.commandName === 'choosegroup') {
        const state = getQueueState(guild.id);
        if (!state) {
          return interaction.reply({ content: 'No active queue right now.', flags: EPHEMERAL });
        }

        const slotKey = interaction.options.getString('slot', true);
        const groupName = interaction.options.getString('group', true);
        const slot = getSlot(guild.id, slotKey);
        const slotDef = getSlotDef(slotKey);

        if (!slotDef || slotDef.type !== 'choice') {
          return interaction.reply({ content: 'That is not a choice slot.', flags: EPHEMERAL });
        }

        if (!slot || slot.user_id !== user.id) {
          return interaction.reply({ content: 'You can only choose a group for your own claimed choice slot.', flags: EPHEMERAL });
        }

        if (!CHOICE_GROUP_NAMES.includes(groupName)) {
          return interaction.reply({ content: 'That choice group does not exist.', flags: EPHEMERAL });
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
        });
      }

      if (interaction.commandName === 'chooserare') {
        const state = getQueueState(guild.id);
        if (!state) {
          return interaction.reply({ content: 'No active queue right now.', flags: EPHEMERAL });
        }

        const slotKey = interaction.options.getString('slot', true);
        const rareText = interaction.options.getString('rare', true).trim();
        const slot = getSlot(guild.id, slotKey);

        if (!CHOOSE_RARE_SLOT_KEYS.has(slotKey)) {
          return interaction.reply({ content: 'That slot cannot choose a rare.', flags: EPHEMERAL });
        }

        if (!slot || slot.user_id !== user.id) {
          return interaction.reply({ content: 'You can only choose a rare for your own slot.', flags: EPHEMERAL });
        }

        setChosenRare(guild.id, slotKey, rareText);
        await refreshQueueMessage(guild);

        return interaction.reply({
          content: `${getSlotDef(slotKey).label} rare set to **${rareText}**.`,
        });
      }

      if (interaction.commandName === 'pick') {
        const state = getQueueState(guild.id);
        if (!state) {
          return interaction.reply({ content: 'No active queue right now.', flags: EPHEMERAL });
        }

        const slotKey = interaction.options.getString('slot', true);
        const pokemonName = normalizePokemonName(interaction.options.getString('pokemon1', true));
        const slot = getSlot(guild.id, slotKey);
        const slotDef = getSlotDef(slotKey);

        if (!slotDef || !slot || slot.user_id !== user.id) {
          return interaction.reply({ content: 'You can only set Pokemon for your own claimed slot.', flags: EPHEMERAL });
        }

        if (slotDef.type === 'choice') {
          return interaction.reply({
            content: `Choice slots only use **/choosegroup**. You do not need /pick for ${slotDef.label}.`,
            flags: EPHEMERAL,
          });
        }

        if (!VALID_POKEMON.has(pokemonName)) {
          return interaction.reply({ content: `**${prettyPokemonName(pokemonName)}** is not a valid English Base Pokemon name.`, flags: EPHEMERAL });
        }

        if (BANNED_POKEMON.has(pokemonName)) {
          return interaction.reply({ content: `**${prettyPokemonName(pokemonName)}** is not allowed in this queue.`, flags: EPHEMERAL });
        }

        if (pokemonName === MISSINGNO_NAME && !isResSlot(slotKey)) {
          return interaction.reply({ content: '**Missingno** can only be taken by Res1 to Res7.', flags: EPHEMERAL });
        }

        const conflictingSlot = getConflictingOwner(guild.id, pokemonName, slotKey);
        if (conflictingSlot) {
          return interaction.reply({
            content: `**${prettyPokemonName(pokemonName)}** belongs to ${conflictingSlot.slot_label} because it was claimed earlier.`,
            flags: EPHEMERAL,
          });
        }

        savePokemonList(guild.id, slotKey, [pokemonName]);
        await refreshQueueMessage(guild);

        return interaction.reply({
          content: `Set ${slotDef.label} to **${prettyPokemonName(pokemonName)}**. Run /pick again if you need to change it.`,
        });
      }

      if (interaction.commandName === 'transfer') {
        const state = getQueueState(guild.id);
        if (!state) {
          return interaction.reply({ content: 'No active queue right now.', flags: EPHEMERAL });
        }

        const slotKey = interaction.options.getString('slot', true);
        const targetUser = interaction.options.getUser('user', true);
        const slot = getSlot(guild.id, slotKey);
        const slotDef = getSlotDef(slotKey);

        if (!slotDef || !slot || slot.user_id !== user.id) {
          return interaction.reply({ content: 'You can only transfer your own claimed slot.', flags: EPHEMERAL });
        }

        if (targetUser.id === user.id) {
          return interaction.reply({ content: 'That user already owns this slot.', flags: EPHEMERAL });
        }

        if (MAJOR_SLOT_KEYS.has(slotKey) && getUserMajorClaimCount(guild.id, targetUser.id) >= 2) {
          return interaction.reply({ content: 'That user already holds 2 major groups.', flags: EPHEMERAL });
        }

        db.prepare(`UPDATE slots SET user_id = ? WHERE guild_id = ? AND slot_key = ?`)
          .run(targetUser.id, guild.id, slotKey);

        await refreshQueueMessage(guild);

        return interaction.reply({
          content: `${user} transferred **${slotDef.label}** to ${targetUser}.`,
        });
      }

      if (interaction.commandName === 'addnote') {
        const state = getQueueState(guild.id);
        if (!state) {
          return interaction.reply({ content: 'No active queue right now.', flags: EPHEMERAL });
        }

        const slotKey = interaction.options.getString('slot', true);
        const noteText = interaction.options.getString('note', true).trim();
        const slot = getSlot(guild.id, slotKey);
        const slotDef = getSlotDef(slotKey);
        const canEdit = hasStaffRole(interaction.member) || slot?.user_id === user.id;

        if (!slotDef || !slot || !slot.user_id) {
          return interaction.reply({ content: 'That slot is not currently claimed.', flags: EPHEMERAL });
        }

        if (!canEdit) {
          return interaction.reply({ content: 'Only the slot owner or staff can add notes.', flags: EPHEMERAL });
        }

        const added = addSlotNote(guild.id, slotKey, noteText);
        if (!added.ok) {
          return interaction.reply({
            content: `That slot already has ${MAX_NOTES_PER_SLOT} notes. Staff can use /removenotes first.`,
            flags: EPHEMERAL,
          });
        }

        await refreshQueueMessage(guild);

        return interaction.reply({
          content: `${user} added note ${added.noteIndex} for **${slotDef.label}**.`,
        });
      }

      if (interaction.commandName === 'removenotes') {
        if (!hasStaffRole(interaction.member)) {
          return interaction.reply({ content: 'Only staff can use this command.', flags: EPHEMERAL });
        }

        const state = getQueueState(guild.id);
        if (!state) {
          return interaction.reply({ content: 'No active queue right now.', flags: EPHEMERAL });
        }

        const slotKey = interaction.options.getString('slot', true);
        const slotDef = getSlotDef(slotKey);
        if (!slotDef) {
          return interaction.reply({ content: 'Invalid slot.', flags: EPHEMERAL });
        }

        clearSlotNotes(guild.id, slotKey);
        await refreshQueueMessage(guild);

        return interaction.reply({
          content: `All notes removed from **${slotDef.label}**.`,
        });
      }

      if (interaction.commandName === 'withdraw') {
        const state = getQueueState(guild.id);
        if (!state) {
          return interaction.reply({ content: 'No active queue right now.', flags: EPHEMERAL });
        }

        const slotKey = interaction.options.getString('slot', true);
        const slot = getSlot(guild.id, slotKey);
        const slotDef = getSlotDef(slotKey);

        if (!slotDef || !slot || slot.user_id !== user.id) {
          return interaction.reply({ content: 'That is not your slot.', flags: EPHEMERAL });
        }

        return interaction.reply({
          content: `Withdraw from **${slotDef.label}**?`,
          components: buildWithdrawConfirmButtons(guild.id, slotKey),
          flags: EPHEMERAL,
        });
      }

      if (interaction.commandName === 'adminremove') {
        if (!hasStaffRole(interaction.member)) {
          return interaction.reply({ content: 'Only staff can use this command.', flags: EPHEMERAL });
        }

        const state = getQueueState(guild.id);
        if (!state) {
          return interaction.reply({ content: 'No active queue right now.', flags: EPHEMERAL });
        }

        const slotKey = interaction.options.getString('slot', true);
        const slot = getSlot(guild.id, slotKey);
        const slotDef = getSlotDef(slotKey);

        if (!slotDef || !slot || !slot.user_id) {
          return interaction.reply({ content: 'That slot is already empty.', flags: EPHEMERAL });
        }

        resetSlot(guild.id, slotKey);
        await refreshQueueMessage(guild);
        return interaction.reply({ content: `${slotDef.label} has been cleared by admin.`});
      }
    }

    if (interaction.isButton()) {
      const parts = interaction.customId.split(':');
      const action = parts[0];
      const guildId = parts[1];

      if (!interaction.guild || interaction.guild.id !== guildId) return;

      if (action === 'claim') {
        const slotKey = parts[2];
        if (!SLOT_KEYS.has(slotKey)) return;

        const state = getQueueState(interaction.guild.id);
        if (!state) {
          return interaction.reply({ content: 'No active queue right now.', flags: EPHEMERAL });
        }

        const slot = getSlot(interaction.guild.id, slotKey);
        const slotDef = getSlotDef(slotKey);
        const userId = interaction.user.id;

        if (!slotDef || !slot) {
          return interaction.reply({ content: 'Invalid slot.', flags: EPHEMERAL });
        }

        if (BOOSTER_SLOT_KEYS.has(slotKey) && state.booster_locked) {
          return interaction.reply({ content: 'Boosters and Donor are currently locked.', flags: EPHEMERAL });
        }

        if (slot.user_id === userId) {
          return interaction.reply({
            content: `Release **${slotDef.label}**?`,
            components: buildWithdrawConfirmButtons(interaction.guild.id, slotKey),
            flags: EPHEMERAL,
          });
        }

        if (slot.user_id) {
          return interaction.reply({ content: `${slotDef.label} is already taken.`, flags: EPHEMERAL });
        }

        if (MAJOR_SLOT_KEYS.has(slotKey) && getUserMajorClaimCount(interaction.guild.id, userId) >= 2) {
          return interaction.reply({
            content: 'You cannot hold more than 2 major groups at once.',
            flags: EPHEMERAL,
          });
        }

        if (getLastClaimedSlot(interaction.guild.id, userId) === slotKey) {
          return interaction.reply({
            content: `You cannot claim ${slotDef.label} this round again.`,
            flags: EPHEMERAL,
          });
        }

        db.prepare(`
          UPDATE slots
          SET user_id = ?, pokemon_names = ?, claimed_at = ?, choice_group_name = NULL, chosen_rare = NULL
          WHERE guild_id = ? AND slot_key = ?
        `).run(userId, serializePokemonList([]), new Date().toISOString(), interaction.guild.id, slotKey);

        clearSlotNotes(interaction.guild.id, slotKey);
        setLastClaimedSlot(interaction.guild.id, userId, slotKey);
        await refreshQueueMessage(interaction.guild);

        if (slotDef.type === 'choice') {
          return interaction.reply({
            content: `You claimed ${slotDef.label}. Next use **/choosegroup** to select a group and **/chooserare** to choose your rare/reg.`,
            flags: EPHEMERAL,
          });
        }

        return interaction.reply({
          content: `You claimed ${slotDef.label}. Now use **/pick** to choose your Pokémon.`,
          flags: EPHEMERAL,
        });
      }

      if (action === 'confirmrelease') {
        const slotKey = parts[2];
        const answer = parts[3];
        const slot = getSlot(interaction.guild.id, slotKey);
        const slotDef = getSlotDef(slotKey);

        if (!slotDef || !slot || slot.user_id !== interaction.user.id) {
          return interaction.update({
            content: 'That slot is now released.',
            components: [],
          });
        }

        if (answer === 'no') {
          return interaction.update({
            content: `Cancelled release for **${slotDef.label}**.`,
            components: [],
          });
        }

        resetSlot(interaction.guild.id, slotKey);
        await refreshQueueMessage(interaction.guild);

        return interaction.update({
          content: `You released **${slotDef.label}**.`,
          components: [],
        });
      }

      if (action === 'boosterlock') {
        const mode = parts[2];
        if (!hasStaffRole(interaction.member)) {
          return interaction.reply({ content: 'Only staff can use this button.', flags: EPHEMERAL });
        }

        const state = getQueueState(interaction.guild.id);
        if (!state) {
          return interaction.reply({ content: 'No active queue right now.', flags: EPHEMERAL });
        }

        setBoosterLocked(interaction.guild.id, mode === 'lock');
        await refreshQueueMessage(interaction.guild);

        return interaction.reply({
          content: mode === 'lock' ? 'Boosters and Donor locked.' : 'Boosters and Donor unlocked.',
        });
      }

      if (action === 'ready') {
        const mode = parts[2];
        const rows = getReadinessRows(interaction.guild.id);
        if (!rows.some((row) => row.user_id === interaction.user.id)) {
          return interaction.reply({ content: 'You are not part of the current readiness check.', flags: EPHEMERAL });
        }

        setReadiness(interaction.guild.id, interaction.user.id, mode === 'yes');
        await interaction.update({
          embeds: [buildReadinessEmbed(interaction.guild.id)],
          components: interaction.message.components,
        });
        return;
      }

      if (action === 'copylist') {
        const listType = parts[2];
        const summary = getFinishedHistory(interaction.guild.id);
        if (!summary) {
          return interaction.reply({ content: 'No stored reserve list found.', flags: EPHEMERAL });
        }

        let content = '';
        if (listType === 'choice') content = summary.choiceList;
        if (listType === 'reserves') content = summary.reservesList;
        if (listType === 'remove') content = summary.removeList;

        return interaction.reply({
          content: `\`\`\`\n${content || 'None'}\n\`\`\``,
          flags: EPHEMERAL,
        });
      }
    }
  } catch (error) {
    console.error(error);
    if (interaction.isRepliable() && !interaction.replied && !interaction.deferred) {
      await interaction.reply({ content: 'Something went wrong.', flags: EPHEMERAL }).catch(() => null);
    }
  }
});

process.on('unhandledRejection', (error) => {
  console.error('Unhandled promise rejection:', error);
});

process.on('uncaughtException', (error) => {
  console.error('Uncaught exception:', error);
});

async function registerCommands() {
  const rest = new REST({ version: '10' }).setToken(process.env.DISCORD_TOKEN);
  await rest.put(
    Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID),
    { body: commands }
  );
}

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