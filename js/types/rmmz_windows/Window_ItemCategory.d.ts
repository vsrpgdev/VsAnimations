declare class Window_ItemCategory extends Window_HorzCommand {
  private _itemWindow: Window_ItemList | null;

  constructor(rect: Rectangle);

  /**
   * Initializes the `Window_ItemCategory` instance.
   * @param rect The rectangle defining the window's position and size.
   */
  initialize(rect: Rectangle): void;

  /**
   * Returns the maximum number of columns in the window.
   */
  maxCols(): number;

  /**
   * Updates the window state. Synchronizes the selected category with the associated item window.
   */
  update(): void;

  /**
   * Creates the command list for item categories.
   */
  makeCommandList(): void;

  /**
   * Determines whether a specific command should be displayed based on the system's settings.
   * @param name The name of the item category ("item", "weapon", "armor", "keyItem").
   * @returns `true` if the command should be displayed, otherwise `false`.
   */
  needsCommand(name: string): boolean;

  /**
   * Associates an item window with this category window.
   * @param itemWindow The `Window_ItemList` instance to be associated.
   */
  setItemWindow(itemWindow: Window_ItemList): void;

  /**
   * Determines if a selection is necessary based on the number of available categories.
   * @returns `true` if there are two or more categories, otherwise `false`.
   */
  needsSelection(): boolean;
}
