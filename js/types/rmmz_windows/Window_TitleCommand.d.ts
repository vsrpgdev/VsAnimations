declare class Window_TitleCommand extends Window_Command {
  private static _lastCommandSymbol: string | null;

  constructor(rect: Rectangle);
  initialize(rect: Rectangle): void;
  static initCommandPosition(): void;
  makeCommandList(): void;
  isContinueEnabled(): boolean;
  processOk(): void;
  selectLast(): void;
}