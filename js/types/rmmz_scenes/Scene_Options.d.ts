// Scene_Options.d.ts

declare class Scene_Options extends Scene_MenuBase {
  protected _optionsWindow: Window_Options;

  constructor();

  initialize(): void;

  create(): void;

  terminate(): void;

  protected createOptionsWindow(): void;

  protected optionsWindowRect(): Rectangle;

  protected maxCommands(): number;

  protected maxVisibleCommands(): number;
}
