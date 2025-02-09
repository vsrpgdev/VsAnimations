// Scene_Status.d.ts

declare class Scene_Status extends Scene_MenuBase {
  protected _profileWindow: Window_Help;
  protected _statusWindow: Window_Status;
  protected _statusParamsWindow: Window_StatusParams;
  protected _statusEquipWindow: Window_StatusEquip;

  constructor();

  initialize(): void;

  create(): void;

  protected helpAreaHeight(): number;

  protected createProfileWindow(): void;
  protected profileWindowRect(): Rectangle;

  protected createStatusWindow(): void;
  protected statusWindowRect(): Rectangle;

  protected createStatusParamsWindow(): void;
  protected statusParamsWindowRect(): Rectangle;

  protected createStatusEquipWindow(): void;
  protected statusEquipWindowRect(): Rectangle;

  protected statusParamsWidth(): number;

  protected statusParamsHeight(): number;

  protected profileHeight(): number;

  start(): void;

  needsPageButtons(): boolean;

  protected refreshActor(): void;

  onActorChange(): void;
}
