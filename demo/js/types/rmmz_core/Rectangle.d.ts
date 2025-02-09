
/**
 * Represents a rectangle defined by its position and dimensions.
 * Extends PIXI.Rectangle.
 */
declare class Rectangle extends PIXI.Rectangle {
  /**
   * Constructs a new Rectangle instance.
   * @param x - The x coordinate for the upper-left corner.
   * @param y - The y coordinate for the upper-left corner.
   * @param width - The width of the rectangle.
   * @param height - The height of the rectangle.
   */
  constructor(x: number, y: number, width: number, height: number);

  /**
   * Initializes the rectangle with the given parameters.
   * @param x - The x coordinate for the upper-left corner.
   * @param y - The y coordinate for the upper-left corner.
   * @param width - The width of the rectangle.
   * @param height - The height of the rectangle.
   */
  initialize(x: number, y: number, width: number, height: number): void;
}
