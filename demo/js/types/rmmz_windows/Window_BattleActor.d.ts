declare class Window_BattleActor extends Window_BattleStatus {
  constructor(rect: Rectangle);
  initialize(rect: Rectangle): void;
  show(): void;
  hide(): void;
  select(index: number): void;
  processTouch(): void;
}
