declare class Window_SkillStatus extends Window_StatusBase {
  private _actor: Game_Actor | null;

  constructor(rect: Rectangle);

  /**
   * Initializes the `Window_SkillStatus` instance.
   * @param rect The rectangle defining the window's position and size.
   */
  initialize(rect: Rectangle): void;

  /**
   * Sets the actor whose status will be displayed in the window.
   * @param actor The actor to display.
   */
  setActor(actor: Game_Actor | null): void;

  /**
   * Refreshes the window's contents to display the current actor's status.
   */
  refresh(): void;
}
