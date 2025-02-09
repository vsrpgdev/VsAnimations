declare class Window_BattleEnemy extends Window_Selectable {
  private _enemies: Game_Enemy[];

  constructor(rect: Rectangle);
  initialize(rect: Rectangle): void;
  maxCols(): number;
  maxItems(): number;
  enemy(): Game_Enemy | null;
  enemyIndex(): number;
  drawItem(index: number): void;
  show(): void;
  hide(): void;
  refresh(): void;
  select(index: number): void;
  processTouch(): void;
}