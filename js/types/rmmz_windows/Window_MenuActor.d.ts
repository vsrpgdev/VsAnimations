declare class Window_MenuActor extends Window_MenuStatus {
  constructor(rect: Rectangle);

  /**
   * Initializes the `Window_MenuActor` instance.
   * @param rect The rectangle defining the window's position and size.
   */
  initialize(rect: Rectangle): void;

  /**
   * Processes the OK input action. Sets the target actor and calls the OK handler.
   */
  processOk(): void;

  /**
   * Selects the last target actor in the menu.
   */
  selectLast(): void;

  /**
   * Selects an actor based on the provided item and its target scope.
   * @param item The item or skill to evaluate for target selection.
   */
  selectForItem(item: IDataItemBase): void;
}
