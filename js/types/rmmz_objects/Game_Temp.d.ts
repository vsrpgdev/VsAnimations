declare interface  Game_Temp extends object {
  private _isPlaytest: boolean;
  private _destinationX: number | null;
  private _destinationY: number | null;
  private _touchTarget: any | null;
  private _touchState: string;
  private _needsBattleRefresh: boolean;
  private _commonEventQueue: number[];
  private _animationQueue: {
    targets: any[];
    animationId: number;
    mirror: boolean;
  }[];
  private _balloonQueue: {
    target: any;
    balloonId: number;
  }[];
  private _lastActionData: number[];

  constructor();

  initialize(): void;

  isPlaytest(): boolean;

  setDestination(x: number, y: number): void;

  clearDestination(): void;

  isDestinationValid(): boolean;

  destinationX(): number | null;

  destinationY(): number | null;

  setTouchState(target: any, state: string): void;

  clearTouchState(): void;

  touchTarget(): any | null;

  touchState(): string;

  requestBattleRefresh(): void;

  clearBattleRefreshRequest(): void;

  isBattleRefreshRequested(): boolean;

  reserveCommonEvent(commonEventId: number): void;

  retrieveCommonEvent(): any;

  clearCommonEventReservation(): void;

  isCommonEventReserved(): boolean;

  requestAnimation(
    targets: any[],
    animationId: number,
    mirror?: boolean
  ): void;

  retrieveAnimation(): {
    targets: any[];
    animationId: number;
    mirror: boolean;
  } | undefined;

  requestBalloon(target: any, balloonId: number): void;

  retrieveBalloon(): {
    target: any;
    balloonId: number;
  } | undefined;

  lastActionData(type: number): number;

  setLastActionData(type: number, value: number): void;

  setLastUsedSkillId(skillID: number): void;

  setLastUsedItemId(itemID: number): void;

  setLastSubjectActorId(actorID: number): void;

  setLastSubjectEnemyIndex(enemyIndex: number): void;

  setLastTargetActorId(actorID: number): void;

  setLastTargetEnemyIndex(enemyIndex: number): void;
}
