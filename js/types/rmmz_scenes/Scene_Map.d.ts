// Scene_Map.d.ts

declare class Scene_Map extends Scene_Message {
  protected _waitCount: number;
  protected _encounterEffectDuration: number;
  protected _mapLoaded: boolean;
  protected _touchCount: number;
  protected _menuEnabled: boolean;
  protected _transfer: boolean;
  protected _lastMapWasNull: boolean;
  protected _spriteset: Spriteset_Map;
  protected _mapNameWindow: Window_MapName;
  protected _menuButton: Sprite_Button | null;

  constructor();

  initialize(): void;

  create(): void;

  isReady(): boolean;

  protected onMapLoaded(): void;

  protected onTransfer(): void;

  start(): void;

  protected onTransferEnd(): void;

  protected shouldAutosave(): boolean;

  update(): void;

  protected updateMainMultiply(): void;

  protected updateMain(): void;

  protected isPlayerActive(): boolean;

  protected isFastForward(): boolean;

  stop(): void;

  isBusy(): boolean;

  terminate(): void;

  protected needsFadeIn(): boolean;

  protected needsSlowFadeOut(): boolean;

  protected updateWaitCount(): boolean;

  protected updateDestination(): void;

  protected updateMenuButton(): void;

  protected hideMenuButton(): void;

  protected updateMapNameWindow(): void;

  protected isMenuEnabled(): boolean;

  protected isMapTouchOk(): boolean;

  protected processMapTouch(): void;

  protected isAnyButtonPressed(): boolean;

  protected onMapTouch(): void;

  protected isSceneChangeOk(): boolean;

  protected updateScene(): void;

  protected createDisplayObjects(): void;

  protected createSpriteset(): void;

  protected createAllWindows(): void;

  protected createMapNameWindow(): void;

  protected mapNameWindowRect(): Rectangle;

  protected createButtons(): void;

  protected createMenuButton(): void;

  protected updateTransferPlayer(): void;

  protected updateEncounter(): void;

  protected updateCallMenu(): void;

  protected isMenuCalled(): boolean;

  protected callMenu(): void;

  protected updateCallDebug(): void;

  protected isDebugCalled(): boolean;

  protected fadeInForTransfer(): void;

  protected fadeOutForTransfer(): void;

  protected launchBattle(): void;

  protected stopAudioOnBattleStart(): void;

  protected startEncounterEffect(): void;

  protected updateEncounterEffect(): void;

  protected snapForBattleBackground(): void;

  protected startFlashForEncounter(duration: number): void;

  protected encounterEffectSpeed(): number;
}
