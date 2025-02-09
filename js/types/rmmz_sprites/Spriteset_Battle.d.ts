declare class Spriteset_Battle extends Spriteset_Base {
  protected _battlebackLocated: boolean;
  protected _backgroundFilter: PIXI.filters.BlurFilter;
  protected _backgroundSprite: Sprite;
  protected _back1Sprite: Sprite_Battleback;
  protected _back2Sprite: Sprite_Battleback;
  protected _battleField: Sprite;
  protected _enemySprites: Sprite_Enemy[];
  protected _actorSprites: Sprite_Actor[];

  constructor();

  /**
   * Initialisiert das Spriteset für die Schlachtansicht.
   */
  initialize(): void;

  /**
   * Lädt die erforderlichen Systembilder.
   */
  loadSystemImages(): void;

  /**
   * Erstellt die untere Ebene des Spritesets.
   */
  createLowerLayer(): void;

  /**
   * Erstellt den Hintergrund-Sprite.
   */
  createBackground(): void;

  /**
   * Erstellt die Battleback-Sprites.
   */
  createBattleback(): void;

  /**
   * Erstellt das Schlachtfeld als Container für die Charakter- und Gegner-Sprites.
   */
  createBattleField(): void;

  /**
   * Gibt die vertikale Verschiebung des Schlachtfelds zurück.
   */
  battleFieldOffsetY(): number;

  /**
   * Aktualisiert die verschiedenen Komponenten des Spritesets.
   */
  update(): void;

  /**
   * Aktualisiert die Battleback-Sprites.
   */
  updateBattleback(): void;

  /**
   * Erstellt die Gegner-Sprites.
   */
  createEnemies(): void;

  /**
   * Vergleicht zwei Gegner-Sprites, um ihre Zeichenreihenfolge zu bestimmen.
   * @param a Das erste Gegner-Sprite.
   * @param b Das zweite Gegner-Sprite.
   */
  compareEnemySprite(a: Sprite_Enemy, b: Sprite_Enemy): number;

  /**
   * Erstellt die Akteur-Sprites für den Side-View-Kampf.
   */
  createActors(): void;

  /**
   * Aktualisiert die Akteur-Sprites basierend auf den aktuellen Kampfmitgliedern.
   */
  updateActors(): void;

  /**
   * Findet den Sprite, der einem bestimmten Zielbattler entspricht.
   * @param target Der Zielbattler.
   */
  findTargetSprite(target: Game_Battler): Sprite_Battler | undefined;

  /**
   * Gibt eine Liste aller Battler-Sprites zurück (Gegner und Akteure).
   */
  battlerSprites(): Sprite_Battler[];

  /**
   * Prüft, ob derzeit ein Effekt für einen Battler aktiv ist.
   */
  isEffecting(): boolean;

  /**
   * Prüft, ob sich derzeit ein Battler bewegt.
   */
  isAnyoneMoving(): boolean;

  /**
   * Prüft, ob das Spriteset beschäftigt ist (Animationen oder Bewegungen).
   */
  isBusy(): boolean;
}
