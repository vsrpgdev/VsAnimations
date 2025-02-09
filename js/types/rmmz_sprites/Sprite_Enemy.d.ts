declare class Sprite_Enemy extends Sprite_Battler {
  protected _enemy: Game_Enemy | null;
  protected _appeared: boolean;
  protected _battlerName: string | null;
  protected _battlerHue: number;
  protected _effectType: string | null;
  protected _effectDuration: number;
  protected _shake: number;
  protected _stateIconSprite: Sprite_StateIcon;

  constructor(battler: Game_Enemy);

  initMembers(): void;

  createStateIconSprite(): void;

  setBattler(battler: Game_Enemy): void;

  update(): void;

  updateBitmap(): void;

  loadBitmap(name: string): void;

  setHue(hue: number): void;

  updateFrame(): void;

  updatePosition(): void;

  updateStateSprite(): void;

  initVisibility(): void;

  setupEffect(): void;

  startEffect(effectType: string): void;

  startAppear(): void;

  startDisappear(): void;

  startWhiten(): void;

  startBlink(): void;

  startCollapse(): void;

  startBossCollapse(): void;

  startInstantCollapse(): void;

  updateEffect(): void;

  isEffecting(): boolean;

  revertToNormal(): void;

  updateWhiten(): void;

  updateBlink(): void;

  updateAppear(): void;

  updateDisappear(): void;

  updateCollapse(): void;

  updateBossCollapse(): void;

  updateInstantCollapse(): void;

  damageOffsetX(): number;

  damageOffsetY(): number;
}
