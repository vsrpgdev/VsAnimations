declare class Sprite_Timer extends Sprite {
  private _seconds: number;

  constructor();

  /**
   * Destroys the bitmap and the sprite instance.
   */
  destroy(options?: any): void;

  /**
   * Creates the bitmap for displaying the timer.
   */
  createBitmap(): void;

  /**
   * Returns the font face used for the timer text.
   */
  fontFace(): string;

  /**
   * Returns the font size used for the timer text.
   */
  fontSize(): number;

  /**
   * Updates the sprite each frame.
   */
  update(): void;

  /**
   * Updates the bitmap if the timer value changes.
   */
  updateBitmap(): void;

  /**
   * Redraws the timer text on the bitmap.
   */
  redraw(): void;

  /**
   * Formats the timer text as MM:SS.
   */
  timerText(): string;

  /**
   * Updates the position of the timer sprite.
   */
  updatePosition(): void;

  /**
   * Updates the visibility of the timer sprite based on whether the timer is active.
   */
  updateVisibility(): void;
}
