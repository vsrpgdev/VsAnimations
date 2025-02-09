declare class Window_ShopCommand extends Window_HorzCommand {
  private _purchaseOnly: boolean;

  constructor(rect: Rectangle);

  initialize(rect: Rectangle): void;
  setPurchaseOnly(purchaseOnly: boolean): void;
  maxCols(): number;
  makeCommandList(): void;
}