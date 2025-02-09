declare class Window_BattleStatus extends Window_StatusBase {
  private _bitmapsReady: number;

  constructor(rect: Rectangle);
  initialize(rect: Rectangle): void;
  extraHeight(): number;
  maxCols(): number;
  itemHeight(): number;
  maxItems(): number;
  rowSpacing(): number;
  updatePadding(): void;
  actor(index: number): Game_Actor;
  selectActor(actor: Game_Actor): void;
  update(): void;
  preparePartyRefresh(): void;
  performPartyRefresh(): void;
  drawItem(index: number): void;
  drawItemImage(index: number): void;
  drawItemStatus(index: number): void;
  faceRect(index: number): Rectangle;
  nameX(rect: Rectangle): number;
  nameY(rect: Rectangle): number;
  stateIconX(rect: Rectangle): number;
  stateIconY(rect: Rectangle): number;
  basicGaugesX(rect: Rectangle): number;
  basicGaugesY(rect: Rectangle): number;
}