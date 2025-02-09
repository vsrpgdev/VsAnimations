declare class Window_DebugRange extends Window_Selectable {
  private _maxSwitches: number;
  private _maxVariables: number;
  private _editWindow: Window_DebugEdit | null;
  private static lastTopRow: number;
  private static lastIndex: number;

  constructor(rect: Rectangle);
  initialize(rect: Rectangle): void;
  maxItems(): number;
  update(): void;
  mode(index: number): "switch" | "variable";
  topId(index: number): number;
  isSwitchMode(index: number): boolean;
  drawItem(index: number): void;
  isCancelTriggered(): boolean;
  processCancel(): void;
  setEditWindow(editWindow: Window_DebugEdit): void;
}