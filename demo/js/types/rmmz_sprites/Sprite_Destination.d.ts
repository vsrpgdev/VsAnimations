declare class Sprite_Destination extends Sprite {
  private _frameCount: number;

  constructor();

  /**
   * Destroys the bitmap and the sprite instance.
   */
  destroy(options?: any): void;

  /**
   * Updates the sprite each frame.
   */
  update(): void;

  /**
   * Creates the bitmap for the destination marker.
   */
  createBitmap(): void;

  /**
   * Updates the position of the destination marker based on the destination coordinates.
   */
  updatePosition(): void;

  /**
   * Updates the animation of the destination marker, including scaling and opacity.
   */
  updateAnimation(): void;
}
