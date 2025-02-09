declare class Window_ItemList extends Window_Selectable {
  private _category: string;
  private _data: (rm.types.BaseItem | null)[];

  constructor(rect: Rectangle);

  /**
   * Initializes the `Window_ItemList` instance.
   * @param rect The rectangle defining the window's position and size.
   */
  initialize(rect: Rectangle): void;

  /**
   * Sets the current item category and refreshes the window.
   * @param category The category to set ("item", "weapon", "armor", "keyItem").
   */
  setCategory(category: string): void;

  /**
   * Returns the maximum number of columns in the window.
   */
  maxCols(): number;

  /**
   * Returns the column spacing in pixels.
   */
  colSpacing(): number;

  /**
   * Returns the maximum number of items in the list.
   */
  maxItems(): number;

  /**
   * Returns the currently selected item.
   */
  item(): rm.types.BaseItem | null;

  /**
   * Returns the item at the specified index.
   * @param index The index of the item.
   */
  itemAt(index: number): rm.types.BaseItem | null;

  /**
   * Checks if the currently selected item is enabled.
   */
  isCurrentItemEnabled(): boolean;

  /**
   * Determines if an item is included based on the current category.
   * @param item The item to check.
   */
  includes(item: rm.types.BaseItem | null): boolean;

  /**
   * Determines if item numbers should be displayed.
   */
  needsNumber(): boolean;

  /**
   * Checks if an item is enabled (e.g., usable by the party).
   * @param item The item to check.
   */
  isEnabled(item: rm.types.BaseItem | null): boolean;

  /**
   * Creates the item list based on the current category and party inventory.
   */
  makeItemList(): void;

  /**
   * Selects the last item in the list that was used.
   */
  selectLast(): void;

  /**
   * Draws an item at the specified index.
   * @param index The index of the item.
   */
  drawItem(index: number): void;

  /**
   * Returns the width needed to display item numbers.
   */
  numberWidth(): number;

  /**
   * Draws the item quantity for the specified item.
   * @param item The item to draw the quantity for.
   * @param x The x-coordinate.
   * @param y The y-coordinate.
   * @param width The width available for drawing.
   */
  drawItemNumber(item: rm.types.BaseItem | null, x: number, y: number, width: number): void;

  /**
   * Updates the associated help window with the selected item.
   */
  updateHelp(): void;

  /**
   * Refreshes the window's content.
   */
  refresh(): void;
}
