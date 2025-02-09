declare class Window_SavefileList extends Window_Selectable {
  private _mode: string | null;
  private _autosave: boolean;

  constructor(rect: Rectangle);

  initialize(rect: Rectangle): void;
  setMode(mode: string, autosave: boolean): void;
  maxItems(): number;
  numVisibleRows(): number;
  itemHeight(): number;
  drawItem(index: number): void;
  indexToSavefileId(index: number): number;
  savefileIdToIndex(savefileId: number): number;
  isEnabled(savefileId: number): boolean;
  savefileId(): number;
  selectSavefile(savefileId: number): void;
  drawTitle(savefileId: number, x: number, y: number): void;
  drawContents(info: SavefileInfo, rect: Rectangle): void;
  drawPartyCharacters(info: SavefileInfo, x: number, y: number): void;
  drawPlaytime(info: SavefileInfo, x: number, y: number, width: number): void;
  playOkSound(): void;
}