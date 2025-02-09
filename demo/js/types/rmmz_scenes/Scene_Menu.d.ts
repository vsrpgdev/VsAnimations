// Scene_Menu.d.ts

declare class Scene_Menu extends Scene_MenuBase {
  protected _commandWindow: Window_MenuCommand;
  protected _goldWindow: Window_Gold;
  protected _statusWindow: Window_MenuStatus;

  constructor();

  initialize(): void;

  helpAreaHeight(): number;

  create(): void;

  start(): void;

  protected createCommandWindow(): void;

  protected commandWindowRect(): Rectangle;

  protected createGoldWindow(): void;

  protected goldWindowRect(): Rectangle;

  protected createStatusWindow(): void;

  protected statusWindowRect(): Rectangle;

  protected commandItem(): void;

  protected commandPersonal(): void;

  protected commandFormation(): void;

  protected commandOptions(): void;

  protected commandSave(): void;

  protected commandGameEnd(): void;

  protected onPersonalOk(): void;

  protected onPersonalCancel(): void;

  protected onFormationOk(): void;

  protected onFormationCancel(): void;
}
