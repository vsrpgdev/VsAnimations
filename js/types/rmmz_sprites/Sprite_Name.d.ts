declare class Sprite_Name extends Sprite {
  private _battler: Game_Battler | null;
  private _name: string;
  private _textColor: string;

  constructor();

  /**
   * Initializes the sprite and its members.
   */
  initialize(): void;

  /**
   * Initializes the internal members of the sprite.
   */
  initMembers(): void;

  /**
   * Destroys the sprite and its associated bitmap.
   * @param options - Options for destruction.
   */
  destroy(options?: unknown): void;

  /**
   * Creates the bitmap used for rendering the name.
   */
  createBitmap(): void;

  /**
   * Gets the width of the bitmap.
   */
  bitmapWidth(): number;

  /**
   * Gets the height of the bitmap.
   */
  bitmapHeight(): number;

  /**
   * Gets the font face for the name text.
   */
  fontFace(): string;

  /**
   * Gets the font size for the name text.
   */
  fontSize(): number;

  /**
   * Sets up the sprite to display the name of a battler.
   * @param battler - The battler whose name is displayed.
   */
  setup(battler: Game_Battler): void;

  /**
   * Updates the sprite's state.
   */
  update(): void;

  /**
   * Updates the bitmap if the name or text color has changed.
   */
  updateBitmap(): void;

  /**
   * Gets the name of the battler.
   */
  name(): string;

  /**
   * Gets the text color for the battler's name.
   */
  textColor(): string;

  /**
   * Gets the outline color for the name text.
   */
  outlineColor(): string;

  /**
   * Gets the outline width for the name text.
   */
  outlineWidth(): number;

  /**
   * Redraws the name on the bitmap.
   */
  redraw(): void;

  /**
   * Sets up the font properties for the bitmap.
   */
  setupFont(): void;
}
