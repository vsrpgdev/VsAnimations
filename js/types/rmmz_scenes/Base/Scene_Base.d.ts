declare class Scene_Base extends Stage 
{
  protected _started: boolean;
  protected _active: boolean;
  protected _fadeSign: number;
  protected _fadeDuration: number;
  protected _fadeWhite: number;
  protected _fadeOpacity: number;
  protected _windowLayer: WindowLayer | null;
  protected _colorFilter: ColorFilter;

  constructor();

  initialize(): void;
  create(): void;
  isActive(): boolean;
  isReady(): boolean;
  start(): void;
  update(): void;
  stop(): void;
  isStarted(): boolean;
  isBusy(): boolean;
  isFading(): boolean;
  terminate(): void;

  createWindowLayer(): void;
  addWindow(window: Window_Base): void;

  startFadeIn(duration?: number, white?: number): void;
  startFadeOut(duration?: number, white?: number): void;

  protected createColorFilter(): void;
  protected updateColorFilter(): void;
  protected updateFade(): void;
  protected updateChildren(): void;

  popScene(): void;
  checkGameover(): void;
  fadeOutAll(): void;

  fadeSpeed(): number;
  slowFadeSpeed(): number;

  scaleSprite(sprite: Sprite): void;
  centerSprite(sprite: Sprite): void;

  isBottomHelpMode(): boolean;
  isBottomButtonMode(): boolean;
  isRightInputMode(): boolean;

  mainCommandWidth(): number;

  buttonAreaTop(): number;
  buttonAreaBottom(): number;
  buttonAreaHeight(): number;
  buttonY(): number;

  calcWindowHeight(numLines: number, selectable: boolean): number;

  requestAutosave(): void;
  protected isAutosaveEnabled(): boolean;
  protected executeAutosave(): void;
  protected onAutosaveSuccess(): void;
  protected onAutosaveFailure(): void;
}
