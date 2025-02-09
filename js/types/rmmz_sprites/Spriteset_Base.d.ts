declare class Spriteset_Base extends Sprite {
  protected _baseSprite: Sprite;
  protected _blackScreen: ScreenSprite;
  protected _baseColorFilter: ColorFilter;
  protected _overallColorFilter: ColorFilter;
  protected _pictureContainer: Sprite;
  protected _timerSprite: Sprite_Timer;
  protected _animationSprites: (Sprite_Animation | Sprite_AnimationMV)[];
  protected _effectsContainer: Sprite;

  constructor();

  /**
   * Initialisiert die Spriteset-Instanz und ihre Ebenen.
   */
  initialize(): void;

  /**
   * Entfernt alle Animationen und zerstört die Instanz.
   * @param options Zusätzliche Zerstörungsoptionen.
   */
  destroy(options?: any): void;

  /**
   * Lädt Systembilder (Platzhalter für spezifische Implementierungen).
   */
  loadSystemImages(): void;

  /**
   * Erstellt die untere Ebene des Spritesets.
   */
  createLowerLayer(): void;

  /**
   * Erstellt die obere Ebene des Spritesets.
   */
  createUpperLayer(): void;

  /**
   * Erstellt den Basissprite und den schwarzen Bildschirm.
   */
  createBaseSprite(): void;

  /**
   * Erstellt die Filter für die Basissprite-Ebene.
   */
  createBaseFilters(): void;

  /**
   * Erstellt Sprites für Bilder.
   */
  createPictures(): void;

  /**
   * Gibt das Rechteck des Bildcontainers zurück.
   */
  pictureContainerRect(): Rectangle;

  /**
   * Erstellt den Timer-Sprite.
   */
  createTimer(): void;

  /**
   * Erstellt die Filter für die gesamte Sprite-Ebene.
   */
  createOverallFilters(): void;

  /**
   * Aktualisiert die Basisfilter.
   */
  updateBaseFilters(): void;

  /**
   * Aktualisiert die Filter für die gesamte Sprite-Ebene.
   */
  updateOverallFilters(): void;

  /**
   * Aktualisiert die Position des Spritesets basierend auf dem Kamerazoom und -versatz.
   */
  updatePosition(): void;

  /**
   * Findet den Ziel-Sprite für eine Animation (Platzhalter für spezifische Implementierungen).
   * @param target Das Zielobjekt.
   */
  findTargetSprite(target: any): Sprite | null;

  /**
   * Aktualisiert die laufenden Animationen.
   */
  updateAnimations(): void;

  /**
   * Verarbeitet ausstehende Animationsanforderungen.
   */
  processAnimationRequests(): void;

  /**
   * Erstellt eine neue Animation basierend auf der übergebenen Anfrage.
   * @param request Die Animationsanfrage.
   */
  createAnimation(request: any): void;

  /**
   * Erstellt einen Animationssprite.
   * @param targets Zielobjekte.
   * @param animation Animationsdaten.
   * @param mirror Gibt an, ob die Animation gespiegelt werden soll.
   * @param delay Verzögerung vor der Animation.
   */
  createAnimationSprite(
      targets: any[],
      animation: any,
      mirror: boolean,
      delay: number
  ): void;

  /**
   * Überprüft, ob die Animation ein MV-Format verwendet.
   * @param animation Die Animationsdaten.
   */
  isMVAnimation(animation: any): boolean;

  /**
   * Erstellt Ziel-Sprites für die Animation.
   * @param targets Zielobjekte.
   */
  makeTargetSprites(targets: any[]): Sprite[];

  /**
   * Gibt den letzten Animationssprite zurück.
   */
  lastAnimationSprite(): Sprite_Animation | Sprite_AnimationMV | undefined;

  /**
   * Überprüft, ob die Animation für jedes Ziel separat abgespielt werden soll.
   * @param animation Die Animationsdaten.
   */
  isAnimationForEach(animation: any): boolean;

  /**
   * Gibt die Basisverzögerung für Animationen zurück.
   */
  animationBaseDelay(): number;

  /**
   * Gibt die Verzögerung zwischen aufeinanderfolgenden Animationen zurück.
   */
  animationNextDelay(): number;

  /**
   * Überprüft, ob die Animation für ein Ziel gespiegelt werden soll.
   * @param target Das Zielobjekt.
   */
  animationShouldMirror(target: any): boolean;

  /**
   * Entfernt eine Animation aus dem Spriteset.
   * @param sprite Der Animationssprite.
   */
  removeAnimation(sprite: Sprite_Animation | Sprite_AnimationMV): void;

  /**
   * Entfernt alle laufenden Animationen.
   */
  removeAllAnimations(): void;

  /**
   * Überprüft, ob Animationen abgespielt werden.
   */
  isAnimationPlaying(): boolean;
}
