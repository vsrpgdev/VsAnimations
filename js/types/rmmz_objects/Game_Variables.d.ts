declare class Game_Variables {
  private _data: (number | string | boolean | null)[];

  constructor();

  initialize(): void;
  clear(): void;

  /**
   * Gets the value of the specified variable.
   * @param variableId - The ID of the variable.
   * @returns The value of the variable, or 0 if it is not set.
   */
  value(variableId: number): number | string | boolean | null;

  /**
   * Sets the value of the specified variable.
   * @param variableId - The ID of the variable.
   * @param value - The value to set. If a number, it will be floored.
   */
  setValue(variableId: number, value: number | string | boolean | null): void;

  /**
   * Called whenever a variable value changes.
   */
  onChange(): void;
}
