declare class Sprite_Clickable extends Sprite {
  private _pressed: boolean;
  private _hovered: boolean;

  constructor();

  initialize(): void;

  update(): void;

  /**
   * Processes touch input and determines hover, press, and click states.
   */
  processTouch(): void;

  /**
   * Checks if the sprite is currently pressed.
   * @returns `true` if the sprite is pressed, otherwise `false`.
   */
  isPressed(): boolean;

  /**
   * Determines if the sprite can handle click events.
   * @returns `true` if the sprite is clickable, otherwise `false`.
   */
  isClickEnabled(): boolean;

  /**
   * Checks if the sprite is currently being touched.
   * @returns `true` if the sprite is being touched, otherwise `false`.
   */
  isBeingTouched(): boolean;

  /**
   * Tests if the given coordinates are within the sprite's clickable area.
   * @param x - The x-coordinate to test.
   * @param y - The y-coordinate to test.
   * @returns `true` if the point is within the sprite's clickable area, otherwise `false`.
   */
  hitTest(x: number, y: number): boolean;

  /**
   * Triggered when the mouse pointer enters the sprite's area.
   */
  onMouseEnter(): void;

  /**
   * Triggered when the mouse pointer exits the sprite's area.
   */
  onMouseExit(): void;

  /**
   * Triggered when the sprite is pressed.
   */
  onPress(): void;

  /**
   * Triggered when the sprite is clicked.
   */
  onClick(): void;
}
