declare class Window_Status extends Window_StatusBase {
  private _actor: Game_Actor | null;

  constructor(rect: Rectangle);

  initialize(rect: Rectangle): void;
  setActor(actor: Game_Actor | null): void;
  refresh(): void;
  drawBlock1(): void;
  block1Y(): number;
  drawBlock2(): void;
  block2Y(): number;
  drawBasicInfo(x: number, y: number): void;
  drawExpInfo(x: number, y: number): void;
  expTotalValue(): string | number;
  expNextValue(): string | number;
}