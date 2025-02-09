declare class Sprite_Balloon extends Sprite {
  private _target: Sprite | null;
  private _balloonId: number;
  private _duration: number;

  constructor();

  /**
   * Initializes the sprite.
   */
  initialize(): void;

  /**
   * Initializes internal members of the sprite.
   */
  initMembers(): void;

  /**
   * Loads the bitmap for the balloon sprite.
   */
  loadBitmap(): void;

  /**
   * Sets up the balloon animation for the given target sprite and balloon ID.
   * @param targetSprite - The sprite that the balloon will follow.
   * @param balloonId - The ID of the balloon animation to display.
   */
  setup(targetSprite: Sprite, balloonId: number): void;

  /**
   * Updates the balloon animation each frame.
   */
  update(): void;

  /**
   * Updates the position of the balloon to follow the target sprite.
   */
  updatePosition(): void;

  /**
   * Updates the animation frame of the balloon.
   */
  updateFrame(): void;

  /**
   * Returns the speed of the balloon animation.
   */
  speed(): number;

  /**
   * Returns the wait time before the balloon animation begins.
   */
  waitTime(): number;

  /**
   * Returns the current frame index of the balloon animation.
   */
  frameIndex(): number;

  /**
   * Checks whether the balloon animation is still playing.
   */
  isPlaying(): boolean;
}
