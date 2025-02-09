// Scene_Title.d.ts

declare class Scene_Title extends Scene_Base {
  protected _backSprite1: Sprite | null;
  protected _backSprite2: Sprite | null;
  protected _gameTitleSprite: Sprite | null;
  protected _commandWindow: Window_TitleCommand | null;

  constructor();

  initialize(): void;
  create(): void;
  start(): void;
  update(): void;
  isBusy(): boolean;
  terminate(): void;

  protected createBackground(): void;
  protected createForeground(): void;
  protected drawGameTitle(): void;
  protected adjustBackground(): void;

  protected createCommandWindow(): void;
  protected commandWindowRect(): Rectangle;

  protected commandNewGame(): void;
  protected commandContinue(): void;
  protected commandOptions(): void;

  protected playTitleMusic(): void;
}
