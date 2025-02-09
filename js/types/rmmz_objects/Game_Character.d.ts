declare class Game_Character extends Game_CharacterBase {
  // Routenbefehls-Konstanten
  static readonly ROUTE_END: number;
  static readonly ROUTE_MOVE_DOWN: number;
  static readonly ROUTE_MOVE_LEFT: number;
  static readonly ROUTE_MOVE_RIGHT: number;
  static readonly ROUTE_MOVE_UP: number;
  static readonly ROUTE_MOVE_LOWER_L: number;
  static readonly ROUTE_MOVE_LOWER_R: number;
  static readonly ROUTE_MOVE_UPPER_L: number;
  static readonly ROUTE_MOVE_UPPER_R: number;
  static readonly ROUTE_MOVE_RANDOM: number;
  static readonly ROUTE_MOVE_TOWARD: number;
  static readonly ROUTE_MOVE_AWAY: number;
  static readonly ROUTE_MOVE_FORWARD: number;
  static readonly ROUTE_MOVE_BACKWARD: number;
  static readonly ROUTE_JUMP: number;
  static readonly ROUTE_WAIT: number;
  static readonly ROUTE_TURN_DOWN: number;
  static readonly ROUTE_TURN_LEFT: number;
  static readonly ROUTE_TURN_RIGHT: number;
  static readonly ROUTE_TURN_UP: number;
  static readonly ROUTE_TURN_90D_R: number;
  static readonly ROUTE_TURN_90D_L: number;
  static readonly ROUTE_TURN_180D: number;
  static readonly ROUTE_TURN_90D_R_L: number;
  static readonly ROUTE_TURN_RANDOM: number;
  static readonly ROUTE_TURN_TOWARD: number;
  static readonly ROUTE_TURN_AWAY: number;
  static readonly ROUTE_SWITCH_ON: number;
  static readonly ROUTE_SWITCH_OFF: number;
  static readonly ROUTE_CHANGE_SPEED: number;
  static readonly ROUTE_CHANGE_FREQ: number;
  static readonly ROUTE_WALK_ANIME_ON: number;
  static readonly ROUTE_WALK_ANIME_OFF: number;
  static readonly ROUTE_STEP_ANIME_ON: number;
  static readonly ROUTE_STEP_ANIME_OFF: number;
  static readonly ROUTE_DIR_FIX_ON: number;
  static readonly ROUTE_DIR_FIX_OFF: number;
  static readonly ROUTE_THROUGH_ON: number;
  static readonly ROUTE_THROUGH_OFF: number;
  static readonly ROUTE_TRANSPARENT_ON: number;
  static readonly ROUTE_TRANSPARENT_OFF: number;
  static readonly ROUTE_CHANGE_IMAGE: number;
  static readonly ROUTE_CHANGE_OPACITY: number;
  static readonly ROUTE_CHANGE_BLEND_MODE: number;
  static readonly ROUTE_PLAY_SE: number;
  static readonly ROUTE_SCRIPT: number;

  // Eigenschaften
  protected _moveRouteForcing: boolean;
  protected _moveRoute: MoveRoute | null;
  protected _moveRouteIndex: number;
  protected _originalMoveRoute: MoveRoute | null;
  protected _originalMoveRouteIndex: number;
  protected _waitCount: number;

  constructor();

  initialize(): void;
  initMembers(): void;

  memorizeMoveRoute(): void;
  restoreMoveRoute(): void;
  isMoveRouteForcing(): boolean;

  setMoveRoute(moveRoute: MoveRoute): void;
  forceMoveRoute(moveRoute: MoveRoute): void;

  updateStop(): void;
  updateRoutineMove(): void;
  processMoveCommand(command: MoveCommand): void;

  deltaXFrom(x: number): number;
  deltaYFrom(y: number): number;

  moveRandom(): void;
  moveTowardCharacter(character: Game_CharacterBase): void;
  moveAwayFromCharacter(character: Game_CharacterBase): void;

  turnTowardCharacter(character: Game_CharacterBase): void;
  turnAwayFromCharacter(character: Game_CharacterBase): void;

  turnTowardPlayer(): void;
  turnAwayFromPlayer(): void;
  moveTowardPlayer(): void;
  moveAwayFromPlayer(): void;
  moveForward(): void;
  moveBackward(): void;

  processRouteEnd(): void;
  advanceMoveRouteIndex(): void;

  turnRight90(): void;
  turnLeft90(): void;
  turn180(): void;
  turnRightOrLeft90(): void;
  turnRandom(): void;

  swap(character: Game_CharacterBase): void;
  findDirectionTo(goalX: number, goalY: number): number;

  searchLimit(): number;
}

// Zusätzliche Typen für MoveRoute und MoveCommand
declare interface MoveRoute {
  list: MoveCommand[];
  repeat: boolean;
  skippable: boolean;
  wait: boolean;
}

declare interface MoveCommand {
  code: number;
  parameters: any[];
}
