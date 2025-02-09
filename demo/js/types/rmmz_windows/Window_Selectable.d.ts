declare class Window_Selectable extends Window_Scrollable {
  protected _index: number;
  protected _cursorFixed: boolean;
  protected _cursorAll: boolean;
  protected _helpWindow: Window_Base | null;
  protected _handlers: { [symbol: string]: () => void };
  protected _doubleTouch: boolean;
  protected _canRepeat: boolean;

  constructor(rect: Rectangle);

  initialize(rect: Rectangle): void;

  index(): number;
  cursorFixed(): boolean;
  setCursorFixed(cursorFixed: boolean): void;

  cursorAll(): boolean;
  setCursorAll(cursorAll: boolean): void;

  maxCols(): number;
  maxItems(): number;

  colSpacing(): number;
  rowSpacing(): number;

  itemWidth(): number;
  itemHeight(): number;
  contentsHeight(): number;
  maxRows(): number;
  overallHeight(): number;

  activate(): void;
  deactivate(): void;

  select(index: number): void;
  forceSelect(index: number): void;
  smoothSelect(index: number): void;
  deselect(): void;
  reselect(): void;

  row(): number;
  topRow(): number;
  maxTopRow(): number;
  setTopRow(row: number): void;
  maxPageRows(): number;
  maxPageItems(): number;
  maxVisibleItems(): number;

  isHorizontal(): boolean;
  topIndex(): number;

  itemRect(index: number): Rectangle;
  itemRectWithPadding(index: number): Rectangle;
  itemLineRect(index: number): Rectangle;

  setHelpWindow(helpWindow: Window_Base): void;
  showHelpWindow(): void;
  hideHelpWindow(): void;

  setHandler(symbol: string, method: () => void): void;
  isHandled(symbol: string): boolean;
  callHandler(symbol: string): void;

  isOpenAndActive(): boolean;

  isCursorMovable(): boolean;

  cursorDown(wrap: boolean): void;
  cursorUp(wrap: boolean): void;
  cursorRight(wrap: boolean): void;
  cursorLeft(wrap: boolean): void;

  cursorPagedown(): void;
  cursorPageup(): void;

  isScrollEnabled(): boolean;

  update(): void;

  processCursorMove(): void;
  processHandling(): void;
  processTouch(): void;

  isHoverEnabled(): boolean;
  onTouchSelect(trigger: boolean): void;
  onTouchOk(): void;
  onTouchCancel(): void;

  hitIndex(): number;
  hitTest(x: number, y: number): number;

  isTouchOkEnabled(): boolean;
  isOkEnabled(): boolean;
  isCancelEnabled(): boolean;
  isOkTriggered(): boolean;
  isCancelTriggered(): boolean;

  processOk(): void;
  callOkHandler(): void;
  processCancel(): void;
  callCancelHandler(): void;

  processPageup(): void;
  processPagedown(): void;

  updateInputData(): void;

  ensureCursorVisible(smooth: boolean): void;

  callUpdateHelp(): void;
  updateHelp(): void;

  setHelpWindowItem(item: any): void;

  isCurrentItemEnabled(): boolean;

  drawAllItems(): void;
  drawItem(index: number): void;

  clearItem(index: number): void;
  drawItemBackground(index: number): void;
  drawBackgroundRect(rect: Rectangle): void;

  redrawItem(index: number): void;
  redrawCurrentItem(): void;

  refresh(): void;
  paint(): void;

  refreshCursor(): void;
  refreshCursorForAll(): void;
}
