declare class Window_MapName extends Window_Base {
  private _showCount: number;

  constructor(rect: Rectangle);

  initialize(rect: Rectangle): void;
  update(): void;
  updateFadeIn(): void;
  updateFadeOut(): void;
  open(): void;
  close(): void;
  refresh(): void;
  drawBackground(x: number, y: number, width: number, height: number): void;
}
