declare class Window_MenuStatus extends Window_StatusBase {
  constructor(rect: Rectangle);

  /**
   * Initializes the `Window_MenuStatus` instance.
   * @param rect The rectangle defining the window's position and size.
   */
  initialize(rect: Rectangle): void;

  /**
   * Gets the maximum number of items in the window.
   * @returns The size of the party.
   */
  maxItems(): number;

  /**
   * Gets the number of visible rows in the window.
   * @returns The number of visible rows (default: 4).
   */
  numVisibleRows(): number;

  /**
   * Gets the height of a single item in the window.
   * @returns The item height based on the number of visible rows.
   */
  itemHeight(): number;

  /**
   * Gets the actor at the specified index.
   * @param index The index of the actor.
   * @returns The `Game_Actor` instance at the specified index.
   */
  actor(index: number): Game_Actor;

  /**
   * Draws the item at the specified index.
   * @param index The index of the item to draw.
   */
  drawItem(index: number): void;

  /**
   * Draws the background for a pending item.
   * @param index The index of the pending item.
   */
  drawPendingItemBackground(index: number): void;

  /**
   * Draws the image (face graphic) of the actor at the specified index.
   * @param index The index of the actor.
   */
  drawItemImage(index: number): void;

  /**
   * Draws the status of the actor at the specified index.
   * @param index The index of the actor.
   */
  drawItemStatus(index: number): void;

  /**
   * Handles the OK button press for the currently selected item.
   */
  processOk(): void;

  /**
   * Determines whether the currently selected item is enabled.
   * @returns `true` if the item is enabled, otherwise `false`.
   */
  isCurrentItemEnabled(): boolean;

  /**
   * Selects the last selected actor in the menu.
   */
  selectLast(): void;

  /**
   * Gets whether the window is in formation mode.
   * @returns `true` if in formation mode, otherwise `false`.
   */
  formationMode(): boolean;

  /**
   * Sets whether the window is in formation mode.
   * @param formationMode `true` to enable formation mode, `false` otherwise.
   */
  setFormationMode(formationMode: boolean): void;

  /**
   * Gets the index of the pending item.
   * @returns The index of the pending item.
   */
  pendingIndex(): number;

  /**
   * Sets the index of the pending item and redraws affected items.
   * @param index The new pending index.
   */
  setPendingIndex(index: number): void;

  /**
   * The formation mode state.
   */
  protected _formationMode: boolean;

  /**
   * The index of the currently pending item.
   */
  protected _pendingIndex: number;
}
