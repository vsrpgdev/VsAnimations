declare class Window_Options extends Window_Command {
  constructor(rect: Rectangle);

  initialize(rect: Rectangle): void;
  makeCommandList(): void;
  addGeneralOptions(): void;
  addVolumeOptions(): void;
  drawItem(index: number): void;
  statusWidth(): number;
  statusText(index: number): string;
  isVolumeSymbol(symbol: string): boolean;
  booleanStatusText(value: boolean): string;
  volumeStatusText(value: number): string;
  processOk(): void;
  cursorRight(): void;
  cursorLeft(): void;
  changeVolume(symbol: string, forward: boolean, wrap: boolean): void;
  volumeOffset(): number;
  changeValue(symbol: string, value: boolean | number): void;
  getConfigValue(symbol: string): boolean | number;
  setConfigValue(symbol: string, value: boolean | number): void;
}