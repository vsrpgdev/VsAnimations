declare class Sprite_StateOverlay extends Sprite {
  private _battler: Game_Battler | null;
  private _overlayIndex: number;
  private _animationCount: number;
  private _pattern: number;

  constructor();

  /**
   * Initializes the sprite.
   */
  initialize(): void;

  /**
   * Initializes the internal members of the sprite.
   */
  initMembers(): void;

  /**
   * Loads the bitmap for state overlays.
   */
  loadBitmap(): void;

  /**
   * Sets up the sprite for a battler.
   * @param battler - The battler whose state overlay will be displayed.
   */
  setup(battler: Game_Battler | null): void;

  /**
   * Updates the sprite's state on each frame.
   */
  update(): void;

  /**
   * Returns the wait time for the overlay animation.
   */
  animationWait(): number;

  /**
   * Updates the animation pattern and the overlay index based on the battler's state.
   */
  updatePattern(): void;

  /**
   * Updates the frame of the bitmap to display the current overlay.
   */
  updateFrame(): void;
}
