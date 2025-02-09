
declare class Scene_Boot extends Scene_Base 
{
  protected _databaseLoaded: boolean;

  constructor();

  initialize(): void;
  create(): void;
  isReady(): boolean;

  protected onDatabaseLoaded(): void;
  protected setEncryptionInfo(): void;
  protected loadSystemImages(): void;
  protected loadPlayerData(): void;
  protected loadGameFonts(): void;

  protected isPlayerDataLoaded(): boolean;

  start(): void;
  protected startNormalGame(): void;

  protected resizeScreen(): void;
  protected adjustBoxSize(): void;
  protected adjustWindow(): void;

  protected screenScale(): number;
  protected updateDocumentTitle(): void;
  protected checkPlayerLocation(): void;
}
