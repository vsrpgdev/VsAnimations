declare class Game_Item {
  private _dataClass: string;
  private _itemId: number;

  constructor(item?: rm.types.BaseItem);

  initialize(item?: rm.types.BaseItem): void;

  isSkill(): boolean;
  isItem(): boolean;
  isUsableItem(): boolean;
  isWeapon(): boolean;
  isArmor(): boolean;
  isEquipItem(): boolean;
  isNull(): boolean;

  itemId(): number;

  object(): rm.types.BaseItem;

  setObject(item: rm.types.BaseItem | null): void;

  setEquip(isWeapon: boolean, itemId: number): void;
}
