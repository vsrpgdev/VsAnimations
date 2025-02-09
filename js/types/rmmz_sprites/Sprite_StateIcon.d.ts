declare class Sprite_StateIcon extends Sprite {
  private _battler: Game_Battler | null;
  private _iconIndex: number;
  private _animationCount: number;
  private _animationIndex: number;

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
   * Loads the bitmap for the state icons.
   */
  loadBitmap(): void;

  /**
   * Sets up the sprite to display the state icons of a battler.
   * @param battler - The battler whose state icons will be displayed.
   */
  setup(battler: Game_Battler): void;

  /**
   * Updates the sprite's state on each frame.
   */
  update(): void;

  /**
   * Returns the wait time for the icon animation.
   */
  animationWait(): number;

  /**
   * Updates the icon being displayed based on the battler's states.
   */
  updateIcon(): void;

  /**
   * Checks if the state icons should be displayed.
   */
  shouldDisplay(): boolean;

  /**
   * Updates the frame of the bitmap to display the current icon.
   */
  updateFrame(): void;
}
