declare class Game_Unit {
  constructor();

  // Properties
  protected _inBattle: boolean;

  // Initialization
  initialize(): void;

  // Methods
  inBattle(): boolean;
  members(): Game_Battler[]; // Should be overridden in subclasses
  aliveMembers(): Game_Battler[];
  deadMembers(): Game_Battler[];
  movableMembers(): Game_Battler[];
  clearActions(): void;
  agility(): number;
  tgrSum(): number;
  randomTarget(): Game_Battler | null;
  randomDeadTarget(): Game_Battler | null;
  smoothTarget(index: number): Game_Battler;
  smoothDeadTarget(index: number): Game_Battler | null;
  clearResults(): void;
  onBattleStart(advantageous: boolean): void;
  onBattleEnd(): void;
  makeActions(): void;
  select(activeMember: Game_Battler): void;
  isAllDead(): boolean;
  substituteBattler(target: Game_Battler): Game_Battler | null;
  tpbBaseSpeed(): number;
  tpbReferenceTime(): number;
  updateTpb(): void;
}
