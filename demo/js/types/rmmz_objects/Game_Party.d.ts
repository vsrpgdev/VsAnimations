declare class Game_Party extends Game_Unit {
  // Static Constants
  static ABILITY_ENCOUNTER_HALF: number;
  static ABILITY_ENCOUNTER_NONE: number;
  static ABILITY_CANCEL_SURPRISE: number;
  static ABILITY_RAISE_PREEMPTIVE: number;
  static ABILITY_GOLD_DOUBLE: number;
  static ABILITY_DROP_ITEM_DOUBLE: number;

  // Properties
  protected _gold: number;
  protected _steps: number;
  protected _lastItem: Game_Item;
  protected _menuActorId: number;
  protected _targetActorId: number;
  protected _actors: number[];
  protected _items: Record<number, number>;
  protected _weapons: Record<number, number>;
  protected _armors: Record<number, number>;

  // Initialization
  initialize(): void;
  initAllItems(): void;

  // Party Management
  exists(): boolean;
  size(): number;
  isEmpty(): boolean;
  members(): Game_Actor[];
  allMembers(): Game_Actor[];
  battleMembers(): Game_Actor[];
  hiddenBattleMembers(): Game_Actor[];
  allBattleMembers(): Game_Actor[];
  maxBattleMembers(): number;
  leader(): Game_Actor;
  removeInvalidMembers(): void;
  reviveBattleMembers(): void;

  // Inventory Management
  items(): rm.types.Item[];
  weapons(): rm.types.Weapon[];
  armors(): rm.types.Armor[];
  equipItems(): (rm.types.Weapon | rm.types.Armor)[];
  allItems(): (rm.types.Item | rm.types.Weapon | rm.types.Armor)[];
  itemContainer(item: rm.types.Item | rm.types.Weapon | rm.types.Armor): Record<number, number> | null;

  // Setup
  setupStartingMembers(): void;
  name(): string;
  setupBattleTest(): void;
  setupBattleTestMembers(): void;
  setupBattleTestItems(): void;

  // Levels
  highestLevel(): number;

  // Actor Management
  addActor(actorId: number): void;
  removeActor(actorId: number): void;

  // Gold Management
  gold(): number;
  gainGold(amount: number): void;
  loseGold(amount: number): void;
  maxGold(): number;

  // Steps
  steps(): number;
  increaseSteps(): void;

  // Items
  numItems(item: rm.types.Item | rm.types.Weapon | rm.types.Armor): number;
  maxItems(item: rm.types.Item | rm.types.Weapon | rm.types.Armor): number;
  hasMaxItems(item: rm.types.Item | rm.types.Weapon | rm.types.Armor): boolean;
  hasItem(item: rm.types.Item | rm.types.Weapon | rm.types.Armor, includeEquip?: boolean): boolean;
  isAnyMemberEquipped(item: rm.types.Weapon | rm.types.Armor): boolean;
  gainItem(item: rm.types.Item | rm.types.Weapon | rm.types.Armor, amount: number, includeEquip?: boolean): void;
  discardMembersEquip(item: rm.types.Weapon | rm.types.Armor, amount: number): void;
  loseItem(item: rm.types.Item | rm.types.Weapon | rm.types.Armor, amount: number, includeEquip?: boolean): void;
  consumeItem(item: rm.types.Item): void;

  // Item Usage
  canUse(item: rm.types.Item | rm.types.Weapon | rm.types.Armor): boolean;
  canInput(): boolean;

  // States
  removeBattleStates(): void;

  // Escape Handling
  isAllDead(): boolean;
  isEscaped(): boolean;
  onEscapeFailure(): void;

  // Player Interaction
  onPlayerWalk(): void;

  // Menu Actor
  menuActor(): Game_Actor;
  setMenuActor(actor: Game_Actor): void;
  makeMenuActorNext(): void;
  makeMenuActorPrevious(): void;

  // Target Actor
  targetActor(): Game_Actor;
  setTargetActor(actor: Game_Actor): void;

  // Last Item
  lastItem(): rm.types.Item | rm.types.Weapon | rm.types.Armor | null;
  setLastItem(item: rm.types.Item | rm.types.Weapon | rm.types.Armor): void;

  // Party Order
  swapOrder(index1: number, index2: number): void;

  // Save File Data
  charactersForSavefile(): [string, number][];
  facesForSavefile(): [string, number][];

  // Abilities
  partyAbility(abilityId: number): boolean;
  hasEncounterHalf(): boolean;
  hasEncounterNone(): boolean;
  hasCancelSurprise(): boolean;
  hasRaisePreemptive(): boolean;
  hasGoldDouble(): boolean;
  hasDropItemDouble(): boolean;

  // Battle Rates
  ratePreemptive(troopAgi: number): number;
  rateSurprise(troopAgi: number): number;

  // Performance
  performVictory(): void;
  performEscape(): void;

  // Motion
  requestMotionRefresh(): void;
}
