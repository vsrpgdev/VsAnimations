declare interface Window extends PIXI.Container {

  constructor();
  initialize() : void;

  // Properties
  windowskin: Bitmap;
  contents: Bitmap;
  contentsBack: Bitmap;
  width: number;
  height: number;
  padding: number;
  margin: number;
  opacity: number;
  backOpacity: number;
  contentsOpacity: number;
  openness: number;
  readonly innerWidth: number;
  readonly innerHeight: number;
  readonly innerRect: Rectangle;
  active: boolean;
  frameVisible: boolean;
  cursorVisible: boolean;
  downArrowVisible: boolean;
  upArrowVisible: boolean;
  pause: boolean;

  // Methods
  destroy(options?: { children?: boolean; texture?: boolean }): void;
  update(): void;
  move(x: number, y: number, width: number, height: number): void;
  isOpen(): boolean;
  isClosed(): boolean;
  setCursorRect(x: number, y: number, width: number, height: number): void;
  moveCursorBy(x: number, y: number): void;
  moveInnerChildrenBy(x: number, y: number): void;
  setTone(r: number, g: number, b: number): void;
  addChildToBack(child: PIXI.DisplayObject): PIXI.DisplayObject;
  addInnerChild(child: PIXI.DisplayObject): PIXI.DisplayObject;
  updateTransform(): void;
  drawShape(graphics: PIXI.Graphics): void;

  // Internal Methods (not intended for external use)
  protected _createAllParts(): void;
  protected _refreshAllParts(): void;
  protected _refreshBack(): void;
  protected _refreshFrame(): void;
  protected _refreshCursor(): void;
  protected _setRectPartsGeometry(sprite: PIXI.Sprite, srect: any, drect: any, m: number): void;
  protected _refreshArrows(): void;
  protected _refreshPauseSign(): void;
  protected _updateClientArea(): void;
  protected _updateFrame(): void;
  protected _updateContentsBack(): void;
  protected _updateCursor(): void;
  protected _makeCursorAlpha(): number;
  protected _updateContents(): void;
  protected _updateArrows(): void;
  protected _updatePauseSign(): void;
  protected _updateFilterArea(): void;
}

declare class WindowLayer extends PIXI.Container {
  constructor();

  // Methods
  update(): void;
  render(renderer: PIXI.Renderer): void;
}