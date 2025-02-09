declare class Window_BattleItem extends Window_ItemList {
  constructor(rect: Rectangle);
  initialize(rect: Rectangle): void;
  includes(item: RPG_Item): boolean;
  show(): void;
  hide(): void;
}