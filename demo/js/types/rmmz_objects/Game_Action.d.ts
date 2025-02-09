declare class Game_Action {
  static EFFECT_RECOVER_HP: number;
  static EFFECT_RECOVER_MP: number;
  static EFFECT_GAIN_TP: number;
  static EFFECT_ADD_STATE: number;
  static EFFECT_REMOVE_STATE: number;
  static EFFECT_ADD_BUFF: number;
  static EFFECT_ADD_DEBUFF: number;
  static EFFECT_REMOVE_BUFF: number;
  static EFFECT_REMOVE_DEBUFF: number;
  static EFFECT_SPECIAL: number;
  static EFFECT_GROW: number;
  static EFFECT_LEARN_SKILL: number;
  static EFFECT_COMMON_EVENT: number;
  static SPECIAL_EFFECT_ESCAPE: number;
  static HITTYPE_CERTAIN: number;
  static HITTYPE_PHYSICAL: number;
  static HITTYPE_MAGICAL: number;

  private _subjectActorId: number;
  private _subjectEnemyIndex: number;
  private _forcing: boolean;
  private _item: Game_Item;
  private _targetIndex: number;

  constructor(subject: Game_Battler, forcing?: boolean);

  initialize(subject: Game_Battler, forcing?: boolean): void;

  clear(): void;

  setSubject(subject: Game_Battler): void;
  subject(): Game_Battler;

  friendsUnit(): Game_Unit;
  opponentsUnit(): Game_Unit;

  setEnemyAction(action: rm.types.EnemyAction): void;
  setAttack(): void;
  setGuard(): void;
  setSkill(skillId: number): void;
  setItem(itemId: number): void;
  setItemObject(object: rm.types.UsableItem): void;
  setTarget(targetIndex: number): void;

  item(): rm.types.UsableItem | null;
  isSkill(): boolean;
  isItem(): boolean;

  numRepeats(): number;

  checkItemScope(list: number[]): boolean;
  isForOpponent(): boolean;
  isForFriend(): boolean;
  isForEveryone(): boolean;
  isForAliveFriend(): boolean;
  isForDeadFriend(): boolean;
  isForUser(): boolean;
  isForOne(): boolean;
  isForRandom(): boolean;
  isForAll(): boolean;
  needsSelection(): boolean;

  numTargets(): number;

  checkDamageType(list: number[]): boolean;
  isHpEffect(): boolean;
  isMpEffect(): boolean;
  isDamage(): boolean;
  isRecover(): boolean;
  isDrain(): boolean;
  isHpRecover(): boolean;
  isMpRecover(): boolean;

  isCertainHit(): boolean;
  isPhysical(): boolean;
  isMagical(): boolean;

  isAttack(): boolean;
  isGuard(): boolean;

  isMagicSkill(): boolean;

  decideRandomTarget(): void;
  setConfusion(): void;

  prepare(): void;

  isValid(): boolean;

  speed(): number;

  makeTargets(): Game_Battler[];

  repeatTargets(targets: Game_Battler[]): Game_Battler[];

  confusionTarget(): Game_Battler | null;

  targetsForEveryone(): Game_Battler[];
  targetsForOpponents(): Game_Battler[];
  targetsForFriends(): Game_Battler[];
  randomTargets(unit: Game_Unit): Game_Battler[];
  targetsForDead(unit: Game_Unit): Game_Battler[];
  targetsForAlive(unit: Game_Unit): Game_Battler[];
  targetsForDeadAndAlive(unit: Game_Unit): Game_Battler[];

  evaluate(): number;
  itemTargetCandidates(): Game_Battler[];
  evaluateWithTarget(target: Game_Battler): number;

  testApply(target: Game_Battler): boolean;
  testLifeAndDeath(target: Game_Battler): boolean;

  hasItemAnyValidEffects(target: Game_Battler): boolean;
  testItemEffect(target: Game_Battler, effect: rm.types.Effect): boolean;

  itemCnt(target: Game_Battler): number;
  itemMrf(target: Game_Battler): number;
  itemHit(target: Game_Battler): number;
  itemEva(target: Game_Battler): number;
  itemCri(target: Game_Battler): number;

  apply(target: Game_Battler): void;
  makeDamageValue(target: Game_Battler, critical: boolean): number;
  evalDamageFormula(target: Game_Battler): number;

  calcElementRate(target: Game_Battler): number;
  elementsMaxRate(target: Game_Battler, elements: number[]): number;

  applyCritical(damage: number): number;
  applyVariance(damage: number, variance: number): number;
  applyGuard(damage: number, target: Game_Battler): number;

  executeDamage(target: Game_Battler, value: number): void;
  executeHpDamage(target: Game_Battler, value: number): void;
  executeMpDamage(target: Game_Battler, value: number): void;

  gainDrainedHp(value: number): void;
  gainDrainedMp(value: number): void;

  applyItemEffect(target: Game_Battler, effect: rm.types.Effect): void;
  itemEffectRecoverHp(target: Game_Battler, effect: rm.types.Effect): void;
  itemEffectRecoverMp(target: Game_Battler, effect: rm.types.Effect): void;
  itemEffectGainTp(target: Game_Battler, effect: rm.types.Effect): void;
  itemEffectAddState(target: Game_Battler, effect: rm.types.Effect): void;
  itemEffectAddAttackState(target: Game_Battler, effect: rm.types.Effect): void;
  itemEffectAddNormalState(target: Game_Battler, effect: rm.types.Effect): void;
  itemEffectRemoveState(target: Game_Battler, effect: rm.types.Effect): void;
  itemEffectAddBuff(target: Game_Battler, effect: rm.types.Effect): void;
  itemEffectAddDebuff(target: Game_Battler, effect: rm.types.Effect): void;
  itemEffectRemoveBuff(target: Game_Battler, effect: rm.types.Effect): void;
  itemEffectRemoveDebuff(target: Game_Battler, effect: rm.types.Effect): void;
  itemEffectSpecial(target: Game_Battler, effect: rm.types.Effect): void;
  itemEffectGrow(target: Game_Battler, effect: rm.types.Effect): void;
  itemEffectLearnSkill(target: Game_Battler, effect: rm.types.Effect): void;
  itemEffectCommonEvent(target: Game_Battler, effect: rm.types.Effect): void;

  makeSuccess(target: Game_Battler): void;
  applyItemUserEffect(target: Game_Battler): void;

  lukEffectRate(target: Game_Battler): number;

  applyGlobal(): void;

  updateLastUsed(): void;
  updateLastSubject(): void;
  updateLastTarget(target: Game_Battler): void;
}
