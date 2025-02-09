// Scene_Gameover.d.ts

declare class Scene_Gameover extends Scene_Base {
  private _backSprite: Sprite;

  constructor();

  /**
   * Initialisiert die Szene.
   */
  initialize(): void;

  /**
   * Erstellt die Objekte der Szene.
   */
  create(): void;

  /**
   * Startet die Szene und führt den Fade-In aus.
   */
  start(): void;

  /**
   * Aktualisiert die Szene, prüft auf Eingaben und wechselt ggf. zum Titelbildschirm.
   */
  update(): void;

  /**
   * Beendet die Szene und führt einen Fade-Out aus.
   */
  stop(): void;

  /**
   * Terminiert die Szene und stoppt alle Audiodateien.
   */
  terminate(): void;

  /**
   * Spielt die Musik für den Game-Over-Bildschirm.
   */
  playGameoverMusic(): void;

  /**
   * Erstellt den Hintergrund des Game-Over-Bildschirms.
   */
  createBackground(): void;

  /**
   * Passt den Hintergrund an den Bildschirm an.
   */
  adjustBackground(): void;

  /**
   * Prüft, ob eine Eingabe zum Wechsel zum Titelbildschirm getätigt wurde.
   */
  isTriggered(): boolean;

  /**
   * Wechselt zum Titelbildschirm.
   */
  gotoTitle(): void;
}
