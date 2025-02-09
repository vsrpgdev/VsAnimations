declare class Game_CommonEvent {
  /** Die ID des Common Events. */
  private _commonEventId: number;

  /** Der Interpreter, der die Event-Befehle ausführt. */
  private _interpreter: Game_Interpreter | null;

  /**
   * Initialisiert eine neue Instanz von `Game_CommonEvent`.
   * @param commonEventId - Die ID des zugehörigen Common Events.
   */
  constructor(commonEventId: number);

  /**
   * Gibt das zugehörige Common Event-Datenobjekt zurück.
   * @returns Die Daten des Common Events aus `$dataCommonEvents`.
   */
  event(): RPG.DataCommonEvent;

  /**
   * Gibt die Liste der Befehle des Common Events zurück.
   * @returns Eine Liste von Befehlen des Common Events.
   */
  list(): rm.types.EventCommand[];

  /**
   * Aktualisiert den Zustand des Common Events und erstellt bei Bedarf den Interpreter.
   */
  refresh(): void;

  /**
   * Prüft, ob das Common Event aktiv ist.
   * @returns `true`, wenn das Event aktiv ist, andernfalls `false`.
   */
  isActive(): boolean;

  /**
   * Aktualisiert den Zustand des Interpreters und führt die Befehle des Events aus.
   */
  update(): void;
}
