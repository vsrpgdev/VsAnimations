declare class Window_StatusEquip extends Window_StatusBase {
  private _actor: Game_Actor | null;

  constructor(rect: Rectangle);

  initialize(rect: Rectangle): void;
  setActor(actor: Game_Actor | null): void;
  maxItems(): number;
  itemHeight(): number;
  drawItem(index: number): void;
  drawItemBackground(index: number): void;
}