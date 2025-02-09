declare class Game_System {
  private _saveEnabled: boolean;
  private _menuEnabled: boolean;
  private _encounterEnabled: boolean;
  private _formationEnabled: boolean;
  private _battleCount: number;
  private _winCount: number;
  private _escapeCount: number;
  private _saveCount: number;
  private _versionId: number;
  private _savefileId: number;
  private _framesOnSave: number;
  private _bgmOnSave: any;
  private _bgsOnSave: any;
  private _windowTone: number[] | null;
  private _battleBgm: any;
  private _victoryMe: any;
  private _defeatMe: any;
  private _savedBgm: any;
  private _walkingBgm: any;

  constructor();

  initialize(): void;

  isJapanese(): boolean;
  isChinese(): boolean;
  isKorean(): boolean;
  isCJK(): boolean;
  isRussian(): boolean;

  isSideView(): boolean;
  isAutosaveEnabled(): boolean;
  isMessageSkipEnabled(): boolean;

  isSaveEnabled(): boolean;
  disableSave(): void;
  enableSave(): void;

  isMenuEnabled(): boolean;
  disableMenu(): void;
  enableMenu(): void;

  isEncounterEnabled(): boolean;
  disableEncounter(): void;
  enableEncounter(): void;

  isFormationEnabled(): boolean;
  disableFormation(): void;
  enableFormation(): void;

  battleCount(): number;
  winCount(): number;
  escapeCount(): number;
  saveCount(): number;

  versionId(): number;

  savefileId(): number;
  setSavefileId(savefileId: number): void;

  windowTone(): number[] | null;
  setWindowTone(value: number[]): void;

  battleBgm(): any;
  setBattleBgm(value: any): void;

  victoryMe(): any;
  setVictoryMe(value: any): void;

  defeatMe(): any;
  setDefeatMe(value: any): void;

  onBattleStart(): void;
  onBattleWin(): void;
  onBattleEscape(): void;

  onBeforeSave(): void;
  onAfterLoad(): void;

  playtime(): number;
  playtimeText(): string;

  saveBgm(): void;
  replayBgm(): void;

  saveWalkingBgm(): void;
  replayWalkingBgm(): void;
  saveWalkingBgm2(): void;

  mainFontFace(): string;
  numberFontFace(): string;

  mainFontSize(): number;
  windowPadding(): number;
  windowOpacity(): number;
}
