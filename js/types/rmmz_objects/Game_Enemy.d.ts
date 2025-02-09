declare class Game_Enemy extends Game_Battler {
  constructor(enemyId: number, x: number, y: number);

  // Properties
  _enemyId: number;
  _letter: string;
  _plural: boolean;
  _screenX: number;
  _screenY: number;

  // Initialization
  initialize(enemyId: number, x: number, y: number): void;
  initMembers(): void;
  setup(enemyId: number, x: number, y: number): void;

  // Identification
  isEnemy(): boolean;
  enemyId(): number;
  enemy(): rm.types.Enemy;

  // Units
  friendsUnit(): Game_Troop;
  opponentsUnit(): Game_Party;

  // Index and Battle Membership
  index(): number;
  isBattleMember(): boolean;

  // Trait Handling
  traitObjects(): any[];

  // Parameters
  paramBase(paramId: number): number;
  exp(): number;
  gold(): number;

  // Drop Items
  makeDropItems(): (rm.types.BaseItem)[];
  dropItemRate(): number;
  itemObject(kind: number, dataId: number): rm.types.Item | null;

  // Display and Sprite
  isSpriteVisible(): boolean;
  screenX(): number;
  screenY(): number;
  battlerName(): string;
  battlerHue(): number;
  originalName(): string;
  name(): string;
  isLetterEmpty(): boolean;
  setLetter(letter: string): void;
  setPlural(plural: boolean): void;

  // Performance
  performActionStart(action: Game_Action): void;
  performAction(action: Game_Action): void;
  performActionEnd(): void;
  performDamage(): void;
  performCollapse(): void;

  // Transformation
  transform(enemyId: number): void;

  // Conditions
  meetsCondition(action: rm.types.EnemyAction): boolean;
  meetsTurnCondition(param1: number, param2: number): boolean;
  meetsHpCondition(param1: number, param2: number): boolean;
  meetsMpCondition(param1: number, param2: number): boolean;
  meetsStateCondition(param: number): boolean;
  meetsPartyLevelCondition(param: number): boolean;
  meetsSwitchCondition(param: number): boolean;

  // Action Validation
  isActionValid(action: rm.types.EnemyAction): boolean;

  // Action Selection
  selectAction(actionList: rm.types.EnemyAction[], ratingZero: number): rm.types.EnemyAction | null;
  selectAllActions(actionList: rm.types.EnemyAction[]): void;

  // Actions
  makeActions(): void;
}
