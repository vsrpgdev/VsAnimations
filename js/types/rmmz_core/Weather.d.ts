declare class Weather extends PIXI.Container {
  constructor();

  // Properties
  type: "none" | "rain" | "storm" | "snow";
  power: number;
  origin: Point;

  // Methods
  destroy(options?: { children?: boolean; texture?: boolean }): void;
  update(): void;

  // Internal Methods (not intended for external use)
  protected _createBitmaps(): void;
  protected _createDimmer(): void;
  protected _updateDimmer(): void;
  protected _updateAllSprites(): void;
  protected _addSprite(): void;
  protected _removeSprite(): void;
  protected _updateSprite(sprite: Sprite): void;
  protected _updateRainSprite(sprite: Sprite): void;
  protected _updateStormSprite(sprite: Sprite): void;
  protected _updateSnowSprite(sprite: Sprite): void;
  protected _rebornSprite(sprite: Sprite): void;

  // Internal Fields (protected and not recommended for direct access)
  protected _width: number;
  protected _height: number;
  protected _sprites: Sprite[];
  protected _rainBitmap: Bitmap;
  protected _stormBitmap: Bitmap;
  protected _snowBitmap: Bitmap;
  protected _dimmerSprite: ScreenSprite;
}