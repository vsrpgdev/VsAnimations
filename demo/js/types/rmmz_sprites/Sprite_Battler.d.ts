declare class Sprite_Battler extends Sprite_Clickable {
  protected _battler: any;
  protected _damages: Sprite_Damage[];
  protected _homeX: number;
  protected _homeY: number;
  protected _offsetX: number;
  protected _offsetY: number;
  protected _targetOffsetX: number;
  protected _targetOffsetY: number;
  protected _movementDuration: number;
  protected _selectionEffectCount: number;

  /**
   * Erstellt eine neue Sprite_Battler-Instanz.
   * @param battler - Der Battler, der von diesem Sprite dargestellt wird.
   */
  constructor(battler: any);

  /**
   * Initialisiert alle relevanten Mitglieder.
   */
  initMembers(): void;

  /**
   * Setzt den Battler für dieses Sprite.
   * @param battler - Der zu setzende Battler.
   */
  setBattler(battler: any): void;

  /**
   * Überprüft, ob der angegebene Battler mit diesem Sprite verbunden ist.
   * @param battler - Der zu überprüfende Battler.
   */
  checkBattler(battler: any): boolean;

  /**
   * Gibt das Hauptsprite zurück (normalerweise `this`).
   */
  mainSprite(): Sprite;

  /**
   * Setzt die Heimatposition des Sprites.
   * @param x - Die X-Koordinate der Heimatposition.
   * @param y - Die Y-Koordinate der Heimatposition.
   */
  setHome(x: number, y: number): void;

  /**
   * Aktualisiert das Sprite in jedem Frame.
   */
  update(): void;

  /**
   * Aktualisiert die Sichtbarkeit des Sprites basierend auf dem Battler.
   */
  updateVisibility(): void;

  /**
   * Hauptaktualisierung für Bitmap und Position.
   */
  updateMain(): void;

  /**
   * Aktualisiert die Bitmap des Sprites.
   */
  updateBitmap(): void;

  /**
   * Aktualisiert den Frame des Sprites.
   */
  updateFrame(): void;

  /**
   * Bewegt das Sprite zur Zielposition.
   */
  updateMove(): void;

  /**
   * Aktualisiert die Position des Sprites.
   */
  updatePosition(): void;

  /**
   * Aktualisiert die Schadens-Popup-Anzeige.
   */
  updateDamagePopup(): void;

  /**
   * Aktualisiert den Auswahl-Effekt.
   */
  updateSelectionEffect(): void;

  /**
   * Initialisiert ein Schadens-Popup, falls erforderlich.
   */
  setupDamagePopup(): void;

  /**
   * Erstellt ein Schadenssprite.
   */
  createDamageSprite(): void;

  /**
   * Entfernt und zerstört ein Schadenssprite.
   * @param sprite - Das zu entfernende Schadenssprite.
   */
  destroyDamageSprite(sprite: Sprite_Damage): void;

  /**
   * Gibt den X-Versatz für Schadens-Popups zurück.
   */
  damageOffsetX(): number;

  /**
   * Gibt den Y-Versatz für Schadens-Popups zurück.
   */
  damageOffsetY(): number;

  /**
   * Startet die Bewegung des Sprites zur Zielposition.
   * @param x - Der Ziel-X-Versatz.
   * @param y - Der Ziel-Y-Versatz.
   * @param duration - Die Dauer der Bewegung in Frames.
   */
  startMove(x: number, y: number, duration: number): void;

  /**
   * Wird aufgerufen, wenn die Bewegung des Sprites abgeschlossen ist.
   */
  onMoveEnd(): void;

  /**
   * Gibt zurück, ob das Sprite derzeit einen Effekt zeigt.
   */
  isEffecting(): boolean;

  /**
   * Gibt zurück, ob das Sprite sich bewegt.
   */
  isMoving(): boolean;

  /**
   * Gibt zurück, ob das Sprite sich in der Heimatposition befindet.
   */
  inHomePosition(): boolean;

  /**
   * Wird aufgerufen, wenn die Maus das Sprite betritt.
   */
  onMouseEnter(): void;

  /**
   * Wird aufgerufen, wenn das Sprite gedrückt wird.
   */
  onPress(): void;

  /**
   * Wird aufgerufen, wenn auf das Sprite geklickt wird.
   */
  onClick(): void;
}
