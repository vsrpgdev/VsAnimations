declare class Stage extends PIXI.Container {
  constructor();

  // Methods
  destroy(options?: { children?: boolean; texture?: boolean }): void;
}