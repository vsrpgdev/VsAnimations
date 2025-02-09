declare class Window_ScrollText extends Window_Base {
  private _reservedRect: Rectangle;
  private _text: string;
  private _maxBitmapHeight: number;
  private _allTextHeight: number;
  private _blockHeight: number;
  private _blockIndex: number;
  private _scrollY: number;

  constructor(rect: Rectangle);

  initialize(rect: Rectangle): void;
  update(): void;
  startMessage(): void;
  refresh(): void;
  updatePlacement(): void;
  contentsHeight(): number;
  updateMessage(): void;
  scrollSpeed(): number;
  isFastForward(): boolean;
  fastForwardRate(): number;
  terminateMessage(): void;
}