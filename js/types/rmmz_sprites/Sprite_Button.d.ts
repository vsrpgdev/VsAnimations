declare class Sprite_Button extends Sprite_Clickable {
  private _buttonType: string;
  private _clickHandler: (() => void) | null;
  private _coldFrame: Rectangle | null;
  private _hotFrame: Rectangle | null;

  /**
   * Creates an instance of Sprite_Button.
   * @param buttonType - The type of button (e.g., "cancel", "ok", "menu").
   */
  constructor(buttonType: string);

  /**
   * Initializes the button and sets up its frames and handlers.
   * @param buttonType - The type of button (e.g., "cancel", "ok", "menu").
   */
  initialize(buttonType: string): void;

  /**
   * Sets up the cold and hot frames for the button.
   */
  setupFrames(): void;

  /**
   * Returns the width of each button block.
   */
  blockWidth(): number;

  /**
   * Returns the height of each button block.
   */
  blockHeight(): number;

  /**
   * Loads the ButtonSet image used for the button graphics.
   */
  loadButtonImage(): void;

  /**
   * Retrieves data about the button's position and size in the ButtonSet image.
   */
  buttonData(): { x: number; w: number };

  /**
   * Updates the button's state each frame.
   */
  update(): void;

  /**
   * Checks if the button's bitmap is ready and valid.
   * Throws an error if the ButtonSet image is too small.
   */
  checkBitmap(): void;

  /**
   * Updates the button's frame based on its pressed state.
   */
  updateFrame(): void;

  /**
   * Updates the button's opacity based on its pressed state.
   */
  updateOpacity(): void;

  /**
   * Sets the cold (default) frame of the button.
   * @param x - The x-coordinate of the frame.
   * @param y - The y-coordinate of the frame.
   * @param width - The width of the frame.
   * @param height - The height of the frame.
   */
  setColdFrame(x: number, y: number, width: number, height: number): void;

  /**
   * Sets the hot (pressed) frame of the button.
   * @param x - The x-coordinate of the frame.
   * @param y - The y-coordinate of the frame.
   * @param width - The width of the frame.
   * @param height - The height of the frame.
   */
  setHotFrame(x: number, y: number, width: number, height: number): void;

  /**
   * Sets the click handler function for the button.
   * @param method - The function to be called when the button is clicked.
   */
  setClickHandler(method: () => void): void;

  /**
   * Called when the button is clicked.
   * Executes the click handler if set, or performs a virtual click for the button type.
   */
  onClick(): void;
}
