declare class Sprite_Weapon extends Sprite {
  private _weaponImageId: number;
  private _animationCount: number;
  private _pattern: number;

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
   * Sets up the weapon sprite with the specified weapon image ID.
   * @param weaponImageId - The ID of the weapon image to display.
   */
  setup(weaponImageId: number): void;

  /**
   * Updates the sprite on each frame.
   */
  update(): void;

  /**
   * Returns the duration (in frames) of each animation step.
   */
  animationWait(): number;

  /**
   * Updates the animation pattern of the weapon sprite.
   */
  updatePattern(): void;

  /**
   * Loads the bitmap for the weapon sprite based on the weapon image ID.
   */
  loadBitmap(): void;

  /**
   * Updates the frame of the bitmap to display the current animation step.
   */
  updateFrame(): void;

  /**
   * Checks whether the weapon animation is still playing.
   */
  isPlaying(): boolean;
}
