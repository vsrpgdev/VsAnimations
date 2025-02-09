// Bitmap.d.ts

declare class Bitmap {
  constructor(width: number, height: number);
  initialize(width: number, height: number):void;

  // Static methods
  static load(url: string): Bitmap;
  static snap(stage: Stage): Bitmap;

  // Properties
  readonly url: string;
  readonly baseTexture: PIXI.BaseTexture;
  readonly image: HTMLImageElement;
  readonly canvas: HTMLCanvasElement;
  readonly context: CanvasRenderingContext2D;
  readonly width: number;
  readonly height: number;
  readonly rect: Rectangle;
  smooth: boolean;
  paintOpacity: number;
  fontFace: string;
  fontSize: number;
  fontBold: boolean;
  fontItalic: boolean;
  textColor: string;
  outlineColor: string;
  outlineWidth: number;

  // Methods
  isReady(): boolean;
  isError(): boolean;
  destroy(): void;
  resize(width: number, height: number): void;
  blt(
      source: Bitmap,
      sx: number,
      sy: number,
      sw: number,
      sh: number,
      dx: number,
      dy: number,
      dw?: number,
      dh?: number
  ): void;
  getPixel(x: number, y: number): string;
  getAlphaPixel(x: number, y: number): number;
  clearRect(x: number, y: number, width: number, height: number): void;
  clear(): void;
  fillRect(x: number, y: number, width: number, height: number, color: string): void;
  fillAll(color: string): void;
  strokeRect(x: number, y: number, width: number, height: number, color: string): void;
  gradientFillRect(
      x: number,
      y: number,
      width: number,
      height: number,
      color1: string,
      color2: string,
      vertical: boolean
  ): void;
  drawCircle(x: number, y: number, radius: number, color: string): void;
  drawText(
      text: string,
      x: number,
      y: number,
      maxWidth: number,
      lineHeight: number,
      align: "left" | "center" | "right"
  ): void;
  measureTextWidth(text: string): number;
  addLoadListener(listener: (bitmap: Bitmap) => void): void;
  retry(): void;

  // Internal methods (for completeness)
  private _makeFontNameText(): string;
  private _drawTextOutline(text: string, tx: number, ty: number, maxWidth: number): void;
  private _drawTextBody(text: string, tx: number, ty: number, maxWidth: number): void;
  private _createCanvas(width: number, height: number): void;
  private _ensureCanvas(): void;
  private _destroyCanvas(): void;
  private _createBaseTexture(source: any): void;
  private _updateScaleMode(): void;
  private _startLoading(): void;
  private _startDecrypting(): void;
  private _onXhrLoad(xhr: XMLHttpRequest): void;
  private _onLoad(): void;
  private _callLoadListeners(): void;
  private _onError(): void;
}
