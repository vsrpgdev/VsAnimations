declare class Window_SkillType extends Window_Command {
  private _actor: Game_Actor | null;
  private _skillWindow: Window_SkillList | null;

  constructor(rect: Rectangle);

  /**
   * Initializes the `Window_SkillType` instance.
   * @param rect The rectangle defining the window's position and size.
   */
  initialize(rect: Rectangle): void;

  /**
   * Sets the current actor and refreshes the command list.
   * @param actor The actor whose skill types will be displayed.
   */
  setActor(actor: Game_Actor | null): void;

  /**
   * Creates the list of commands for the skill types of the current actor.
   */
  makeCommandList(): void;

  /**
   * Updates the window. If a skill window is associated, updates it with the current skill type.
   */
  update(): void;

  /**
   * Associates a skill window with this skill type window.
   * @param skillWindow The skill window to be updated with the selected skill type.
   */
  setSkillWindow(skillWindow: Window_SkillList): void;

  /**
   * Selects the last skill type used by the actor.
   */
  selectLast(): void;
}
