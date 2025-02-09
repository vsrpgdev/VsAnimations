declare class Window_SkillList extends Window_Selectable {
  private _actor: Game_Actor | null;
  private _stypeId: number;
  private _data: rm.types.Skill[];

  constructor(rect: Rectangle);

  /**
   * Initialisiert das Fenster.
   * @param rect Der Bereich des Fensters.
   */
  initialize(rect: Rectangle): void;

  /**
   * Setzt den aktuellen Schauspieler, dessen Fähigkeiten angezeigt werden.
   * @param actor Der Schauspieler.
   */
  setActor(actor: Game_Actor | null): void;

  /**
   * Setzt die Skilltyp-ID, um die Fähigkeiten entsprechend zu filtern.
   * @param stypeId Die Skilltyp-ID.
   */
  setStypeId(stypeId: number): void;

  /**
   * Gibt die maximale Anzahl der Spalten zurück.
   */
  maxCols(): number;

  /**
   * Gibt den Abstand zwischen den Spalten zurück.
   */
  colSpacing(): number;

  /**
   * Gibt die maximale Anzahl der Elemente in der Liste zurück.
   */
  maxItems(): number;

  /**
   * Gibt das derzeit ausgewählte Element zurück.
   */
  item(): rm.types.Skill | null;

  /**
   * Gibt das Element am angegebenen Index zurück.
   * @param index Der Index des Elements.
   */
  itemAt(index: number): rm.types.Skill | null;

  /**
   * Überprüft, ob das derzeit ausgewählte Element aktiviert ist.
   */
  isCurrentItemEnabled(): boolean;

  /**
   * Überprüft, ob ein Element zur aktuellen Skilltyp-ID passt.
   * @param item Das zu überprüfende Element.
   */
  includes(item: rm.types.Skill | null): boolean;

  /**
   * Überprüft, ob der Schauspieler das Element verwenden kann.
   * @param item Das zu überprüfende Element.
   */
  isEnabled(item: rm.types.Skill | null): boolean;

  /**
   * Erstellt die Liste der anzuzeigenden Fähigkeiten.
   */
  makeItemList(): void;

  /**
   * Wählt die zuletzt verwendete Fähigkeit aus.
   */
  selectLast(): void;

  /**
   * Zeichnet das Element an der angegebenen Position.
   * @param index Der Index des Elements.
   */
  drawItem(index: number): void;

  /**
   * Gibt die Breite für die Anzeige der Kosten zurück.
   */
  costWidth(): number;

  /**
   * Zeichnet die Kosten der Fähigkeit (TP oder MP).
   * @param skill Die anzuzeigende Fähigkeit.
   * @param x Die X-Position.
   * @param y Die Y-Position.
   * @param width Die Breite des Bereichs.
   */
  drawSkillCost(skill: rm.types.Skill, x: number, y: number, width: number): void;

  /**
   * Aktualisiert das Hilfefenster basierend auf dem derzeit ausgewählten Element.
   */
  updateHelp(): void;

  /**
   * Aktualisiert und zeichnet die Liste der Elemente neu.
   */
  refresh(): void;
}
