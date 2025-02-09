declare class Window_NumberInput extends Window_Selectable {
  private _messageWindow: Window_Message | null;
  private _number: number;
  private _maxDigits: number;
  private _buttons: Sprite_Button[];

  constructor();

  initialize(): void;
  setMessageWindow(messageWindow: Window_Message): void;
  start(): void;
  updatePlacement(): void;
  windowWidth(): number;
  windowHeight(): number;
  maxCols(): number;
  maxItems(): number;
  itemWidth(): number;
  itemRect(index: number): Rectangle;
  isScrollEnabled(): boolean;
  isHoverEnabled(): boolean;
  createButtons(): void;
  placeButtons(): void;
  totalButtonWidth(): number;
  buttonSpacing(): number;
  buttonY(): number;
  update(): void;
  processDigitChange(): void;
  changeDigit(up: boolean): void;
  isTouchOkEnabled(): boolean;
  isOkEnabled(): boolean;
  isCancelEnabled(): boolean;
  processOk(): void;
  drawItem(index: number): void;
  onButtonUp(): void;
  onButtonDown(): void;
  onButtonOk(): void;
}