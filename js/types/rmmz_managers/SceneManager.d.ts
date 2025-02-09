declare class SceneManager {
  private static _scene: Scene_Base | null;
  private static _nextScene: Scene_Base | null;
  private static _stack: (new () => Scene_Base)[];
  private static _exiting: boolean;
  private static _previousScene: Scene_Base | null;
  private static _previousClass: new () => Scene_Base | null;
  private static _backgroundBitmap: Bitmap | null;
  private static _smoothDeltaTime: number;
  private static _elapsedTime: number;

  static run(sceneClass: new () => Scene_Base): void;
  private static initialize(): void;
  private static checkBrowser(): void;
  private static checkPluginErrors(): void;
  private static initGraphics(): void;
  private static initAudio(): void;
  private static initVideo(): void;
  private static initInput(): void;
  private static setupEventHandlers(): void;

  static update(deltaTime: number): void;
  private static determineRepeatNumber(deltaTime: number): number;
  static terminate(): void;

  private static onError(event: ErrorEvent): void;
  private static onReject(event: PromiseRejectionEvent): void;
  private static onUnload(): void;
  private static onKeyDown(event: KeyboardEvent): void;

  private static reloadGame(): void;
  private static showDevTools(): void;

  private static catchException(e: unknown): void;
  private static catchNormalError(e: Error): void;
  private static catchLoadError(e: [string, string, Function]): void;
  private static catchUnknownError(e: unknown): void;

  private static updateMain(): void;
  private static updateFrameCount(): void;
  private static updateInputData(): void;
  private static updateEffekseer(): void;
  private static changeScene(): void;
  private static updateScene(): void;

  private static isGameActive(): boolean;

  private static onSceneTerminate(): void;
  private static onSceneCreate(): void;
  private static onBeforeSceneStart(): void;
  private static onSceneStart(): void;

  private static isSceneChanging(): boolean;
  private static isCurrentSceneBusy(): boolean;

  static isNextScene(sceneClass: new () => Scene_Base): boolean;
  static isPreviousScene(sceneClass: new () => Scene_Base): boolean;

  static goto(sceneClass: new () => Scene_Base): void;
  static push(sceneClass: new () => Scene_Base): void;
  static pop(): void;
  static exit(): void;
  static clearStack(): void;

  static stop(): void;
  static prepareNextScene(...args: unknown[]): void;

  static snap(): Bitmap;
  static snapForBackground(): void;
  static backgroundBitmap(): Bitmap | null;
  static resume(): void;
}