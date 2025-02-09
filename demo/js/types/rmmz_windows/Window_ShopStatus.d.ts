declare class Window_ShopStatus extends Window_StatusBase {
  private _item: rm.types.Item | null;
  private _pageIndex: number;

  constructor(rect: Rectangle);

  initialize(rect: Rectangle): void;
  refresh(): void;
  setItem(item: rm.types.Item | null): void;
  isEquipItem(): boolean;
  drawPossession(x: number, y: number): void;
  drawEquipInfo(x: number, y: number): void;
  statusMembers(): Game_Actor[];
  pageSize(): number;
  maxPages(): number;
  drawActorEquipInfo(x: number, y: number, actor: Game_Actor): void;
  drawActorParamChange(x: number, y: number, actor: Game_Actor, item1: rm.types.Item | null): void;
  paramId(): number;
  currentEquippedItem(actor: Game_Actor, etypeId: number): rm.types.Item | null;
  update(): void;
  updatePage(): void;
  isPageChangeEnabled(): boolean;
  isPageChangeRequested(): boolean;
  changePage(): void;
}