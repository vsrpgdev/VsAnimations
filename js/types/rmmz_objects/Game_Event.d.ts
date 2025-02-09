declare class Game_Event extends Game_Character {
  private _mapId: number;
  private _eventId: number;
  private _moveType: number;
  private _trigger: number;
  private _starting: boolean;
  private _erased: boolean;
  private _pageIndex: number;
  private _originalPattern: number;
  private _originalDirection: number;
  private _prelockDirection: number;
  private _locked: boolean;
  private _interpreter: Game_Interpreter | null;

  constructor(mapId: number, eventId: number);

  initialize(mapId: number, eventId: number): void;

  initMembers(): void;

  eventId(): number;

  event(): RPG.Event;

  page(): RPG.EventPage | undefined;

  list(): RPG.EventCommand[];

  isCollidedWithCharacters(x: number, y: number): boolean;

  isCollidedWithEvents(x: number, y: number): boolean;

  isCollidedWithPlayerCharacters(x: number, y: number): boolean;

  lock(): void;

  unlock(): void;

  updateStop(): void;

  updateSelfMovement(): void;

  stopCountThreshold(): number;

  moveTypeRandom(): void;

  moveTypeTowardPlayer(): void;

  isNearThePlayer(): boolean;

  moveTypeCustom(): void;

  isStarting(): boolean;

  clearStartingFlag(): void;

  isTriggerIn(triggers: number[]): boolean;

  start(): void;

  erase(): void;

  refresh(): void;

  findProperPageIndex(): number;

  meetsConditions(page: rm.types.EventPage): boolean;

  setupPage(): void;

  clearPageSettings(): void;

  setupPageSettings(): void;

  isOriginalPattern(): boolean;

  resetPattern(): void;

  checkEventTriggerTouch(x: number, y: number): void;

  checkEventTriggerAuto(): void;

  update(): void;

  updateParallel(): void;

  locate(x: number, y: number): void;

  forceMoveRoute(moveRoute: rm.types.MoveRoute): void;
}
