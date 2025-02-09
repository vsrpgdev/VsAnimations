declare class Window_EquipItem extends Window_ItemList {
  private _actor: Game_Actor | null;
  private _slotId: number;
  private _statusWindow: Window_EquipStatus | null;

  constructor(rect: Rectangle);

  initialize(rect: Rectangle): void;
  maxCols(): number;
  colSpacing(): number;
  setActor(actor: Game_Actor | null): void;
  setSlotId(slotId: number): void;
  includes(item: RPG_Item | null): boolean;
  etypeId(): number;
  isEnabled(item: RPG_Item | null): boolean;
  selectLast(): void;
  setStatusWindow(statusWindow: Window_EquipStatus): void;
  updateHelp(): void;
  playOkSound(): void;
}
