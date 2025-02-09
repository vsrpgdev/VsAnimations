declare class Window_ShopBuy extends Window_Selectable {
  private _money: number;
  private _shopGoods: any[];
  private _data: RPG_Item[];
  private _price: number[];
  private _statusWindow: Window_ShopStatus | null;

  constructor(rect: Rectangle);

  initialize(rect: Rectangle): void;
  setupGoods(shopGoods: any[]): void;
  maxItems(): number;
  item(): RPG_Item | null;
  itemAt(index: number): RPG_Item | null;
  setMoney(money: number): void;
  isCurrentItemEnabled(): boolean;
  price(item: RPG_Item | null): number;
  isEnabled(item: RPG_Item | null): boolean;
  refresh(): void;
  makeItemList(): void;
  goodsToItem(goods: any[]): RPG_Item | null;
  drawItem(index: number): void;
  priceWidth(): number;
  setStatusWindow(statusWindow: Window_ShopStatus): void;
  updateHelp(): void;
}