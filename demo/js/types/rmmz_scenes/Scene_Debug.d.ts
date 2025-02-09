// Scene_Debug.d.ts

declare class Scene_Debug extends Scene_MenuBase {
  private _rangeWindow: Window_DebugRange;
  private _editWindow: Window_DebugEdit;
  private _debugHelpWindow: Window_Base;

  constructor();

  /**
   * Initialisiert die Szene.
   */
  initialize(): void;

  /**
   * Erstellt die Szene und deren Elemente.
   */
  create(): void;

  /**
   * Gibt an, ob eine Schaltfläche zum Abbrechen benötigt wird.
   * @returns false - Diese Szene benötigt keine Abbrechen-Schaltfläche.
   */
  needsCancelButton(): boolean;

  /**
   * Erstellt das Bereichsfenster.
   */
  createRangeWindow(): void;

  /**
   * Berechnet das Rechteck für das Bereichsfenster.
   */
  rangeWindowRect(): Rectangle;

  /**
   * Erstellt das Bearbeitungsfenster.
   */
  createEditWindow(): void;

  /**
   * Berechnet das Rechteck für das Bearbeitungsfenster.
   */
  editWindowRect(): Rectangle;

  /**
   * Erstellt das Debug-Hilfefenster.
   */
  createDebugHelpWindow(): void;

  /**
   * Berechnet das Rechteck für das Debug-Hilfefenster.
   */
  debugHelpWindowRect(): Rectangle;

  /**
   * Behandelt den "OK"-Befehl im Bereichsfenster.
   */
  onRangeOk(): void;

  /**
   * Behandelt den "Abbrechen"-Befehl im Bearbeitungsfenster.
   */
  onEditCancel(): void;

  /**
   * Aktualisiert das Debug-Hilfefenster.
   */
  refreshHelpWindow(): void;

  /**
   * Gibt den Hilfetext für die Debug-Funktion zurück.
   * @returns Der Hilfetext für den aktuellen Modus.
   */
  helpText(): string;
}
