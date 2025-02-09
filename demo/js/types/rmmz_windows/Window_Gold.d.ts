declare class Window_Gold extends Window_Selectable {
  constructor(rect: Rectangle);

  /**
   * Initializes the `Window_Gold` instance with the specified rectangle.
   * @param rect The rectangle defining the position and size of the window.
   */
  initialize(rect: Rectangle): void;

  /**
   * Returns the column spacing for the window.
   * @returns The column spacing, which is 0 for this window.
   */
  colSpacing(): number;

  /**
   * Refreshes the content of the window to display the current gold value.
   */
  refresh(): void;

  /**
   * Gets the current amount of gold the party has.
   * @returns The current gold value.
   */
  value(): number;

  /**
   * Gets the currency unit string.
   * @returns The currency unit.
   */
  currencyUnit(): string;

  /**
   * Opens the window and refreshes its content.
   */
  open(): void;
}
