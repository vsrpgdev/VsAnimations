declare class BattleManager {
  private static _phase: string;
  private static _inputting: boolean;
  private static _canEscape: boolean;
  private static _canLose: boolean;
  private static _battleTest: boolean;
  private static _eventCallback: ((result: number) => void) | null;
  private static _preemptive: boolean;
  private static _surprise: boolean;
  private static _currentActor: Game_Actor | null;
  private static _actionForcedBattler: Game_Battler | null;
  private static _mapBgm: any;
  private static _mapBgs: any;
  private static _actionBattlers: Game_Battler[];
  private static _subject: Game_Battler | null;
  private static _action: Game_Action | null;
  private static _targets: Game_Battler[];
  private static _logWindow: Window_BattleLog | null;
  private static _spriteset: Spriteset_Battle | null;
  private static _escapeRatio: number;
  private static _escaped: boolean;
  private static _rewards: {
      gold: number;
      exp: number;
      items: RPG.ItemBase[];
  };
  private static _tpbNeedsPartyCommand: boolean;

  static setup(troopId: number, canEscape: boolean, canLose: boolean): void;
  private static initMembers(): void;

  static isTpb(): boolean;
  static isActiveTpb(): boolean;
  static isBattleTest(): boolean;
  static setBattleTest(battleTest: boolean): void;
  static setEventCallback(callback: (result: number) => void): void;
  static setLogWindow(logWindow: Window_BattleLog): void;
  static setSpriteset(spriteset: Spriteset_Battle): void;
  static onEncounter(): void;
  private static ratePreemptive(): number;
  private static rateSurprise(): number;

  static saveBgmAndBgs(): void;
  static playBattleBgm(): void;
  static playVictoryMe(): void;
  static playDefeatMe(): void;
  static replayBgmAndBgs(): void;

  private static makeEscapeRatio(): void;
  static update(timeActive: boolean): void;
  private static updatePhase(timeActive: boolean): void;
  private static updateEvent(): boolean;
  private static updateEventMain(): boolean;
  static isBusy(): boolean;

  private static updateTpbInput(): void;
  private static checkTpbInputClose(): void;
  private static checkTpbInputOpen(): void;
  private static isPartyTpbInputtable(): boolean;
  private static needsActorInputCancel(): boolean;
  private static isTpbMainPhase(): boolean;

  static isInputting(): boolean;
  static isInTurn(): boolean;
  static isTurnEnd(): boolean;
  static isAborting(): boolean;
  static isBattleEnd(): boolean;

  static canEscape(): boolean;
  static canLose(): boolean;
  static isEscaped(): boolean;
  static actor(): Game_Actor | null;

  static startBattle(): void;
  private static displayStartMessages(): void;

  static startInput(): void;
  static inputtingAction(): Game_Action | null;

  static selectNextCommand(): void;
  private static selectNextActor(): void;

  static selectPreviousCommand(): void;
  private static selectPreviousActor(): void;

  private static changeCurrentActor(forward: boolean): void;
  private static startActorInput(): void;
  private static finishActorInput(): void;
  private static cancelActorInput(): void;

  private static updateStart(): void;
  static startTurn(): void;

  private static updateTurn(timeActive: boolean): void;
  private static updateTpb(): void;
  private static updateAllTpbBattlers(): void;
  private static updateTpbBattler(battler: Game_Battler): void;
  private static checkTpbTurnEnd(): void;

  private static processTurn(): void;
  private static endBattlerActions(battler: Game_Battler): void;

  static endTurn(): void;
  private static updateTurnEnd(): void;
  private static endAllBattlersTurn(): void;

  private static displayBattlerStatus(battler: Game_Battler, current: boolean): void;
  private static getNextSubject(): Game_Battler | null;

  private static allBattleMembers(): Game_Battler[];

  private static makeActionOrders(): void;

  static startAction(): void;
  private static updateAction(): void;
  private static endAction(): void;

  private static invokeAction(subject: Game_Battler, target: Game_Battler): void;
  private static invokeNormalAction(subject: Game_Battler, target: Game_Battler): void;
  private static invokeCounterAttack(subject: Game_Battler, target: Game_Battler): void;
  private static invokeMagicReflection(subject: Game_Battler, target: Game_Battler): void;

  private static applySubstitute(target: Game_Battler): Game_Battler;
  private static checkSubstitute(target: Game_Battler): boolean;

  static isActionForced(): boolean;
  static forceAction(battler: Game_Battler): void;

  private static processForcedAction(): void;

  static abort(): void;

  private static checkBattleEnd(): boolean;
  private static checkAbort(): boolean;

  private static processVictory(): void;
  static processEscape(): boolean;
  private static onEscapeSuccess(): void;
  private static onEscapeFailure(): void;
  private static processPartyEscape(): void;
  private static processAbort(): void;
  private static processDefeat(): void;

  private static endBattle(result: number): void;
  private static updateBattleEnd(): void;

  private static makeRewards(): void;
  private static displayVictoryMessage(): void;
  private static displayDefeatMessage(): void;
  private static displayEscapeSuccessMessage(): void;
  private static displayEscapeFailureMessage(): void;

  private static displayRewards(): void;
  private static displayExp(): void;
  private static displayGold(): void;
  private static displayDropItems(): void;

  private static gainRewards(): void;
  private static gainExp(): void;
  private static gainGold(): void;
  private static gainDropItems(): void;
}