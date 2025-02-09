declare class Window_ActorCommand extends Window_Command {
  private _actor: Game_Actor | null;

  constructor(rect: Rectangle);
  initialize(rect: Rectangle): void;
  makeCommandList(): void;
  addAttackCommand(): void;
  addSkillCommands(): void;
  addGuardCommand(): void;
  addItemCommand(): void;
  setup(actor: Game_Actor): void;
  actor(): Game_Actor | null;
  processOk(): void;
  selectLast(): void;
}