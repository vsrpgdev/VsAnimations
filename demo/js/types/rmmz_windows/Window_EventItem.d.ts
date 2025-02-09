declare class Window_EventItem extends Window_ItemList {
  private _messageWindow: Window_Message | null;
  private _cancelButton: Sprite_Button | null;

  constructor(rect: Rectangle);

  initialize(rect: Rectangle): void;
  setMessageWindow(messageWindow: Window_Message): void;
  createCancelButton(): void;
  start(): void;
  update(): void;
  updateCancelButton(): void;
  updatePlacement(): void;
  placeCancelButton(): void;
  includes(item: Data_Item): boolean;
  needsNumber(): boolean;
  isEnabled(item: Data_Item): boolean;
  onOk(): void;
  onCancel(): void;
}