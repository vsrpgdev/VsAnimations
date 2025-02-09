// Scene_Save.d.ts

declare class Scene_Save extends Scene_File {
  constructor();

  initialize(): void;

  /**
   * Gibt den Modus der Szene zurück.
   * In diesem Fall "save".
   */
  mode(): string;

  /**
   * Gibt den Text für das Hilfsfenster zurück.
   */
  helpWindowText(): string;

  /**
   * Gibt die ID des ersten Speicherplatzes zurück.
   */
  firstSavefileId(): number;

  /**
   * Wird aufgerufen, wenn ein Speicherplatz ausgewählt wurde.
   */
  onSavefileOk(): void;

  /**
   * Führt das Speichern auf dem angegebenen Speicherplatz aus.
   * @param savefileId Die ID des Speicherplatzes.
   */
  executeSave(savefileId: number): void;

  /**
   * Wird aufgerufen, wenn das Speichern erfolgreich war.
   */
  onSaveSuccess(): void;

  /**
   * Wird aufgerufen, wenn das Speichern fehlgeschlagen ist.
   */
  onSaveFailure(): void;
}
