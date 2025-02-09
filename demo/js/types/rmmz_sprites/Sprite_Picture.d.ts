declare class Sprite_Picture extends Sprite_Clickable {
  private _pictureId: number;
  private _pictureName: string;

  constructor(pictureId: number);

  /**
   * Gets the `Game_Picture` instance associated with this sprite.
   */
  picture(): Game_Picture | null;

  /**
   * Updates the sprite's properties each frame.
   */
  update(): void;

  /**
   * Updates the bitmap used by the sprite based on the associated picture.
   */
  updateBitmap(): void;

  /**
   * Updates the sprite's origin based on the picture's origin.
   */
  updateOrigin(): void;

  /**
   * Updates the sprite's position based on the picture's position.
   */
  updatePosition(): void;

  /**
   * Updates the sprite's scale based on the picture's scale.
   */
  updateScale(): void;

  /**
   * Updates the sprite's tone based on the picture's tone.
   */
  updateTone(): void;

  /**
   * Updates other properties of the sprite, such as opacity, blend mode, and rotation.
   */
  updateOther(): void;

  /**
   * Loads the bitmap associated with the picture's name.
   */
  loadBitmap(): void;
}
