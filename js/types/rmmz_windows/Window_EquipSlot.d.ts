declare class Window_EquipCommand extends Window_HorzCommand {
  constructor(rect: Rectangle);

  /**
   * Initialisiert das Fenster.
   * @param rect Der Bereich des Fensters.
   */
  initialize(rect: Rectangle): void;

  /**
   * Gibt die maximale Anzahl von Spalten zurück.
   */
  maxCols(): number;

  /**
   * Erstellt die Befehlsliste für das Ausrüstungsmenü.
   */
  makeCommandList(): void;
}
