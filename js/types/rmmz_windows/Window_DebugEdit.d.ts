declare class Window_DebugEdit extends Window_Selectable {
  private _mode: "switch" | "variable";
  private _topId: number;

  constructor(rect: Rectangle);
  initialize(rect: Rectangle): void;
  maxItems(): number;
  drawItem(index: number): void;
  itemName(dataId: number): string;
  itemStatus(dataId: number): string;
  setMode(mode: "switch" | "variable"): void;
  setTopId(id: number): void;
  currentId(): number;
  update(): void;
  updateSwitch(): void;
  updateVariable(): void;
  deltaForVariable(): number;
}