declare class Game_Screen {
  private _brightness: number;
  private _fadeOutDuration: number;
  private _fadeInDuration: number;
  private _tone: number[];
  private _toneTarget: number[];
  private _toneDuration: number;
  private _flashColor: number[];
  private _flashDuration: number;
  private _shakePower: number;
  private _shakeSpeed: number;
  private _shakeDuration: number;
  private _shakeDirection: number;
  private _shake: number;
  private _zoomX: number;
  private _zoomY: number;
  private _zoomScale: number;
  private _zoomScaleTarget: number;
  private _zoomDuration: number;
  private _weatherType: string;
  private _weatherPower: number;
  private _weatherPowerTarget: number;
  private _weatherDuration: number;
  private _pictures: (Game_Picture | null)[];

  constructor();

  initialize(): void;
  clear(): void;
  onBattleStart(): void;

  brightness(): number;
  tone(): number[];
  flashColor(): number[];
  shake(): number;
  zoomX(): number;
  zoomY(): number;
  zoomScale(): number;
  weatherType(): string;
  weatherPower(): number;

  picture(pictureId: number): Game_Picture | null;
  realPictureId(pictureId: number): number;

  clearFade(): void;
  clearTone(): void;
  clearFlash(): void;
  clearShake(): void;
  clearZoom(): void;
  clearWeather(): void;
  clearPictures(): void;
  eraseBattlePictures(): void;

  maxPictures(): number;

  startFadeOut(duration: number): void;
  startFadeIn(duration: number): void;
  startTint(tone: number[], duration: number): void;
  startFlash(color: number[], duration: number): void;
  startShake(power: number, speed: number, duration: number): void;
  startZoom(x: number, y: number, scale: number, duration: number): void;
  setZoom(x: number, y: number, scale: number): void;
  changeWeather(type: string, power: number, duration: number): void;

  update(): void;
  updateFadeOut(): void;
  updateFadeIn(): void;
  updateTone(): void;
  updateFlash(): void;
  updateShake(): void;
  updateZoom(): void;
  updateWeather(): void;
  updatePictures(): void;

  startFlashForDamage(): void;

  showPicture(
    pictureId: number,
    name: string,
    origin: number,
    x: number,
    y: number,
    scaleX: number,
    scaleY: number,
    opacity: number,
    blendMode: number
  ): void;

  movePicture(
    pictureId: number,
    origin: number,
    x: number,
    y: number,
    scaleX: number,
    scaleY: number,
    opacity: number,
    blendMode: number,
    duration: number,
    easingType?: number
  ): void;

  rotatePicture(pictureId: number, speed: number): void;
  tintPicture(pictureId: number, tone: number[], duration: number): void;
  erasePicture(pictureId: number): void;
}
