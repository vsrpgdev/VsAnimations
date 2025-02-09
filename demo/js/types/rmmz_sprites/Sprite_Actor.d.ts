declare class Sprite_Actor extends Sprite_Battler {
  protected _battlerName: string;
  protected _motion: { index: number; loop: boolean } | null;
  protected _motionCount: number;
  protected _pattern: number;
  protected _mainSprite: Sprite;
  protected _shadowSprite: Sprite;
  protected _weaponSprite: Sprite_Weapon;
  protected _stateSprite: Sprite_StateOverlay;

  static MOTIONS: {
      walk: { index: number; loop: boolean };
      wait: { index: number; loop: boolean };
      chant: { index: number; loop: boolean };
      guard: { index: number; loop: boolean };
      damage: { index: number; loop: boolean };
      evade: { index: number; loop: boolean };
      thrust: { index: number; loop: boolean };
      swing: { index: number; loop: boolean };
      missile: { index: number; loop: boolean };
      skill: { index: number; loop: boolean };
      spell: { index: number; loop: boolean };
      item: { index: number; loop: boolean };
      escape: { index: number; loop: boolean };
      victory: { index: number; loop: boolean };
      dying: { index: number; loop: boolean };
      abnormal: { index: number; loop: boolean };
      sleep: { index: number; loop: boolean };
      dead: { index: number; loop: boolean };
  };

  constructor(battler: Game_Actor);

  initMembers(): void;

  mainSprite(): Sprite;

  createMainSprite(): void;

  createShadowSprite(): void;

  createWeaponSprite(): void;

  createStateSprite(): void;

  setBattler(battler: Game_Actor): void;

  moveToStartPosition(): void;

  setActorHome(index: number): void;

  update(): void;

  updateShadow(): void;

  updateMain(): void;

  setupMotion(): void;

  setupWeaponAnimation(): void;

  startMotion(motionType: keyof typeof Sprite_Actor.MOTIONS): void;

  updateTargetPosition(): void;

  shouldStepForward(): boolean;

  updateBitmap(): void;

  updateFrame(): void;

  updateMove(): void;

  updateMotion(): void;

  updateMotionCount(): void;

  motionSpeed(): number;

  refreshMotion(): void;

  startEntryMotion(): void;

  stepForward(): void;

  stepBack(): void;

  retreat(): void;

  onMoveEnd(): void;

  damageOffsetX(): number;

  damageOffsetY(): number;
}
