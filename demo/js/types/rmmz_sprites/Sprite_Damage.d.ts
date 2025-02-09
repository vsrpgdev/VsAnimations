declare class Sprite_Damage extends Sprite {
  private _duration: number;
  private _flashColor: [number, number, number, number];
  private _flashDuration: number;
  private _colorType: number;

  constructor();

  initialize(): void;

  /**
   * Destroys the sprite and its child sprites' bitmaps.
   * @param options - Options for destruction.
   */
  destroy(options?: unknown): void;

  /**
   * Sets up the damage sprite based on the target's result.
   * @param target - The target whose damage result is displayed.
   */
  setup(target: Game_Battler): void;

  /**
   * Sets up the critical effect for the sprite.
   */
  setupCriticalEffect(): void;

  /**
   * Returns the font face used for damage text.
   */
  fontFace(): string;

  /**
   * Returns the font size used for damage text.
   */
  fontSize(): number;

  /**
   * Returns the color used for the damage text.
   */
  damageColor(): string;

  /**
   * Returns the outline color used for the damage text.
   */
  outlineColor(): string;

  /**
   * Returns the outline width used for the damage text.
   */
  outlineWidth(): number;

  /**
   * Creates the "Miss" text sprite.
   */
  createMiss(): void;

  /**
   * Creates sprites for the digits of the damage value.
   * @param value - The damage value to display.
   */
  createDigits(value: number): void;

  /**
   * Creates a child sprite for damage text.
   * @param width - The width of the sprite.
   * @param height - The height of the sprite.
   * @returns The created child sprite.
   */
  createChildSprite(width: number, height: number): Sprite;

  /**
   * Creates a bitmap for a damage text sprite.
   * @param width - The width of the bitmap.
   * @param height - The height of the bitmap.
   * @returns The created bitmap.
   */
  createBitmap(width: number, height: number): Bitmap;

  /**
   * Updates the damage sprite every frame.
   */
  update(): void;

  /**
   * Updates a child sprite of the damage sprite.
   * @param sprite - The child sprite to update.
   */
  updateChild(sprite: Sprite): void;

  /**
   * Updates the flash effect for the damage sprite.
   */
  updateFlash(): void;

  /**
   * Updates the opacity of the damage sprite.
   */
  updateOpacity(): void;

  /**
   * Checks if the damage animation is still playing.
   * @returns True if the animation is playing, false otherwise.
   */
  isPlaying(): boolean;
}
