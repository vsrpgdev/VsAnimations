// Graphics.d.ts

declare class Graphics {
  // Methoden
  static initialize(): boolean;
  static setTickHandler(handler: (deltaTime: number) => void): void;
  static startGameLoop(): void;
  static stopGameLoop(): void;
  static setStage(stage: PIXI.Container): void;
  static startLoading(): void;
  static endLoading(): boolean;
  static printError(name: string, message: string, error?: Error): void;
  static showRetryButton(retry: () => void): void;
  static eraseError(): void;
  static pageToCanvasX(x: number): number;
  static pageToCanvasY(y: number): number;
  static isInsideCanvas(x: number, y: number): boolean;
  static showScreen(): void;
  static hideScreen(): void;
  static resize(width: number, height: number): void;

  // Eigenschaften
  static frameCount: number;
  static boxWidth: number;
  static boxHeight: number;

  static width: number;
  static height: number;
  static defaultScale: number;

  static app: PIXI.Application | null;
  static _app: PIXI.Application | null;
  
  static effekseer: EffekseerContext | null;

  // Verschachtelte Klasse
  static FPSCounter: {
    startTick(): void;
    endTick(): void;
    switchMode(): void;
  };

  static _defaultStretchMode():boolean;
  static _updateRealScale():void;
  
  static _createAllElements():void;
  static _disableContextMenu():void;
  static _setupEventHandlers():void;
  static _createPixiApp():void;
  static _createEffekseerContext():void;
  static _updateRealScale():void;
  static _updateRealScale():void;
  static _updateRealScale():void;

  static _loadingSpinner : HTMLDivElement;
  static _errorPrinter : HTMLDivElement;
}
