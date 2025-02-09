declare class Window_ChoiceList extends Window_Command {
  private _messageWindow: Window_Message | null;
  private _background: number;
  private _cancelButton: Sprite_Button | null;

  constructor();

  initialize(): void;
  setMessageWindow(messageWindow: Window_Message): void;
  createCancelButton(): void;
  start(): void;
  update(): void;
  updateCancelButton(): void;
  selectDefault(): void;
  updatePlacement(): void;
  updateBackground(): void;
  placeCancelButton(): void;
  windowX(): number;
  windowY(): number;
  windowWidth(): number;
  windowHeight(): number;
  numVisibleRows(): number;
  maxLines(): number;
  maxChoiceWidth(): number;
  makeCommandList(): void;
  drawItem(index: number): void;
  isCancelEnabled(): boolean;
  needsCancelButton(): boolean;
  callOkHandler(): void;
  callCancelHandler(): void;
}