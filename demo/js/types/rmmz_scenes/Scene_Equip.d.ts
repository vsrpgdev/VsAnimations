// Scene_Equip.d.ts

declare class Scene_Equip extends Scene_MenuBase {
  protected _statusWindow: Window_EquipStatus;
  protected _commandWindow: Window_EquipCommand;
  protected _slotWindow: Window_EquipSlot;
  protected _itemWindow: Window_EquipItem;

  constructor();

  initialize(): void;

  create(): void;

  protected createStatusWindow(): void;
  protected statusWindowRect(): Rectangle;

  protected createCommandWindow(): void;
  protected commandWindowRect(): Rectangle;

  protected createSlotWindow(): void;
  protected slotWindowRect(): Rectangle;

  protected createItemWindow(): void;
  protected itemWindowRect(): Rectangle;

  protected statusWidth(): number;

  needsPageButtons(): boolean;

  arePageButtonsEnabled(): boolean;

  protected refreshActor(): void;

  protected commandEquip(): void;

  protected commandOptimize(): void;

  protected commandClear(): void;

  protected onSlotOk(): void;

  protected onSlotCancel(): void;

  protected onItemOk(): void;

  protected executeEquipChange(): void;

  protected onItemCancel(): void;

  onActorChange(): void;

  protected hideItemWindow(): void;
}
