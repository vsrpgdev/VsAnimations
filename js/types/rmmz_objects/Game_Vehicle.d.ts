declare class Game_Vehicle extends Game_Character {
  private _type: string;
  private _mapId: number;
  private _altitude: number;
  private _driving: boolean;
  private _bgm: rm.types.AudioFile | null;

  constructor(type: string);

  initialize(type: string): void;

  initMembers(): void;

  isBoat(): boolean;

  isShip(): boolean;

  isAirship(): boolean;

  resetDirection(): void;

  initMoveSpeed(): void;

  vehicle(): rm.types.SystemVehicle;

  loadSystemSettings(): void;

  refresh(): void;

  setLocation(mapId: number, x: number, y: number): void;

  pos(x: number, y: number): boolean;

  isMapPassable(x: number, y: number, d: number): boolean;

  getOn(): void;

  getOff(): void;

  setBgm(bgm: rm.types.AudioFile): void;

  playBgm(): void;

  syncWithPlayer(): void;

  screenY(): number;

  shadowX(): number;

  shadowY(): number;

  shadowOpacity(): number;

  canMove(): boolean;

  update(): void;

  updateAirship(): void;

  updateAirshipAltitude(): void;

  maxAltitude(): number;

  isLowest(): boolean;

  isHighest(): boolean;

  isTakeoffOk(): boolean;

  isLandOk(x: number, y: number, d: number): boolean;
}
