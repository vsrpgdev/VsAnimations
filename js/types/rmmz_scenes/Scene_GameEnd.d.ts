// Scene_GameEnd.d.ts

declare class Scene_GameEnd extends Scene_MenuBase {
  private _commandWindow: Window_GameEnd;

  constructor();

  /**
   * Initialisiert die Szene.
   */
  initialize(): void;

  /**
   * Erstellt die Elemente der Szene.
   */
  create(): void;

  /**
   * Stoppt die Szene und schließt das Befehlsfenster.
   */
  stop(): void;

  /**
   * Erstellt den Hintergrund der Szene und setzt die Hintergrund-Deckkraft.
   */
  createBackground(): void;

  /**
   * Erstellt das Befehlsfenster.
   */
  createCommandWindow(): void;

  /**
   * Berechnet das Rechteck für das Befehlsfenster.
   */
  commandWindowRect(): Rectangle;

  /**
   * Behandelt den Befehl "Zum Titel zurückkehren".
   */
  commandToTitle(): void;
}
