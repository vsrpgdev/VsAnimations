declare namespace Input {
  // Properties
  /** The wait time of the key repeat in frames. */
  let keyRepeatWait: number;

  /** The interval of the key repeat in frames. */
  let keyRepeatInterval: number;

  /**
   * A hash table to convert from a virtual key code to a mapped key name.
   */
  const keyMapper: Record<number, string>;

  /**
   * A hash table to convert from a gamepad button to a mapped key name.
   */
  const gamepadMapper: Record<number, string>;

  /**
   * The four direction value as a number of the numpad, or 0 for neutral.
   */
  const dir4: number;

  /**
   * The eight direction value as a number of the numpad, or 0 for neutral.
   */
  const dir8: number;

  /**
   * The time of the last input in milliseconds.
   */
  const date: number;

  // Methods
  /**
   * Initializes the input system.
   */
  function initialize(): void;

  /**
   * Clears all the input data.
   */
  function clear(): void;

  /**
   * Updates the input data.
   */
  function update(): void;

  /**
   * Checks whether a key is currently pressed down.
   * @param keyName - The mapped name of the key.
   * @returns True if the key is pressed.
   */
  function isPressed(keyName: string): boolean;

  /**
   * Checks whether a key is just pressed.
   * @param keyName - The mapped name of the key.
   * @returns True if the key is triggered.
   */
  function isTriggered(keyName: string): boolean;

  /**
   * Checks whether a key is just pressed or a key repeat occurred.
   * @param keyName - The mapped name of the key.
   * @returns True if the key is repeated.
   */
  function isRepeated(keyName: string): boolean;

  /**
   * Checks whether a key is kept depressed.
   * @param keyName - The mapped name of the key.
   * @returns True if the key is long-pressed.
   */
  function isLongPressed(keyName: string): boolean;

  /**
   * Simulates a virtual button click.
   * @param buttonName - The name of the virtual button.
   */
  function virtualClick(buttonName: string): void;

  // Internal methods (not exposed directly in the public API)
  /** @internal */
  function _setupEventHandlers(): void;

  /** @internal */
  function _onKeyDown(event: KeyboardEvent): void;

  /** @internal */
  function _shouldPreventDefault(keyCode: number): boolean;

  /** @internal */
  function _onKeyUp(event: KeyboardEvent): void;

  /** @internal */
  function _onLostFocus(): void;

  /** @internal */
  function _pollGamepads(): void;

  /** @internal */
  function _updateGamepadState(gamepad: Gamepad): void;

  /** @internal */
  function _updateDirection(): void;

  /** @internal */
  function _signX(): number;

  /** @internal */
  function _signY(): number;

  /** @internal */
  function _makeNumpadDirection(x: number, y: number): number;

  /** @internal */
  function _isEscapeCompatible(keyName: string): boolean;
}
