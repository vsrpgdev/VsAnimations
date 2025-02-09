declare class Window_PartyCommand extends Window_Command {
  constructor(rect: Rectangle);
  initialize(rect: Rectangle): void;
  makeCommandList(): void;
  setup(): void;
}