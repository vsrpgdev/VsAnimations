declare class Window_NameInput extends Window_Selectable {
  private _editWindow: Window_NameEdit | null;
  private _page: number;
  private _index: number;

  static LATIN1: string[];
  static LATIN2: string[];
  static RUSSIA: string[];
  static JAPAN1: string[];
  static JAPAN2: string[];
  static JAPAN3: string[];

  constructor(rect: Rectangle);

  initialize(rect: Rectangle): void;
  setEditWindow(editWindow: Window_NameEdit): void;
  table(): string[][];
  maxCols(): number;
  maxItems(): number;
  itemWidth(): number;
  groupSpacing(): number;
  character(): string;
  isPageChange(): boolean;
  isOk(): boolean;
  itemRect(index: number): Rectangle;
  drawItem(index: number): void;
  updateCursor(): void;
  isCursorMovable(): boolean;
  cursorDown(wrap: boolean): void;
  cursorUp(wrap: boolean): void;
  cursorRight(wrap: boolean): void;
  cursorLeft(wrap: boolean): void;
  cursorPagedown(): void;
  cursorPageup(): void;
  processCursorMove(): void;
  processHandling(): void;
  isCancelEnabled(): boolean;
  processCancel(): void;
  processJump(): void;
  processBack(): void;
  processOk(): void;
  onNameAdd(): void;
  onNameOk(): void;
}