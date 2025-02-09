declare class Window_HorzCommand extends Window_Command {
  constructor(rect: Rectangle);

  initialize(rect: Rectangle): void;

  /**
   * Returns the maximum number of columns in the horizontal command window.
   */
  maxCols(): number;

  /**
   * Returns the alignment of the item text in the command window.
   */
  itemTextAlign(): "left" | "center" | "right";
}
