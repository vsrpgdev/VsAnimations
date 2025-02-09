// Scene_ItemBase.d.ts

declare class Scene_ItemBase extends Scene_MenuBase {
  protected _actorWindow: Window_MenuActor;

  constructor();

  initialize(): void;

  create(): void;

  protected createActorWindow(): void;

  protected actorWindowRect(): Rectangle;

  item(): Data_ItemBase | null;

  user(): Game_Battler | null;

  protected isCursorLeft(): boolean;

  protected showActorWindow(): void;

  protected hideActorWindow(): void;

  protected isActorWindowActive(): boolean;

  protected onActorOk(): void;

  protected onActorCancel(): void;

  protected determineItem(): void;

  protected useItem(): void;

  protected activateItemWindow(): void;

  protected itemTargetActors(): Game_Battler[];

  protected canUse(): boolean;

  protected isItemEffectsValid(): boolean;

  protected applyItem(): void;

  protected checkCommonEvent(): void;
}
