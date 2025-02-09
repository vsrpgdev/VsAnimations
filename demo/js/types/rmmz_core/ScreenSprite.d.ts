declare class ScreenSprite extends PIXI.Container {
  /** Constructs a new ScreenSprite instance. */
  constructor();

  /** The opacity of the screen sprite (0 to 255). */
  opacity: number;

  /**
   * Sets the color of the screen sprite to black.
   */
  setBlack(): void;

  /**
   * Sets the color of the screen sprite to white.
   */
  setWhite(): void;

  /**
   * Sets the color of the screen sprite by specifying RGB values.
   * @param r - The red value in the range (0, 255).
   * @param g - The green value in the range (0, 255).
   * @param b - The blue value in the range (0, 255).
   */
  setColor(r: number, g: number, b: number): void;

  /**
   * Destroys the screen sprite.
   */
  destroy(): void;

  // Private properties (for internal use)
  private _graphics: PIXI.Graphics;
  private _red: number;
  private _green: number;
  private _blue: number;
}