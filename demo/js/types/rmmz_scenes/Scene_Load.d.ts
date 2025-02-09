// Scene_Load.d.ts

declare class Scene_Load extends Scene_File {
  private _loadSuccess: boolean;

  constructor();

  initialize(): void;

  /**
   * Beendet die Szene und führt zusätzliche Aktionen aus, wenn der Ladevorgang erfolgreich war.
   */
  terminate(): void;

  /**
   * Gibt den Modus der Szene zurück.
   * In diesem Fall "load".
   */
  mode(): string;

  /**
   * Gibt den Text für das Hilfsfenster zurück.
   */
  helpWindowText(): string;

  /**
   * Gibt die ID des neuesten Speicherplatzes zurück.
   */
  firstSavefileId(): number;

  /**
   * Wird aufgerufen, wenn ein Speicherplatz ausgewählt wurde.
   */
  onSavefileOk(): void;

  /**
   * Führt das Laden des angegebenen Speicherplatzes aus.
   * @param savefileId Die ID des Speicherplatzes.
   */
  executeLoad(savefileId: number): void;

  /**
   * Wird aufgerufen, wenn das Laden erfolgreich war.
   */
  onLoadSuccess(): void;

  /**
   * Wird aufgerufen, wenn das Laden fehlschlägt.
   */
  onLoadFailure(): void;

  /**
   * Lädt die Karte neu, falls sich die Version geändert hat.
   */
  reloadMapIfUpdated(): void;
}
