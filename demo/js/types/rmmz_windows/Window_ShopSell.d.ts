declare class Window_ShopSell extends Window_ItemList {
  constructor(rect: Rectangle);

  initialize(rect: Rectangle): void;
  isEnabled(item: RPG_Item): boolean;
}