declare class Game_Battler extends Game_BattlerBase {
  constructor();

  // Properties
  _actions: Game_Action[];
  _speed: number;
  _result: Game_ActionResult;
  _actionState: string;
  _lastTargetIndex: number;
  _damagePopup: boolean;
  _effectType: string | null;
  _motionType: string | null;
  _weaponImageId: number;
  _motionRefresh: boolean;
  _selected: boolean;
  _tpbState: string;
  _tpbChargeTime: number;
  _tpbCastTime: number;
  _tpbIdleTime: number;
  _tpbTurnCount: number;
  _tpbTurnEnd: boolean;

  // Initialization
  initialize(): void;
  initMembers(): void;

  // Popup and Animation Handling
  clearDamagePopup(): void;
  clearWeaponAnimation(): void;
  clearEffect(): void;
  clearMotion(): void;
  requestEffect(effectType: string): void;
  requestMotion(motionType: string): void;
  requestMotionRefresh(): void;
  cancelMotionRefresh(): void;
  select(): void;
  deselect(): void;

  // Status Checks
  isDamagePopupRequested(): boolean;
  isEffectRequested(): boolean;
  isMotionRequested(): boolean;
  isWeaponAnimationRequested(): boolean;
  isMotionRefreshRequested(): boolean;
  isSelected(): boolean;

  // Accessors
  effectType(): string | null;
  motionType(): string | null;
  weaponImageId(): number;

  // Damage and Weapon Animation
  startDamagePopup(): void;
  shouldPopupDamage(): boolean;
  startWeaponAnimation(weaponImageId: number): void;

  // Actions
  action(index: number): Game_Action;
  setAction(index: number, action: Game_Action): void;
  numActions(): number;
  clearActions(): void;

  // Results
  result(): Game_ActionResult;
  clearResult(): void;

  // Time Progress Battle (TPB)
  clearTpbChargeTime(): void;
  applyTpbPenalty(): void;
  initTpbChargeTime(advantageous: boolean): void;
  tpbChargeTime(): number;
  startTpbCasting(): void;
  startTpbAction(): void;
  isTpbCharged(): boolean;
  isTpbReady(): boolean;
  isTpbTimeout(): boolean;
  updateTpb(): void;
  updateTpbChargeTime(): void;
  updateTpbCastTime(): void;
  updateTpbAutoBattle(): void;
  updateTpbIdleTime(): void;
  tpbAcceleration(): number;
  tpbRelativeSpeed(): number;
  tpbSpeed(): number;
  tpbBaseSpeed(): number;
  tpbRequiredCastTime(): number;
  onTpbCharged(): void;
  shouldDelayTpbCharge(): boolean;
  finishTpbCharge(): void;
  isTpbTurnEnd(): boolean;
  initTpbTurn(): void;
  startTpbTurn(): void;
  makeTpbActions(): void;
  onTpbTimeout(): void;

  // Turn Handling
  turnCount(): number;
  canInput(): boolean;

  // State Handling
  refresh(): void;
  addState(stateId: number): void;
  isStateAddable(stateId: number): boolean;
  isStateRestrict(stateId: number): boolean;
  onRestrict(): void;
  removeState(stateId: number): void;

  // Battle State
  escape(): void;
  addBuff(paramId: number, turns: number): void;
  addDebuff(paramId: number, turns: number): void;
  removeBuff(paramId: number): void;
  removeBattleStates(): void;
  removeAllBuffs(): void;
  removeStatesAuto(timing: number): void;
  removeBuffsAuto(): void;
  removeStatesByDamage(): void;

  // Actions and Speed
  makeActionTimes(): number;
  makeActions(): void;
  speed(): number;
  makeSpeed(): void;
  currentAction(): Game_Action;
  removeCurrentAction(): void;
  setLastTarget(target: Game_Battler | null): void;

  // Forced Actions
  forceAction(skillId: number, targetIndex: number): void;

  // Item and Resource Handling
  useItem(item: rm.types.UsableItem): void;
  consumeItem(item: rm.types.UsableItem): void;
  gainHp(value: number): void;
  gainMp(value: number): void;
  gainTp(value: number): void;
  gainSilentTp(value: number): void;
  initTp(): void;
  clearTp(): void;
  chargeTpByDamage(damageRate: number): void;

  // Regeneration
  regenerateHp(): void;
  maxSlipDamage(): number;
  regenerateMp(): void;
  regenerateTp(): void;
  regenerateAll(): void;

  // Battle Events
  onBattleStart(advantageous: boolean): void;
  onAllActionsEnd(): void;
  onTurnEnd(): void;
  onBattleEnd(): void;
  onDamage(value: number): void;

  // Action States
  setActionState(actionState: string): void;
  isUndecided(): boolean;
  isInputting(): boolean;
  isWaiting(): boolean;
  isActing(): boolean;
  isChanting(): boolean;
  isGuardWaiting(): boolean;

  // Animations and Effects
  performActionStart(action: Game_Action): void;
  performAction(action: Game_Action): void;
  performActionEnd(): void;
  performDamage(): void;
  performMiss(): void;
  performRecovery(): void;
  performEvasion(): void;
  performMagicEvasion(): void;
  performCounter(): void;
  performReflection(): void;
  performSubstitute(target: Game_Battler): void;
  performCollapse(): void;
}
