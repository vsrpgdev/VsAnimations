declare class Spriteset_Map extends Spriteset_Base {
  protected _balloonSprites: Sprite_Balloon[];
  protected _characterSprites: Sprite_Character[];
  protected _parallax: TilingSprite;
  protected _tilemap: Tilemap;
  protected _shadowSprite: Sprite;
  protected _destinationSprite: Sprite_Destination;
  protected _weather: Weather;
  protected _tileset: any;
  protected _parallaxName: string;

  constructor();

  /**
   * Initialisiert die Spriteset-Instanz für die Karte.
   */
  initialize(): void;

  /**
   * Entfernt alle Ballons und zerstört die Instanz.
   * @param options Zusätzliche Zerstörungsoptionen.
   */
  destroy(options?: any): void;

  /**
   * Lädt die Systembilder für die Karte.
   */
  loadSystemImages(): void;

  /**
   * Erstellt die untere Ebene des Spritesets.
   */
  createLowerLayer(): void;

  /**
   * Aktualisiert alle Komponenten des Spritesets.
   */
  update(): void;

  /**
   * Versteckt Charaktere, die keine Kachel- oder Objekt-Charaktere sind.
   */
  hideCharacters(): void;

  /**
   * Erstellt den Parallax-Sprite.
   */
  createParallax(): void;

  /**
   * Erstellt die Tilemap für die Karte.
   */
  createTilemap(): void;

  /**
   * Lädt das aktuelle Tileset.
   */
  loadTileset(): void;

  /**
   * Erstellt die Sprites für alle Charaktere auf der Karte.
   */
  createCharacters(): void;

  /**
   * Erstellt den Schatten-Sprite für das Luftschiff.
   */
  createShadow(): void;

  /**
   * Erstellt den Ziel-Sprite für die Zielposition.
   */
  createDestination(): void;

  /**
   * Erstellt den Wetter-Sprite.
   */
  createWeather(): void;

  /**
   * Aktualisiert das aktuelle Tileset.
   */
  updateTileset(): void;

  /**
   * Aktualisiert den Parallax-Sprite.
   */
  updateParallax(): void;

  /**
   * Aktualisiert die Tilemap-Position basierend auf der Kameraposition.
   */
  updateTilemap(): void;

  /**
   * Aktualisiert die Position und Sichtbarkeit des Schatten-Sprites.
   */
  updateShadow(): void;

  /**
   * Aktualisiert den Wetter-Sprite.
   */
  updateWeather(): void;

  /**
   * Aktualisiert die Ballon-Sprites.
   */
  updateBalloons(): void;

  /**
   * Verarbeitet ausstehende Ballonanforderungen.
   */
  processBalloonRequests(): void;

  /**
   * Erstellt einen neuen Ballon-Sprite basierend auf der Anfrage.
   * @param request Die Ballonanforderung.
   */
  createBalloon(request: { target: any; balloonId: number }): void;

  /**
   * Entfernt einen Ballon-Sprite.
   * @param sprite Der Ballon-Sprite.
   */
  removeBalloon(sprite: Sprite_Balloon): void;

  /**
   * Entfernt alle Ballon-Sprites.
   */
  removeAllBalloons(): void;

  /**
   * Findet den Sprite, der einem bestimmten Ziel entspricht.
   * @param target Das Zielobjekt.
   */
  findTargetSprite(target: any): Sprite_Character | undefined;

  /**
   * Gibt die Basisverzögerung für Animationen zurück.
   */
  animationBaseDelay(): number;
}
