declare class Window_EquipStatus extends Window_StatusBase {
  private _actor: Game_Actor | null;
  private _tempActor: Game_Actor | null;

  constructor(rect: Rectangle);

  /**
   * Initialisiert das Fenster.
   * @param rect Der Bereich des Fensters.
   */
  initialize(rect: Rectangle): void;

  /**
   * Setzt den Schauspieler, dessen Status angezeigt werden soll.
   * @param actor Der Schauspieler.
   */
  setActor(actor: Game_Actor | null): void;

  /**
   * Setzt den temporären Schauspieler, um vorübergehende Änderungen anzuzeigen.
   * @param tempActor Der temporäre Schauspieler.
   */
  setTempActor(tempActor: Game_Actor | null): void;

  /**
   * Gibt den Abstand zwischen den Spalten zurück.
   */
  colSpacing(): number;

  /**
   * Aktualisiert den Inhalt des Fensters.
   */
  refresh(): void;

  /**
   * Zeichnet alle Parameter.
   */
  drawAllParams(): void;

  /**
   * Zeichnet einen Parameter.
   * @param x Die X-Position.
   * @param y Die Y-Position.
   * @param paramId Die ID des Parameters.
   */
  drawItem(x: number, y: number, paramId: number): void;

  /**
   * Zeichnet den Namen eines Parameters.
   * @param x Die X-Position.
   * @param y Die Y-Position.
   * @param paramId Die ID des Parameters.
   */
  drawParamName(x: number, y: number, paramId: number): void;

  /**
   * Zeichnet den aktuellen Wert eines Parameters.
   * @param x Die X-Position.
   * @param y Die Y-Position.
   * @param paramId Die ID des Parameters.
   */
  drawCurrentParam(x: number, y: number, paramId: number): void;

  /**
   * Zeichnet den Pfeil, der die Veränderung eines Parameters anzeigt.
   * @param x Die X-Position.
   * @param y Die Y-Position.
   */
  drawRightArrow(x: number, y: number): void;

  /**
   * Zeichnet den neuen Wert eines Parameters.
   * @param x Die X-Position.
   * @param y Die Y-Position.
   * @param paramId Die ID des Parameters.
   */
  drawNewParam(x: number, y: number, paramId: number): void;

  /**
   * Gibt die Breite des Pfeils zurück.
   */
  rightArrowWidth(): number;

  /**
   * Gibt die Breite eines Parameters zurück.
   */
  paramWidth(): number;

  /**
   * Gibt die X-Position eines Parameters zurück.
   */
  paramX(): number;

  /**
   * Gibt die Y-Position eines Parameters basierend auf dem Index zurück.
   * @param index Der Index des Parameters.
   */
  paramY(index: number): number;
}
