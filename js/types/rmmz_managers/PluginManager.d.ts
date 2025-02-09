//-----------------------------------------------------------------------------
// PluginManager
//-----------------------------------------------------------------------------

declare class PluginManager {
  private static _scripts: string[];
  private static _errorUrls: string[];
  private static _parameters: Record<string, Record<string, any>>;
  private static _commands: Record<string, (args: any) => void>;

  /**
   * Sets up the plugins by loading the scripts and storing their parameters.
   * @param plugins Array of plugin objects with `name`, `status`, and `parameters` properties.
   */
  static setup(plugins: { name: string; status: boolean; parameters: Record<string, any> }[]): void;

  /**
   * Retrieves the parameters of a plugin by its name.
   * @param name The name of the plugin.
   * @returns The parameters of the plugin.
   */
  static parameters(name: string): Record<string, any>;

  /**
   * Sets the parameters for a plugin.
   * @param name The name of the plugin.
   * @param parameters The parameters to set.
   */
  private static setParameters(name: string, parameters: Record<string, any>): void;

  /**
   * Loads a plugin script by its filename.
   * @param filename The filename of the script.
   */
  private static loadScript(filename: string): void;

  /**
   * Handles script load errors.
   * @param e The error event.
   */
  private static onError(e: ErrorEvent): void;

  /**
   * Constructs the URL for a plugin script.
   * @param filename The filename of the plugin.
   * @returns The constructed URL.
   */
  private static makeUrl(filename: string): string;

  /**
   * Checks for any errors during plugin loading.
   */
  static checkErrors(): void;

  /**
   * Throws an error for a failed script load.
   * @param url The URL of the script that failed to load.
   */
  private static throwLoadError(url: string): void;

  /**
   * Registers a command for a plugin.
   * @param pluginName The name of the plugin.
   * @param commandName The name of the command.
   * @param func The function to execute for the command.
   */
  static registerCommand(pluginName: string, commandName: string, func: (args: any) => void): void;

  /**
   * Calls a registered plugin command.
   * @param self The context (`this`) for the function.
   * @param pluginName The name of the plugin.
   * @param commandName The name of the command.
   * @param args The arguments for the command function.
   */
  static callCommand(self: any, pluginName: string, commandName: string, args: any): void;
}
