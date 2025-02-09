// Scene_Splash.d.ts

declare class Scene_Splash extends Scene_Base {
  protected _backSprite: Sprite | null;
  protected _waitCount: number;

  constructor();

  initialize(): void;
  create(): void;
  start(): void;
  update(): void;
  stop(): void;

  protected createBackground(): void;
  protected adjustBackground(): void;

  protected isEnabled(): boolean;
  protected initWaitCount(): void;
  protected updateWaitCount(): boolean;

  protected checkSkip(): void;
  protected gotoTitle(): void;
}
