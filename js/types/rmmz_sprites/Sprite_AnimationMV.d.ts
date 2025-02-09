declare class Sprite_AnimationMV extends Sprite {
  protected _targets: Sprite[];
  protected _animation: Animation | null;
  protected _mirror: boolean;
  protected _delay: number;
  protected _rate: number;
  protected _duration: number;
  protected _flashColor: [number, number, number, number];
  protected _flashDuration: number;
  protected _screenFlashDuration: number;
  protected _hidingDuration: number;
  protected _hue1: number;
  protected _hue2: number;
  protected _bitmap1: Bitmap | null;
  protected _bitmap2: Bitmap | null;
  protected _cellSprites: Sprite[];
  protected _screenFlashSprite: ScreenSprite | null;

  constructor();

  initialize(): void;

  initMembers(): void;

  setup(targets: Sprite[], animation: Animation, mirror: boolean, delay: number): void;

  setupRate(): void;

  setupDuration(): void;

  update(): void;

  updateMain(): void;

  updateFlash(): void;

  updateScreenFlash(): void;

  updateHiding(): void;

  absoluteX(): number;

  absoluteY(): number;

  isPlaying(): boolean;

  loadBitmaps(): void;

  isReady(): boolean;

  createCellSprites(): void;

  createScreenFlashSprite(): void;

  updatePosition(): void;

  updateFrame(): void;

  currentFrameIndex(): number;

  updateAllCellSprites(frame: number[][]): void;

  updateCellSprite(sprite: Sprite, cell: number[]): void;

  processTimingData(timing: AnimationTiming): void;

  startFlash(color: [number, number, number, number], duration: number): void;

  startScreenFlash(color: [number, number, number, number], duration: number): void;

  startHiding(duration: number): void;

  onEnd(): void;
}
