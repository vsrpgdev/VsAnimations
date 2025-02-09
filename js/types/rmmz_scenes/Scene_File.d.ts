
declare class Scene_File extends Scene_MenuBase {
  protected _helpWindow: Window_Help;
  protected _listWindow: Window_SavefileList;

  constructor();

  initialize(): void;

  create(): void;

  helpAreaHeight(): number;

  start(): void;

  savefileId(): number;

  isSavefileEnabled(savefileId: number): boolean;

  protected createHelpWindow(): void;

  protected helpWindowRect(): Rectangle;

  protected createListWindow(): void;

  protected listWindowRect(): Rectangle;

  mode(): string | null;

  needsAutosave(): boolean;

  activateListWindow(): void;

  protected helpWindowText(): string;

  protected firstSavefileId(): number;

  protected onSavefileOk(): void;
}
