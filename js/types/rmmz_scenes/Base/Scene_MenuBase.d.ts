// Scene_MenuBase.d.ts

declare class Scene_MenuBase extends Scene_Base {
  protected _actor: Game_Actor | null;
  protected _backgroundFilter: PIXI.filters.BlurFilter;
  protected _backgroundSprite: Sprite;
  protected _helpWindow: Window_Help;
  protected _cancelButton: Sprite_Button | null;
  protected _pageupButton: Sprite_Button | null;
  protected _pagedownButton: Sprite_Button | null;

  constructor();

  initialize(): void;

  create(): void;

  update(): void;

  helpAreaTop(): number;

  helpAreaBottom(): number;

  helpAreaHeight(): number;

  mainAreaTop(): number;

  mainAreaBottom(): number;

  mainAreaHeight(): number;

  actor(): Game_Actor | null;

  updateActor(): void;

  createBackground(): void;

  setBackgroundOpacity(opacity: number): void;

  createHelpWindow(): void;

  protected helpWindowRect(): Rectangle;

  createButtons(): void;

  protected needsCancelButton(): boolean;

  protected createCancelButton(): void;

  protected needsPageButtons(): boolean;

  protected createPageButtons(): void;

  protected updatePageButtons(): void;

  protected arePageButtonsEnabled(): boolean;

  nextActor(): void;

  previousActor(): void;

  onActorChange(): void;
}
