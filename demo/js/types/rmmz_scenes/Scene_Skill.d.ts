// Scene_Skill.d.ts

declare class Scene_Skill extends Scene_ItemBase {
  protected _skillTypeWindow: Window_SkillType;
  protected _statusWindow: Window_SkillStatus;
  protected _itemWindow: Window_SkillList;

  constructor();

  initialize(): void;

  create(): void;

  start(): void;

  protected createSkillTypeWindow(): void;

  protected skillTypeWindowRect(): Rectangle;

  protected createStatusWindow(): void;

  protected statusWindowRect(): Rectangle;

  protected createItemWindow(): void;

  protected itemWindowRect(): Rectangle;

  needsPageButtons(): boolean;

  arePageButtonsEnabled(): boolean;

  protected refreshActor(): void;

  user(): Game_Actor;

  protected commandSkill(): void;

  protected onItemOk(): void;

  protected onItemCancel(): void;

  protected playSeForItem(): void;

  protected useItem(): void;

  onActorChange(): void;
}
