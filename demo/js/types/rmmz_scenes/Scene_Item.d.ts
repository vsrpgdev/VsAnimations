// Scene_Item.d.ts

declare class Scene_Item extends Scene_ItemBase {
  protected _categoryWindow: Window_ItemCategory;
  protected _itemWindow: Window_ItemList;

  constructor();

  initialize(): void;

  create(): void;

  protected createCategoryWindow(): void;

  protected categoryWindowRect(): Rectangle;

  protected createItemWindow(): void;

  protected itemWindowRect(): Rectangle;

  user(): Game_Battler | null;

  protected onCategoryOk(): void;

  protected onItemOk(): void;

  protected onItemCancel(): void;

  protected playSeForItem(): void;

  protected useItem(): void;
}
