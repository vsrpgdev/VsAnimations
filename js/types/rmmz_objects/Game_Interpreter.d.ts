/**
* -----------------------------------------------------------------------------
* Game_Interpreter
*
* The interpreter for running event commands.
* @class Game_Interpreter
*/
declare class Game_Interpreter {
  constructor(depth: number);
  _depth: number;
  _branch: Object;
  _params: any[];
  _indent: number;
  _frameCount: number;
  _freezeChecker: number;
  _mapId: number;
  _eventId: number;
  _list: rm.types.EventCommand[];
  _index: number;
  _waitCount: number;
  _waitMode: string;
  _comments: string;
  _character: Game_Event;
  _childInterpreter: Game_Interpreter;
  checkOverflow(): void;
  /**
   * Clears the interpreter.
   *
   * @memberof Game_Interpreter
   */
  clear(): void;
  /**
   * Sets up the interpreter with the list of event commands, and the given
   * event Id.
   *
   * @param {Array<RPG.EventCommand>} list
   * @param {Int} eventId
   * @memberof Game_Interpreter
   */
  setup(list: rm.types.EventCommand[], eventId: number): void;
  /**
   * Returns the currrent eventId.
   *
   * @returns {Int}
   * @memberof Game_Interpreter
   */
  eventId(): number;
  /**
   * Returns true if the event is on the current map.
   *
   * @returns {Bool}
   * @memberof Game_Interpreter
   */
  isOnCurrentMap(): boolean;
  /**
   * Returns true after setting up the reserved common event.
   *
   * @returns {Bool}
   * @memberof Game_Interpreter
   */
  setupReservedCommonEvent(): boolean;
  /**
   * Returns true if the interpreter is running.
   *
   * @returns {Bool}
   * @memberof Game_Interpreter
   */
  isRunning(): boolean;
  update(): void;
  /**
   * Updates the child game interpreter.
   *
   * @returns {Bool}
   * @memberof Game_Interpreter
   */
  updateChild(): boolean;
  /**
   * Updates the wait of the game interpreter.
   *
   * @returns {Bool}
   * @memberof Game_Interpreter
   */
  updateWait(): boolean;
  updateWaitCount(): boolean;
  updateWaitMode(): boolean;
  /**
   * Sets the wait mode of the interpreter.
   *
   * @param {String} waitMode
   * @memberof Game_Interpreter
   */
  setWaitMode(waitMode: string): void;
  /**
   * sets a specified wait duration for the interpreter.
   *
   * @param {Int} duration
   * @memberof Game_Interpreter
   */
  wait(duration: number): void;
  fadeSpeed(): number;
  /**
   * Executes the event command;
   * returns true or false based on execution.
   * @returns {Bool}
   * @memberof Game_Interpreter
   */
  executeCommand(): boolean;
  /**
   * Checks if the interpreter has frozen.
   *
   * @returns {Bool}
   * @memberof Game_Interpreter
   */
  checkFreeze(): boolean;
  /**
   * Terminates the game interpreter.
   *
   * @memberof Game_Interpreter
   */
  terminate(): void;
  /**
   * Skips a conditional branch on the interpreter.
   *
   * @memberof Game_Interpreter
   */
  skipBranch(): void;
  /**
   * Returns the current event command.
   *
   * @returns {RPG.EventCommand}
   * @memberof Game_Interpreter
   */
  currentCommand(): rm.types.EventCommand;
  /**
   * Returns the next event code.
   *
   * @returns {Int}
   * @memberof Game_Interpreter
   */
  nextEventCode(): number;
  iterateActorId(param: number, callback: (actor: Game_Actor) => void): void;
  iterateActorEx(param1: number, param2: number, callback: (actor: Game_Actor) => void): void;
  iterateActorIndex(param: number, callback: (actor: Game_Actor) => void): void;
  iterateEnemyIndex(param: number, callback: (enemt: Game_Enemy) => void): void;
  iterateBattler(param1: number, param2: number, callback: (battler: Game_Battler) => void): void;
  character(param: number): Game_Character;
  operateValue(operation: number, operandType: number, operand: number): number;
  changeHp(target: number, value: number, allowDeath: boolean): void;
  /**
   * Show Text
   */
  command101(): boolean;
  /**
   * Show Choices
   */
  command102(): boolean;
  setupChoices(params: any[]): void;
  /**
   * When [**]
   */
  command402(): boolean;
  /**
   * When Cancel
   */
  command403(): boolean;
  /**
   * Input Number
   */
  command103(): boolean;
  /**
   *
   * @param params
   */
  setupNumInput(params: number[]): void;
  /**
   * Select Item
   */
  command104(): boolean;
  setupItemChoice(params: number[]): void;
  /**
   * Show Scrolling Text
   */
  command105(): boolean;
  /**
   * Comment
   */
  command108(): boolean;
  /**
   * Conditional Branch
   */
  command111(): boolean;
  /**
   * Else
   */
  command411(): boolean;
  /**
   * Loop
   */
  command112(): boolean;
  /**
   * Repeat Above
   */
  command413(): boolean;
  /**
   * Break Loop
   */
  command113(): boolean;
  /**
   * Exit Event Processing
   */
  command115(): boolean;
  /**
   * Common Event
   */
  command117(): boolean;
  setupChild(list: rm.types.EventCommand[], eventId: number): void;
  /**
   * Label
   */
  command118(): boolean;
  /**
   * Jump to Label
   */
  command119(): boolean;
  jumpTo(index: number): void;
  /**
   * Control Switches
   */
  command121(): boolean;
  /**
   * Control Variables
   */
  command122(): boolean;
  gameDataOperand(type: number, param1: number, param2: number): number;
  operateVariable(variableId: number, operationType: number, value: number): void;
  /**
   * Control Self Switch
   */
  command123(): boolean;
  /**
   * Control Timer
   */
  command124(): boolean;
  /**
   * Change Gold
   */
  command125(): boolean;
  /**
   * Change Items
   */
  command126(): boolean;
  /**
   * Change Weapons
   */
  command127(): boolean;
  /**
   * Change Armors
   */
  command128(): boolean;
  /**
   * Change Party Member
   */
  command129(): boolean;
  /**
   * Change Battle BGM
   */
  command132(): boolean;
  /**
   * Change Victory ME
   */
  command133(): boolean;
  /**
   * Change Save Access
   */
  command134(): boolean;
  /**
   * Change Menu Access
   */
  command135(): boolean;
  /**
   * Change Encounter Disable
   */
  command136(): boolean;
  /**
   * Change Formation Access
   */
  command137(): boolean;
  /**
   * Change Window Color
   */
  command138(): boolean;
  /**
   * Change Defeat ME
   */
  command139(): boolean;
  /**
   * Change Vehicle BGM
   */
  command140(): boolean;
  /**
   * Transfer Player
   */
  command201(): boolean;
  /**
   * Set Vehicle Location
   */
  command202(): boolean;
  /**
   * Set Event Location
   */
  command203(): boolean;
  /**
   * Scroll Map
   */
  command204(): boolean;
  /**
   * Set Movement Route
   */
  command205(): boolean;
  /**
   * Getting On and Off Vehicles
   */
  command206(): boolean;
  /**
   * Change Transparency
   */
  command211(): boolean;
  /**
   * Show Animation
   */
  command212(): boolean;
  /**
   * Show Balloon Icon
   */
  command213(): boolean;
  /**
   * Erase Event
   */
  command214(): boolean;
  /**
   * Change Player Followers
   */
  command216(): boolean;
  /**
   * Gather Followers
   */
  command217(): boolean;
  /**
   * Fadeout Screen
   */
  command221(): boolean;
  /**
   * Fadein Screen
   */
  command222(): boolean;
  /**
   * Tint Screen
   */
  command223(): boolean;
  /**
   * Flash Screen
   */
  command224(): boolean;
  /**
   * Shake Screen
   */
  command225(): boolean;
  /**
   * Wait
   */
  command230(): boolean;
  /**
   * Show Picture
   */
  command231(): boolean;
  /**
   * Move Picture
   */
  command232(): boolean;
  /**
   * Rotate Picture
   */
  command233(): boolean;
  /**
   * Tint Picture
   */
  command234(): boolean;
  /**
   * Erase Picture
   */
  command235(): boolean;
  /**
   * Set Weather Effect
   */
  command236(): boolean;
  /**
   * Play BGM
   */
  command241(): boolean;
  /**
   * Fadeout BGM
   */
  command242(): boolean;
  /**
   * Save BGM
   */
  command243(): boolean;
  /**
   * Resume BGM
   */
  command244(): boolean;
  /**
   * Play BGS
   */
  command245(): boolean;
  /**
   * Fadeout BGS
   */
  command246(): boolean;
  /**
   * Play ME
   */
  command249(): boolean;
  /**
   * Play SE
   */
  command250(): boolean;
  /**
   * Stop SE
   */
  command251(): boolean;
  /**
   * Play Movie
   */
  command261(): boolean;
  videoFileExt(): string;
  /**
   * Change Map Name Display
   */
  command281(): boolean;
  /**
   * Change Tileset
   */
  command282(): boolean;
  /**
   * Change Battle Back
   */
  command283(): boolean;
  /**
   * Change Parallax
   */
  command284(): boolean;
  /**
   * Get Location Info
   */
  command285(): boolean;
  /**
   * Battle Processing
   */
  command301(): boolean;
  /**
   * If Win
   */
  command601(): boolean;
  /**
   * If Escape
   */
  command602(): boolean;
  /**
   * If Lose
   */
  command603(): boolean;
  /**
   * Shop Processing
   */
  command302(): boolean;
  /**
   * Name Input Processing
   */
  command303(): boolean;
  /**
   * Change HP
   */
  command311(): boolean;
  /**
   * Change MP
   */
  command312(): boolean;
  /**
   * Change TP
   */
  command326(): boolean;
  /**
   * Change State
   */
  command313(): boolean;
  /**
   * Recover All
   */
  command314(): boolean;
  /**
   * Change EXP
   */
  command315(): boolean;
  /**
   * Change Level
   */
  command316(): boolean;
  /**
   * Change Parameter
   */
  command317(): boolean;
  /**
   * Change Skill
   */
  command318(): boolean;
  /**
   * Change Equipment
   */
  command319(): boolean;
  /**
   * Change Name
   */
  command320(): boolean;
  /**
   * Change Class
   */
  command321(): boolean;
  /**
   * Change Actor Images
   */
  command322(): boolean;
  /**
   * Change Vehicle Image
   */
  command323(): boolean;
  /**
   * Change Nickname
   */
  command324(): boolean;
  /**
   * Change Profile
   */
  command325(): boolean;
  /**
   * Change Enemy HP
   */
  command331(): boolean;
  /**
   * Change Enemy MP
   */
  command332(): boolean;
  /**
   * Change Enemy TP
   */
  command342(): boolean;
  /**
   * Change Enemy State
   */
  command333(): boolean;
  /**
   * Enemy Recover All
   */
  command334(): boolean;
  /**
   * Enemy Appear
   */
  command335(): boolean;
  /**
   * Enemy Transform
   */
  command336(): boolean;
  /**
   * Show Battle Animation
   */
  command337(): boolean;
  /**
   * Force Action
   */
  command339(): boolean;
  /**
   * Abort Battle
   */
  command340(): boolean;
  /**
   * Open Menu Screen
   */
  command351(): boolean;
  /**
   * Open Save Screen
   */
  command352(): boolean;
  /**
   * Game Over
   */
  command353(): boolean;
  /**
   * Return to Title Screen
   */
  command354(): boolean;
  /**
   * Script
   */
  command355(): boolean;
  /**
   * Plugin Command
   */
  command356(): boolean;
  pluginCommand(command: string, args: string[]): void;
  }