declare class Window_MenuCommand extends Window_Command {
  constructor(rect: Rectangle);

  /**
   * Initializes the `Window_MenuCommand` instance with the specified rectangle.
   * @param rect The rectangle defining the position and size of the window.
   */
  initialize(rect: Rectangle): void;

  /**
   * Resets the last selected command symbol.
   */
  static initCommandPosition(): void;

  /**
   * Generates the list of commands for the menu.
   */
  makeCommandList(): void;

  /**
   * Adds the main commands (item, skill, equip, status) to the menu.
   */
  addMainCommands(): void;

  /**
   * Adds the formation command to the menu.
   */
  addFormationCommand(): void;

  /**
   * Adds any original commands to the menu. Override this method to add custom commands.
   */
  addOriginalCommands(): void;

  /**
   * Adds the options command to the menu.
   */
  addOptionsCommand(): void;

  /**
   * Adds the save command to the menu.
   */
  addSaveCommand(): void;

  /**
   * Adds the game end command to the menu.
   */
  addGameEndCommand(): void;

  /**
   * Checks if a specific command is needed.
   * @param name The name of the command.
   * @returns `true` if the command is needed, otherwise `false`.
   */
  needsCommand(name: string): boolean;

  /**
   * Checks if the main commands are enabled.
   * @returns `true` if the main commands are enabled, otherwise `false`.
   */
  areMainCommandsEnabled(): boolean;

  /**
   * Checks if the formation command is enabled.
   * @returns `true` if the formation command is enabled, otherwise `false`.
   */
  isFormationEnabled(): boolean;

  /**
   * Checks if the options command is enabled.
   * @returns `true` if the options command is enabled, otherwise `false`.
   */
  isOptionsEnabled(): boolean;

  /**
   * Checks if the save command is enabled.
   * @returns `true` if the save command is enabled, otherwise `false`.
   */
  isSaveEnabled(): boolean;

  /**
   * Checks if the game end command is enabled.
   * @returns `true` if the game end command is enabled, otherwise `false`.
   */
  isGameEndEnabled(): boolean;

  /**
   * Processes the OK action when a menu command is selected.
   */
  processOk(): void;

  /**
   * Selects the last selected command in the menu.
   */
  selectLast(): void;

  /**
   * Stores the last selected command symbol.
   */
  static _lastCommandSymbol: string | null;
}
