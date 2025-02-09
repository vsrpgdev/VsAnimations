// Scene_Battle.d.ts

declare class Scene_Battle extends Scene_Message {
  private _statusWindow: Window_BattleStatus;
  private _logWindow: Window_BattleLog;
  private _partyCommandWindow: Window_PartyCommand;
  private _actorCommandWindow: Window_ActorCommand;
  private _skillWindow: Window_BattleSkill;
  private _itemWindow: Window_BattleItem;
  private _actorWindow: Window_BattleActor;
  private _enemyWindow: Window_BattleEnemy;
  private _spriteset: Spriteset_Battle;
  private _cancelButton: Sprite_Button | null;

  constructor();

  /**
   * Initialisiert die Szene.
   */
  initialize(): void;

  /**
   * Erstellt die Anzeigeobjekte der Szene.
   */
  create(): void;

  /**
   * Startet die Szene und initialisiert den Kampf.
   */
  start(): void;

  /**
   * Aktualisiert die Szene, den Timer und den Bildschirm.
   */
  update(): void;

  /**
   * Beendet die Szene.
   */
  stop(): void;

  /**
   * Führt Aktionen nach dem Beenden der Szene aus.
   */
  terminate(): void;

  /**
   * Aktualisiert die Sichtbarkeit der verschiedenen Fenster.
   */
  updateVisibility(): void;

  /**
   * Aktualisiert den Fortschritt des Kampfes.
   */
  updateBattleProcess(): void;

  /**
   * Prüft, ob die Zeit aktiv ist.
   */
  isTimeActive(): boolean;

  /**
   * Prüft, ob ein Eingabefenster aktiv ist.
   */
  isAnyInputWindowActive(): boolean;

  /**
   * Ändert das aktive Eingabefenster.
   */
  changeInputWindow(): void;

  /**
   * Aktualisiert die Sichtbarkeit des Protokollfensters.
   */
  updateLogWindowVisibility(): void;

  /**
   * Aktualisiert die Sichtbarkeit des Statusfensters.
   */
  updateStatusWindowVisibility(): void;

  /**
   * Prüft, ob das Statusfenster geöffnet werden sollte.
   */
  shouldOpenStatusWindow(): boolean;

  /**
   * Aktualisiert die Position des Statusfensters.
   */
  updateStatusWindowPosition(): void;

  /**
   * Gibt die X-Position des Statusfensters zurück.
   */
  statusWindowX(): number;

  /**
   * Aktualisiert die Sichtbarkeit der Eingabefenster.
   */
  updateInputWindowVisibility(): void;

  /**
   * Aktualisiert die Sichtbarkeit der Abbrechen-Schaltfläche.
   */
  updateCancelButton(): void;

  /**
   * Erstellt alle Anzeigeobjekte für den Kampf.
   */
  createDisplayObjects(): void;

  /**
   * Erstellt das Spriteset für den Kampf.
   */
  createSpriteset(): void;

  /**
   * Erstellt alle Fenster für den Kampf.
   */
  createAllWindows(): void;

  /**
   * Erstellt das Protokollfenster.
   */
  createLogWindow(): void;

  /**
   * Gibt das Rechteck des Protokollfensters zurück.
   */
  logWindowRect(): Rectangle;

  /**
   * Erstellt das Statusfenster.
   */
  createStatusWindow(): void;

  /**
   * Gibt das Rechteck des Statusfensters zurück.
   */
  statusWindowRect(): Rectangle;

  /**
   * Erstellt das Befehlsfenster für die Gruppe.
   */
  createPartyCommandWindow(): void;

  /**
   * Gibt das Rechteck des Gruppenbefehlsfensters zurück.
   */
  partyCommandWindowRect(): Rectangle;

  /**
   * Erstellt das Befehlsfenster für den Schauspieler.
   */
  createActorCommandWindow(): void;

  /**
   * Gibt das Rechteck des Schauspielerbefehlsfensters zurück.
   */
  actorCommandWindowRect(): Rectangle;

  /**
   * Erstellt das Hilfefenster.
   */
  createHelpWindow(): void;

  /**
   * Gibt das Rechteck des Hilfefensters zurück.
   */
  helpWindowRect(): Rectangle;

  /**
   * Erstellt das Fertigkeitsfenster.
   */
  createSkillWindow(): void;

  /**
   * Gibt das Rechteck des Fertigkeitsfensters zurück.
   */
  skillWindowRect(): Rectangle;

  /**
   * Erstellt das Gegenstandsfenster.
   */
  createItemWindow(): void;

  /**
   * Gibt das Rechteck des Gegenstandsfensters zurück.
   */
  itemWindowRect(): Rectangle;

  /**
   * Erstellt das Schauspielerfenster.
   */
  createActorWindow(): void;

  /**
   * Gibt das Rechteck des Schauspielerfensters zurück.
   */
  actorWindowRect(): Rectangle;

  /**
   * Erstellt das Gegnerfenster.
   */
  createEnemyWindow(): void;

  /**
   * Gibt das Rechteck des Gegnerfensters zurück.
   */
  enemyWindowRect(): Rectangle;

  /**
   * Startet die Auswahl der Befehle für die Gruppe.
   */
  startPartyCommandSelection(): void;

  /**
   * Behandelt die Auswahl des Kampf-Befehls.
   */
  commandFight(): void;

  /**
   * Behandelt die Auswahl des Flucht-Befehls.
   */
  commandEscape(): void;

  /**
   * Startet die Auswahl der Befehle für den Schauspieler.
   */
  startActorCommandSelection(): void;

  /**
   * Führt eine Angriffsaktion aus.
   */
  commandAttack(): void;

  /**
   * Öffnet das Fertigkeitsfenster.
   */
  commandSkill(): void;

  /**
   * Führt eine Verteidigungsaktion aus.
   */
  commandGuard(): void;

  /**
   * Öffnet das Gegenstandsfenster.
   */
  commandItem(): void;

  /**
   * Beendet die Befehlsauswahl.
   */
  commandCancel(): void;

  /**
   * Wechselt zum nächsten Befehl.
   */
  selectNextCommand(): void;

  /**
   * Wechselt zum vorherigen Befehl.
   */
  selectPreviousCommand(): void;

  /**
   * Beginnt die Auswahl eines Schauspielers.
   */
  startActorSelection(): void;

  /**
   * Behandelt die Bestätigung der Schauspielerauswahl.
   */
  onActorOk(): void;

  /**
   * Behandelt das Abbrechen der Schauspielerauswahl.
   */
  onActorCancel(): void;

  /**
   * Beginnt die Auswahl eines Gegners.
   */
  startEnemySelection(): void;

  /**
   * Behandelt die Bestätigung der Gegnerauswahl.
   */
  onEnemyOk(): void;

  /**
   * Behandelt das Abbrechen der Gegnerauswahl.
   */
  onEnemyCancel(): void;

  /**
   * Behandelt die Bestätigung der Fertigkeitsauswahl.
   */
  onSkillOk(): void;

  /**
   * Behandelt das Abbrechen der Fertigkeitsauswahl.
   */
  onSkillCancel(): void;

  /**
   * Behandelt die Bestätigung der Gegenstandsauswahl.
   */
  onItemOk(): void;

  /**
   * Behandelt das Abbrechen der Gegenstandsauswahl.
   */
  onItemCancel(): void;

  /**
   * Behandelt die Auswahl einer Aktion.
   */
  onSelectAction(): void;

  /**
   * Beendet die Befehlsauswahl.
   */
  endCommandSelection(): void;
}
