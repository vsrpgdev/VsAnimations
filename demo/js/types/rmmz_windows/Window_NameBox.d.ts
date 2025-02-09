declare class Window_NameBox extends Window_Base {
  private _name: string;
  private _messageWindow: Window_Message | null;

  constructor();

  initialize(): void;
  setMessageWindow(messageWindow: Window_Message): void;
  setName(name: string): void;
  clear(): void;
  start(): void;
  updatePlacement(): void;
  updateBackground(): void;
  windowWidth(): number;
  windowHeight(): number;
  refresh(): void;
}