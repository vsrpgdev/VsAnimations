declare namespace TouchInput {
  // Properties
  /**
   * The wait time of the pseudo key repeat in frames.
   */
  let keyRepeatWait: number;

  /**
   * The interval of the pseudo key repeat in frames.
   */
  let keyRepeatInterval: number;

  /**
   * The threshold number of pixels to treat as moved.
   */
  let moveThreshold: number;

  /**
   * The horizontal scroll amount.
   */
  const wheelX: number;

  /**
   * The vertical scroll amount.
   */
  const wheelY: number;

  /**
   * The x coordinate on the canvas area of the latest touch event.
   */
  const x: number;

  /**
   * The y coordinate on the canvas area of the latest touch event.
   */
  const y: number;

  /**
   * The time of the last input in milliseconds.
   */
  const date: number;

  // Methods
  /**
   * Initializes the touch system.
   */
  function initialize(): void;

  /**
   * Clears all the touch data.
   */
  function clear(): void;

  /**
   * Updates the touch data.
   */
  function update(): void;

  /**
   * Checks whether the mouse button or touchscreen has been pressed and
   * released at the same position.
   * @returns True if the mouse button or touchscreen is clicked.
   */
  function isClicked(): boolean;

  /**
   * Checks whether the mouse button or touchscreen is currently pressed down.
   * @returns True if the mouse button or touchscreen is pressed.
   */
  function isPressed(): boolean;

  /**
   * Checks whether the left mouse button or touchscreen is just pressed.
   * @returns True if the mouse button or touchscreen is triggered.
   */
  function isTriggered(): boolean;

  /**
   * Checks whether the left mouse button or touchscreen is just pressed
   * or a pseudo key repeat occurred.
   * @returns True if the mouse button or touchscreen is repeated.
   */
  function isRepeated(): boolean;

  /**
   * Checks whether the left mouse button or touchscreen is kept depressed.
   * @returns True if the left mouse button or touchscreen is long-pressed.
   */
  function isLongPressed(): boolean;

  /**
   * Checks whether the right mouse button is just pressed.
   * @returns True if the right mouse button is just pressed.
   */
  function isCancelled(): boolean;

  /**
   * Checks whether the mouse or a finger on the touchscreen is moved.
   * @returns True if the mouse or a finger on the touchscreen is moved.
   */
  function isMoved(): boolean;

  /**
   * Checks whether the mouse is moved without pressing a button.
   * @returns True if the mouse is hovered.
   */
  function isHovered(): boolean;

  /**
   * Checks whether the left mouse button or touchscreen is released.
   * @returns True if the mouse button or touchscreen is released.
   */
  function isReleased(): boolean;

  // Internal methods (not exposed directly in the public API)
  /** @internal */
  function _createNewState(): {
    triggered: boolean;
    cancelled: boolean;
    moved: boolean;
    hovered: boolean;
    released: boolean;
    wheelX: number;
    wheelY: number;
  };

  /** @internal */
  function _setupEventHandlers(): void;

  /** @internal */
  function _onMouseDown(event: MouseEvent): void;

  /** @internal */
  function _onLeftButtonDown(event: MouseEvent): void;

  /** @internal */
  function _onMiddleButtonDown(event: MouseEvent): void;

  /** @internal */
  function _onRightButtonDown(event: MouseEvent): void;

  /** @internal */
  function _onMouseMove(event: MouseEvent): void;

  /** @internal */
  function _onMouseUp(event: MouseEvent): void;

  /** @internal */
  function _onWheel(event: WheelEvent): void;

  /** @internal */
  function _onTouchStart(event: TouchEvent): void;

  /** @internal */
  function _onTouchMove(event: TouchEvent): void;

  /** @internal */
  function _onTouchEnd(event: TouchEvent): void;

  /** @internal */
  function _onTouchCancel(event: TouchEvent): void;

  /** @internal */
  function _onLostFocus(): void;

  /** @internal */
  function _onTrigger(x: number, y: number): void;

  /** @internal */
  function _onCancel(x: number, y: number): void;

  /** @internal */
  function _onMove(x: number, y: number): void;

  /** @internal */
  function _onHover(x: number, y: number): void;

  /** @internal */
  function _onRelease(x: number, y: number): void;
}
