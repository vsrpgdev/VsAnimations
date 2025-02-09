declare class Game_Map {
  // Properties
  protected _interpreter: Game_Interpreter;
  protected _mapId: number;
  protected _tilesetId: number;
  protected _events: Game_Event[];
  protected _commonEvents: Game_CommonEvent[];
  protected _vehicles: Game_Vehicle[];
  protected _displayX: number;
  protected _displayY: number;
  protected _nameDisplay: boolean;
  protected _scrollDirection: number;
  protected _scrollRest: number;
  protected _scrollSpeed: number;
  protected _parallaxName: string;
  protected _parallaxZero: boolean;
  protected _parallaxLoopX: boolean;
  protected _parallaxLoopY: boolean;
  protected _parallaxSx: number;
  protected _parallaxSy: number;
  protected _parallaxX: number;
  protected _parallaxY: number;
  protected _battleback1Name: string | null;
  protected _battleback2Name: string | null;
  protected _needsRefresh: boolean;

  // Initialization
  constructor();
  initialize(): void;

  // Setup
  setup(mapId: number): void;
  setupEvents(): void;
  setupScroll(): void;
  setupParallax(): void;
  setupBattleback(): void;

  // Map Data
  mapId(): number;
  tilesetId(): number;
  displayX(): number;
  displayY(): number;
  parallaxName(): string;
  battleback1Name(): string | null;
  battleback2Name(): string | null;

  // Display and Scrolling
  tileWidth(): number;
  tileHeight(): number;
  bushDepth(): number;
  setDisplayPos(x: number, y: number): void;
  parallaxOx(): number;
  parallaxOy(): number;

  // Vehicles
  createVehicles(): void;
  refereshVehicles(): void;
  vehicles(): Game_Vehicle[];
  vehicle(type: number | string): Game_Vehicle | null;
  boat(): Game_Vehicle;
  ship(): Game_Vehicle;
  airship(): Game_Vehicle;

  // Events
  events(): Game_Event[];
  event(eventId: number): Game_Event | undefined;
  eraseEvent(eventId: number): void;

  // Common Events
  autorunCommonEvents(): RPG.DataCommonEvent[];
  parallelCommonEvents(): RPG.DataCommonEvent[];

  // Refresh
  requestRefresh(): void;
  refreshIfNeeded(): void;
  refresh(): void;
  refreshTileEvents(): void;

  // Event Search
  eventsXy(x: number, y: number): Game_Event[];
  eventsXyNt(x: number, y: number): Game_Event[];
  tileEventsXy(x: number, y: number): Game_Event[];
  eventIdXy(x: number, y: number): number;

  // Scrolling
  scrollDown(distance: number): void;
  scrollLeft(distance: number): void;
  scrollRight(distance: number): void;
  scrollUp(distance: number): void;
  startScroll(direction: number, distance: number, speed: number): void;
  isScrolling(): boolean;

  // Movement and Adjustment
  adjustX(x: number): number;
  adjustY(y: number): number;
  roundX(x: number): number;
  roundY(y: number): number;
  xWithDirection(x: number, d: number): number;
  yWithDirection(y: number, d: number): number;
  roundXWithDirection(x: number, d: number): number;
  roundYWithDirection(y: number, d: number): number;
  deltaX(x1: number, x2: number): number;
  deltaY(y1: number, y2: number): number;
  distance(x1: number, y1: number, x2: number, y2: number): number;

  // Tiles and Passability
  tileId(x: number, y: number, z: number): number;
  layeredTiles(x: number, y: number): number[];
  allTiles(x: number, y: number): number[];
  autotileType(x: number, y: number, z: number): number;
  isPassable(x: number, y: number, d: number): boolean;
  isBoatPassable(x: number, y: number): boolean;
  isShipPassable(x: number, y: number): boolean;
  isAirshipLandOk(x: number, y: number): boolean;
  isLadder(x: number, y: number): boolean;
  isBush(x: number, y: number): boolean;
  isCounter(x: number, y: number): boolean;
  isDamageFloor(x: number, y: number): boolean;
  terrainTag(x: number, y: number): number;
  regionId(x: number, y: number): number;

  // Updates
  update(sceneActive: boolean): void;
  updateScroll(): void;
  scrollDistance(): number;
  doScroll(direction: number, distance: number): void;
  updateEvents(): void;
  updateVehicles(): void;
  updateParallax(): void;

  // Tileset and Parallax
  changeTileset(tilesetId: number): void;
  changeBattleback(battleback1Name: string, battleback2Name: string): void;
  changeParallax(
      name: string,
      loopX: boolean,
      loopY: boolean,
      sx: number,
      sy: number
  ): void;

  // Interpreters
  updateInterpreter(): void;
  unlockEvent(eventId: number): void;
  setupStartingEvent(): boolean;
  setupTestEvent(): boolean;
  setupStartingMapEvent(): boolean;
  setupAutorunCommonEvent(): boolean;

  // Conditions
  isAnyEventStarting(): boolean;
  isNameDisplayEnabled(): boolean;
  disableNameDisplay(): void;
  enableNameDisplay(): void;

  // Utilities
  isValid(x: number, y: number): boolean;
  tileset(): rm.types.Tileset | undefined;
  tilesetFlags(): number[];
  displayName(): string | undefined;
  width(): number;
  height(): number;
  data(): number[];
  isLoopHorizontal(): boolean;
  isLoopVertical(): boolean;
  isDashDisabled(): boolean;
  encounterList(): rm.types.MapEncounter[];
  encounterStep(): number;
  isOverworld(): boolean;
  screenTileX(): number;
  screenTileY(): number;
}
