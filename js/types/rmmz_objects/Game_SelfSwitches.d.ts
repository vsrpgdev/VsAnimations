declare class Game_SelfSwitches {
  private _data: { [key: string]: boolean };

  constructor();

  initialize(): void;
  clear(): void;

  /**
   * Gets the value of the specified self switch.
   * @param key - The key representing the self switch.
   * @returns True if the self switch is ON, otherwise false.
   */
  value(key: string): boolean;

  /**
   * Sets the value of the specified self switch.
   * @param key - The key representing the self switch.
   * @param value - The value to set (true for ON, false for OFF).
   */
  setValue(key: string, value: boolean): void;

  /**
   * Called whenever a self switch value changes.
   */
  onChange(): void;
}
