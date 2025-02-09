declare class TilingSprite extends PIXI.TilingSprite {
  /**
   * Constructs a TilingSprite object for a tiling image.
   * @param bitmap - The image for the tiling sprite.
   */
  constructor(bitmap: Bitmap);

  /** The image for the tiling sprite. */
  bitmap: Bitmap;

  /** The opacity of the tiling sprite (0 to 255). */
  opacity: number;

  /** The origin point of the tiling sprite for scrolling. */
  origin: Point;

  /**
   * Destroys the tiling sprite.
   * @param options - Destruction options.
   */
  destroy(options?: { children?: boolean; texture?: boolean }): void;

  /**
   * Updates the tiling sprite for each frame.
   */
  update(): void;

  /**
   * Sets the x, y, width, and height all at once.
   * @param x - The x coordinate of the tiling sprite.
   * @param y - The y coordinate of the tiling sprite.
   * @param width - The width of the tiling sprite.
   * @param height - The height of the tiling sprite.
   */
  move(x: number, y: number, width: number, height: number): void;

  /**
   * Specifies the region of the image that the tiling sprite will use.
   * @param x - The x coordinate of the frame.
   * @param y - The y coordinate of the frame.
   * @param width - The width of the frame.
   * @param height - The height of the frame.
   */
  setFrame(x: number, y: number, width: number, height: number): void;

  /**
   * Updates the transform on all children of this container for rendering.
   */
  updateTransform(): void;

  /** @private Handles changes to the bitmap. */
  private _onBitmapChange(): void;

  /** @private Handles the load event of the bitmap. */
  private _onBitmapLoad(): void;

  /** @private Refreshes the texture of the tiling sprite. */
  private _refresh(): void;

  /** @private The empty base texture used for uninitialized sprites. */
  private static _emptyBaseTexture: BaseTexture | null;
}