declare class Sprite extends PIXI.Sprite 
{
  constructor(bitmap?: Bitmap);

  // Static properties
  private static _emptyBaseTexture: PIXI.BaseTexture | null;
  private static _counter: number;

  // Instance properties
  spriteId: number;
  bitmap: Bitmap | null;
  width: number;
  height: number;
  opacity: number;
  blendMode: number;
  private _bitmap: Bitmap | null;
  private _frame: Rectangle;
  private _hue: number;
  private _blendColor: [number, number, number, number];
  private _colorTone: [number, number, number, number];
  private _colorFilter: ColorFilter | null;
  private _blendMode: number;
  private _hidden: boolean;

  // Methods
  initialize(bitmap: Bitmap): void;
  destroy(): void;
  update(): void;
  hide(): void;
  show(): void;
  updateVisibility(): void;
  move(x: number, y: number): void;
  setFrame(x: number, y: number, width: number, height: number): void;
  setHue(hue: number): void;
  getBlendColor(): [number, number, number, number];
  setBlendColor(color: [number, number, number, number]): void;
  getColorTone(): [number, number, number, number];
  setColorTone(tone: [number, number, number, number]): void;

  private _onBitmapChange(): void;
  private _onBitmapLoad(bitmapLoaded: Bitmap): void;
  private _refresh(): void;
  private _createColorFilter(): void;
  private _updateColorFilter(): void;
}
