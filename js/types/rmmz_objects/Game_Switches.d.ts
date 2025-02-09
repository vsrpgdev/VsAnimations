declare class Game_Switches {
  private _data: boolean[];

  constructor();

  initialize(): void;
  clear(): void;

  /**
   * Gets the value of the specified switch.
   * @param switchId - The ID of the switch.
   * @returns True if the switch is ON, otherwise false.
   */
  value(switchId: number): boolean;

  /**
   * Sets the value of the specified switch.
   * @param switchId - The ID of the switch.
   * @param value - The value to set (true for ON, false for OFF).
   */
  setValue(switchId: number, value: boolean): void;

  /**
   * Called whenever a switch value changes.
   */
  onChange(): void;
}
