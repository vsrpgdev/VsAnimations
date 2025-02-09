interface Actor {
  id: number;
  battlerName: string;
  characterIndex: number;
  characterName: string;
  classId: number;
  equips: number[];
  faceIndex: number;
  faceName: string;
  traits: Trait[];
  initialLevel: number;
  maxLevel: number;
  name: string;
  nickname: string;
  note: string;
  profile: string;
}

interface Class {
  id: number;
  expParams: number[];
  traits: Trait[];
  learnings: Learning[];
  name: string;
  note: string;
  params: number[][];
}

interface Skill {
  id: number;
  animationId: number;
  damage: Damage;
  description: string;
  effects: Effect[];
  hitType: number;
  iconIndex: number;
  message1: string;
  message2: string;
  mpCost: number;
  name: string;
  note: string;
  occasion: number;
  repeats: number;
  requiredWtypeId1: number;
  requiredWtypeId2: number;
  scope: number;
  speed: number;
  stypeId: number;
  successRate: number;
  tpCost: number;
  tpGain: number;
  messageType: number;
}

interface Item {
  id: number;
  animationId: number;
  consumable: boolean;
  damage: Damage;
  description: string;
  effects: Effect[];
  hitType: number;
  iconIndex: number;
  itypeId: number;
  name: string;
  note: string;
  occasion: number;
  price: number;
  repeats: number;
  scope: number;
  speed: number;
  successRate: number;
  tpGain: number;
}

interface Weapon {
  id: number;
  animationId: number;
  description: string;
  etypeId: number;
  traits: Trait[];
  iconIndex: number;
  name: string;
  note: string;
  params: number[];
  price: number;
  wtypeId: number;
}

interface Armor {
  id: number;
  atypeId: number;
  description: string;
  etypeId: number;
  traits: Trait[];
  iconIndex: number;
  name: string;
  note: string;
  params: number[];
  price: number;
}

interface Enemy {
  id: number;
  actions: Action[];
  battlerHue: number;
  battlerName: string;
  dropItems: DropItem[];
  exp: number;
  traits: Trait[];
  gold: number;
  name: string;
  note: string;
  params: number[];
}

interface Troop {
  id: number;
  members: any[];
  name: string;
  pages: Page[];
}

interface State {
  id: number;
  autoRemovalTiming: number;
  chanceByDamage: number;
  iconIndex: number;
  maxTurns: number;
  message1: string;
  message2: string;
  message3: string;
  message4: string;
  minTurns: number;
  motion: number;
  name: string;
  note: string;
  overlay: number;
  priority: number;
  releaseByDamage: boolean;
  removeAtBattleEnd: boolean;
  removeByDamage: boolean;
  removeByRestriction: boolean;
  removeByWalking: boolean;
  restriction: number;
  stepsToRemove: number;
  traits: Trait[];
  messageType: number;
}

interface Animation {
  id: number;
  displayType: number;
  effectName: string;
  flashTimings: FlashTiming[];
  name: string;
  offsetX: number;
  offsetY: number;
  rotation: Rotation;
  scale: number;
  soundTimings: SoundTiming[];
  speed: number;
  timings: Timing[];
}

interface Tileset {
  id: number;
  flags: number[];
  mode: number;
  name: string;
  note: string;
  tilesetNames: string[];
}

interface CommonEvent {
  id: number;
  list: EventCommand[];
  name: string;
  switchId: number;
  trigger: number;
}

interface System {
  airship: Vehicle;
  armorTypes: string[];
  attackMotions: AttackMotion[];
  battleBgm: AudioFile;
  battleback1Name: string;
  battleback2Name: string;
  battlerHue: number;
  battlerName: string;
  boat: Vehicle;
  currencyUnit: string;
  defeatMe: AudioFile;
  elements: string[];
  equipTypes: string[];
  gameTitle: string;
  gameoverMe: AudioFile;
  locale: string;
  magicSkills: number[];
  menuCommands: boolean[];
  optDisplayTp: boolean;
  optDrawTitle: boolean;
  optExtraExp: boolean;
  optFloorDeath: boolean;
  optFollowers: boolean;
  optSideView: boolean;
  optSlipDeath: boolean;
  optTransparent: boolean;
  partyMembers: number[];
  ship: Vehicle;
  skillTypes: string[];
  sounds: AudioFile[];
  startMapId: number;
  startX: number;
  startY: number;
  switches: string[];
  terms: Terms;
  testBattlers: TestBattler[];
  testTroopId: number;
  title1Name: string;
  title2Name: string;
  titleBgm: AudioFile;
  variables: string[];
  versionId: number;
  victoryMe: AudioFile;
  weaponTypes: string[];
  windowTone: number[];
  advanced: AdvancedSettings;
  battleSystem: number;
  itemCategories: boolean[];
  optAutosave: boolean;
  optKeyItemsNumber: boolean;
  titleCommandWindow: TitleCommandWindow;
  tileSize: number;
  optSplashScreen: boolean;
  optMessageSkip: boolean;
}

//-----------------------------------------------------------------------------
// Subtypes
//-----------------------------------------------------------------------------
interface Trait {
  code: number;
  dataId: number;
  value: number;
}

interface Learning {
  level: number;
  note: string;
  skillId: number;
}

interface Damage {
  critical: boolean;
  elementId: number;
  formula: string;
  type: number;
  variance: number;
}

interface Effect {
  code: number;
  dataId: number;
  value1: number;
  value2: number;
}

interface Action {
  conditionParam1: number;
  conditionParam2: number;
  conditionType: number;
  rating: number;
  skillId: number;
}

interface DropItem {
  dataId: number;
  denominator: number;
  kind: number;
}

interface Page {
  conditions: PageConditions;
  list: EventCommand[];
  span: number;
}

interface PageConditions {
  actorHp: number;
  actorId: number;
  actorValid: boolean;
  enemyHp: number;
  enemyIndex: number;
  enemyValid: boolean;
  switchId: number;
  switchValid: boolean;
  turnA: number;
  turnB: number;
  turnEnding: boolean;
  turnValid: boolean;
}

interface EventCommand {
  code: number;
  indent: number;
  parameters: any[];
}

interface FlashTiming {
  frame: number;
  duration: number;
  color: number[];
}

interface Rotation {
  x: number;
  y: number;
  z: number;
}

interface SoundTiming {
  frame: number;
  se: AudioFile;
}

interface Timing {}

interface Vehicle {
  bgm: AudioFile;
  characterIndex: number;
  characterName: string;
  startMapId: number;
  startX: number;
  startY: number;
}

interface AudioFile {
  name: string;
  pan: number;
  pitch: number;
  volume: number;
}

interface AttackMotion {
  type: number;
  weaponImageId: number;
}

interface Terms {
  basic: string[];
  commands: (string | null)[];
  params: string[];
  messages: Record<string, string>;
}

interface TestBattler {
  actorId: number;
  equips: number[];
  level: number;
}

interface AdvancedSettings {
  gameId: number;
  screenWidth: number;
  screenHeight: number;
  uiAreaWidth: number;
  uiAreaHeight: number;
  mainFontFilename: string;
  numberFontFilename: string;
  fallbackFonts: string;
  fontSize: number;
  screenScale: number;
  windowOpacity: number;
}

interface TitleCommandWindow {
  offsetX: number;
  offsetY: number;
  background: number;
}
interface MapInfo {
  id: number;
  expanded: boolean;
  name: string;
  order: number;
  parentId: number;
  scrollX: number;
  scrollY: number;
}