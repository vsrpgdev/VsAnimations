declare class Game_Actor extends Game_Battler {
  constructor(actorId: number);

  // Properties
  readonly level: number;
  _actorId: number;
  _name: string;
  _nickname: string;
  _classId: number;
  _level: number;
  _characterName: string;
  _characterIndex: number;
  _faceName: string;
  _faceIndex: number;
  _battlerName: string;
  _exp: Record<number, number>;
  _skills: number[];
  _equips: Game_Item[];
  _actionInputIndex: number;
  _lastMenuSkill: Game_Item;
  _lastBattleSkill: Game_Item;
  _lastCommandSymbol: string;

  // Initialization
  initialize(actorId: number): void;
  initMembers(): void;
  setup(actorId: number): void;

  // Getters and Setters
  actorId(): number;
  actor(): rm.types.Actor;
  name(): string;
  setName(name: string): void;
  nickname(): string;
  setNickname(nickname: string): void;
  profile(): string;
  setProfile(profile: string): void;
  characterName(): string;
  characterIndex(): number;
  faceName(): string;
  faceIndex(): number;
  battlerName(): string;

  // State Handling
  clearStates(): void;
  eraseState(stateId: number): void;
  resetStateCounts(stateId: number): void;

  // Images and Display
  initImages(): void;
  setCharacterImage(characterName: string, characterIndex: number): void;
  setFaceImage(faceName: string, faceIndex: number): void;
  setBattlerImage(battlerName: string): void;
  isSpriteVisible(): boolean;

  // Experience and Level
  expForLevel(level: number): number;
  initExp(): void;
  currentExp(): number;
  currentLevelExp(): number;
  nextLevelExp(): number;
  nextRequiredExp(): number;
  maxLevel(): number;
  isMaxLevel(): boolean;
  changeExp(exp: number, show: boolean): void;
  levelUp(): void;
  levelDown(): void;
  changeLevel(level: number, show: boolean): void;
  gainExp(exp: number): void;
  finalExpRate(): number;
  benchMembersExpRate(): number;
  shouldDisplayLevelUp(): boolean;

  // Skills
  initSkills(): void;
  skills(): rm.types.Skill[];
  usableSkills(): rm.types.Skill[];
  learnSkill(skillId: number): void;
  forgetSkill(skillId: number): void;
  isLearnedSkill(skillId: number): boolean;
  hasSkill(skillId: number): boolean;
  findNewSkills(lastSkills: rm.types.Skill[]): rm.types.Skill[];

  // Equipment
  initEquips(equips: number[]): void;
  equipSlots(): number[];
  equips(): (rm.types.EquipItem)[];
  weapons(): rm.types.Weapon[];
  armors(): rm.types.Armor[];
  hasWeapon(weapon: rm.types.Weapon): boolean;
  hasArmor(armor: rm.types.Armor): boolean;
  isEquipChangeOk(slotId: number): boolean;
  changeEquip(slotId: number, item: rm.types.EquipItem): void;
  forceChangeEquip(slotId: number, item: rm.types.EquipItem): void;
  tradeItemWithParty(newItem: rm.types.EquipItem, oldItem: rm.types.EquipItem): boolean;
  changeEquipById(etypeId: number, itemId: number): void;
  isEquipped(item: rm.types.EquipItem): boolean;
  discardEquip(item: rm.types.EquipItem): void;
  releaseUnequippableItems(forcing: boolean): void;
  clearEquipments(): void;
  optimizeEquipments(): void;
  bestEquipItem(slotId: number): rm.types.EquipItem;
  calcEquipItemPerformance(item: rm.types.EquipItem): number;

  // Parameters
  paramBase(paramId: number): number;
  paramPlus(paramId: number): number;

  // Attack and Animation
  attackAnimationId1(): number;
  attackAnimationId2(): number;
  bareHandsAnimationId(): number;
  isSkillWtypeOk(skill: rm.types.Skill): boolean;
  isWtypeEquipped(wtypeId: number): boolean;

  // Battle Participation
  friendsUnit(): Game_Party;
  opponentsUnit(): Game_Troop;
  index(): number;
  isBattleMember(): boolean;
  isFormationChangeOk(): boolean;

  // Trait Handling
  traitObjects(): any[];

  // Actions and Commands
  clearActions(): void;
  inputtingAction(): Game_Action;
  selectNextCommand(): boolean;
  selectPreviousCommand(): boolean;
  lastSkill(): rm.types.Skill | null;
  lastMenuSkill(): rm.types.Skill | null;
  setLastMenuSkill(skill: rm.types.Skill): void;
  lastBattleSkill(): rm.types.Skill | null;
  setLastBattleSkill(skill: rm.types.Skill): void;
  lastCommandSymbol(): string;
  setLastCommandSymbol(symbol: string): void;

  // Auto Battle and Confusion
  makeAutoBattleActions(): void;
  makeConfusionActions(): void;
  makeActions(): void;

  // Map Interaction
  onPlayerWalk(): void;
  updateStateSteps(state: rm.types.State): void;
  showAddedStates(): void;
  showRemovedStates(): void;
  stepsForTurn(): number;
  turnEndOnMap(): void;
  checkFloorEffect(): void;
  executeFloorDamage(): void;
  basicFloorDamage(): number;
  maxFloorDamage(): number;
  performMapDamage(): void;

  // Performance
  performActionStart(action: Game_Action): void;
  performAction(action: Game_Action): void;
  performActionEnd(): void;
  performAttack(): void;
  performDamage(): void;
  performEvasion(): void;
  performMagicEvasion(): void;
  performCounter(): void;
  performCollapse(): void;
  performVictory(): void;
  performEscape(): void;

  // Escape Handling
  testEscape(item: rm.types.BaseItem): boolean;
  meetsUsableItemConditions(item: rm.types.BaseItem): boolean;
  onEscapeFailure(): void;
}
