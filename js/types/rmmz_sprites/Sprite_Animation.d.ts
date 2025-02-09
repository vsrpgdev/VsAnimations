declare class Sprite_Animation extends Sprite {
  protected _targets: Sprite[];
  protected _animation: Animation | null;
  protected _mirror: boolean;
  protected _delay: number;
  protected _previous: Sprite_Animation | null;
  protected _effect: any; // Effect handle, specific type depends on implementation
  protected _handle: any; // Effekseer handle
  protected _playing: boolean;
  protected _started: boolean;
  protected _frameIndex: number;
  protected _maxTimingFrames: number;
  protected _flashColor: [number, number, number, number];
  protected _flashDuration: number;
  protected _viewportSize: number;

  constructor();

  initialize(): void;

  initMembers(): void;

  destroy(options?: { children?: boolean }): void;

  setup(
      targets: Sprite[],
      animation: Animation,
      mirror: boolean,
      delay: number,
      previous: Sprite_Animation | null
  ): void;

  update(): void;

  canStart(): boolean;

  shouldWaitForPrevious(): boolean;

  updateEffectGeometry(): void;

  updateMain(): void;

  processSoundTimings(): void;

  processFlashTimings(): void;

  checkEnd(): void;

  updateFlash(): void;

  isPlaying(): boolean;

  setRotation(x: number, y: number, z: number): void;

  _render(renderer: any): void;

  setProjectionMatrix(renderer: any): void;

  setCameraMatrix(): void;

  setViewport(renderer: any): void;

  targetPosition(renderer: any): Point;

  targetSpritePosition(sprite: Sprite): Point;

  resetViewport(renderer: any): void;

  onBeforeRender(renderer: any): void;

  onAfterRender(renderer: any): void;
}
