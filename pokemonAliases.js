const POKEMON_ALIAS_GROUPS = {
  "bulbasaur": [
    "bulbasaur",
    "bulbizarre",
    "bisasam",
    "フシギダネ",
    "fushigidane"
  ],
  "ivysaur": [
    "ivysaur",
    "herbizarre",
    "bisaknosp",
    "フシギソウ",
    "fushigisou",
    "fushigiso"
  ],
  "venusaur": [
    "venusaur",
    "florizarre",
    "bisaflor",
    "フシギバナ",
    "fushigibana"
  ],
  "charmander": [
    "charmander",
    "salamèche",
    "glumanda",
    "ヒトカゲ",
    "hitokage"
  ],
  "charmeleon": [
    "charmeleon",
    "reptincel",
    "glutexo",
    "リザード",
    "rizaado"
  ],
  "charizard": [
    "charizard",
    "dracaufeu",
    "glurak",
    "リザードン",
    "rizaadon"
  ],
  "squirtle": [
    "squirtle",
    "carapuce",
    "schiggy",
    "ゼニガメ",
    "zenigame"
  ],
  "wartortle": [
    "wartortle",
    "carabaffe",
    "schillok",
    "カメール",
    "kameeru"
  ],
  "blastoise": [
    "blastoise",
    "tortank",
    "turtok",
    "カメックス",
    "kamekkusu"
  ],
  "caterpie": [
    "caterpie",
    "chenipan",
    "raupy",
    "キャタピー",
    "kyatapii",
    "kyatapi"
  ],
  "metapod": [
    "metapod",
    "chrysacier",
    "safcon",
    "トランセル",
    "toranseru"
  ],
  "butterfree": [
    "butterfree",
    "papilusion",
    "smettbo",
    "バタフリー",
    "batafurii",
    "batafuri"
  ],
  "weedle": [
    "weedle",
    "aspicot",
    "hornliu",
    "ビードル",
    "biidoru"
  ],
  "kakuna": [
    "kakuna",
    "coconfort",
    "kokuna",
    "コクーン",
    "kokuun"
  ],
  "beedrill": [
    "beedrill",
    "dardargnan",
    "bibor",
    "スピアー",
    "supiaa",
    "supia"
  ],
  "pidgey": [
    "pidgey",
    "roucool",
    "taubsi",
    "ポッポ",
    "poppo"
  ],
  "pidgeotto": [
    "pidgeotto",
    "roucoups",
    "tauboga",
    "ピジョン",
    "pijon"
  ],
  "pidgeot": [
    "pidgeot",
    "roucarnage",
    "tauboss",
    "ピジョット",
    "pijotto"
  ],
  "rattata": [
    "rattata",
    "rattfratz",
    "コラッタ",
    "koratta"
  ],
  "raticate": [
    "raticate",
    "rattatac",
    "rattikarl",
    "ラッタ",
    "ratta"
  ],
  "spearow": [
    "spearow",
    "piafabec",
    "habitak",
    "オニスズメ",
    "onisuzume"
  ],
  "fearow": [
    "fearow",
    "rapasdepic",
    "ibitak",
    "オニドリル",
    "onidoriru"
  ],
  "ekans": [
    "ekans",
    "abo",
    "rettan",
    "アーボ",
    "aabo"
  ],
  "arbok": [
    "arbok",
    "アーボック",
    "aabokku"
  ],
  "pikachu": [
    "pikachu",
    "ピカチュウ",
    "pikachuu"
  ],
  "raichu": [
    "raichu",
    "ライチュウ",
    "raichuu"
  ],
  "sandshrew": [
    "sandshrew",
    "sabelette",
    "sandan",
    "サンド",
    "sando"
  ],
  "sandslash": [
    "sandslash",
    "sablaireau",
    "sandamer",
    "サンドパン",
    "sandopan"
  ],
  "nidoran-f": [
    "nidoran-f",
    "nidoran♀",
    "ニドラン♀"
  ],
  "nidorina": [
    "nidorina",
    "ニドリーナ",
    "nidoriina"
  ],
  "nidoqueen": [
    "nidoqueen",
    "ニドクイン",
    "nidokuin"
  ],
  "nidoran-m": [
    "nidoran-m",
    "nidoran♂",
    "ニドラン♂"
  ],
  "nidorino": [
    "nidorino",
    "ニドリーノ",
    "nidoriino"
  ],
  "nidoking": [
    "nidoking",
    "ニドキング",
    "nidokingu"
  ],
  "clefairy": [
    "clefairy",
    "mélofée",
    "piepi",
    "ピッピ",
    "pippi"
  ],
  "clefable": [
    "clefable",
    "mélodelfe",
    "pixi",
    "ピクシー",
    "pikushii",
    "pikushi"
  ],
  "vulpix": [
    "vulpix",
    "goupix",
    "ロコン",
    "rokon"
  ],
  "ninetales": [
    "ninetales",
    "feunard",
    "vulnona",
    "キュウコン",
    "kyuukon"
  ],
  "jigglypuff": [
    "jigglypuff",
    "rondoudou",
    "pummeluff",
    "プリン",
    "purin"
  ],
  "wigglytuff": [
    "wigglytuff",
    "grodoudou",
    "knuddeluff",
    "プクリン",
    "pukurin"
  ],
  "zubat": [
    "zubat",
    "nosferapti",
    "ズバット",
    "zubatto"
  ],
  "golbat": [
    "golbat",
    "nosferalto",
    "ゴルバット",
    "gorubatto"
  ],
  "oddish": [
    "oddish",
    "mystherbe",
    "myrapla",
    "ナゾノクサ",
    "nazonokusa"
  ],
  "gloom": [
    "gloom",
    "ortide",
    "duflor",
    "クサイハナ",
    "kusaihana"
  ],
  "vileplume": [
    "vileplume",
    "rafflesia",
    "giflor",
    "ラフレシア",
    "rafureshia"
  ],
  "paras": [
    "paras",
    "パラス",
    "parasu"
  ],
  "parasect": [
    "parasect",
    "parasek",
    "パラセクト",
    "parasekuto"
  ],
  "venonat": [
    "venonat",
    "mimitoss",
    "bluzuk",
    "コンパン",
    "konpan"
  ],
  "venomoth": [
    "venomoth",
    "aéromite",
    "omot",
    "モルフォン",
    "morufuon"
  ],
  "diglett": [
    "diglett",
    "taupiqueur",
    "digda",
    "ディグダ",
    "deiguda"
  ],
  "dugtrio": [
    "dugtrio",
    "triopikeur",
    "digdri",
    "ダグトリオ",
    "dagutorio"
  ],
  "meowth": [
    "meowth",
    "miaouss",
    "mauzi",
    "ニャース",
    "nyaasu"
  ],
  "persian": [
    "persian",
    "snobilikat",
    "ペルシアン",
    "perushian"
  ],
  "psyduck": [
    "psyduck",
    "psykokwak",
    "enton",
    "コダック",
    "kodakku"
  ],
  "golduck": [
    "golduck",
    "akwakwak",
    "entoron",
    "ゴルダック",
    "gorudakku"
  ],
  "mankey": [
    "mankey",
    "férosinge",
    "menki",
    "マンキー",
    "mankii",
    "manki"
  ],
  "primeape": [
    "primeape",
    "colossinge",
    "rasaff",
    "オコリザル",
    "okorizaru"
  ],
  "growlithe": [
    "growlithe",
    "caninos",
    "fukano",
    "ガーディ",
    "gaadei"
  ],
  "arcanine": [
    "arcanine",
    "arcanin",
    "arkani",
    "ウインディ",
    "uindei"
  ],
  "poliwag": [
    "poliwag",
    "ptitard",
    "quapsel",
    "ニョロモ",
    "nyoromo"
  ],
  "poliwhirl": [
    "poliwhirl",
    "têtarte",
    "quaputzi",
    "ニョロゾ",
    "nyorozo"
  ],
  "poliwrath": [
    "poliwrath",
    "tartard",
    "quappo",
    "ニョロボン",
    "nyorobon"
  ],
  "abra": [
    "abra",
    "ケーシィ",
    "keeshyi"
  ],
  "kadabra": [
    "kadabra",
    "ユンゲラー",
    "yungeraa",
    "yungera"
  ],
  "alakazam": [
    "alakazam",
    "simsala",
    "フーディン",
    "fuudein"
  ],
  "machop": [
    "machop",
    "machoc",
    "machollo",
    "ワンリキー",
    "wanrikii",
    "wanriki"
  ],
  "machoke": [
    "machoke",
    "machopeur",
    "maschock",
    "ゴーリキー",
    "goorikii",
    "gooriki"
  ],
  "machamp": [
    "machamp",
    "mackogneur",
    "machomei",
    "カイリキー",
    "kairikii",
    "kairiki"
  ],
  "bellsprout": [
    "bellsprout",
    "chétiflor",
    "knofensa",
    "マダツボミ",
    "madatsubomi"
  ],
  "weepinbell": [
    "weepinbell",
    "boustiflor",
    "ultrigaria",
    "ウツドン",
    "utsudon"
  ],
  "victreebel": [
    "victreebel",
    "empiflor",
    "sarzenia",
    "ウツボット",
    "utsubotto"
  ],
  "tentacool": [
    "tentacool",
    "tentacha",
    "メノクラゲ",
    "menokurage"
  ],
  "tentacruel": [
    "tentacruel",
    "tentoxa",
    "ドククラゲ",
    "dokukurage"
  ],
  "geodude": [
    "geodude",
    "racaillou",
    "kleinstein",
    "イシツブテ",
    "ishitsubute"
  ],
  "graveler": [
    "graveler",
    "gravalanch",
    "georok",
    "ゴローン",
    "goroon"
  ],
  "golem": [
    "golem",
    "grolem",
    "geowaz",
    "ゴローニャ",
    "goroonya"
  ],
  "ponyta": [
    "ponyta",
    "ponita",
    "ポニータ",
    "poniita"
  ],
  "rapidash": [
    "rapidash",
    "galopa",
    "gallopa",
    "ギャロップ",
    "gyaroppu"
  ],
  "slowpoke": [
    "slowpoke",
    "ramoloss",
    "flegmon",
    "ヤドン",
    "yadon"
  ],
  "slowbro": [
    "slowbro",
    "flagadoss",
    "lahmus",
    "ヤドラン",
    "yadoran"
  ],
  "magnemite": [
    "magnemite",
    "magnéti",
    "magnetilo",
    "コイル",
    "koiru"
  ],
  "magneton": [
    "magneton",
    "magnéton",
    "レアコイル",
    "reakoiru"
  ],
  "farfetchd": [
    "farfetchd",
    "canarticho",
    "porenta",
    "farfetch’d",
    "カモネギ",
    "kamonegi"
  ],
  "doduo": [
    "doduo",
    "dodu",
    "ドードー",
    "doodoo"
  ],
  "dodrio": [
    "dodrio",
    "dodri",
    "ドードリオ",
    "doodorio"
  ],
  "seel": [
    "seel",
    "otaria",
    "jurob",
    "パウワウ",
    "pauwau"
  ],
  "dewgong": [
    "dewgong",
    "lamantine",
    "jugong",
    "ジュゴン",
    "jugon"
  ],
  "grimer": [
    "grimer",
    "tadmorv",
    "sleima",
    "ベトベター",
    "betobetaa",
    "betobeta"
  ],
  "muk": [
    "muk",
    "grotadmorv",
    "sleimok",
    "ベトベトン",
    "betobeton"
  ],
  "shellder": [
    "shellder",
    "kokiyas",
    "muschas",
    "シェルダー",
    "sherudaa",
    "sheruda"
  ],
  "cloyster": [
    "cloyster",
    "crustabri",
    "austos",
    "パルシェン",
    "parushen"
  ],
  "gastly": [
    "gastly",
    "fantominus",
    "nebulak",
    "ゴース",
    "goosu"
  ],
  "haunter": [
    "haunter",
    "spectrum",
    "alpollo",
    "ゴースト",
    "goosuto"
  ],
  "gengar": [
    "gengar",
    "ectoplasma",
    "ゲンガー",
    "gengaa",
    "genga"
  ],
  "onix": [
    "onix",
    "イワーク",
    "iwaaku"
  ],
  "drowzee": [
    "drowzee",
    "soporifik",
    "traumato",
    "スリープ",
    "suriipu"
  ],
  "hypno": [
    "hypno",
    "hypnomade",
    "スリーパー",
    "suriipaa",
    "suriipa"
  ],
  "krabby": [
    "krabby",
    "クラブ",
    "kurabu"
  ],
  "kingler": [
    "kingler",
    "krabboss",
    "キングラー",
    "kinguraa",
    "kingura"
  ],
  "voltorb": [
    "voltorb",
    "voltorbe",
    "voltobal",
    "ビリリダマ",
    "biriridama"
  ],
  "electrode": [
    "electrode",
    "électrode",
    "lektrobal",
    "マルマイン",
    "marumain"
  ],
  "exeggcute": [
    "exeggcute",
    "noeunoeuf",
    "owei",
    "タマタマ",
    "tamatama"
  ],
  "exeggutor": [
    "exeggutor",
    "noadkoko",
    "kokowei",
    "ナッシー",
    "nasshii",
    "nasshi"
  ],
  "cubone": [
    "cubone",
    "osselait",
    "tragosso",
    "カラカラ",
    "karakara"
  ],
  "marowak": [
    "marowak",
    "ossatueur",
    "knogga",
    "ガラガラ",
    "garagara"
  ],
  "hitmonlee": [
    "hitmonlee",
    "kicklee",
    "サワムラー",
    "sawamuraa",
    "sawamura"
  ],
  "hitmonchan": [
    "hitmonchan",
    "tygnon",
    "nockchan",
    "エビワラー",
    "ebiwaraa",
    "ebiwara"
  ],
  "lickitung": [
    "lickitung",
    "excelangue",
    "schlurp",
    "ベロリンガ",
    "beroringa"
  ],
  "koffing": [
    "koffing",
    "smogo",
    "smogon",
    "ドガース",
    "dogaasu"
  ],
  "weezing": [
    "weezing",
    "smogogo",
    "smogmog",
    "マタドガス",
    "matadogasu"
  ],
  "rhyhorn": [
    "rhyhorn",
    "rhinocorne",
    "rihorn",
    "サイホーン",
    "saihoon"
  ],
  "rhydon": [
    "rhydon",
    "rhinoféros",
    "rizeros",
    "サイドン",
    "saidon"
  ],
  "chansey": [
    "chansey",
    "leveinard",
    "chaneira",
    "ラッキー",
    "rakkii",
    "rakki"
  ],
  "tangela": [
    "tangela",
    "saquedeneu",
    "モンジャラ",
    "monjara"
  ],
  "kangaskhan": [
    "kangaskhan",
    "kangourex",
    "kangama",
    "ガルーラ",
    "garuura"
  ],
  "horsea": [
    "horsea",
    "hypotrempe",
    "seeper",
    "タッツー",
    "tattsuu",
    "tattsu"
  ],
  "seadra": [
    "seadra",
    "hypocéan",
    "seemon",
    "シードラ",
    "shiidora"
  ],
  "goldeen": [
    "goldeen",
    "poissirène",
    "goldini",
    "トサキント",
    "tosakinto"
  ],
  "seaking": [
    "seaking",
    "poissoroy",
    "golking",
    "アズマオウ",
    "azumaou",
    "azumao"
  ],
  "staryu": [
    "staryu",
    "stari",
    "sterndu",
    "ヒトデマン",
    "hitodeman"
  ],
  "starmie": [
    "starmie",
    "staross",
    "スターミー",
    "sutaamii",
    "sutaami"
  ],
  "mr-mime": [
    "mr-mime",
    "m. mime",
    "m-mime",
    "pantimos",
    "mr. mime",
    "バリヤード",
    "bariyaado"
  ],
  "scyther": [
    "scyther",
    "insécateur",
    "sichlor",
    "ストライク",
    "sutoraiku"
  ],
  "jynx": [
    "jynx",
    "lippoutou",
    "rossana",
    "ルージュラ",
    "ruujura"
  ],
  "electabuzz": [
    "electabuzz",
    "élektek",
    "elektek",
    "エレブー",
    "erebuu",
    "erebu"
  ],
  "magmar": [
    "magmar",
    "ブーバー",
    "buubaa",
    "buuba"
  ],
  "pinsir": [
    "pinsir",
    "scarabrute",
    "カイロス",
    "kairosu"
  ],
  "tauros": [
    "tauros",
    "ケンタロス",
    "kentarosu"
  ],
  "magikarp": [
    "magikarp",
    "magicarpe",
    "karpador",
    "コイキング",
    "koikingu",
    "koiking"
  ],
  "gyarados": [
    "gyarados",
    "léviator",
    "garados",
    "ギャラドス",
    "gyaradosu"
  ],
  "lapras": [
    "lapras",
    "lokhlass",
    "ラプラス",
    "rapurasu"
  ],
  "ditto": [
    "ditto",
    "métamorph",
    "メタモン",
    "metamon"
  ],
  "eevee": [
    "eevee",
    "évoli",
    "evoli",
    "イーブイ",
    "iibui",
    "ibui",
    "eievui"
  ],
  "vaporeon": [
    "vaporeon",
    "aquali",
    "aquana",
    "シャワーズ",
    "shawaazu"
  ],
  "jolteon": [
    "jolteon",
    "voltali",
    "blitza",
    "サンダース",
    "sandaasu"
  ],
  "flareon": [
    "flareon",
    "pyroli",
    "flamara",
    "ブースター",
    "buusutaa",
    "buusuta"
  ],
  "porygon": [
    "porygon",
    "ポリゴン",
    "porigon"
  ],
  "omanyte": [
    "omanyte",
    "amonita",
    "amonitas",
    "オムナイト",
    "omunaito"
  ],
  "omastar": [
    "omastar",
    "amonistar",
    "amoroso",
    "オムスター",
    "omusutaa",
    "omusuta"
  ],
  "kabuto": [
    "kabuto",
    "カブト"
  ],
  "kabutops": [
    "kabutops",
    "カブトプス",
    "kabutopusu"
  ],
  "aerodactyl": [
    "aerodactyl",
    "ptéra",
    "プテラ",
    "putera"
  ],
  "snorlax": [
    "snorlax",
    "ronflex",
    "relaxo",
    "カビゴン",
    "kabigon"
  ],
  "articuno": [
    "articuno",
    "artikodin",
    "arktos",
    "フリーザー",
    "furiizaa",
    "furiiza"
  ],
  "zapdos": [
    "zapdos",
    "électhor",
    "サンダー",
    "sandaa",
    "sanda"
  ],
  "moltres": [
    "moltres",
    "sulfura",
    "lavados",
    "ファイヤー",
    "fuaiyaa",
    "fuaiya"
  ],
  "dratini": [
    "dratini",
    "minidraco",
    "ミニリュウ",
    "miniryuu",
    "miniryu"
  ],
  "dragonair": [
    "dragonair",
    "draco",
    "dragonir",
    "ハクリュー",
    "hakuryuu",
    "hakuryu"
  ],
  "dragonite": [
    "dragonite",
    "dracolosse",
    "dragoran",
    "カイリュー",
    "kairyuu",
    "kairyu"
  ],
  "mewtwo": [
    "mewtwo",
    "mewtu",
    "ミュウツー",
    "myuutsuu",
    "myuutsu"
  ],
  "mew": [
    "mew",
    "ミュウ",
    "myuu",
    "myu"
  ],
  "chikorita": [
    "chikorita",
    "germignon",
    "endivie",
    "チコリータ",
    "chikoriita"
  ],
  "bayleef": [
    "bayleef",
    "macronium",
    "lorblatt",
    "ベイリーフ",
    "beiriifu"
  ],
  "meganium": [
    "meganium",
    "méganium",
    "meganie",
    "メガニウム",
    "meganiumu"
  ],
  "cyndaquil": [
    "cyndaquil",
    "héricendre",
    "feurigel",
    "ヒノアラシ",
    "hinoarashi"
  ],
  "quilava": [
    "quilava",
    "feurisson",
    "igelavar",
    "マグマラシ",
    "magumarashi"
  ],
  "typhlosion": [
    "typhlosion",
    "tornupto",
    "バクフーン",
    "bakufuun"
  ],
  "totodile": [
    "totodile",
    "kaiminus",
    "karnimani",
    "ワニノコ",
    "waninoko"
  ],
  "croconaw": [
    "croconaw",
    "crocrodil",
    "tyracroc",
    "アリゲイツ",
    "arigeitsu"
  ],
  "feraligatr": [
    "feraligatr",
    "aligatueur",
    "impergator",
    "オーダイル",
    "oodairu"
  ],
  "sentret": [
    "sentret",
    "fouinette",
    "wiesor",
    "オタチ",
    "otachi"
  ],
  "furret": [
    "furret",
    "fouinar",
    "wiesenior",
    "オオタチ",
    "ootachi"
  ],
  "hoothoot": [
    "hoothoot",
    "ホーホー",
    "hoohoo"
  ],
  "noctowl": [
    "noctowl",
    "noarfang",
    "noctuh",
    "ヨルノズク",
    "yorunozuku"
  ],
  "ledyba": [
    "ledyba",
    "coxy",
    "レディバ",
    "redeiba"
  ],
  "ledian": [
    "ledian",
    "coxyclaque",
    "レディアン",
    "redeian"
  ],
  "spinarak": [
    "spinarak",
    "mimigal",
    "webarak",
    "イトマル",
    "itomaru"
  ],
  "ariados": [
    "ariados",
    "migalos",
    "アリアドス",
    "ariadosu"
  ],
  "crobat": [
    "crobat",
    "nostenfer",
    "iksbat",
    "クロバット",
    "kurobatto"
  ],
  "chinchou": [
    "chinchou",
    "loupio",
    "lampi",
    "チョンチー",
    "chonchii",
    "chonchi"
  ],
  "lanturn": [
    "lanturn",
    "ランターン",
    "rantaan"
  ],
  "pichu": [
    "pichu",
    "ピチュー",
    "pichuu"
  ],
  "cleffa": [
    "cleffa",
    "mélo",
    "pii",
    "ピィ",
    "pyi"
  ],
  "igglybuff": [
    "igglybuff",
    "toudoudou",
    "fluffeluff",
    "ププリン",
    "pupurin"
  ],
  "togepi": [
    "togepi",
    "トゲピー",
    "togepii"
  ],
  "togetic": [
    "togetic",
    "トゲチック",
    "togechikku"
  ],
  "natu": [
    "natu",
    "ネイティ",
    "neitei"
  ],
  "xatu": [
    "xatu",
    "ネイティオ",
    "neiteio"
  ],
  "mareep": [
    "mareep",
    "wattouat",
    "voltilamm",
    "メリープ",
    "meriipu"
  ],
  "flaaffy": [
    "flaaffy",
    "lainergie",
    "waaty",
    "モココ",
    "mokoko"
  ],
  "ampharos": [
    "ampharos",
    "pharamp",
    "デンリュウ",
    "denryuu",
    "denryu"
  ],
  "bellossom": [
    "bellossom",
    "joliflor",
    "blubella",
    "キレイハナ",
    "kireihana"
  ],
  "marill": [
    "marill",
    "マリル",
    "mariru"
  ],
  "azumarill": [
    "azumarill",
    "マリルリ",
    "mariruri"
  ],
  "sudowoodo": [
    "sudowoodo",
    "simularbre",
    "mogelbaum",
    "ウソッキー",
    "usokkii",
    "usokki"
  ],
  "politoed": [
    "politoed",
    "tarpaud",
    "quaxo",
    "ニョロトノ",
    "nyorotono"
  ],
  "hoppip": [
    "hoppip",
    "granivol",
    "hoppspross",
    "ハネッコ",
    "hanekko"
  ],
  "skiploom": [
    "skiploom",
    "floravol",
    "hubelupf",
    "ポポッコ",
    "popokko"
  ],
  "jumpluff": [
    "jumpluff",
    "cotovol",
    "papungha",
    "ワタッコ",
    "watakko"
  ],
  "aipom": [
    "aipom",
    "capumain",
    "griffel",
    "エイパム",
    "eipamu"
  ],
  "sunkern": [
    "sunkern",
    "tournegrin",
    "sonnkern",
    "ヒマナッツ",
    "himanattsu"
  ],
  "sunflora": [
    "sunflora",
    "héliatronc",
    "sonnflora",
    "キマワリ",
    "kimawari"
  ],
  "yanma": [
    "yanma",
    "ヤンヤンマ",
    "yan'yanma",
    "yanyanma"
  ],
  "wooper": [
    "wooper",
    "axoloto",
    "felino",
    "ウパー",
    "upaa",
    "upa"
  ],
  "quagsire": [
    "quagsire",
    "maraiste",
    "morlord",
    "ヌオー",
    "nuoo"
  ],
  "espeon": [
    "espeon",
    "mentali",
    "psiana",
    "エーフィ",
    "eefyi"
  ],
  "umbreon": [
    "umbreon",
    "noctali",
    "nachtara",
    "ブラッキー",
    "burakkii",
    "burakki"
  ],
  "murkrow": [
    "murkrow",
    "cornèbre",
    "kramurx",
    "ヤミカラス",
    "yamikarasu"
  ],
  "slowking": [
    "slowking",
    "roigada",
    "laschoking",
    "ヤドキング",
    "yadokingu",
    "yadoking"
  ],
  "misdreavus": [
    "misdreavus",
    "feuforêve",
    "traunfugil",
    "ムウマ",
    "muuma"
  ],
  "unown": [
    "unown",
    "zarbi",
    "icognito",
    "アンノーン",
    "annoon"
  ],
  "wobbuffet": [
    "wobbuffet",
    "qulbutoké",
    "woingenau",
    "ソーナンス",
    "soonansu"
  ],
  "girafarig": [
    "girafarig",
    "キリンリキ",
    "kirinriki"
  ],
  "pineco": [
    "pineco",
    "pomdepik",
    "tannza",
    "クヌギダマ",
    "kunugidama"
  ],
  "forretress": [
    "forretress",
    "foretress",
    "forstellka",
    "フォレトス",
    "fuoretosu"
  ],
  "dunsparce": [
    "dunsparce",
    "insolourdo",
    "dummisel",
    "ノコッチ",
    "nokotchi"
  ],
  "gligar": [
    "gligar",
    "scorplane",
    "skorgla",
    "グライガー",
    "guraigaa",
    "guraiga"
  ],
  "steelix": [
    "steelix",
    "stahlos",
    "ハガネール",
    "haganeeru"
  ],
  "snubbull": [
    "snubbull",
    "ブルー",
    "buruu",
    "buru"
  ],
  "granbull": [
    "granbull",
    "グランブル",
    "guranburu"
  ],
  "qwilfish": [
    "qwilfish",
    "baldorfish",
    "ハリーセン",
    "hariisen"
  ],
  "scizor": [
    "scizor",
    "cizayox",
    "scherox",
    "ハッサム",
    "hassamu"
  ],
  "shuckle": [
    "shuckle",
    "caratroc",
    "pottrott",
    "ツボツボ",
    "tsubotsubo"
  ],
  "heracross": [
    "heracross",
    "scarhino",
    "skaraborn",
    "ヘラクロス",
    "herakurosu"
  ],
  "sneasel": [
    "sneasel",
    "farfuret",
    "sniebel",
    "ニューラ",
    "nyuura"
  ],
  "teddiursa": [
    "teddiursa",
    "ヒメグマ",
    "himeguma"
  ],
  "ursaring": [
    "ursaring",
    "リングマ",
    "ringuma"
  ],
  "slugma": [
    "slugma",
    "limagma",
    "schneckmag",
    "マグマッグ",
    "magumaggu"
  ],
  "magcargo": [
    "magcargo",
    "volcaropod",
    "マグカルゴ",
    "magukarugo"
  ],
  "swinub": [
    "swinub",
    "marcacrin",
    "quiekel",
    "ウリムー",
    "urimuu",
    "urimu"
  ],
  "piloswine": [
    "piloswine",
    "cochignon",
    "keifel",
    "イノムー",
    "inomuu",
    "inomu"
  ],
  "corsola": [
    "corsola",
    "corayon",
    "corasonn",
    "サニーゴ",
    "saniigo"
  ],
  "remoraid": [
    "remoraid",
    "rémoraid",
    "テッポウオ",
    "teppouo"
  ],
  "octillery": [
    "octillery",
    "オクタン",
    "okutan"
  ],
  "delibird": [
    "delibird",
    "cadoizo",
    "botogel",
    "デリバード",
    "deribaado"
  ],
  "mantine": [
    "mantine",
    "démanta",
    "mantax",
    "マンタイン",
    "mantain"
  ],
  "skarmory": [
    "skarmory",
    "airmure",
    "panzaeron",
    "エアームド",
    "eaamudo"
  ],
  "houndour": [
    "houndour",
    "malosse",
    "hunduster",
    "デルビル",
    "derubiru"
  ],
  "houndoom": [
    "houndoom",
    "démolosse",
    "hundemon",
    "ヘルガー",
    "herugaa",
    "heruga"
  ],
  "kingdra": [
    "kingdra",
    "hyporoi",
    "seedraking",
    "キングドラ",
    "kingudora"
  ],
  "phanpy": [
    "phanpy",
    "ゴマゾウ",
    "gomazou",
    "gomazo"
  ],
  "donphan": [
    "donphan",
    "ドンファン",
    "donfuan"
  ],
  "porygon2": [
    "porygon2",
    "ポリゴン2",
    "porigon２",
    "porigon2"
  ],
  "stantler": [
    "stantler",
    "cerfrousse",
    "damhirplex",
    "オドシシ",
    "odoshishi"
  ],
  "smeargle": [
    "smeargle",
    "queulorior",
    "farbeagle",
    "ドーブル",
    "dooburu"
  ],
  "tyrogue": [
    "tyrogue",
    "debugant",
    "rabauz",
    "バルキー",
    "barukii",
    "baruki"
  ],
  "hitmontop": [
    "hitmontop",
    "kapoera",
    "カポエラー",
    "kapoeraa"
  ],
  "smoochum": [
    "smoochum",
    "lippouti",
    "kussilla",
    "ムチュール",
    "muchuuru"
  ],
  "elekid": [
    "elekid",
    "élekid",
    "エレキッド",
    "erekiddo"
  ],
  "magby": [
    "magby",
    "ブビィ",
    "bubyi"
  ],
  "miltank": [
    "miltank",
    "écrémeuh",
    "ミルタンク",
    "mirutanku"
  ],
  "blissey": [
    "blissey",
    "leuphorie",
    "heiteira",
    "ハピナス",
    "hapinasu"
  ],
  "raikou": [
    "raikou",
    "ライコウ",
    "raiko"
  ],
  "entei": [
    "entei",
    "エンテイ"
  ],
  "suicune": [
    "suicune",
    "スイクン",
    "suikun"
  ],
  "larvitar": [
    "larvitar",
    "embrylex",
    "ヨーギラス",
    "yoogirasu"
  ],
  "pupitar": [
    "pupitar",
    "ymphect",
    "サナギラス",
    "sanagirasu"
  ],
  "tyranitar": [
    "tyranitar",
    "tyranocif",
    "despotar",
    "バンギラス",
    "bangirasu"
  ],
  "lugia": [
    "lugia",
    "ルギア",
    "rugia"
  ],
  "ho-oh": [
    "ho-oh",
    "ホウオウ",
    "houou",
    "houo"
  ],
  "celebi": [
    "celebi",
    "セレビィ",
    "serebyi"
  ],
  "treecko": [
    "treecko",
    "arcko",
    "geckarbor",
    "キモリ",
    "kimori"
  ],
  "grovyle": [
    "grovyle",
    "massko",
    "reptain",
    "ジュプトル",
    "juputoru"
  ],
  "sceptile": [
    "sceptile",
    "jungko",
    "gewaldro",
    "ジュカイン",
    "jukain"
  ],
  "torchic": [
    "torchic",
    "poussifeu",
    "flemmli",
    "アチャモ",
    "achamo"
  ],
  "combusken": [
    "combusken",
    "galifeu",
    "jungglut",
    "ワカシャモ",
    "wakashamo"
  ],
  "blaziken": [
    "blaziken",
    "braségali",
    "lohgock",
    "バシャーモ",
    "bashaamo"
  ],
  "mudkip": [
    "mudkip",
    "gobou",
    "hydropi",
    "ミズゴロウ",
    "mizugorou",
    "mizugoro"
  ],
  "marshtomp": [
    "marshtomp",
    "flobio",
    "moorabbel",
    "ヌマクロー",
    "numakuroo"
  ],
  "swampert": [
    "swampert",
    "laggron",
    "sumpex",
    "ラグラージ",
    "raguraaji"
  ],
  "poochyena": [
    "poochyena",
    "medhyèna",
    "fiffyen",
    "ポチエナ",
    "pochiena"
  ],
  "mightyena": [
    "mightyena",
    "grahyèna",
    "magnayen",
    "グラエナ",
    "guraena"
  ],
  "zigzagoon": [
    "zigzagoon",
    "zigzaton",
    "zigzachs",
    "ジグザグマ",
    "jiguzaguma"
  ],
  "linoone": [
    "linoone",
    "linéon",
    "geradaks",
    "マッスグマ",
    "massuguma"
  ],
  "wurmple": [
    "wurmple",
    "chenipotte",
    "waumpel",
    "ケムッソ",
    "kemusso"
  ],
  "silcoon": [
    "silcoon",
    "armulys",
    "schaloko",
    "カラサリス",
    "karasarisu"
  ],
  "beautifly": [
    "beautifly",
    "charmillon",
    "papinella",
    "アゲハント",
    "agehanto"
  ],
  "cascoon": [
    "cascoon",
    "blindalys",
    "panekon",
    "マユルド",
    "mayurudo"
  ],
  "dustox": [
    "dustox",
    "papinox",
    "pudox",
    "ドクケイル",
    "dokukeiru"
  ],
  "lotad": [
    "lotad",
    "nénupiot",
    "loturzel",
    "ハスボー",
    "hasuboo"
  ],
  "lombre": [
    "lombre",
    "lombrero",
    "ハスブレロ",
    "hasuburero"
  ],
  "ludicolo": [
    "ludicolo",
    "kappalores",
    "ルンパッパ",
    "runpappa"
  ],
  "seedot": [
    "seedot",
    "grainipiot",
    "samurzel",
    "タネボー",
    "taneboo"
  ],
  "nuzleaf": [
    "nuzleaf",
    "pifeuil",
    "blanas",
    "コノハナ",
    "konohana"
  ],
  "shiftry": [
    "shiftry",
    "tengalice",
    "tengulist",
    "ダーテング",
    "daatengu"
  ],
  "taillow": [
    "taillow",
    "nirondelle",
    "schwalbini",
    "スバメ",
    "subame"
  ],
  "swellow": [
    "swellow",
    "hélédelle",
    "schwalboss",
    "オオスバメ",
    "oosubame"
  ],
  "wingull": [
    "wingull",
    "goélise",
    "キャモメ",
    "kyamome"
  ],
  "pelipper": [
    "pelipper",
    "bekipan",
    "ペリッパー",
    "perippaa",
    "perippa"
  ],
  "ralts": [
    "ralts",
    "tarsal",
    "trasla",
    "ラルトス",
    "rarutosu"
  ],
  "kirlia": [
    "kirlia",
    "キルリア",
    "kiruria"
  ],
  "gardevoir": [
    "gardevoir",
    "guardevoir",
    "サーナイト",
    "saanaito"
  ],
  "surskit": [
    "surskit",
    "arakdo",
    "gehweiher",
    "アメタマ",
    "ametama"
  ],
  "masquerain": [
    "masquerain",
    "maskadra",
    "maskeregen",
    "アメモース",
    "amemoosu"
  ],
  "shroomish": [
    "shroomish",
    "balignon",
    "knilz",
    "キノココ",
    "kinokoko"
  ],
  "breloom": [
    "breloom",
    "chapignon",
    "kapilz",
    "キノガッサ",
    "kinogassa"
  ],
  "slakoth": [
    "slakoth",
    "parecool",
    "bummelz",
    "ナマケロ",
    "namakero"
  ],
  "vigoroth": [
    "vigoroth",
    "muntier",
    "ヤルキモノ",
    "yarukimono"
  ],
  "slaking": [
    "slaking",
    "monaflèmit",
    "letarking",
    "ケッキング",
    "kekkingu",
    "kekking"
  ],
  "nincada": [
    "nincada",
    "ningale",
    "ツチニン",
    "tsuchinin"
  ],
  "ninjask": [
    "ninjask",
    "テッカニン",
    "tekkanin"
  ],
  "shedinja": [
    "shedinja",
    "munja",
    "ninjatom",
    "ヌケニン",
    "nukenin"
  ],
  "whismur": [
    "whismur",
    "chuchmur",
    "flurmel",
    "ゴニョニョ",
    "gonyonyo"
  ],
  "loudred": [
    "loudred",
    "ramboum",
    "krakeelo",
    "ドゴーム",
    "dogoomu"
  ],
  "exploud": [
    "exploud",
    "brouhabam",
    "krawumms",
    "バクオング",
    "bakuongu"
  ],
  "makuhita": [
    "makuhita",
    "マクノシタ",
    "makunoshita"
  ],
  "hariyama": [
    "hariyama",
    "ハリテヤマ",
    "hariteyama"
  ],
  "azurill": [
    "azurill",
    "ルリリ",
    "ruriri"
  ],
  "nosepass": [
    "nosepass",
    "tarinor",
    "nasgnet",
    "ノズパス",
    "nozupasu"
  ],
  "skitty": [
    "skitty",
    "eneco",
    "エネコ",
    "eneko"
  ],
  "delcatty": [
    "delcatty",
    "enekoro",
    "エネコロロ",
    "enekororo"
  ],
  "sableye": [
    "sableye",
    "ténéfix",
    "zobiris",
    "ヤミラミ",
    "yamirami"
  ],
  "mawile": [
    "mawile",
    "mysdibule",
    "flunkifer",
    "クチート",
    "kuchiito"
  ],
  "aron": [
    "aron",
    "galekid",
    "stollunior",
    "ココドラ",
    "kokodora"
  ],
  "lairon": [
    "lairon",
    "galegon",
    "stollrak",
    "コドラ",
    "kodora"
  ],
  "aggron": [
    "aggron",
    "galeking",
    "stolloss",
    "ボスゴドラ",
    "bosugodora"
  ],
  "meditite": [
    "meditite",
    "méditikka",
    "meditie",
    "アサナン",
    "asanan"
  ],
  "medicham": [
    "medicham",
    "charmina",
    "meditalis",
    "チャーレム",
    "chaaremu"
  ],
  "electrike": [
    "electrike",
    "dynavolt",
    "frizelbliz",
    "ラクライ",
    "rakurai"
  ],
  "manectric": [
    "manectric",
    "élecsprint",
    "voltenso",
    "ライボルト",
    "raiboruto"
  ],
  "plusle": [
    "plusle",
    "posipi",
    "プラスル",
    "purasuru"
  ],
  "minun": [
    "minun",
    "négapi",
    "マイナン",
    "mainan"
  ],
  "volbeat": [
    "volbeat",
    "muciole",
    "バルビート",
    "barubiito"
  ],
  "illumise": [
    "illumise",
    "lumivole",
    "イルミーゼ",
    "irumiize"
  ],
  "roselia": [
    "roselia",
    "rosélia",
    "ロゼリア",
    "rozeria"
  ],
  "gulpin": [
    "gulpin",
    "gloupti",
    "schluppuck",
    "ゴクリン",
    "gokurin"
  ],
  "swalot": [
    "swalot",
    "avaltout",
    "schlukwech",
    "マルノーム",
    "marunoomu"
  ],
  "carvanha": [
    "carvanha",
    "kanivanha",
    "キバニア",
    "kibania"
  ],
  "sharpedo": [
    "sharpedo",
    "tohaido",
    "サメハダー",
    "samehadaa",
    "samehada"
  ],
  "wailmer": [
    "wailmer",
    "ホエルコ",
    "hoeruko"
  ],
  "wailord": [
    "wailord",
    "ホエルオー",
    "hoeruoo"
  ],
  "numel": [
    "numel",
    "chamallot",
    "camaub",
    "ドンメル",
    "donmeru"
  ],
  "camerupt": [
    "camerupt",
    "camérupt",
    "バクーダ",
    "bakuuda"
  ],
  "torkoal": [
    "torkoal",
    "chartor",
    "qurtel",
    "コータス",
    "kootasu"
  ],
  "spoink": [
    "spoink",
    "バネブー",
    "banebuu",
    "banebu"
  ],
  "grumpig": [
    "grumpig",
    "groret",
    "groink",
    "ブーピッグ",
    "buupiggu"
  ],
  "spinda": [
    "spinda",
    "pandir",
    "パッチール",
    "patchiiru"
  ],
  "trapinch": [
    "trapinch",
    "kraknoix",
    "knacklion",
    "ナックラー",
    "nakkuraa",
    "nakkura"
  ],
  "vibrava": [
    "vibrava",
    "vibraninf",
    "ビブラーバ",
    "biburaaba"
  ],
  "flygon": [
    "flygon",
    "libégon",
    "libelldra",
    "フライゴン",
    "furaigon"
  ],
  "cacnea": [
    "cacnea",
    "tuska",
    "サボネア",
    "sabonea"
  ],
  "cacturne": [
    "cacturne",
    "noktuska",
    "ノクタス",
    "nokutasu"
  ],
  "swablu": [
    "swablu",
    "tylton",
    "wablu",
    "チルット",
    "chirutto"
  ],
  "altaria": [
    "altaria",
    "チルタリス",
    "chirutarisu"
  ],
  "zangoose": [
    "zangoose",
    "mangriff",
    "sengo",
    "ザングース",
    "zanguusu"
  ],
  "seviper": [
    "seviper",
    "séviper",
    "vipitis",
    "ハブネーク",
    "habuneeku"
  ],
  "lunatone": [
    "lunatone",
    "séléroc",
    "lunastein",
    "ルナトーン",
    "runatoon"
  ],
  "solrock": [
    "solrock",
    "solaroc",
    "sonnfel",
    "ソルロック",
    "sorurokku"
  ],
  "barboach": [
    "barboach",
    "barloche",
    "schmerbe",
    "ドジョッチ",
    "dojotchi"
  ],
  "whiscash": [
    "whiscash",
    "barbicha",
    "welsar",
    "ナマズン",
    "namazun"
  ],
  "corphish": [
    "corphish",
    "écrapince",
    "krebscorps",
    "ヘイガニ",
    "heigani"
  ],
  "crawdaunt": [
    "crawdaunt",
    "colhomard",
    "krebutack",
    "シザリガー",
    "shizarigaa",
    "shizariga"
  ],
  "baltoy": [
    "baltoy",
    "balbuto",
    "puppance",
    "ヤジロン",
    "yajiron"
  ],
  "claydol": [
    "claydol",
    "kaorine",
    "lepumentas",
    "ネンドール",
    "nendooru"
  ],
  "lileep": [
    "lileep",
    "lilia",
    "liliep",
    "リリーラ",
    "ririira"
  ],
  "cradily": [
    "cradily",
    "vacilys",
    "wielie",
    "ユレイドル",
    "yureidoru"
  ],
  "anorith": [
    "anorith",
    "アノプス",
    "anopusu"
  ],
  "armaldo": [
    "armaldo",
    "アーマルド",
    "aamarudo"
  ],
  "feebas": [
    "feebas",
    "barpau",
    "barschwa",
    "ヒンバス",
    "hinbasu"
  ],
  "milotic": [
    "milotic",
    "milobellus",
    "ミロカロス",
    "mirokarosu"
  ],
  "castform": [
    "castform",
    "morphéo",
    "formeo",
    "ポワルン",
    "powarun"
  ],
  "kecleon": [
    "kecleon",
    "カクレオン",
    "kakureon"
  ],
  "shuppet": [
    "shuppet",
    "polichombr",
    "カゲボウズ",
    "kagebouzu"
  ],
  "banette": [
    "banette",
    "branette",
    "ジュペッタ",
    "jupetta"
  ],
  "duskull": [
    "duskull",
    "skelénox",
    "zwirrlicht",
    "ヨマワル",
    "yomawaru"
  ],
  "dusclops": [
    "dusclops",
    "téraclope",
    "zwirrklop",
    "サマヨール",
    "samayooru"
  ],
  "tropius": [
    "tropius",
    "トロピウス",
    "toropiusu"
  ],
  "chimecho": [
    "chimecho",
    "éoko",
    "palimpalim",
    "チリーン",
    "chiriin"
  ],
  "absol": [
    "absol",
    "アブソル",
    "abusoru"
  ],
  "wynaut": [
    "wynaut",
    "okéoké",
    "isso",
    "ソーナノ",
    "soonano"
  ],
  "snorunt": [
    "snorunt",
    "stalgamin",
    "schneppke",
    "ユキワラシ",
    "yukiwarashi"
  ],
  "glalie": [
    "glalie",
    "oniglali",
    "firnontor",
    "オニゴーリ",
    "onigoori"
  ],
  "spheal": [
    "spheal",
    "obalie",
    "seemops",
    "タマザラシ",
    "tamazarashi"
  ],
  "sealeo": [
    "sealeo",
    "phogleur",
    "seejong",
    "トドグラー",
    "todoguraa",
    "todogura"
  ],
  "walrein": [
    "walrein",
    "kaimorse",
    "walraisa",
    "トドゼルガ",
    "todozeruga"
  ],
  "clamperl": [
    "clamperl",
    "coquiperl",
    "perlu",
    "パールル",
    "paaruru"
  ],
  "huntail": [
    "huntail",
    "serpang",
    "aalabyss",
    "ハンテール",
    "hanteeru"
  ],
  "gorebyss": [
    "gorebyss",
    "rosabyss",
    "saganabyss",
    "サクラビス",
    "sakurabisu"
  ],
  "relicanth": [
    "relicanth",
    "ジーランス",
    "jiiransu"
  ],
  "luvdisc": [
    "luvdisc",
    "lovdisc",
    "liebiskus",
    "ラブカス",
    "rabukasu"
  ],
  "bagon": [
    "bagon",
    "draby",
    "kindwurm",
    "タツベイ",
    "tatsubei"
  ],
  "shelgon": [
    "shelgon",
    "drackhaus",
    "draschel",
    "コモルー",
    "komoruu",
    "komoru"
  ],
  "salamence": [
    "salamence",
    "drattak",
    "brutalanda",
    "ボーマンダ",
    "boomanda"
  ],
  "beldum": [
    "beldum",
    "terhal",
    "tanhel",
    "ダンバル",
    "danbaru"
  ],
  "metang": [
    "metang",
    "métang",
    "メタング",
    "metangu"
  ],
  "metagross": [
    "metagross",
    "métalosse",
    "メタグロス",
    "metagurosu"
  ],
  "regirock": [
    "regirock",
    "レジロック",
    "rejirokku"
  ],
  "regice": [
    "regice",
    "レジアイス",
    "rejiaisu"
  ],
  "registeel": [
    "registeel",
    "レジスチル",
    "rejisuchiru"
  ],
  "latias": [
    "latias",
    "ラティアス",
    "rateiasu"
  ],
  "latios": [
    "latios",
    "ラティオス",
    "rateiosu"
  ],
  "kyogre": [
    "kyogre",
    "カイオーガ",
    "kaiooga"
  ],
  "groudon": [
    "groudon",
    "グラードン",
    "guraadon"
  ],
  "rayquaza": [
    "rayquaza",
    "レックウザ",
    "rekkuuza"
  ],
  "jirachi": [
    "jirachi",
    "ジラーチ",
    "jiraachi"
  ],
  "deoxys": [
    "deoxys",
    "デオキシス",
    "deokishisu"
  ],
  "turtwig": [
    "turtwig",
    "tortipouss",
    "chelast",
    "ナエトル",
    "naetoru"
  ],
  "grotle": [
    "grotle",
    "boskara",
    "chelcarain",
    "ハヤシガメ",
    "hayashigame"
  ],
  "torterra": [
    "torterra",
    "chelterrar",
    "ドダイトス",
    "dodaitosu"
  ],
  "chimchar": [
    "chimchar",
    "ouisticram",
    "panflam",
    "ヒコザル",
    "hikozaru"
  ],
  "monferno": [
    "monferno",
    "chimpenfeu",
    "panpyro",
    "モウカザル",
    "moukazaru"
  ],
  "infernape": [
    "infernape",
    "simiabraz",
    "panferno",
    "ゴウカザル",
    "goukazaru"
  ],
  "piplup": [
    "piplup",
    "tiplouf",
    "plinfa",
    "ポッチャマ",
    "potchama"
  ],
  "prinplup": [
    "prinplup",
    "prinplouf",
    "pliprin",
    "ポッタイシ",
    "pottaishi"
  ],
  "empoleon": [
    "empoleon",
    "pingoléon",
    "impoleon",
    "エンペルト",
    "enperuto"
  ],
  "starly": [
    "starly",
    "étourmi",
    "staralili",
    "ムックル",
    "mukkuru"
  ],
  "staravia": [
    "staravia",
    "étourvol",
    "ムクバード",
    "mukubaado"
  ],
  "staraptor": [
    "staraptor",
    "étouraptor",
    "ムクホーク",
    "mukuhooku"
  ],
  "bidoof": [
    "bidoof",
    "keunotor",
    "bidiza",
    "ビッパ",
    "bippa"
  ],
  "bibarel": [
    "bibarel",
    "castorno",
    "bidifas",
    "ビーダル",
    "biidaru"
  ],
  "kricketot": [
    "kricketot",
    "crikzik",
    "zirpurze",
    "コロボーシ",
    "korobooshi"
  ],
  "kricketune": [
    "kricketune",
    "mélokrik",
    "zirpeise",
    "コロトック",
    "korotokku"
  ],
  "shinx": [
    "shinx",
    "lixy",
    "sheinux",
    "コリンク",
    "korinku"
  ],
  "luxio": [
    "luxio",
    "ルクシオ",
    "rukushio"
  ],
  "luxray": [
    "luxray",
    "luxtra",
    "レントラー",
    "rentoraa",
    "rentora"
  ],
  "budew": [
    "budew",
    "rozbouton",
    "knospi",
    "スボミー",
    "subomii",
    "subomi"
  ],
  "roserade": [
    "roserade",
    "ロズレイド",
    "rozureido"
  ],
  "cranidos": [
    "cranidos",
    "kranidos",
    "koknodon",
    "ズガイドス",
    "zugaidosu"
  ],
  "rampardos": [
    "rampardos",
    "charkos",
    "rameidon",
    "ラムパルド",
    "ramuparudo"
  ],
  "shieldon": [
    "shieldon",
    "dinoclier",
    "schilterus",
    "タテトプス",
    "tatetopusu"
  ],
  "bastiodon": [
    "bastiodon",
    "bollterus",
    "トリデプス",
    "toridepusu"
  ],
  "burmy": [
    "burmy",
    "cheniti",
    "ミノムッチ",
    "minomutchi"
  ],
  "wormadam": [
    "wormadam",
    "cheniselle",
    "burmadame",
    "ミノマダム",
    "minomadamu"
  ],
  "mothim": [
    "mothim",
    "papilord",
    "moterpel",
    "ガーメイル",
    "gaameiru"
  ],
  "combee": [
    "combee",
    "apitrini",
    "wadribie",
    "ミツハニー",
    "mitsuhanii",
    "mitsuhani"
  ],
  "vespiquen": [
    "vespiquen",
    "apireine",
    "honweisel",
    "ビークイン",
    "biikuin"
  ],
  "pachirisu": [
    "pachirisu",
    "パチリス"
  ],
  "buizel": [
    "buizel",
    "mustébouée",
    "bamelin",
    "ブイゼル",
    "buizeru"
  ],
  "floatzel": [
    "floatzel",
    "mustéflott",
    "bojelin",
    "フローゼル",
    "furoozeru"
  ],
  "cherubi": [
    "cherubi",
    "ceribou",
    "kikugi",
    "チェリンボ",
    "cherinbo"
  ],
  "cherrim": [
    "cherrim",
    "ceriflor",
    "kinoso",
    "チェリム",
    "cherimu"
  ],
  "shellos": [
    "shellos",
    "sancoki",
    "schalellos",
    "カラナクシ",
    "karanakushi"
  ],
  "gastrodon": [
    "gastrodon",
    "tritosor",
    "トリトドン",
    "toritodon"
  ],
  "ambipom": [
    "ambipom",
    "capidextre",
    "ambidiffel",
    "エテボース",
    "eteboosu"
  ],
  "drifloon": [
    "drifloon",
    "baudrive",
    "driftlon",
    "フワンテ",
    "fuwante"
  ],
  "drifblim": [
    "drifblim",
    "grodrive",
    "drifzepeli",
    "フワライド",
    "fuwaraido"
  ],
  "buneary": [
    "buneary",
    "laporeille",
    "haspiror",
    "ミミロル",
    "mimiroru"
  ],
  "lopunny": [
    "lopunny",
    "lockpin",
    "schlapor",
    "ミミロップ",
    "mimiroppu"
  ],
  "mismagius": [
    "mismagius",
    "magirêve",
    "traunmagil",
    "ムウマージ",
    "muumaaji"
  ],
  "honchkrow": [
    "honchkrow",
    "corboss",
    "kramshef",
    "ドンカラス",
    "donkarasu"
  ],
  "glameow": [
    "glameow",
    "chaglam",
    "charmian",
    "ニャルマー",
    "nyarumaa",
    "nyaruma"
  ],
  "purugly": [
    "purugly",
    "chaffreux",
    "shnurgarst",
    "ブニャット",
    "bunyatto"
  ],
  "chingling": [
    "chingling",
    "korillon",
    "klingplim",
    "リーシャン",
    "riishan"
  ],
  "stunky": [
    "stunky",
    "moufouette",
    "skunkapuh",
    "スカンプー",
    "sukanpuu",
    "sukanpu"
  ],
  "skuntank": [
    "skuntank",
    "moufflair",
    "スカタンク",
    "sukatanku"
  ],
  "bronzor": [
    "bronzor",
    "archéomire",
    "bronzel",
    "ドーミラー",
    "doomiraa",
    "doomira"
  ],
  "bronzong": [
    "bronzong",
    "archéodong",
    "ドータクン",
    "dootakun"
  ],
  "bonsly": [
    "bonsly",
    "manzaï",
    "mobai",
    "ウソハチ",
    "usohachi"
  ],
  "mime-jr": [
    "mime-jr",
    "mime jr.",
    "pantimimi",
    "マネネ",
    "manene"
  ],
  "happiny": [
    "happiny",
    "ptiravi",
    "wonneira",
    "ピンプク",
    "pinpuku"
  ],
  "chatot": [
    "chatot",
    "pijako",
    "plaudagei",
    "ペラップ",
    "perappu"
  ],
  "spiritomb": [
    "spiritomb",
    "kryppuk",
    "ミカルゲ",
    "mikaruge"
  ],
  "gible": [
    "gible",
    "griknot",
    "kaumalat",
    "フカマル",
    "fukamaru"
  ],
  "gabite": [
    "gabite",
    "carmache",
    "knarksel",
    "ガバイト",
    "gabaito"
  ],
  "garchomp": [
    "garchomp",
    "carchacrok",
    "knakrack",
    "ガブリアス",
    "gaburiasu"
  ],
  "munchlax": [
    "munchlax",
    "goinfrex",
    "mampfaxo",
    "ゴンベ",
    "gonbe"
  ],
  "riolu": [
    "riolu",
    "リオル",
    "rioru"
  ],
  "lucario": [
    "lucario",
    "ルカリオ",
    "rukario"
  ],
  "hippopotas": [
    "hippopotas",
    "ヒポポタス",
    "hipopotasu"
  ],
  "hippowdon": [
    "hippowdon",
    "hippodocus",
    "hippoterus",
    "カバルドン",
    "kabarudon"
  ],
  "skorupi": [
    "skorupi",
    "rapion",
    "pionskora",
    "スコルピ",
    "sukorupi"
  ],
  "drapion": [
    "drapion",
    "drascore",
    "piondragi",
    "ドラピオン",
    "dorapion"
  ],
  "croagunk": [
    "croagunk",
    "cradopaud",
    "glibunkel",
    "グレッグル",
    "guregguru"
  ],
  "toxicroak": [
    "toxicroak",
    "coatox",
    "toxiquak",
    "ドクロッグ",
    "dokuroggu"
  ],
  "carnivine": [
    "carnivine",
    "vortente",
    "venuflibis",
    "マスキッパ",
    "masukippa"
  ],
  "finneon": [
    "finneon",
    "écayon",
    "ケイコウオ",
    "keikouo"
  ],
  "lumineon": [
    "lumineon",
    "luminéon",
    "ネオラント",
    "neoranto"
  ],
  "mantyke": [
    "mantyke",
    "babimanta",
    "mantirps",
    "タマンタ",
    "tamanta"
  ],
  "snover": [
    "snover",
    "blizzi",
    "shnebedeck",
    "ユキカブリ",
    "yukikaburi"
  ],
  "abomasnow": [
    "abomasnow",
    "blizzaroi",
    "rexblisar",
    "ユキノオー",
    "yukinooo"
  ],
  "weavile": [
    "weavile",
    "dimoret",
    "snibunna",
    "マニューラ",
    "manyuura"
  ],
  "magnezone": [
    "magnezone",
    "magnézone",
    "ジバコイル",
    "jibakoiru"
  ],
  "lickilicky": [
    "lickilicky",
    "coudlangue",
    "schlurplek",
    "ベロベルト",
    "beroberuto"
  ],
  "rhyperior": [
    "rhyperior",
    "rhinastoc",
    "rihornior",
    "ドサイドン",
    "dosaidon"
  ],
  "tangrowth": [
    "tangrowth",
    "bouldeneu",
    "tangoloss",
    "モジャンボ",
    "mojanbo"
  ],
  "electivire": [
    "electivire",
    "élekable",
    "elevoltek",
    "エレキブル",
    "erekiburu"
  ],
  "magmortar": [
    "magmortar",
    "maganon",
    "magbrant",
    "ブーバーン",
    "buubaan"
  ],
  "togekiss": [
    "togekiss",
    "トゲキッス",
    "togekissu"
  ],
  "yanmega": [
    "yanmega",
    "メガヤンマ",
    "megayanma"
  ],
  "leafeon": [
    "leafeon",
    "phyllali",
    "folipurba",
    "リーフィア",
    "riifyia"
  ],
  "glaceon": [
    "glaceon",
    "givrali",
    "glaziola",
    "グレイシア",
    "gureishia"
  ],
  "gliscor": [
    "gliscor",
    "scorvol",
    "skorgro",
    "グライオン",
    "guraion"
  ],
  "mamoswine": [
    "mamoswine",
    "mammochon",
    "mamutel",
    "マンムー",
    "manmuu",
    "manmu"
  ],
  "porygon-z": [
    "porygon-z",
    "ポリゴンz",
    "porigonｚ",
    "porigonz"
  ],
  "gallade": [
    "gallade",
    "gallame",
    "galagladi",
    "エルレイド",
    "erureido"
  ],
  "probopass": [
    "probopass",
    "tarinorme",
    "voluminas",
    "ダイノーズ",
    "dainoozu"
  ],
  "dusknoir": [
    "dusknoir",
    "noctunoir",
    "zwirrfinst",
    "ヨノワール",
    "yonowaaru"
  ],
  "froslass": [
    "froslass",
    "momartik",
    "frosdedje",
    "ユキメノコ",
    "yukimenoko"
  ],
  "rotom": [
    "rotom",
    "motisma",
    "ロトム",
    "rotomu"
  ],
  "uxie": [
    "uxie",
    "créhelf",
    "selfe",
    "ユクシー",
    "yukushii",
    "yukushi"
  ],
  "mesprit": [
    "mesprit",
    "créfollet",
    "vesprit",
    "エムリット",
    "emuritto"
  ],
  "azelf": [
    "azelf",
    "créfadet",
    "tobutz",
    "アグノム",
    "agunomu"
  ],
  "dialga": [
    "dialga",
    "ディアルガ",
    "deiaruga"
  ],
  "palkia": [
    "palkia",
    "パルキア",
    "parukia"
  ],
  "heatran": [
    "heatran",
    "ヒードラン",
    "hiidoran"
  ],
  "regigigas": [
    "regigigas",
    "レジギガス",
    "rejigigasu"
  ],
  "giratina": [
    "giratina",
    "ギラティナ",
    "girateina",
    "giratina-altered"
  ],
  "cresselia": [
    "cresselia",
    "クレセリア",
    "kureseria"
  ],
  "phione": [
    "phione",
    "フィオネ",
    "fyione"
  ],
  "manaphy": [
    "manaphy",
    "マナフィ",
    "manafyi"
  ],
  "darkrai": [
    "darkrai",
    "ダークライ",
    "daakurai"
  ],
  "shaymin": [
    "shaymin",
    "シェイミ",
    "sheimi"
  ],
  "arceus": [
    "arceus",
    "アルセウス",
    "aruseusu"
  ],
  "victini": [
    "victini",
    "ビクティニ",
    "bikuteini"
  ],
  "snivy": [
    "snivy",
    "vipélierre",
    "serpifeu",
    "ツタージャ",
    "tsutaaja"
  ],
  "servine": [
    "servine",
    "lianaja",
    "efoserp",
    "ジャノビー",
    "janobii",
    "janobi"
  ],
  "serperior": [
    "serperior",
    "majaspic",
    "serpiroyal",
    "ジャローダ",
    "jarooda"
  ],
  "tepig": [
    "tepig",
    "gruikui",
    "floink",
    "ポカブ",
    "pokabu"
  ],
  "pignite": [
    "pignite",
    "grotichon",
    "ferkokel",
    "チャオブー",
    "chaobuu",
    "chaobu"
  ],
  "emboar": [
    "emboar",
    "roitiflam",
    "flambirex",
    "エンブオー",
    "enbuoo"
  ],
  "oshawott": [
    "oshawott",
    "moustillon",
    "ottaro",
    "ミジュマル",
    "mijumaru"
  ],
  "dewott": [
    "dewott",
    "mateloutre",
    "zwottronin",
    "フタチマル",
    "futachimaru"
  ],
  "samurott": [
    "samurott",
    "clamiral",
    "admurai",
    "ダイケンキ",
    "daikenki"
  ],
  "patrat": [
    "patrat",
    "ratentif",
    "nagelotz",
    "ミネズミ",
    "minezumi"
  ],
  "watchog": [
    "watchog",
    "miradar",
    "kukmarda",
    "ミルホッグ",
    "miruhoggu"
  ],
  "lillipup": [
    "lillipup",
    "ponchiot",
    "yorkleff",
    "ヨーテリー",
    "yooterii",
    "yooteri"
  ],
  "herdier": [
    "herdier",
    "ponchien",
    "terribark",
    "ハーデリア",
    "haaderia"
  ],
  "stoutland": [
    "stoutland",
    "mastouffe",
    "bissbark",
    "ムーランド",
    "muurando"
  ],
  "purrloin": [
    "purrloin",
    "chacripan",
    "felilou",
    "チョロネコ",
    "choroneko"
  ],
  "liepard": [
    "liepard",
    "léopardus",
    "kleoparda",
    "レパルダス",
    "reparudasu"
  ],
  "pansage": [
    "pansage",
    "feuillajou",
    "vegimak",
    "ヤナップ",
    "yanappu"
  ],
  "simisage": [
    "simisage",
    "feuiloutan",
    "vegichita",
    "ヤナッキー",
    "yanakkii",
    "yanakki"
  ],
  "pansear": [
    "pansear",
    "flamajou",
    "grillmak",
    "バオップ",
    "baoppu"
  ],
  "simisear": [
    "simisear",
    "flamoutan",
    "grillchita",
    "バオッキー",
    "baokkii",
    "baokki"
  ],
  "panpour": [
    "panpour",
    "flotajou",
    "sodamak",
    "ヒヤップ",
    "hiyappu"
  ],
  "simipour": [
    "simipour",
    "flotoutan",
    "sodachita",
    "ヒヤッキー",
    "hiyakkii",
    "hiyakki"
  ],
  "munna": [
    "munna",
    "somniam",
    "ムンナ"
  ],
  "musharna": [
    "musharna",
    "mushana",
    "somnivora",
    "ムシャーナ",
    "mushaana"
  ],
  "pidove": [
    "pidove",
    "poichigeon",
    "dusselgurr",
    "マメパト",
    "mamepato"
  ],
  "tranquill": [
    "tranquill",
    "colombeau",
    "navitaub",
    "ハトーボー",
    "hatooboo"
  ],
  "unfezant": [
    "unfezant",
    "déflaisan",
    "fasasnob",
    "ケンホロウ",
    "kenhorou",
    "kenhoro"
  ],
  "blitzle": [
    "blitzle",
    "zébibron",
    "elezeba",
    "シママ",
    "shimama"
  ],
  "zebstrika": [
    "zebstrika",
    "zéblitz",
    "zebritz",
    "ゼブライカ",
    "zeburaika"
  ],
  "roggenrola": [
    "roggenrola",
    "nodulithe",
    "kiesling",
    "ダンゴロ",
    "dangoro"
  ],
  "boldore": [
    "boldore",
    "géolithe",
    "sedimantur",
    "ガントル",
    "gantoru"
  ],
  "gigalith": [
    "gigalith",
    "gigalithe",
    "brockoloss",
    "ギガイアス",
    "gigaiasu"
  ],
  "woobat": [
    "woobat",
    "chovsourir",
    "fleknoil",
    "コロモリ",
    "koromori"
  ],
  "swoobat": [
    "swoobat",
    "rhinolove",
    "fletiamo",
    "ココロモリ",
    "kokoromori"
  ],
  "drilbur": [
    "drilbur",
    "rototaupe",
    "rotomurf",
    "モグリュー",
    "moguryuu",
    "moguryu"
  ],
  "excadrill": [
    "excadrill",
    "minotaupe",
    "stalobor",
    "ドリュウズ",
    "doryuuzu"
  ],
  "audino": [
    "audino",
    "nanméouïe",
    "ohrdoch",
    "タブンネ",
    "tabunne"
  ],
  "timburr": [
    "timburr",
    "charpenti",
    "praktibalk",
    "ドッコラー",
    "dokkoraa",
    "dokkora"
  ],
  "gurdurr": [
    "gurdurr",
    "ouvrifier",
    "strepoli",
    "ドテッコツ",
    "dotekkotsu"
  ],
  "conkeldurr": [
    "conkeldurr",
    "bétochef",
    "meistagrif",
    "ローブシン",
    "roobushin"
  ],
  "tympole": [
    "tympole",
    "tritonde",
    "schallquap",
    "オタマロ",
    "otamaro"
  ],
  "palpitoad": [
    "palpitoad",
    "batracné",
    "mebrana",
    "ガマガル",
    "gamagaru"
  ],
  "seismitoad": [
    "seismitoad",
    "crapustule",
    "branawarz",
    "ガマゲロゲ",
    "gamageroge"
  ],
  "throh": [
    "throh",
    "judokrak",
    "jiutesto",
    "ナゲキ",
    "nageki"
  ],
  "sawk": [
    "sawk",
    "karaclée",
    "karadonis",
    "ダゲキ",
    "dageki"
  ],
  "sewaddle": [
    "sewaddle",
    "larveyette",
    "strawickl",
    "クルミル",
    "kurumiru"
  ],
  "swadloon": [
    "swadloon",
    "couverdure",
    "folikon",
    "クルマユ",
    "kurumayu"
  ],
  "leavanny": [
    "leavanny",
    "manternel",
    "matrifol",
    "ハハコモリ",
    "hahakomori"
  ],
  "venipede": [
    "venipede",
    "venipatte",
    "toxiped",
    "フシデ",
    "fushide"
  ],
  "whirlipede": [
    "whirlipede",
    "scobolide",
    "rollum",
    "ホイーガ",
    "hoiiga"
  ],
  "scolipede": [
    "scolipede",
    "brutapode",
    "cerapendra",
    "ペンドラー",
    "pendoraa",
    "pendora"
  ],
  "cottonee": [
    "cottonee",
    "doudouvet",
    "waumboll",
    "モンメン",
    "monmen"
  ],
  "whimsicott": [
    "whimsicott",
    "farfaduvet",
    "elfun",
    "エルフーン",
    "erufuun"
  ],
  "petilil": [
    "petilil",
    "chlorobule",
    "lilminip",
    "チュリネ",
    "churine"
  ],
  "lilligant": [
    "lilligant",
    "fragilady",
    "dressella",
    "ドレディア",
    "doredeia"
  ],
  "basculin": [
    "basculin",
    "bargantua",
    "barschuft",
    "バスラオ",
    "basurao"
  ],
  "sandile": [
    "sandile",
    "mascaïman",
    "ganovil",
    "メグロコ",
    "meguroko"
  ],
  "krokorok": [
    "krokorok",
    "escroco",
    "rokkaiman",
    "ワルビル",
    "warubiru"
  ],
  "krookodile": [
    "krookodile",
    "crocorible",
    "rabigator",
    "ワルビアル",
    "warubiaru"
  ],
  "darumaka": [
    "darumaka",
    "darumarond",
    "flampion",
    "ダルマッカ",
    "darumakka"
  ],
  "darmanitan": [
    "darmanitan",
    "darumacho",
    "flampivian",
    "ヒヒダルマ",
    "hihidaruma",
    "darmanitan-standard"
  ],
  "maractus": [
    "maractus",
    "maracachi",
    "maracamba",
    "マラカッチ",
    "marakatchi"
  ],
  "dwebble": [
    "dwebble",
    "crabicoque",
    "lithomith",
    "イシズマイ",
    "ishizumai"
  ],
  "crustle": [
    "crustle",
    "crabaraque",
    "castellith",
    "イワパレス",
    "iwaparesu"
  ],
  "scraggy": [
    "scraggy",
    "baggiguane",
    "zurrokex",
    "ズルッグ",
    "zuruggu"
  ],
  "scrafty": [
    "scrafty",
    "baggaïd",
    "irokex",
    "ズルズキン",
    "zuruzukin"
  ],
  "sigilyph": [
    "sigilyph",
    "cryptéro",
    "symvolara",
    "シンボラー",
    "shinboraa",
    "shinbora"
  ],
  "yamask": [
    "yamask",
    "tutafeh",
    "makabaja",
    "デスマス",
    "desumasu"
  ],
  "cofagrigus": [
    "cofagrigus",
    "tutankafer",
    "echnatoll",
    "デスカーン",
    "desukaan"
  ],
  "tirtouga": [
    "tirtouga",
    "carapagos",
    "galapaflos",
    "プロトーガ",
    "purotooga"
  ],
  "carracosta": [
    "carracosta",
    "mégapagos",
    "karippas",
    "アバゴーラ",
    "abagoora"
  ],
  "archen": [
    "archen",
    "arkéapti",
    "flapteryx",
    "アーケン",
    "aaken"
  ],
  "archeops": [
    "archeops",
    "aéroptéryx",
    "aeropteryx",
    "アーケオス",
    "aakeosu"
  ],
  "trubbish": [
    "trubbish",
    "miamiasme",
    "unratütox",
    "ヤブクロン",
    "yabukuron"
  ],
  "garbodor": [
    "garbodor",
    "miasmax",
    "deponitox",
    "ダストダス",
    "dasutodasu"
  ],
  "zorua": [
    "zorua",
    "ゾロア",
    "zoroa"
  ],
  "zoroark": [
    "zoroark",
    "ゾロアーク",
    "zoroaaku"
  ],
  "minccino": [
    "minccino",
    "chinchidou",
    "picochilla",
    "チラーミィ",
    "chiraamyi"
  ],
  "cinccino": [
    "cinccino",
    "pashmilla",
    "chillabell",
    "チラチーノ",
    "chirachiino"
  ],
  "gothita": [
    "gothita",
    "scrutella",
    "mollimorba",
    "ゴチム",
    "gochimu"
  ],
  "gothorita": [
    "gothorita",
    "mesmérella",
    "hypnomorba",
    "ゴチミル",
    "gochimiru"
  ],
  "gothitelle": [
    "gothitelle",
    "sidérella",
    "morbitesse",
    "ゴチルゼル",
    "gochiruzeru"
  ],
  "solosis": [
    "solosis",
    "nucléos",
    "monozyto",
    "ユニラン",
    "yuniran"
  ],
  "duosion": [
    "duosion",
    "méios",
    "mitodos",
    "ダブラン",
    "daburan"
  ],
  "reuniclus": [
    "reuniclus",
    "symbios",
    "zytomega",
    "ランクルス",
    "rankurusu"
  ],
  "ducklett": [
    "ducklett",
    "couaneton",
    "piccolente",
    "コアルヒー",
    "koaruhii",
    "koaruhi"
  ],
  "swanna": [
    "swanna",
    "lakmécygne",
    "swaroness",
    "スワンナ",
    "suwanna"
  ],
  "vanillite": [
    "vanillite",
    "sorbébé",
    "gelatini",
    "バニプッチ",
    "baniputchi"
  ],
  "vanillish": [
    "vanillish",
    "sorboul",
    "gelatroppo",
    "バニリッチ",
    "baniritchi"
  ],
  "vanilluxe": [
    "vanilluxe",
    "sorbouboul",
    "gelatwino",
    "バイバニラ",
    "baibanira"
  ],
  "deerling": [
    "deerling",
    "vivaldaim",
    "sesokitz",
    "シキジカ",
    "shikijika"
  ],
  "sawsbuck": [
    "sawsbuck",
    "haydaim",
    "kronjuwild",
    "メブキジカ",
    "mebukijika"
  ],
  "emolga": [
    "emolga",
    "エモンガ",
    "emonga"
  ],
  "karrablast": [
    "karrablast",
    "carabing",
    "laukaps",
    "カブルモ",
    "kaburumo"
  ],
  "escavalier": [
    "escavalier",
    "lançargot",
    "cavalanzas",
    "シュバルゴ",
    "shubarugo"
  ],
  "foongus": [
    "foongus",
    "trompignon",
    "tarnpignon",
    "タマゲタケ",
    "tamagetake"
  ],
  "amoonguss": [
    "amoonguss",
    "gaulet",
    "hutsassa",
    "モロバレル",
    "morobareru"
  ],
  "frillish": [
    "frillish",
    "viskuse",
    "quabbel",
    "プルリル",
    "pururiru"
  ],
  "jellicent": [
    "jellicent",
    "moyade",
    "apoquallyp",
    "ブルンゲル",
    "burungeru"
  ],
  "alomomola": [
    "alomomola",
    "mamanbo",
    "mamolida",
    "ママンボウ",
    "mamanbou"
  ],
  "joltik": [
    "joltik",
    "statitik",
    "wattzapf",
    "バチュル",
    "bachuru"
  ],
  "galvantula": [
    "galvantula",
    "mygavolt",
    "voltula",
    "デンチュラ",
    "denchura"
  ],
  "ferroseed": [
    "ferroseed",
    "grindur",
    "kastadur",
    "テッシード",
    "tesshiido"
  ],
  "ferrothorn": [
    "ferrothorn",
    "noacier",
    "tentantel",
    "ナットレイ",
    "nattorei"
  ],
  "klink": [
    "klink",
    "tic",
    "klikk",
    "ギアル",
    "giaru"
  ],
  "klang": [
    "klang",
    "clic",
    "kliklak",
    "ギギアル",
    "gigiaru"
  ],
  "klinklang": [
    "klinklang",
    "cliticlic",
    "klikdiklak",
    "ギギギアル",
    "gigigiaru"
  ],
  "tynamo": [
    "tynamo",
    "anchwatt",
    "zapplardin",
    "シビシラス",
    "shibishirasu"
  ],
  "eelektrik": [
    "eelektrik",
    "lampéroie",
    "zapplalek",
    "シビビール",
    "shibibiiru"
  ],
  "eelektross": [
    "eelektross",
    "ohmassacre",
    "zapplarang",
    "シビルドン",
    "shibirudon"
  ],
  "elgyem": [
    "elgyem",
    "lewsor",
    "pygraulon",
    "リグレー",
    "riguree",
    "rigure"
  ],
  "beheeyem": [
    "beheeyem",
    "neitram",
    "megalon",
    "オーベム",
    "oobemu"
  ],
  "litwick": [
    "litwick",
    "funécire",
    "lichtel",
    "ヒトモシ",
    "hitomoshi"
  ],
  "lampent": [
    "lampent",
    "mélancolux",
    "laternecto",
    "ランプラー",
    "ranpuraa",
    "ranpura"
  ],
  "chandelure": [
    "chandelure",
    "lugulabre",
    "skelabra",
    "シャンデラ",
    "shandera"
  ],
  "axew": [
    "axew",
    "coupenotte",
    "milza",
    "キバゴ",
    "kibago"
  ],
  "fraxure": [
    "fraxure",
    "incisache",
    "sharfax",
    "オノンド",
    "onondo"
  ],
  "haxorus": [
    "haxorus",
    "tranchodon",
    "maxax",
    "オノノクス",
    "ononokusu"
  ],
  "cubchoo": [
    "cubchoo",
    "polarhume",
    "petznief",
    "クマシュン",
    "kumashun"
  ],
  "beartic": [
    "beartic",
    "polagriffe",
    "siberio",
    "ツンベアー",
    "tsunbeaa",
    "tsunbea"
  ],
  "cryogonal": [
    "cryogonal",
    "hexagel",
    "frigometri",
    "フリージオ",
    "furiijio"
  ],
  "shelmet": [
    "shelmet",
    "escargaume",
    "schnuthelm",
    "チョボマキ",
    "chobomaki"
  ],
  "accelgor": [
    "accelgor",
    "limaspeed",
    "hydragil",
    "アギルダー",
    "agirudaa",
    "agiruda"
  ],
  "stunfisk": [
    "stunfisk",
    "limonde",
    "flunschlik",
    "マッギョ",
    "maggyo"
  ],
  "mienfoo": [
    "mienfoo",
    "kungfouine",
    "lin-fu",
    "コジョフー",
    "kojofuu",
    "kojofu"
  ],
  "mienshao": [
    "mienshao",
    "shaofouine",
    "wie-shu",
    "コジョンド",
    "kojondo"
  ],
  "druddigon": [
    "druddigon",
    "drakkarmin",
    "shardrago",
    "クリムガン",
    "kurimugan"
  ],
  "golett": [
    "golett",
    "gringolem",
    "golbit",
    "ゴビット",
    "gobitto"
  ],
  "golurk": [
    "golurk",
    "golemastoc",
    "golgantes",
    "ゴルーグ",
    "goruugu"
  ],
  "pawniard": [
    "pawniard",
    "scalpion",
    "gladiantri",
    "コマタナ",
    "komatana"
  ],
  "bisharp": [
    "bisharp",
    "scalproie",
    "caesurio",
    "キリキザン",
    "kirikizan"
  ],
  "bouffalant": [
    "bouffalant",
    "frison",
    "bisofank",
    "バッフロン",
    "baffuron"
  ],
  "rufflet": [
    "rufflet",
    "furaiglon",
    "geronimatz",
    "ワシボン",
    "washibon"
  ],
  "braviary": [
    "braviary",
    "gueriaigle",
    "washakwil",
    "ウォーグル",
    "uooguru"
  ],
  "vullaby": [
    "vullaby",
    "vostourno",
    "skallyk",
    "バルチャイ",
    "baruchai"
  ],
  "mandibuzz": [
    "mandibuzz",
    "vaututrice",
    "grypheldis",
    "バルジーナ",
    "barujiina"
  ],
  "heatmor": [
    "heatmor",
    "aflamanoir",
    "furnifraß",
    "クイタラン",
    "kuitaran"
  ],
  "durant": [
    "durant",
    "fermite",
    "fermicula",
    "アイアント",
    "aianto"
  ],
  "deino": [
    "deino",
    "solochi",
    "kapuno",
    "モノズ",
    "monozu"
  ],
  "zweilous": [
    "zweilous",
    "diamat",
    "duodino",
    "ジヘッド",
    "jiheddo"
  ],
  "hydreigon": [
    "hydreigon",
    "trioxhydre",
    "trikephalo",
    "サザンドラ",
    "sazandora"
  ],
  "larvesta": [
    "larvesta",
    "pyronille",
    "ignivor",
    "メラルバ",
    "meraruba"
  ],
  "volcarona": [
    "volcarona",
    "pyrax",
    "ramoth",
    "ウルガモス",
    "urugamosu"
  ],
  "cobalion": [
    "cobalion",
    "cobaltium",
    "kobalium",
    "コバルオン",
    "kobaruon"
  ],
  "terrakion": [
    "terrakion",
    "terrakium",
    "テラキオン",
    "terakion"
  ],
  "virizion": [
    "virizion",
    "viridium",
    "ビリジオン",
    "birijion"
  ],
  "tornadus": [
    "tornadus",
    "boréas",
    "boreos",
    "トルネロス",
    "torunerosu",
    "tornadus-incarnate"
  ],
  "thundurus": [
    "thundurus",
    "fulguris",
    "voltolos",
    "ボルトロス",
    "borutorosu",
    "thundurus-incarnate"
  ],
  "reshiram": [
    "reshiram",
    "レシラム",
    "reshiramu"
  ],
  "zekrom": [
    "zekrom",
    "ゼクロム",
    "zekuromu"
  ],
  "landorus": [
    "landorus",
    "démétéros",
    "demeteros",
    "ランドロス",
    "randorosu",
    "landorus-incarnate"
  ],
  "kyurem": [
    "kyurem",
    "キュレム",
    "kyuremu"
  ],
  "keldeo": [
    "keldeo",
    "ケルディオ",
    "kerudeio",
    "keldeo-ordinary"
  ],
  "meloetta": [
    "meloetta",
    "メロエッタ",
    "meroetta"
  ],
  "genesect": [
    "genesect",
    "ゲノセクト",
    "genosekuto"
  ],
  "chespin": [
    "chespin",
    "marisson",
    "igamaro",
    "ハリマロン",
    "harimaron"
  ],
  "quilladin": [
    "quilladin",
    "boguérisse",
    "igastarnish",
    "ハリボーグ",
    "hariboogu"
  ],
  "chesnaught": [
    "chesnaught",
    "blindépique",
    "brigaron",
    "ブリガロン",
    "burigaron"
  ],
  "fennekin": [
    "fennekin",
    "feunnec",
    "fynx",
    "フォッコ",
    "fuokko"
  ],
  "braixen": [
    "braixen",
    "roussil",
    "rutena",
    "テールナー",
    "teerunaa",
    "teeruna"
  ],
  "delphox": [
    "delphox",
    "goupelin",
    "fennexis",
    "マフォクシー",
    "mafuokushii",
    "mafuokushi"
  ],
  "froakie": [
    "froakie",
    "grenousse",
    "froxy",
    "ケロマツ",
    "keromatsu"
  ],
  "frogadier": [
    "frogadier",
    "croâporal",
    "amphizel",
    "ゲコガシラ",
    "gekogashira"
  ],
  "greninja": [
    "greninja",
    "amphinobi",
    "quajutsu",
    "ゲッコウガ",
    "gekkouga"
  ],
  "bunnelby": [
    "bunnelby",
    "sapereau",
    "scoppel",
    "ホルビー",
    "horubii",
    "horubi"
  ],
  "diggersby": [
    "diggersby",
    "excavarenne",
    "grebbit",
    "ホルード",
    "horuudo"
  ],
  "fletchling": [
    "fletchling",
    "passerouge",
    "dartiri",
    "ヤヤコマ",
    "yayakoma"
  ],
  "fletchinder": [
    "fletchinder",
    "braisillon",
    "dartignis",
    "ヒノヤコマ",
    "hinoyakoma"
  ],
  "talonflame": [
    "talonflame",
    "flambusard",
    "fiaro",
    "ファイアロー",
    "fuaiaroo"
  ],
  "scatterbug": [
    "scatterbug",
    "lépidonille",
    "purmel",
    "コフキムシ",
    "kofukimushi"
  ],
  "spewpa": [
    "spewpa",
    "pérégrain",
    "puponcho",
    "コフーライ",
    "kofuurai"
  ],
  "vivillon": [
    "vivillon",
    "prismillon",
    "ビビヨン",
    "bibiyon"
  ],
  "litleo": [
    "litleo",
    "hélionceau",
    "leufeo",
    "シシコ",
    "shishiko"
  ],
  "pyroar": [
    "pyroar",
    "némélios",
    "pyroleo",
    "カエンジシ",
    "kaenjishi"
  ],
  "flabebe": [
    "flabebe",
    "flabébé",
    "フラベベ",
    "furabebe"
  ],
  "floette": [
    "floette",
    "フラエッテ",
    "furaette"
  ],
  "florges": [
    "florges",
    "フラージェス",
    "furaajesu"
  ],
  "skiddo": [
    "skiddo",
    "cabriolaine",
    "mähikel",
    "メェークル",
    "meeekuru"
  ],
  "gogoat": [
    "gogoat",
    "chevroum",
    "chevrumm",
    "ゴーゴート",
    "googooto"
  ],
  "pancham": [
    "pancham",
    "pandespiègle",
    "pam-pam",
    "ヤンチャム",
    "yanchamu"
  ],
  "pangoro": [
    "pangoro",
    "pandarbare",
    "pandagro",
    "ゴロンダ",
    "goronda"
  ],
  "furfrou": [
    "furfrou",
    "couafarel",
    "coiffwaff",
    "トリミアン",
    "torimian"
  ],
  "espurr": [
    "espurr",
    "psystigri",
    "psiau",
    "ニャスパー",
    "nyasupaa",
    "nyasupa"
  ],
  "meowstic": [
    "meowstic",
    "mistigrix",
    "psiaugon",
    "ニャオニクス",
    "nyaonikusu"
  ],
  "honedge": [
    "honedge",
    "monorpale",
    "gramokles",
    "ヒトツキ",
    "hitotsuki"
  ],
  "doublade": [
    "doublade",
    "dimoclès",
    "duokles",
    "ニダンギル",
    "nidangiru"
  ],
  "aegislash": [
    "aegislash",
    "exagide",
    "durengard",
    "ギルガルド",
    "girugarudo"
  ],
  "spritzee": [
    "spritzee",
    "fluvetin",
    "parfi",
    "シュシュプ",
    "shushupu"
  ],
  "aromatisse": [
    "aromatisse",
    "cocotine",
    "parfinesse",
    "フレフワン",
    "furefuwan"
  ],
  "swirlix": [
    "swirlix",
    "sucroquin",
    "flauschling",
    "ペロッパフ",
    "peroppafu"
  ],
  "slurpuff": [
    "slurpuff",
    "cupcanaille",
    "sabbaione",
    "ペロリーム",
    "peroriimu"
  ],
  "inkay": [
    "inkay",
    "sepiatop",
    "iscalar",
    "マーイーカ",
    "maaiika"
  ],
  "malamar": [
    "malamar",
    "sepiatroce",
    "calamanero",
    "カラマネロ",
    "karamanero"
  ],
  "binacle": [
    "binacle",
    "opermine",
    "bithora",
    "カメテテ",
    "kametete"
  ],
  "barbaracle": [
    "barbaracle",
    "golgopathe",
    "thanathora",
    "ガメノデス",
    "gamenodesu"
  ],
  "skrelp": [
    "skrelp",
    "venalgue",
    "algitt",
    "クズモー",
    "kuzumoo"
  ],
  "dragalge": [
    "dragalge",
    "kravarech",
    "tandrak",
    "ドラミドロ",
    "doramidoro"
  ],
  "clauncher": [
    "clauncher",
    "flingouste",
    "scampisto",
    "ウデッポウ",
    "udeppou",
    "udeppo"
  ],
  "clawitzer": [
    "clawitzer",
    "gamblast",
    "wummer",
    "ブロスター",
    "burosutaa",
    "burosuta"
  ],
  "helioptile": [
    "helioptile",
    "galvaran",
    "eguana",
    "エリキテル",
    "erikiteru"
  ],
  "heliolisk": [
    "heliolisk",
    "iguolta",
    "elezard",
    "エレザード",
    "erezaado"
  ],
  "tyrunt": [
    "tyrunt",
    "ptyranidur",
    "balgoras",
    "チゴラス",
    "chigorasu"
  ],
  "tyrantrum": [
    "tyrantrum",
    "rexillius",
    "monargoras",
    "ガチゴラス",
    "gachigorasu"
  ],
  "amaura": [
    "amaura",
    "amagara",
    "amarino",
    "アマルス",
    "amarusu"
  ],
  "aurorus": [
    "aurorus",
    "dragmara",
    "amagarga",
    "アマルルガ",
    "amaruruga"
  ],
  "sylveon": [
    "sylveon",
    "nymphali",
    "feelinara",
    "ニンフィア",
    "ninfyia"
  ],
  "hawlucha": [
    "hawlucha",
    "brutalibré",
    "resladero",
    "ルチャブル",
    "ruchaburu"
  ],
  "dedenne": [
    "dedenne",
    "デデンネ"
  ],
  "carbink": [
    "carbink",
    "strassie",
    "rocara",
    "メレシー",
    "mereshii",
    "mereshi"
  ],
  "goomy": [
    "goomy",
    "mucuscule",
    "viscora",
    "ヌメラ",
    "numera"
  ],
  "sliggoo": [
    "sliggoo",
    "colimucus",
    "viscargot",
    "ヌメイル",
    "numeiru"
  ],
  "goodra": [
    "goodra",
    "muplodocus",
    "viscogon",
    "ヌメルゴン",
    "numerugon"
  ],
  "klefki": [
    "klefki",
    "trousselin",
    "clavion",
    "クレッフィ",
    "kureffyi"
  ],
  "phantump": [
    "phantump",
    "brocélôme",
    "paragoni",
    "ボクレー",
    "bokuree",
    "bokure"
  ],
  "trevenant": [
    "trevenant",
    "desséliande",
    "trombork",
    "オーロット",
    "oorotto"
  ],
  "pumpkaboo": [
    "pumpkaboo",
    "pitrouille",
    "irrbis",
    "バケッチャ",
    "baketcha"
  ],
  "gourgeist": [
    "gourgeist",
    "banshitrouye",
    "pumpdjinn",
    "パンプジン",
    "panpujin"
  ],
  "bergmite": [
    "bergmite",
    "grelaçon",
    "arktip",
    "カチコール",
    "kachikooru"
  ],
  "avalugg": [
    "avalugg",
    "séracrawl",
    "arktilas",
    "クレベース",
    "kurebeesu"
  ],
  "noibat": [
    "noibat",
    "sonistrelle",
    "ef-em",
    "オンバット",
    "onbatto"
  ],
  "noivern": [
    "noivern",
    "bruyverne",
    "uhafnir",
    "オンバーン",
    "onbaan"
  ],
  "xerneas": [
    "xerneas",
    "ゼルネアス",
    "zeruneasu"
  ],
  "yveltal": [
    "yveltal",
    "イベルタル",
    "iberutaru"
  ],
  "zygarde": [
    "zygarde",
    "ジガルデ",
    "jigarude"
  ],
  "diancie": [
    "diancie",
    "ディアンシー",
    "deianshii",
    "deianshi"
  ],
  "hoopa": [
    "hoopa",
    "フーパ",
    "fuupa"
  ],
  "volcanion": [
    "volcanion",
    "ボルケニオン",
    "borukenion"
  ],
  "rowlet": [
    "rowlet",
    "brindibou",
    "bauz",
    "モクロー",
    "mokuroo"
  ],
  "dartrix": [
    "dartrix",
    "efflèche",
    "arboretoss",
    "フクスロー",
    "fukusuroo"
  ],
  "decidueye": [
    "decidueye",
    "archéduc",
    "silvarro",
    "ジュナイパー",
    "junaipaa",
    "junaipa"
  ],
  "litten": [
    "litten",
    "flamiaou",
    "flamiau",
    "ニャビー",
    "nyabii",
    "nyabi"
  ],
  "torracat": [
    "torracat",
    "matoufeu",
    "miezunder",
    "ニャヒート",
    "nyahiito"
  ],
  "incineroar": [
    "incineroar",
    "félinferno",
    "fuegro",
    "ガオガエン",
    "gaogaen"
  ],
  "popplio": [
    "popplio",
    "otaquin",
    "robball",
    "アシマリ",
    "ashimari"
  ],
  "brionne": [
    "brionne",
    "otarlette",
    "marikeck",
    "オシャマリ",
    "oshamari"
  ],
  "primarina": [
    "primarina",
    "oratoria",
    "primarene",
    "アシレーヌ",
    "ashireenu"
  ],
  "pikipek": [
    "pikipek",
    "picassaut",
    "peppeck",
    "ツツケラ",
    "tsutsukera"
  ],
  "trumbeak": [
    "trumbeak",
    "piclairon",
    "trompeck",
    "ケララッパ",
    "kerarappa"
  ],
  "toucannon": [
    "toucannon",
    "bazoucan",
    "tukanon",
    "ドデカバシ",
    "dodekabashi"
  ],
  "yungoos": [
    "yungoos",
    "manglouton",
    "mangunior",
    "ヤングース",
    "yanguusu"
  ],
  "gumshoos": [
    "gumshoos",
    "argouste",
    "manguspektor",
    "デカグース",
    "dekaguusu"
  ],
  "grubbin": [
    "grubbin",
    "larvibule",
    "mabula",
    "アゴジムシ",
    "agojimushi"
  ],
  "charjabug": [
    "charjabug",
    "chrysapile",
    "akkup",
    "デンヂムシ",
    "denjimushi"
  ],
  "vikavolt": [
    "vikavolt",
    "lucanon",
    "donarion",
    "クワガノン",
    "kuwaganon"
  ],
  "crabrawler": [
    "crabrawler",
    "crabagarre",
    "krabbox",
    "マケンカニ",
    "makenkani"
  ],
  "crabominable": [
    "crabominable",
    "krawell",
    "ケケンカニ",
    "kekenkani"
  ],
  "oricorio": [
    "oricorio",
    "plumeline",
    "choreogel",
    "オドリドリ",
    "odoridori"
  ],
  "cutiefly": [
    "cutiefly",
    "bombydou",
    "wommel",
    "アブリー",
    "aburii",
    "aburi"
  ],
  "ribombee": [
    "ribombee",
    "rubombelle",
    "bandelby",
    "アブリボン",
    "aburibon"
  ],
  "rockruff": [
    "rockruff",
    "rocabot",
    "wuffels",
    "イワンコ",
    "iwanko"
  ],
  "lycanroc": [
    "lycanroc",
    "lougaroc",
    "wolwerock",
    "ルガルガン",
    "rugarugan"
  ],
  "wishiwashi": [
    "wishiwashi",
    "froussardine",
    "lusardin",
    "ヨワシ",
    "yowashi"
  ],
  "mareanie": [
    "mareanie",
    "vorastérie",
    "garstella",
    "ヒドイデ",
    "hidoide"
  ],
  "toxapex": [
    "toxapex",
    "prédastérie",
    "aggrostella",
    "ドヒドイデ",
    "dohidoide"
  ],
  "mudbray": [
    "mudbray",
    "tiboudet",
    "pampuli",
    "ドロバンコ",
    "dorobanko"
  ],
  "mudsdale": [
    "mudsdale",
    "bourrinos",
    "pampross",
    "バンバドロ",
    "banbadoro"
  ],
  "dewpider": [
    "dewpider",
    "araqua",
    "シズクモ",
    "shizukumo"
  ],
  "araquanid": [
    "araquanid",
    "tarenbulle",
    "aranestro",
    "オニシズクモ",
    "onishizukumo"
  ],
  "fomantis": [
    "fomantis",
    "mimantis",
    "imantis",
    "カリキリ",
    "karikiri"
  ],
  "lurantis": [
    "lurantis",
    "floramantis",
    "mantidea",
    "ラランテス",
    "rarantesu"
  ],
  "morelull": [
    "morelull",
    "spododo",
    "bubungus",
    "ネマシュ",
    "nemashu"
  ],
  "shiinotic": [
    "shiinotic",
    "lampignon",
    "lamellux",
    "マシェード",
    "masheedo"
  ],
  "salandit": [
    "salandit",
    "tritox",
    "molunk",
    "ヤトウモリ",
    "yatoumori"
  ],
  "salazzle": [
    "salazzle",
    "malamandre",
    "amfira",
    "エンニュート",
    "ennyuuto"
  ],
  "stufful": [
    "stufful",
    "nounourson",
    "velursi",
    "ヌイコグマ",
    "nuikoguma"
  ],
  "bewear": [
    "bewear",
    "chelours",
    "kosturso",
    "キテルグマ",
    "kiteruguma"
  ],
  "bounsweet": [
    "bounsweet",
    "croquine",
    "frubberl",
    "アマカジ",
    "amakaji"
  ],
  "steenee": [
    "steenee",
    "candine",
    "frubaila",
    "アママイコ",
    "amamaiko"
  ],
  "tsareena": [
    "tsareena",
    "sucreine",
    "fruyal",
    "アマージョ",
    "amaajo"
  ],
  "comfey": [
    "comfey",
    "guérilande",
    "curelei",
    "キュワワー",
    "kyuwawaa",
    "kyuwawa"
  ],
  "oranguru": [
    "oranguru",
    "gouroutan",
    "kommandutan",
    "ヤレユータン",
    "yareyuutan"
  ],
  "passimian": [
    "passimian",
    "quartermac",
    "quartermak",
    "ナゲツケサル",
    "nagetsukesaru"
  ],
  "wimpod": [
    "wimpod",
    "sovkipou",
    "reißlaus",
    "コソクムシ",
    "kosokumushi"
  ],
  "golisopod": [
    "golisopod",
    "sarmuraï",
    "tectass",
    "グソクムシャ",
    "gusokumusha"
  ],
  "sandygast": [
    "sandygast",
    "bacabouh",
    "sankabuh",
    "スナバァ",
    "sunabaa",
    "sunaba"
  ],
  "palossand": [
    "palossand",
    "trépassable",
    "colossand",
    "シロデスナ",
    "shirodesuna"
  ],
  "pyukumuku": [
    "pyukumuku",
    "concombaffe",
    "gufa",
    "ナマコブシ",
    "namakobushi"
  ],
  "type-null": [
    "type-null",
    "type:0",
    "type0",
    "typ:null",
    "typnull",
    "type: null",
    "タイプ:ヌル",
    "タイプヌル",
    "taipu:nuru",
    "taipunuru"
  ],
  "silvally": [
    "silvally",
    "silvallié",
    "amigento",
    "シルヴァディ",
    "shiruvuadei"
  ],
  "minior": [
    "minior",
    "météno",
    "meteno",
    "メテノ"
  ],
  "komala": [
    "komala",
    "dodoala",
    "koalelu",
    "ネッコアラ",
    "nekkoara"
  ],
  "turtonator": [
    "turtonator",
    "boumata",
    "tortunator",
    "バクガメス",
    "bakugamesu"
  ],
  "togedemaru": [
    "togedemaru",
    "トゲデマル"
  ],
  "mimikyu": [
    "mimikyu",
    "mimiqui",
    "mimigma",
    "ミミッキュ",
    "mimikkyu"
  ],
  "bruxish": [
    "bruxish",
    "denticrisse",
    "knirfish",
    "ハギギシリ",
    "hagigishiri"
  ],
  "drampa": [
    "drampa",
    "draïeul",
    "sen-long",
    "ジジーロン",
    "jijiiron"
  ],
  "dhelmise": [
    "dhelmise",
    "sinistrail",
    "moruda",
    "ダダリン",
    "dadarin"
  ],
  "jangmo-o": [
    "jangmo-o",
    "bébécaille",
    "miniras",
    "ジャラコ",
    "jarako"
  ],
  "hakamo-o": [
    "hakamo-o",
    "écaïd",
    "mediras",
    "ジャランゴ",
    "jarango"
  ],
  "kommo-o": [
    "kommo-o",
    "ékaïser",
    "grandiras",
    "ジャラランガ",
    "jararanga"
  ],
  "tapu-koko": [
    "tapu-koko",
    "tokorico",
    "kapu-riki",
    "tapu koko",
    "カプ・コケコ",
    "kapu/kokeko"
  ],
  "tapu-lele": [
    "tapu-lele",
    "tokopiyon",
    "kapu-fala",
    "tapu lele",
    "カプ・テテフ",
    "kapu/tetefu"
  ],
  "tapu-bulu": [
    "tapu-bulu",
    "tokotoro",
    "kapu-toro",
    "tapu bulu",
    "カプ・ブルル",
    "kapu/bururu"
  ],
  "tapu-fini": [
    "tapu-fini",
    "tokopisco",
    "kapu-kime",
    "tapu fini",
    "カプ・レヒレ",
    "kapu/rehire"
  ],
  "cosmog": [
    "cosmog",
    "コスモッグ",
    "kosumoggu"
  ],
  "cosmoem": [
    "cosmoem",
    "cosmovum",
    "コスモウム",
    "kosumoumu"
  ],
  "solgaleo": [
    "solgaleo",
    "ソルガレオ",
    "sorugareo"
  ],
  "lunala": [
    "lunala",
    "ルナアーラ",
    "runaaara"
  ],
  "nihilego": [
    "nihilego",
    "zéroïd",
    "anego",
    "ウツロイド",
    "utsuroido"
  ],
  "buzzwole": [
    "buzzwole",
    "mouscoto",
    "masskito",
    "マッシブーン",
    "masshibuun"
  ],
  "pheromosa": [
    "pheromosa",
    "cancrelove",
    "schabelle",
    "フェローチェ",
    "fyerooche"
  ],
  "xurkitree": [
    "xurkitree",
    "câblifère",
    "voltriant",
    "デンジュモク",
    "denjumoku"
  ],
  "celesteela": [
    "celesteela",
    "bamboiselle",
    "kaguron",
    "テッカグヤ",
    "tekkaguya"
  ],
  "kartana": [
    "kartana",
    "katagami",
    "カミツルギ",
    "kamitsurugi"
  ],
  "guzzlord": [
    "guzzlord",
    "engloutyran",
    "schlingking",
    "アクジキング",
    "akujikingu",
    "akujiking"
  ],
  "necrozma": [
    "necrozma",
    "ネクロズマ",
    "nekurozuma"
  ],
  "magearna": [
    "magearna",
    "マギアナ",
    "magiana"
  ],
  "marshadow": [
    "marshadow",
    "マーシャドー",
    "maashadoo"
  ],
  "poipole": [
    "poipole",
    "vémini",
    "venicro",
    "ベベノム",
    "bebenomu"
  ],
  "naganadel": [
    "naganadel",
    "mandrillon",
    "agoyon",
    "アーゴヨン",
    "aagoyon"
  ],
  "stakataka": [
    "stakataka",
    "ama-ama",
    "muramura",
    "ツンデツンデ",
    "tsundetsunde"
  ],
  "blacephalon": [
    "blacephalon",
    "pierroteknik",
    "kopplosio",
    "ズガドーン",
    "zugadoon"
  ],
  "zeraora": [
    "zeraora",
    "ゼラオラ"
  ],
  "meltan": [
    "meltan",
    "メルタン",
    "merutan"
  ],
  "melmetal": [
    "melmetal",
    "メルメタル",
    "merumetaru"
  ],
  "grookey": [
    "grookey",
    "ouistempo",
    "chimpep",
    "サルノリ",
    "sarunori"
  ],
  "thwackey": [
    "thwackey",
    "badabouin",
    "chimstix",
    "バチンキー",
    "bachinkii",
    "bachinki"
  ],
  "rillaboom": [
    "rillaboom",
    "gorythmic",
    "gortrom",
    "ゴリランダー",
    "gorirandaa",
    "goriranda"
  ],
  "scorbunny": [
    "scorbunny",
    "flambino",
    "hopplo",
    "ヒバニー",
    "hibanii",
    "hibani"
  ],
  "raboot": [
    "raboot",
    "lapyro",
    "kickerlo",
    "ラビフット",
    "rabifutto"
  ],
  "cinderace": [
    "cinderace",
    "pyrobut",
    "liberlo",
    "エースバーン",
    "eesubaan"
  ],
  "sobble": [
    "sobble",
    "larméléon",
    "memmeon",
    "メッソン",
    "messon"
  ],
  "drizzile": [
    "drizzile",
    "arrozard",
    "phlegleon",
    "ジメレオン",
    "jimereon"
  ],
  "inteleon": [
    "inteleon",
    "lézargus",
    "intelleon",
    "インテレオン",
    "intereon"
  ],
  "skwovet": [
    "skwovet",
    "rongourmand",
    "raffel",
    "ホシガリス",
    "hoshigarisu"
  ],
  "greedent": [
    "greedent",
    "rongrigou",
    "schlaraffel",
    "ヨクバリス",
    "yokubarisu"
  ],
  "rookidee": [
    "rookidee",
    "minisange",
    "meikro",
    "ココガラ",
    "kokogara"
  ],
  "corvisquire": [
    "corvisquire",
    "bleuseille",
    "kranoviz",
    "アオガラス",
    "aogarasu"
  ],
  "corviknight": [
    "corviknight",
    "corvaillus",
    "krarmor",
    "アーマーガア",
    "aamaagaa",
    "aamaaga"
  ],
  "blipbug": [
    "blipbug",
    "larvadar",
    "sensect",
    "サッチムシ",
    "satchimushi"
  ],
  "dottler": [
    "dottler",
    "coléodôme",
    "keradar",
    "レドームシ",
    "redoomushi"
  ],
  "orbeetle": [
    "orbeetle",
    "astronelle",
    "maritellit",
    "イオルブ",
    "iorubu"
  ],
  "nickit": [
    "nickit",
    "goupilou",
    "kleptifux",
    "クスネ",
    "kusune"
  ],
  "thievul": [
    "thievul",
    "roublenard",
    "gaunux",
    "フォクスライ",
    "fuokusurai"
  ],
  "gossifleur": [
    "gossifleur",
    "tournicoton",
    "cottini",
    "ヒメンカ",
    "himenka"
  ],
  "eldegoss": [
    "eldegoss",
    "blancoton",
    "cottomi",
    "ワタシラガ",
    "watashiraga"
  ],
  "wooloo": [
    "wooloo",
    "moumouton",
    "wolly",
    "ウールー",
    "uuruu",
    "uuru"
  ],
  "dubwool": [
    "dubwool",
    "moumouflon",
    "zwollock",
    "バイウールー",
    "baiuuruu",
    "baiuuru"
  ],
  "chewtle": [
    "chewtle",
    "khélocrok",
    "kamehaps",
    "カムカメ",
    "kamukame"
  ],
  "drednaw": [
    "drednaw",
    "torgamord",
    "kamalm",
    "カジリガメ",
    "kajirigame"
  ],
  "yamper": [
    "yamper",
    "voltoutou",
    "voldi",
    "ワンパチ",
    "wanpachi"
  ],
  "boltund": [
    "boltund",
    "fulgudog",
    "bellektro",
    "パルスワン",
    "parusuwan"
  ],
  "rolycoly": [
    "rolycoly",
    "charbi",
    "klonkett",
    "タンドン",
    "tandon"
  ],
  "carkol": [
    "carkol",
    "wagomine",
    "wagong",
    "トロッゴン",
    "toroggon"
  ],
  "coalossal": [
    "coalossal",
    "monthracite",
    "montecarbo",
    "セキタンザン",
    "sekitanzan"
  ],
  "applin": [
    "applin",
    "verpom",
    "knapfel",
    "カジッチュ",
    "kajitchu"
  ],
  "flapple": [
    "flapple",
    "pomdrapi",
    "drapfel",
    "アップリュー",
    "appuryuu",
    "appuryu"
  ],
  "appletun": [
    "appletun",
    "dratatin",
    "schlapfel",
    "タルップル",
    "taruppuru"
  ],
  "silicobra": [
    "silicobra",
    "dunaja",
    "salanga",
    "スナヘビ",
    "sunahebi"
  ],
  "sandaconda": [
    "sandaconda",
    "dunaconda",
    "sanaconda",
    "サダイジャ",
    "sadaija"
  ],
  "cramorant": [
    "cramorant",
    "nigosier",
    "urgl",
    "ウッウ",
    "uu",
    "u"
  ],
  "arrokuda": [
    "arrokuda",
    "embrochet",
    "pikuda",
    "サシカマス",
    "sashikamasu"
  ],
  "barraskewda": [
    "barraskewda",
    "hastacuda",
    "barrakiefa",
    "カマスジョー",
    "kamasujoo"
  ],
  "toxel": [
    "toxel",
    "toxizap",
    "エレズン",
    "erezun"
  ],
  "toxtricity": [
    "toxtricity",
    "salarsen",
    "riffex",
    "ストリンダー",
    "sutorindaa",
    "sutorinda"
  ],
  "sizzlipede": [
    "sizzlipede",
    "grillepattes",
    "thermopod",
    "ヤクデ",
    "yakude"
  ],
  "centiskorch": [
    "centiskorch",
    "scolocendre",
    "infernopod",
    "マルヤクデ",
    "maruyakude"
  ],
  "clobbopus": [
    "clobbopus",
    "poulpaf",
    "klopptopus",
    "タタッコ",
    "tatakko"
  ],
  "grapploct": [
    "grapploct",
    "krakos",
    "kaocto",
    "オトスパス",
    "otosupasu"
  ],
  "sinistea": [
    "sinistea",
    "théffroi",
    "fatalitee",
    "ヤバチャ",
    "yabacha"
  ],
  "polteageist": [
    "polteageist",
    "polthégeist",
    "mortipot",
    "ポットデス",
    "pottodesu"
  ],
  "hatenna": [
    "hatenna",
    "bibichut",
    "brimova",
    "ミブリム",
    "miburimu"
  ],
  "hattrem": [
    "hattrem",
    "chapotus",
    "brimano",
    "テブリム",
    "teburimu"
  ],
  "hatterene": [
    "hatterene",
    "sorcilence",
    "silembrim",
    "ブリムオン",
    "burimuon"
  ],
  "impidimp": [
    "impidimp",
    "grimalin",
    "bähmon",
    "ベロバー",
    "berobaa",
    "beroba"
  ],
  "morgrem": [
    "morgrem",
    "fourbelin",
    "pelzebub",
    "ギモー",
    "gimoo"
  ],
  "grimmsnarl": [
    "grimmsnarl",
    "angoliath",
    "olangaar",
    "オーロンゲ",
    "ooronge"
  ],
  "obstagoon": [
    "obstagoon",
    "ixon",
    "barrikadax",
    "タチフサグマ",
    "tachifusaguma"
  ],
  "perrserker": [
    "perrserker",
    "berserkatt",
    "mauzinger",
    "ニャイキング",
    "nyaikingu",
    "nyaiking"
  ],
  "cursola": [
    "cursola",
    "corayôme",
    "gorgasonn",
    "サニゴーン",
    "sanigoon"
  ],
  "sirfetchd": [
    "sirfetchd",
    "palarticho",
    "lauchzelot",
    "sirfetch’d",
    "ネギガナイト",
    "negiganaito"
  ],
  "mr-rime": [
    "mr-rime",
    "m. glaquette",
    "m-glaquette",
    "pantifrost",
    "mr. rime",
    "バリコオル",
    "barikooru"
  ],
  "runerigus": [
    "runerigus",
    "tutétékri",
    "oghnatoll",
    "デスバーン",
    "desubaan"
  ],
  "milcery": [
    "milcery",
    "crèmy",
    "hokumil",
    "マホミル",
    "mahomiru"
  ],
  "alcremie": [
    "alcremie",
    "charmilly",
    "pokusan",
    "マホイップ",
    "mahoippu"
  ],
  "falinks": [
    "falinks",
    "hexadron",
    "legios",
    "タイレーツ",
    "taireetsu"
  ],
  "pincurchin": [
    "pincurchin",
    "wattapik",
    "britzigel",
    "バチンウニ",
    "bachin'uni",
    "bachinuni"
  ],
  "snom": [
    "snom",
    "frissonille",
    "snomnom",
    "ユキハミ",
    "yukihami"
  ],
  "frosmoth": [
    "frosmoth",
    "beldeneige",
    "mottineva",
    "モスノウ",
    "mosunou",
    "mosuno"
  ],
  "stonjourner": [
    "stonjourner",
    "dolman",
    "humanolith",
    "イシヘンジン",
    "ishihenjin"
  ],
  "eiscue": [
    "eiscue",
    "bekaglaçon",
    "kubuin",
    "コオリッポ",
    "koorippo"
  ],
  "indeedee": [
    "indeedee",
    "wimessir",
    "servol",
    "イエッサン",
    "iessan"
  ],
  "morpeko": [
    "morpeko",
    "モルペコ",
    "morupeko"
  ],
  "cufant": [
    "cufant",
    "charibari",
    "kupfanti",
    "ゾウドウ",
    "zoudou",
    "zoudo"
  ],
  "copperajah": [
    "copperajah",
    "pachyradjah",
    "patinaraja",
    "ダイオウドウ",
    "daioudou",
    "daioudo"
  ],
  "dracozolt": [
    "dracozolt",
    "galvagon",
    "lectragon",
    "パッチラゴン",
    "patchiragon"
  ],
  "arctozolt": [
    "arctozolt",
    "galvagla",
    "lecryodon",
    "パッチルドン",
    "patchirudon"
  ],
  "dracovish": [
    "dracovish",
    "hydragon",
    "pescragon",
    "ウオノラゴン",
    "uonoragon"
  ],
  "arctovish": [
    "arctovish",
    "hydragla",
    "pescryodon",
    "ウオチルドン",
    "uochirudon"
  ],
  "duraludon": [
    "duraludon",
    "duralugon",
    "ジュラルドン",
    "jurarudon"
  ],
  "dreepy": [
    "dreepy",
    "fantyrm",
    "grolldra",
    "ドラメシヤ",
    "dorameshiya"
  ],
  "drakloak": [
    "drakloak",
    "dispareptil",
    "phandra",
    "ドロンチ",
    "doronchi"
  ],
  "dragapult": [
    "dragapult",
    "lanssorien",
    "katapuldra",
    "ドラパルト",
    "doraparuto"
  ],
  "zacian": [
    "zacian",
    "ザシアン",
    "zashian"
  ],
  "zamazenta": [
    "zamazenta",
    "ザマゼンタ"
  ],
  "eternatus": [
    "eternatus",
    "éthernatos",
    "endynalos",
    "ムゲンダイナ",
    "mugendaina"
  ],
  "kubfu": [
    "kubfu",
    "wushours",
    "dakuma",
    "ダクマ"
  ],
  "urshifu": [
    "urshifu",
    "shifours",
    "wulaosu",
    "ウーラオス",
    "uuraosu"
  ],
  "zarude": [
    "zarude",
    "ザルード",
    "zaruudo"
  ],
  "regieleki": [
    "regieleki",
    "レジエレキ",
    "rejiereki"
  ],
  "regidrago": [
    "regidrago",
    "レジドラゴ",
    "rejidorago"
  ],
  "glastrier": [
    "glastrier",
    "blizzeval",
    "polaross",
    "ブリザポス",
    "burizaposu"
  ],
  "spectrier": [
    "spectrier",
    "spectreval",
    "phantoross",
    "レイスポス",
    "reisuposu"
  ],
  "calyrex": [
    "calyrex",
    "sylveroy",
    "coronospa",
    "バドレックス",
    "badorekkusu"
  ],
  "wyrdeer": [
    "wyrdeer",
    "cerbyllin",
    "damythir",
    "アヤシシ",
    "ayashishi"
  ],
  "kleavor": [
    "kleavor",
    "hachécateur",
    "axantor",
    "バサギリ",
    "basagiri"
  ],
  "ursaluna": [
    "ursaluna",
    "ursaking",
    "ガチグマ",
    "gachiguma"
  ],
  "basculegion": [
    "basculegion",
    "paragruel",
    "salmagnis",
    "イダイトウ",
    "idaitou",
    "idaito"
  ],
  "sneasler": [
    "sneasler",
    "farfurex",
    "snieboss",
    "オオニューラ",
    "oonyuura"
  ],
  "overqwil": [
    "overqwil",
    "qwilpik",
    "myriador",
    "ハリーマン",
    "hariiman"
  ],
  "enamorus": [
    "enamorus",
    "amovénus",
    "cupidos",
    "ラブトロス",
    "rabutorosu",
    "enamorus-incarnate"
  ],
  "sprigatito": [
    "sprigatito",
    "poussacha",
    "felori",
    "ニャオハ",
    "nyaoha"
  ],
  "floragato": [
    "floragato",
    "matourgeon",
    "feliospa",
    "ニャローテ",
    "nyaroote"
  ],
  "meowscarada": [
    "meowscarada",
    "miascarade",
    "maskagato",
    "マスカーニャ",
    "masukaanya"
  ],
  "fuecoco": [
    "fuecoco",
    "chochodile",
    "krokel",
    "ホゲータ",
    "hogeeta"
  ],
  "crocalor": [
    "crocalor",
    "crocogril",
    "lokroko",
    "アチゲータ",
    "achigeeta"
  ],
  "skeledirge": [
    "skeledirge",
    "flâmigator",
    "skelokrok",
    "ラウドボーン",
    "raudoboon"
  ],
  "quaxly": [
    "quaxly",
    "coiffeton",
    "kwaks",
    "クワッス",
    "kuwassu"
  ],
  "quaxwell": [
    "quaxwell",
    "canarbello",
    "fuentente",
    "ウェルカモ",
    "uerukamo"
  ],
  "quaquaval": [
    "quaquaval",
    "palmaval",
    "bailonda",
    "ウェーニバル",
    "ueenibaru"
  ],
  "lechonk": [
    "lechonk",
    "gourmelet",
    "ferkuli",
    "グルトン",
    "guruton"
  ],
  "oinkologne": [
    "oinkologne",
    "fragroin",
    "fragrunz",
    "パフュートン",
    "pafyuuton"
  ],
  "tarountula": [
    "tarountula",
    "tarundel",
    "tissenboule",
    "タマンチュラ",
    "tamanchura"
  ],
  "spidops": [
    "spidops",
    "filentrappe",
    "spinsidias",
    "ワナイダー",
    "wanaidaa",
    "wanaida"
  ],
  "nymble": [
    "nymble",
    "lilliterelle",
    "micrick",
    "マメバッタ",
    "mamebatta"
  ],
  "lokix": [
    "lokix",
    "gambex",
    "lextremo",
    "エクスレッグ",
    "ekusureggu"
  ],
  "pawmi": [
    "pawmi",
    "pohm",
    "pamo",
    "パモ"
  ],
  "pawmo": [
    "pawmo",
    "pohmotte",
    "pamamo",
    "パモット",
    "pamotto"
  ],
  "pawmot": [
    "pawmot",
    "pohmarmotte",
    "pamomamo",
    "パーモット",
    "paamotto"
  ],
  "tandemaus": [
    "tandemaus",
    "compagnol",
    "zwieps",
    "ワッカネズミ",
    "wakkanezumi"
  ],
  "maushold": [
    "maushold",
    "famignol",
    "famieps",
    "イッカネズミ",
    "ikkanezumi"
  ],
  "fidough": [
    "fidough",
    "pâtachiot",
    "hefel",
    "パピモッチ",
    "papimotchi"
  ],
  "dachsbun": [
    "dachsbun",
    "briochien",
    "backel",
    "バウッツェル",
    "bauttsueru"
  ],
  "smoliv": [
    "smoliv",
    "olivini",
    "olini",
    "ミニーブ",
    "miniibu"
  ],
  "dolliv": [
    "dolliv",
    "olivado",
    "olivinio",
    "オリーニョ",
    "oriinyo"
  ],
  "arboliva": [
    "arboliva",
    "olithena",
    "オリーヴァ",
    "oriivua"
  ],
  "squawkabilly": [
    "squawkabilly",
    "tapatoès",
    "krawalloro",
    "イキリンコ",
    "ikirinko"
  ],
  "nacli": [
    "nacli",
    "selutin",
    "geosali",
    "コジオ",
    "kojio"
  ],
  "naclstack": [
    "naclstack",
    "amassel",
    "sedisal",
    "ジオヅム",
    "jiozumu"
  ],
  "garganacl": [
    "garganacl",
    "gigansel",
    "saltigant",
    "キョジオーン",
    "kyojioon"
  ],
  "charcadet": [
    "charcadet",
    "charbambin",
    "knarbon",
    "カルボウ",
    "karubou",
    "karubo"
  ],
  "armarouge": [
    "armarouge",
    "carmadura",
    "crimanzo",
    "グレンアルマ",
    "guren'aruma",
    "gurenaruma"
  ],
  "ceruledge": [
    "ceruledge",
    "malvalame",
    "azugladis",
    "ソウブレイズ",
    "soubureizu"
  ],
  "tadbulb": [
    "tadbulb",
    "têtampoule",
    "blipp",
    "ズピカ",
    "zupika"
  ],
  "bellibolt": [
    "bellibolt",
    "ampibidou",
    "wampitz",
    "ハラバリー",
    "harabarii",
    "harabari"
  ],
  "wattrel": [
    "wattrel",
    "zapétrel",
    "voltrel",
    "カイデン",
    "kaiden"
  ],
  "kilowattrel": [
    "kilowattrel",
    "fulgulairo",
    "voltrean",
    "タイカイデン",
    "taikaiden"
  ],
  "maschiff": [
    "maschiff",
    "grondogue",
    "mobtiff",
    "オラチフ",
    "orachifu"
  ],
  "mabosstiff": [
    "mabosstiff",
    "dogrino",
    "mastifioso",
    "マフィティフ",
    "mafyiteifu"
  ],
  "shroodle": [
    "shroodle",
    "gribouraigne",
    "sproxi",
    "シルシュルー",
    "shirushuruu",
    "shirushuru"
  ],
  "grafaiai": [
    "grafaiai",
    "tag-tag",
    "affiti",
    "タギングル",
    "taginguru"
  ],
  "bramblin": [
    "bramblin",
    "virovent",
    "weherba",
    "アノクサ",
    "anokusa"
  ],
  "brambleghast": [
    "brambleghast",
    "virevorreur",
    "horrerba",
    "アノホラグサ",
    "anohoragusa"
  ],
  "toedscool": [
    "toedscool",
    "terracool",
    "tentagra",
    "ノノクラゲ",
    "nonokurage"
  ],
  "toedscruel": [
    "toedscruel",
    "terracruel",
    "tenterra",
    "リククラゲ",
    "rikukurage"
  ],
  "klawf": [
    "klawf",
    "craparoi",
    "klibbe",
    "ガケガニ",
    "gakegani"
  ],
  "capsakid": [
    "capsakid",
    "pimito",
    "chilingel",
    "カプサイジ",
    "kapusaiji"
  ],
  "scovillain": [
    "scovillain",
    "scovilain",
    "halupenjo",
    "スコヴィラン",
    "sukovyiran"
  ],
  "rellor": [
    "rellor",
    "léboulérou",
    "relluk",
    "シガロコ",
    "shigaroko"
  ],
  "rabsca": [
    "rabsca",
    "bérasca",
    "skarabaks",
    "ベラカス",
    "berakasu"
  ],
  "flittle": [
    "flittle",
    "flotillon",
    "flattutu",
    "ヒラヒナ",
    "hirahina"
  ],
  "espathra": [
    "espathra",
    "cléopsytra",
    "psiopatra",
    "クエスパトラ",
    "kuesupatora"
  ],
  "tinkatink": [
    "tinkatink",
    "forgerette",
    "forgita",
    "カヌチャン",
    "kanuchan"
  ],
  "tinkatuff": [
    "tinkatuff",
    "forgella",
    "tafforgita",
    "ナカヌチャン",
    "nakanuchan"
  ],
  "tinkaton": [
    "tinkaton",
    "forgelina",
    "granforgita",
    "デカヌチャン",
    "dekanuchan"
  ],
  "wiglett": [
    "wiglett",
    "taupikeau",
    "schligda",
    "ウミディグダ",
    "umideiguda"
  ],
  "wugtrio": [
    "wugtrio",
    "triopikeau",
    "schligdri",
    "ウミトリオ",
    "umitorio"
  ],
  "bombirdier": [
    "bombirdier",
    "lestombaile",
    "adebom",
    "オトシドリ",
    "otoshidori"
  ],
  "finizen": [
    "finizen",
    "dofin",
    "normifin",
    "ナミイルカ",
    "namiiruka"
  ],
  "palafin": [
    "palafin",
    "superdofin",
    "delfinator",
    "イルカマン",
    "irukaman"
  ],
  "varoom": [
    "varoom",
    "vrombi",
    "knattox",
    "ブロロン",
    "buroron"
  ],
  "revavroom": [
    "revavroom",
    "vrombotor",
    "knattatox",
    "ブロロローム",
    "burororoomu"
  ],
  "cyclizar": [
    "cyclizar",
    "motorizard",
    "mopex",
    "モトトカゲ",
    "mototokage"
  ],
  "orthworm": [
    "orthworm",
    "ferdeter",
    "schlurm",
    "ミミズズ",
    "mimizuzu"
  ],
  "glimmet": [
    "glimmet",
    "germéclat",
    "lumispross",
    "キラーメ",
    "kiraame"
  ],
  "glimmora": [
    "glimmora",
    "floréclat",
    "lumiflora",
    "キラフロル",
    "kirafuroru"
  ],
  "greavard": [
    "greavard",
    "toutombe",
    "gruff",
    "ボチ",
    "bochi"
  ],
  "houndstone": [
    "houndstone",
    "tomberro",
    "friedwuff",
    "ハカドッグ",
    "hakadoggu"
  ],
  "flamigo": [
    "flamigo",
    "flamenroule",
    "flaminkno",
    "カラミンゴ",
    "karamingo"
  ],
  "cetoddle": [
    "cetoddle",
    "piétacé",
    "flaniwal",
    "アルクジラ",
    "arukujira"
  ],
  "cetitan": [
    "cetitan",
    "balbalèze",
    "kolowal",
    "ハルクジラ",
    "harukujira"
  ],
  "veluza": [
    "veluza",
    "délestin",
    "agiluza",
    "ミガルーサ",
    "migaruusa"
  ],
  "dondozo": [
    "dondozo",
    "oyacata",
    "heerashai",
    "ヘイラッシャ",
    "heirassha"
  ],
  "tatsugiri": [
    "tatsugiri",
    "nigirigon",
    "nigiragi",
    "シャリタツ",
    "sharitatsu"
  ],
  "annihilape": [
    "annihilape",
    "courrousinge",
    "epitaff",
    "コノヨザル",
    "konoyozaru"
  ],
  "clodsire": [
    "clodsire",
    "terraiste",
    "suelord",
    "ドオー",
    "dooo"
  ],
  "farigiraf": [
    "farigiraf",
    "リキキリン",
    "rikikirin"
  ],
  "dudunsparce": [
    "dudunsparce",
    "deusolourdo",
    "dummimisel",
    "ノココッチ",
    "nokokotchi"
  ],
  "kingambit": [
    "kingambit",
    "scalpereur",
    "gladimperio",
    "ドドゲザン",
    "dodogezan"
  ],
  "great-tusk": [
    "great-tusk",
    "fort-ivoire",
    "riesenzahn",
    "great tusk",
    "イダイナキバ",
    "idainakiba"
  ],
  "scream-tail": [
    "scream-tail",
    "hurle-queue",
    "brüllschweif",
    "scream tail",
    "サケブシッポ",
    "sakebushippo"
  ],
  "brute-bonnet": [
    "brute-bonnet",
    "fongus-furie",
    "wutpilz",
    "brute bonnet",
    "アラブルタケ",
    "araburutake"
  ],
  "flutter-mane": [
    "flutter-mane",
    "flotte-mèche",
    "flatterhaar",
    "flutter mane",
    "ハバタクカミ",
    "habatakukami"
  ],
  "slither-wing": [
    "slither-wing",
    "rampe-ailes",
    "kriechflügel",
    "slither wing",
    "チヲハウハネ",
    "chiwohauhane"
  ],
  "sandy-shocks": [
    "sandy-shocks",
    "pelage-sablé",
    "sandfell",
    "sandy shocks",
    "スナノケガワ",
    "sunanokegawa"
  ],
  "iron-treads": [
    "iron-treads",
    "roue-de-fer",
    "eisenrad",
    "iron treads",
    "テツノワダチ",
    "tetsunowadachi"
  ],
  "iron-bundle": [
    "iron-bundle",
    "hotte-de-fer",
    "eisenbündel",
    "iron bundle",
    "テツノツツミ",
    "tetsunotsutsumi"
  ],
  "iron-hands": [
    "iron-hands",
    "paume-de-fer",
    "eisenhand",
    "iron hands",
    "テツノカイナ",
    "tetsunokaina"
  ],
  "iron-jugulis": [
    "iron-jugulis",
    "têtes-de-fer",
    "eisenhals",
    "iron jugulis",
    "テツノコウベ",
    "tetsunokoube"
  ],
  "iron-moth": [
    "iron-moth",
    "mite-de-fer",
    "eisenfalter",
    "iron moth",
    "テツノドクガ",
    "tetsunodokuga"
  ],
  "iron-thorns": [
    "iron-thorns",
    "épine-de-fer",
    "eisendorn",
    "iron thorns",
    "テツノイバラ",
    "tetsunoibara"
  ],
  "frigibax": [
    "frigibax",
    "frigodo",
    "frospino",
    "セビエ",
    "sebie"
  ],
  "arctibax": [
    "arctibax",
    "cryodo",
    "cryospino",
    "セゴール",
    "segooru"
  ],
  "baxcalibur": [
    "baxcalibur",
    "glaivodo",
    "espinodon",
    "セグレイブ",
    "segureibu"
  ],
  "gimmighoul": [
    "gimmighoul",
    "mordudor",
    "gierspenst",
    "コレクレー",
    "korekuree",
    "korekure"
  ],
  "gholdengo": [
    "gholdengo",
    "gromago",
    "monetigo",
    "サーフゴー",
    "saafugoo"
  ],
  "wo-chien": [
    "wo-chien",
    "chongjian",
    "チオンジェン",
    "chionjen"
  ],
  "chien-pao": [
    "chien-pao",
    "baojian",
    "パオジアン",
    "paojian"
  ],
  "ting-lu": [
    "ting-lu",
    "dinglu",
    "ディンルー",
    "deinruu",
    "deinru"
  ],
  "chi-yu": [
    "chi-yu",
    "yuyu",
    "イーユイ",
    "iiyui"
  ],
  "roaring-moon": [
    "roaring-moon",
    "rugit-lune",
    "donnersichel",
    "roaring moon",
    "トドロクツキ",
    "todorokutsuki"
  ],
  "iron-valiant": [
    "iron-valiant",
    "garde-de-fer",
    "eisenkrieger",
    "iron valiant",
    "テツノブジン",
    "tetsunobujin"
  ],
  "koraidon": [
    "koraidon",
    "コライドン"
  ],
  "miraidon": [
    "miraidon",
    "ミライドン"
  ],
  "walking-wake": [
    "walking-wake",
    "serpente-eau",
    "windewoge",
    "walking wake",
    "ウネルミナモ",
    "uneruminamo"
  ],
  "iron-leaves": [
    "iron-leaves",
    "vert-de-fer",
    "eisenblatt",
    "iron leaves",
    "テツノイサハ",
    "tetsunoisaha"
  ],
  "dipplin": [
    "dipplin",
    "pomdramour",
    "sirapfel",
    "カミッチュ",
    "kamitchu"
  ],
  "poltchageist": [
    "poltchageist",
    "mortcha",
    "チャデス",
    "chadesu"
  ],
  "sinistcha": [
    "sinistcha",
    "théffroyable",
    "fatalitcha",
    "ヤバソチャ",
    "yabasocha"
  ],
  "okidogi": [
    "okidogi",
    "félicanis",
    "boninu",
    "イイネイヌ",
    "iineinu"
  ],
  "munkidori": [
    "munkidori",
    "fortusimia",
    "benesaru",
    "マシマシラ",
    "mashimashira"
  ],
  "fezandipiti": [
    "fezandipiti",
    "favianos",
    "beatori",
    "キチキギス",
    "kichikigisu"
  ],
  "ogerpon": [
    "ogerpon",
    "オーガポン",
    "oogapon"
  ],
  "archaludon": [
    "archaludon",
    "pondralugon",
    "briduradon",
    "ブリジュラス",
    "burijurasu"
  ],
  "hydrapple": [
    "hydrapple",
    "pomdorochi",
    "hydrapfel",
    "カミツオロチ",
    "kamitsuorochi"
  ],
  "gouging-fire": [
    "gouging-fire",
    "feu-perçant",
    "keilflamme",
    "gouging fire",
    "ウガツホムラ",
    "ugatsuhomura"
  ],
  "raging-bolt": [
    "raging-bolt",
    "ire-foudre",
    "furienblitz",
    "raging bolt",
    "タケルライコ",
    "takeruraiko"
  ],
  "iron-boulder": [
    "iron-boulder",
    "roc-de-fer",
    "eisenfels",
    "iron boulder",
    "テツノイワオ",
    "tetsunoiwao"
  ],
  "iron-crown": [
    "iron-crown",
    "chef-de-fer",
    "eisenhaupt",
    "iron crown",
    "テツノカシラ",
    "tetsunokashira"
  ],
  "terapagos": [
    "terapagos",
    "テラパゴス",
    "terapagosu"
  ],
  "pecharunt": [
    "pecharunt",
    "pêchaminus",
    "infamomo",
    "モモワロウ",
    "momowarou",
    "momowaro"
  ],
  "deoxys-normal": [
    "deoxys-normal"
  ],
  "wormadam-plant": [
    "wormadam-plant"
  ],
  "shaymin-land": [
    "shaymin-land"
  ],
  "basculin-red-striped": [
    "basculin-red-striped"
  ],
  "frillish-male": [
    "frillish-male"
  ],
  "jellicent-male": [
    "jellicent-male"
  ],
  "meloetta-aria": [
    "meloetta-aria"
  ],
  "pyroar-male": [
    "pyroar-male"
  ],
  "meowstic-male": [
    "meowstic-male"
  ],
  "aegislash-shield": [
    "aegislash-shield"
  ],
  "pumpkaboo-average": [
    "pumpkaboo-average"
  ],
  "gourgeist-average": [
    "gourgeist-average"
  ],
  "zygarde-50": [
    "zygarde-50"
  ],
  "oricorio-baile": [
    "oricorio-baile"
  ],
  "lycanroc-midday": [
    "lycanroc-midday"
  ],
  "wishiwashi-solo": [
    "wishiwashi-solo"
  ],
  "minior-red-meteor": [
    "minior-red-meteor"
  ],
  "mimikyu-disguised": [
    "mimikyu-disguised"
  ],
  "toxtricity-amped": [
    "toxtricity-amped"
  ],
  "eiscue-ice": [
    "eiscue-ice"
  ],
  "indeedee-male": [
    "indeedee-male"
  ],
  "morpeko-full-belly": [
    "morpeko-full-belly"
  ],
  "urshifu-single-strike": [
    "urshifu-single-strike"
  ],
  "basculegion-male": [
    "basculegion-male"
  ],
  "oinkologne-male": [
    "oinkologne-male"
  ],
  "maushold-family-of-four": [
    "maushold-family-of-four"
  ],
  "squawkabilly-green-plumage": [
    "squawkabilly-green-plumage"
  ],
  "palafin-zero": [
    "palafin-zero"
  ],
  "tatsugiri-curly": [
    "tatsugiri-curly"
  ],
  "dudunsparce-two-segment": [
    "dudunsparce-two-segment"
  ],
  "deoxys-attack": [
    "deoxys-attack"
  ],
  "deoxys-defense": [
    "deoxys-defense"
  ],
  "deoxys-speed": [
    "deoxys-speed"
  ],
  "wormadam-sandy": [
    "wormadam-sandy"
  ],
  "wormadam-trash": [
    "wormadam-trash"
  ],
  "shaymin-sky": [
    "shaymin-sky"
  ],
  "giratina-origin": [
    "giratina-origin"
  ],
  "rotom-heat": [
    "rotom-heat"
  ],
  "rotom-wash": [
    "rotom-wash"
  ],
  "rotom-frost": [
    "rotom-frost"
  ],
  "rotom-fan": [
    "rotom-fan"
  ],
  "rotom-mow": [
    "rotom-mow"
  ],
  "castform-sunny": [
    "castform-sunny"
  ],
  "castform-rainy": [
    "castform-rainy"
  ],
  "castform-snowy": [
    "castform-snowy"
  ],
  "basculin-blue-striped": [
    "basculin-blue-striped"
  ],
  "darmanitan-zen": [
    "darmanitan-zen"
  ],
  "meloetta-pirouette": [
    "meloetta-pirouette"
  ],
  "tornadus-therian": [
    "tornadus-therian"
  ],
  "thundurus-therian": [
    "thundurus-therian"
  ],
  "landorus-therian": [
    "landorus-therian"
  ],
  "kyurem-black": [
    "kyurem-black"
  ],
  "kyurem-white": [
    "kyurem-white"
  ],
  "keldeo-resolute": [
    "keldeo-resolute"
  ],
  "meowstic-female": [
    "meowstic-female"
  ],
  "aegislash-blade": [
    "aegislash-blade"
  ],
  "pumpkaboo-small": [
    "pumpkaboo-small"
  ],
  "pumpkaboo-large": [
    "pumpkaboo-large"
  ],
  "pumpkaboo-super": [
    "pumpkaboo-super"
  ],
  "gourgeist-small": [
    "gourgeist-small"
  ],
  "gourgeist-large": [
    "gourgeist-large"
  ],
  "gourgeist-super": [
    "gourgeist-super"
  ],
  "venusaur-mega": [
    "venusaur-mega"
  ],
  "charizard-mega-x": [
    "charizard-mega-x"
  ],
  "charizard-mega-y": [
    "charizard-mega-y"
  ],
  "blastoise-mega": [
    "blastoise-mega"
  ],
  "alakazam-mega": [
    "alakazam-mega"
  ],
  "gengar-mega": [
    "gengar-mega"
  ],
  "kangaskhan-mega": [
    "kangaskhan-mega"
  ],
  "pinsir-mega": [
    "pinsir-mega"
  ],
  "gyarados-mega": [
    "gyarados-mega"
  ],
  "aerodactyl-mega": [
    "aerodactyl-mega"
  ],
  "mewtwo-mega-x": [
    "mewtwo-mega-x"
  ],
  "mewtwo-mega-y": [
    "mewtwo-mega-y"
  ],
  "ampharos-mega": [
    "ampharos-mega"
  ],
  "scizor-mega": [
    "scizor-mega"
  ],
  "heracross-mega": [
    "heracross-mega"
  ],
  "houndoom-mega": [
    "houndoom-mega"
  ],
  "tyranitar-mega": [
    "tyranitar-mega"
  ],
  "blaziken-mega": [
    "blaziken-mega"
  ],
  "gardevoir-mega": [
    "gardevoir-mega"
  ],
  "mawile-mega": [
    "mawile-mega"
  ],
  "aggron-mega": [
    "aggron-mega"
  ],
  "medicham-mega": [
    "medicham-mega"
  ],
  "manectric-mega": [
    "manectric-mega"
  ],
  "banette-mega": [
    "banette-mega"
  ],
  "absol-mega": [
    "absol-mega"
  ],
  "garchomp-mega": [
    "garchomp-mega"
  ],
  "lucario-mega": [
    "lucario-mega"
  ],
  "abomasnow-mega": [
    "abomasnow-mega"
  ],
  "floette-eternal": [
    "floette-eternal"
  ],
  "latias-mega": [
    "latias-mega"
  ],
  "latios-mega": [
    "latios-mega"
  ],
  "swampert-mega": [
    "swampert-mega"
  ],
  "sceptile-mega": [
    "sceptile-mega"
  ],
  "sableye-mega": [
    "sableye-mega"
  ],
  "altaria-mega": [
    "altaria-mega"
  ],
  "gallade-mega": [
    "gallade-mega"
  ],
  "audino-mega": [
    "audino-mega"
  ],
  "sharpedo-mega": [
    "sharpedo-mega"
  ],
  "slowbro-mega": [
    "slowbro-mega"
  ],
  "steelix-mega": [
    "steelix-mega"
  ],
  "pidgeot-mega": [
    "pidgeot-mega"
  ],
  "glalie-mega": [
    "glalie-mega"
  ],
  "diancie-mega": [
    "diancie-mega"
  ],
  "metagross-mega": [
    "metagross-mega"
  ],
  "kyogre-primal": [
    "kyogre-primal"
  ],
  "groudon-primal": [
    "groudon-primal"
  ],
  "rayquaza-mega": [
    "rayquaza-mega"
  ],
  "pikachu-rock-star": [
    "pikachu-rock-star"
  ],
  "pikachu-belle": [
    "pikachu-belle"
  ],
  "pikachu-pop-star": [
    "pikachu-pop-star"
  ],
  "pikachu-phd": [
    "pikachu-phd"
  ],
  "pikachu-libre": [
    "pikachu-libre"
  ],
  "pikachu-cosplay": [
    "pikachu-cosplay"
  ],
  "hoopa-unbound": [
    "hoopa-unbound"
  ],
  "camerupt-mega": [
    "camerupt-mega"
  ],
  "lopunny-mega": [
    "lopunny-mega"
  ],
  "salamence-mega": [
    "salamence-mega"
  ],
  "beedrill-mega": [
    "beedrill-mega"
  ],
  "alolan-rattata": [
    "alolan-rattata",
    "rattata-alola"
  ],
  "alolan-raticate": [
    "alolan-raticate",
    "raticate-alola"
  ],
  "alolan-raticate-totem": [
    "alolan-raticate-totem",
    "raticate-totem-alola"
  ],
  "pikachu-original-cap": [
    "pikachu-original-cap"
  ],
  "pikachu-hoenn-cap": [
    "pikachu-hoenn-cap"
  ],
  "pikachu-sinnoh-cap": [
    "pikachu-sinnoh-cap"
  ],
  "pikachu-unova-cap": [
    "pikachu-unova-cap"
  ],
  "pikachu-kalos-cap": [
    "pikachu-kalos-cap"
  ],
  "pikachu-alola-cap": [
    "pikachu-alola-cap"
  ],
  "alolan-raichu": [
    "alolan-raichu",
    "raichu-alola"
  ],
  "alolan-sandshrew": [
    "alolan-sandshrew",
    "sandshrew-alola"
  ],
  "alolan-sandslash": [
    "alolan-sandslash",
    "sandslash-alola"
  ],
  "alolan-vulpix": [
    "alolan-vulpix",
    "vulpix-alola"
  ],
  "alolan-ninetales": [
    "alolan-ninetales",
    "ninetales-alola"
  ],
  "alolan-diglett": [
    "alolan-diglett",
    "diglett-alola"
  ],
  "alolan-dugtrio": [
    "alolan-dugtrio",
    "dugtrio-alola"
  ],
  "alolan-meowth": [
    "alolan-meowth",
    "meowth-alola"
  ],
  "alolan-persian": [
    "alolan-persian",
    "persian-alola"
  ],
  "alolan-geodude": [
    "alolan-geodude",
    "geodude-alola"
  ],
  "alolan-graveler": [
    "alolan-graveler",
    "graveler-alola"
  ],
  "alolan-golem": [
    "alolan-golem",
    "golem-alola"
  ],
  "alolan-grimer": [
    "alolan-grimer",
    "grimer-alola"
  ],
  "alolan-muk": [
    "alolan-muk",
    "muk-alola"
  ],
  "alolan-exeggutor": [
    "alolan-exeggutor",
    "exeggutor-alola"
  ],
  "alolan-marowak": [
    "alolan-marowak",
    "marowak-alola"
  ],
  "greninja-battle-bond": [
    "greninja-battle-bond"
  ],
  "greninja-ash": [
    "greninja-ash"
  ],
  "zygarde-10-power-construct": [
    "zygarde-10-power-construct"
  ],
  "zygarde-50-power-construct": [
    "zygarde-50-power-construct"
  ],
  "zygarde-complete": [
    "zygarde-complete"
  ],
  "gumshoos-totem": [
    "gumshoos-totem"
  ],
  "vikavolt-totem": [
    "vikavolt-totem"
  ],
  "oricorio-pom-pom": [
    "oricorio-pom-pom"
  ],
  "oricorio-pau": [
    "oricorio-pau"
  ],
  "oricorio-sensu": [
    "oricorio-sensu"
  ],
  "lycanroc-midnight": [
    "lycanroc-midnight"
  ],
  "wishiwashi-school": [
    "wishiwashi-school"
  ],
  "lurantis-totem": [
    "lurantis-totem"
  ],
  "salazzle-totem": [
    "salazzle-totem"
  ],
  "minior-orange-meteor": [
    "minior-orange-meteor"
  ],
  "minior-yellow-meteor": [
    "minior-yellow-meteor"
  ],
  "minior-green-meteor": [
    "minior-green-meteor"
  ],
  "minior-blue-meteor": [
    "minior-blue-meteor"
  ],
  "minior-indigo-meteor": [
    "minior-indigo-meteor"
  ],
  "minior-violet-meteor": [
    "minior-violet-meteor"
  ],
  "minior-red": [
    "minior-red"
  ],
  "minior-orange": [
    "minior-orange"
  ],
  "minior-yellow": [
    "minior-yellow"
  ],
  "minior-green": [
    "minior-green"
  ],
  "minior-blue": [
    "minior-blue"
  ],
  "minior-indigo": [
    "minior-indigo"
  ],
  "minior-violet": [
    "minior-violet"
  ],
  "mimikyu-busted": [
    "mimikyu-busted"
  ],
  "mimikyu-totem-disguised": [
    "mimikyu-totem-disguised"
  ],
  "mimikyu-totem-busted": [
    "mimikyu-totem-busted"
  ],
  "kommo-o-totem": [
    "kommo-o-totem"
  ],
  "magearna-original": [
    "magearna-original"
  ],
  "pikachu-partner-cap": [
    "pikachu-partner-cap"
  ],
  "marowak-totem": [
    "marowak-totem"
  ],
  "ribombee-totem": [
    "ribombee-totem"
  ],
  "rockruff-own-tempo": [
    "rockruff-own-tempo"
  ],
  "lycanroc-dusk": [
    "lycanroc-dusk"
  ],
  "araquanid-totem": [
    "araquanid-totem"
  ],
  "togedemaru-totem": [
    "togedemaru-totem"
  ],
  "necrozma-dusk": [
    "necrozma-dusk"
  ],
  "necrozma-dawn": [
    "necrozma-dawn"
  ],
  "necrozma-ultra": [
    "necrozma-ultra"
  ],
  "pikachu-starter": [
    "pikachu-starter"
  ],
  "eevee-starter": [
    "eevee-starter"
  ],
  "pikachu-world-cap": [
    "pikachu-world-cap"
  ],
  "galarian-meowth": [
    "galarian-meowth",
    "meowth-galar"
  ],
  "galarian-ponyta": [
    "galarian-ponyta",
    "ponyta-galar"
  ],
  "galarian-rapidash": [
    "galarian-rapidash",
    "rapidash-galar"
  ],
  "galarian-slowpoke": [
    "galarian-slowpoke",
    "slowpoke-galar"
  ],
  "galarian-slowbro": [
    "galarian-slowbro",
    "slowbro-galar"
  ],
  "galarian-farfetchd": [
    "galarian-farfetchd",
    "farfetchd-galar"
  ],
  "galarian-weezing": [
    "galarian-weezing",
    "weezing-galar"
  ],
  "galarian-mr-mime": [
    "galarian-mr-mime",
    "mr-mime-galar"
  ],
  "galarian-articuno": [
    "galarian-articuno",
    "articuno-galar"
  ],
  "galarian-zapdos": [
    "galarian-zapdos",
    "zapdos-galar"
  ],
  "galarian-moltres": [
    "galarian-moltres",
    "moltres-galar"
  ],
  "galarian-slowking": [
    "galarian-slowking",
    "slowking-galar"
  ],
  "galarian-corsola": [
    "galarian-corsola",
    "corsola-galar"
  ],
  "galarian-zigzagoon": [
    "galarian-zigzagoon",
    "zigzagoon-galar"
  ],
  "galarian-linoone": [
    "galarian-linoone",
    "linoone-galar"
  ],
  "galarian-darumaka": [
    "galarian-darumaka",
    "darumaka-galar"
  ],
  "darmanitan-galar": [
    "darmanitan-galar",
    "darmanitan-galar-standard"
  ],
  "darmanitan-galar-zen": [
    "darmanitan-galar-zen"
  ],
  "galarian-yamask": [
    "galarian-yamask",
    "yamask-galar"
  ],
  "galarian-stunfisk": [
    "galarian-stunfisk",
    "stunfisk-galar"
  ],
  "zygarde-10": [
    "zygarde-10"
  ],
  "cramorant-gulping": [
    "cramorant-gulping"
  ],
  "cramorant-gorging": [
    "cramorant-gorging"
  ],
  "toxtricity-low-key": [
    "toxtricity-low-key"
  ],
  "eiscue-noice": [
    "eiscue-noice"
  ],
  "indeedee-female": [
    "indeedee-female"
  ],
  "morpeko-hangry": [
    "morpeko-hangry"
  ],
  "zacian-crowned": [
    "zacian-crowned"
  ],
  "zamazenta-crowned": [
    "zamazenta-crowned"
  ],
  "eternatus-eternamax": [
    "eternatus-eternamax"
  ],
  "urshifu-rapid-strike": [
    "urshifu-rapid-strike"
  ],
  "zarude-dada": [
    "zarude-dada"
  ],
  "calyrex-ice": [
    "calyrex-ice"
  ],
  "calyrex-shadow": [
    "calyrex-shadow"
  ],
  "venusaur-gmax": [
    "venusaur-gmax"
  ],
  "charizard-gmax": [
    "charizard-gmax"
  ],
  "blastoise-gmax": [
    "blastoise-gmax"
  ],
  "butterfree-gmax": [
    "butterfree-gmax"
  ],
  "pikachu-gmax": [
    "pikachu-gmax"
  ],
  "meowth-gmax": [
    "meowth-gmax"
  ],
  "machamp-gmax": [
    "machamp-gmax"
  ],
  "gengar-gmax": [
    "gengar-gmax"
  ],
  "kingler-gmax": [
    "kingler-gmax"
  ],
  "lapras-gmax": [
    "lapras-gmax"
  ],
  "eevee-gmax": [
    "eevee-gmax"
  ],
  "snorlax-gmax": [
    "snorlax-gmax"
  ],
  "garbodor-gmax": [
    "garbodor-gmax"
  ],
  "melmetal-gmax": [
    "melmetal-gmax"
  ],
  "rillaboom-gmax": [
    "rillaboom-gmax"
  ],
  "cinderace-gmax": [
    "cinderace-gmax"
  ],
  "inteleon-gmax": [
    "inteleon-gmax"
  ],
  "corviknight-gmax": [
    "corviknight-gmax"
  ],
  "orbeetle-gmax": [
    "orbeetle-gmax"
  ],
  "drednaw-gmax": [
    "drednaw-gmax"
  ],
  "coalossal-gmax": [
    "coalossal-gmax"
  ],
  "flapple-gmax": [
    "flapple-gmax"
  ],
  "appletun-gmax": [
    "appletun-gmax"
  ],
  "sandaconda-gmax": [
    "sandaconda-gmax"
  ],
  "toxtricity-amped-gmax": [
    "toxtricity-amped-gmax"
  ],
  "centiskorch-gmax": [
    "centiskorch-gmax"
  ],
  "hatterene-gmax": [
    "hatterene-gmax"
  ],
  "grimmsnarl-gmax": [
    "grimmsnarl-gmax"
  ],
  "alcremie-gmax": [
    "alcremie-gmax"
  ],
  "copperajah-gmax": [
    "copperajah-gmax"
  ],
  "duraludon-gmax": [
    "duraludon-gmax"
  ],
  "urshifu-single-strike-gmax": [
    "urshifu-single-strike-gmax"
  ],
  "urshifu-rapid-strike-gmax": [
    "urshifu-rapid-strike-gmax"
  ],
  "toxtricity-low-key-gmax": [
    "toxtricity-low-key-gmax"
  ],
  "hisuian-growlithe": [
    "hisuian-growlithe",
    "growlithe-hisui"
  ],
  "hisuian-arcanine": [
    "hisuian-arcanine",
    "arcanine-hisui"
  ],
  "hisuian-voltorb": [
    "hisuian-voltorb",
    "voltorb-hisui"
  ],
  "hisuian-electrode": [
    "hisuian-electrode",
    "electrode-hisui"
  ],
  "hisuian-typhlosion": [
    "hisuian-typhlosion",
    "typhlosion-hisui"
  ],
  "hisuian-qwilfish": [
    "hisuian-qwilfish",
    "qwilfish-hisui"
  ],
  "hisuian-sneasel": [
    "hisuian-sneasel",
    "sneasel-hisui"
  ],
  "hisuian-samurott": [
    "hisuian-samurott",
    "samurott-hisui"
  ],
  "hisuian-lilligant": [
    "hisuian-lilligant",
    "lilligant-hisui"
  ],
  "hisuian-zorua": [
    "hisuian-zorua",
    "zorua-hisui"
  ],
  "hisuian-zoroark": [
    "hisuian-zoroark",
    "zoroark-hisui"
  ],
  "hisuian-braviary": [
    "hisuian-braviary",
    "braviary-hisui"
  ],
  "hisuian-sliggoo": [
    "hisuian-sliggoo",
    "sliggoo-hisui"
  ],
  "hisuian-goodra": [
    "hisuian-goodra",
    "goodra-hisui"
  ],
  "hisuian-avalugg": [
    "hisuian-avalugg",
    "avalugg-hisui"
  ],
  "hisuian-decidueye": [
    "hisuian-decidueye",
    "decidueye-hisui"
  ],
  "dialga-origin": [
    "dialga-origin"
  ],
  "palkia-origin": [
    "palkia-origin"
  ],
  "basculin-white-striped": [
    "basculin-white-striped"
  ],
  "basculegion-female": [
    "basculegion-female"
  ],
  "enamorus-therian": [
    "enamorus-therian"
  ],
  "tauros-paldea-combat-breed": [
    "tauros-paldea-combat-breed"
  ],
  "tauros-paldea-blaze-breed": [
    "tauros-paldea-blaze-breed"
  ],
  "tauros-paldea-aqua-breed": [
    "tauros-paldea-aqua-breed"
  ],
  "paldean-wooper": [
    "paldean-wooper",
    "wooper-paldea"
  ],
  "oinkologne-female": [
    "oinkologne-female"
  ],
  "dudunsparce-three-segment": [
    "dudunsparce-three-segment"
  ],
  "palafin-hero": [
    "palafin-hero"
  ],
  "maushold-family-of-three": [
    "maushold-family-of-three"
  ],
  "tatsugiri-droopy": [
    "tatsugiri-droopy"
  ],
  "tatsugiri-stretchy": [
    "tatsugiri-stretchy"
  ],
  "squawkabilly-blue-plumage": [
    "squawkabilly-blue-plumage"
  ],
  "squawkabilly-yellow-plumage": [
    "squawkabilly-yellow-plumage"
  ],
  "squawkabilly-white-plumage": [
    "squawkabilly-white-plumage"
  ],
  "gimmighoul-roaming": [
    "gimmighoul-roaming"
  ],
  "koraidon-limited-build": [
    "koraidon-limited-build"
  ],
  "koraidon-sprinting-build": [
    "koraidon-sprinting-build"
  ],
  "koraidon-swimming-build": [
    "koraidon-swimming-build"
  ],
  "koraidon-gliding-build": [
    "koraidon-gliding-build"
  ],
  "miraidon-low-power-mode": [
    "miraidon-low-power-mode"
  ],
  "miraidon-drive-mode": [
    "miraidon-drive-mode"
  ],
  "miraidon-aquatic-mode": [
    "miraidon-aquatic-mode"
  ],
  "miraidon-glide-mode": [
    "miraidon-glide-mode"
  ],
  "ursaluna-bloodmoon": [
    "ursaluna-bloodmoon"
  ],
  "ogerpon-wellspring-mask": [
    "ogerpon-wellspring-mask"
  ],
  "ogerpon-hearthflame-mask": [
    "ogerpon-hearthflame-mask"
  ],
  "ogerpon-cornerstone-mask": [
    "ogerpon-cornerstone-mask"
  ],
  "terapagos-terastal": [
    "terapagos-terastal"
  ],
  "terapagos-stellar": [
    "terapagos-stellar"
  ],
  "clefable-mega": [
    "clefable-mega"
  ],
  "victreebel-mega": [
    "victreebel-mega"
  ],
  "starmie-mega": [
    "starmie-mega"
  ],
  "dragonite-mega": [
    "dragonite-mega"
  ],
  "meganium-mega": [
    "meganium-mega"
  ],
  "feraligatr-mega": [
    "feraligatr-mega"
  ],
  "skarmory-mega": [
    "skarmory-mega"
  ],
  "froslass-mega": [
    "froslass-mega"
  ],
  "emboar-mega": [
    "emboar-mega"
  ],
  "excadrill-mega": [
    "excadrill-mega"
  ],
  "scolipede-mega": [
    "scolipede-mega"
  ],
  "scrafty-mega": [
    "scrafty-mega"
  ],
  "eelektross-mega": [
    "eelektross-mega"
  ],
  "chandelure-mega": [
    "chandelure-mega"
  ],
  "chesnaught-mega": [
    "chesnaught-mega"
  ],
  "delphox-mega": [
    "delphox-mega"
  ],
  "greninja-mega": [
    "greninja-mega"
  ],
  "pyroar-mega": [
    "pyroar-mega"
  ],
  "floette-mega": [
    "floette-mega"
  ],
  "malamar-mega": [
    "malamar-mega"
  ],
  "barbaracle-mega": [
    "barbaracle-mega"
  ],
  "dragalge-mega": [
    "dragalge-mega"
  ],
  "hawlucha-mega": [
    "hawlucha-mega"
  ],
  "zygarde-mega": [
    "zygarde-mega"
  ],
  "drampa-mega": [
    "drampa-mega"
  ],
  "falinks-mega": [
    "falinks-mega"
  ],
  "raichu-mega-x": [
    "raichu-mega-x"
  ],
  "raichu-mega-y": [
    "raichu-mega-y"
  ],
  "chimecho-mega": [
    "chimecho-mega"
  ],
  "absol-mega-z": [
    "absol-mega-z"
  ],
  "staraptor-mega": [
    "staraptor-mega"
  ],
  "garchomp-mega-z": [
    "garchomp-mega-z"
  ],
  "lucario-mega-z": [
    "lucario-mega-z"
  ],
  "heatran-mega": [
    "heatran-mega"
  ],
  "darkrai-mega": [
    "darkrai-mega"
  ],
  "golurk-mega": [
    "golurk-mega"
  ],
  "meowstic-mega": [
    "meowstic-mega"
  ],
  "crabominable-mega": [
    "crabominable-mega"
  ],
  "golisopod-mega": [
    "golisopod-mega"
  ],
  "magearna-mega": [
    "magearna-mega"
  ],
  "magearna-original-mega": [
    "magearna-original-mega"
  ],
  "zeraora-mega": [
    "zeraora-mega"
  ],
  "scovillain-mega": [
    "scovillain-mega"
  ],
  "glimmora-mega": [
    "glimmora-mega"
  ],
  "tatsugiri-curly-mega": [
    "tatsugiri-curly-mega"
  ],
  "tatsugiri-droopy-mega": [
    "tatsugiri-droopy-mega"
  ],
  "tatsugiri-stretchy-mega": [
    "tatsugiri-stretchy-mega"
  ],
  "baxcalibur-mega": [
    "baxcalibur-mega"
  ]
};

module.exports = { POKEMON_ALIAS_GROUPS };
