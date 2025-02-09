declare class Game_Troop extends Game_Unit {
  // Static Constants
  static LETTER_TABLE_HALF: string[];
  static LETTER_TABLE_FULL: string[];

  // Properties
  protected _interpreter: Game_Interpreter;
  protected _troopId: number;
  protected _eventFlags: Record<number, boolean>;
  protected _enemies: Game_Enemy[];
  protected _turnCount: number;
  protected _namesCount: Record<string, number>;

  // Initialization
  initialize(): void;
  clear(): void;

  // Battle Events
  isEventRunning(): boolean;
  updateInterpreter(): void;
  setupBattleEvent(): void;
  increaseTurn(): void;

  // Members
  members(): Game_Enemy[];
  troop(): rm.types.Troop;

  // Setup
  setup(troopId: number): void;
  makeUniqueNames(): void;
  updatePluralFlags(): void;

  // Helper Methods
  letterTable(): string[];
  enemyNames(): string[];
  meetsConditions(page: rm.types.EventPage): boolean;

  // Rewards
  expTotal(): number;
  goldTotal(): number;
  goldRate(): number;
  makeDropItems(): rm.types.BaseItem[];

  // Turn Management
  turnCount(): number;
  isTpbTurnEnd(): boolean;
}
