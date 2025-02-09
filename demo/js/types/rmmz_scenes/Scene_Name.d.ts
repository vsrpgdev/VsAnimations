// Scene_Name.d.ts

declare class Scene_Name extends Scene_MenuBase {
  private _actorId: number;
  private _maxLength: number;
  private _actor: Game_Actor;
  private _editWindow: Window_NameEdit;
  private _inputWindow: Window_NameInput;

  constructor();

  /**
   * Initialisiert die Szene.
   */
  initialize(): void;

  /**
   * Bereitet die Szene vor, indem sie den Actor und die maximale Namenslänge festlegt.
   * @param actorId - Die ID des Actors, dessen Name eingegeben wird.
   * @param maxLength - Die maximale Länge des Namens.
   */
  prepare(actorId: number, maxLength: number): void;

  /**
   * Erstellt die Szene und deren Elemente.
   */
  create(): void;

  /**
   * Startet die Szene.
   */
  start(): void;

  /**
   * Erstellt das Bearbeitungsfenster.
   */
  createEditWindow(): void;

  /**
   * Berechnet das Rechteck für das Bearbeitungsfenster.
   */
  editWindowRect(): Rectangle;

  /**
   * Erstellt das Eingabefenster.
   */
  createInputWindow(): void;

  /**
   * Berechnet das Rechteck für das Eingabefenster.
   */
  inputWindowRect(): Rectangle;

  /**
   * Behandelt den OK-Befehl im Eingabefenster.
   */
  onInputOk(): void;
}
