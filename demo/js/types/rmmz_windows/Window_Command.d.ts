declare class Window_Command extends Window_Selectable {
  protected _list: { name: string; symbol: string; enabled: boolean; ext: any }[];

  constructor(rect: Rectangle);

  initialize(rect: Rectangle): void;

  maxItems(): number;

  clearCommandList(): void;
  makeCommandList(): void;

  addCommand(name: string, symbol: string, enabled?: boolean, ext?: any): void;

  commandName(index: number): string;
  commandSymbol(index: number): string;
  isCommandEnabled(index: number): boolean;

  currentData(): { name: string; symbol: string; enabled: boolean; ext: any } | null;
  isCurrentItemEnabled(): boolean;

  currentSymbol(): string | null;
  currentExt(): any;

  findSymbol(symbol: string): number;
  selectSymbol(symbol: string): void;

  findExt(ext: any): number;
  selectExt(ext: any): void;

  drawItem(index: number): void;
  itemTextAlign(): "left" | "center" | "right";

  isOkEnabled(): boolean;
  callOkHandler(): void;

  refresh(): void;
}
