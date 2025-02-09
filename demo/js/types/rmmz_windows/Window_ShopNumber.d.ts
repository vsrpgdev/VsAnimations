declare class Window_ShopNumber extends Window_Selectable {
  private _item: rm.types.Item | null;
  private _max: number;
  private _price: number;
  private _number: number;
  private _currencyUnit: string;
  private _buttons: Sprite_Button[];

  constructor(rect: Rectangle);

  initialize(rect: Rectangle): void;
  isScrollEnabled(): boolean;
  number(): number;
  setup(item: rm.types.Item, max: number, price: number): void;
  setCurrencyUnit(currencyUnit: string): void;
  createButtons(): void;
  placeButtons(): void;
  totalButtonWidth(): number;
  buttonSpacing(): number;
  refresh(): void;
  drawCurrentItemName(): void;
  drawMultiplicationSign(): void;
  multiplicationSign(): string;
  multiplicationSignX(): number;
  drawNumber(): void;
  drawHorzLine(): void;
  drawTotalPrice(): void;
  itemNameY(): number;
  totalPriceY(): number;
  buttonY(): number;
  cursorWidth(): number;
  cursorX(): number;
  maxDigits(): number;
  update(): void;
  playOkSound(): void;
  processNumberChange(): void;
  changeNumber(amount: number): void;
  itemRect(): Rectangle;
  isTouchOkEnabled(): boolean;
  onButtonUp(): void;
  onButtonUp2(): void;
  onButtonDown(): void;
  onButtonDown2(): void;
  onButtonOk(): void;
}