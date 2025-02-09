declare class Game_Timer {
  private _frames: number;
  private _working: boolean;

  constructor();

  initialize(): void;

  update(sceneActive: boolean): void;

  start(count: number): void;
  stop(): void;

  isWorking(): boolean;

  seconds(): number;
  frames(): number;

  onExpire(): void;
}
