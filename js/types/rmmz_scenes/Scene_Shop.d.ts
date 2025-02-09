// Scene_Shop.d.ts

declare class Scene_Shop extends Scene_MenuBase {
  private _goods: any[];
  private _purchaseOnly: boolean;
  private _item: any;
  private _goldWindow: Window_Gold;
  private _commandWindow: Window_ShopCommand;
  private _dummyWindow: Window_Base;
  private _numberWindow: Window_ShopNumber;
  private _statusWindow: Window_ShopStatus;
  private _buyWindow: Window_ShopBuy;
  private _categoryWindow: Window_ItemCategory;
  private _sellWindow: Window_ShopSell;

  constructor();

  /**
   * Initialisiert die Szene.
   */
  initialize(): void;

  /**
   * Bereitet die Shopdaten vor.
   * @param goods - Die Warenliste.
   * @param purchaseOnly - Gibt an, ob nur gekauft werden kann.
   */
  prepare(goods: any[], purchaseOnly: boolean): void;

  /**
   * Erstellt die Szene und deren Elemente.
   */
  create(): void;

  /**
   * Erstellt das Goldfenster.
   */
  createGoldWindow(): void;

  /**
   * Berechnet das Rechteck für das Goldfenster.
   */
  goldWindowRect(): Rectangle;

  /**
   * Erstellt das Befehlsfenster.
   */
  createCommandWindow(): void;

  /**
   * Berechnet das Rechteck für das Befehlsfenster.
   */
  commandWindowRect(): Rectangle;

  /**
   * Erstellt das Dummy-Fenster.
   */
  createDummyWindow(): void;

  /**
   * Berechnet das Rechteck für das Dummy-Fenster.
   */
  dummyWindowRect(): Rectangle;

  /**
   * Erstellt das Zahlenfenster.
   */
  createNumberWindow(): void;

  /**
   * Berechnet das Rechteck für das Zahlenfenster.
   */
  numberWindowRect(): Rectangle;

  /**
   * Erstellt das Statusfenster.
   */
  createStatusWindow(): void;

  /**
   * Berechnet das Rechteck für das Statusfenster.
   */
  statusWindowRect(): Rectangle;

  /**
   * Erstellt das Kauf-Fenster.
   */
  createBuyWindow(): void;

  /**
   * Berechnet das Rechteck für das Kauf-Fenster.
   */
  buyWindowRect(): Rectangle;

  /**
   * Erstellt das Kategorienfenster.
   */
  createCategoryWindow(): void;

  /**
   * Berechnet das Rechteck für das Kategorienfenster.
   */
  categoryWindowRect(): Rectangle;

  /**
   * Erstellt das Verkaufsfenster.
   */
  createSellWindow(): void;

  /**
   * Berechnet das Rechteck für das Verkaufsfenster.
   */
  sellWindowRect(): Rectangle;

  /**
   * Gibt die Breite des Statusfensters zurück.
   */
  statusWidth(): number;

  /**
   * Aktiviert das Kauf-Fenster.
   */
  activateBuyWindow(): void;

  /**
   * Aktiviert das Verkaufsfenster.
   */
  activateSellWindow(): void;

  /**
   * Behandelt den Kaufbefehl.
   */
  commandBuy(): void;

  /**
   * Behandelt den Verkaufsbefehl.
   */
  commandSell(): void;

  /**
   * Behandelt den OK-Befehl im Kauf-Fenster.
   */
  onBuyOk(): void;

  /**
   * Behandelt den Abbrechen-Befehl im Kauf-Fenster.
   */
  onBuyCancel(): void;

  /**
   * Behandelt den OK-Befehl im Kategorienfenster.
   */
  onCategoryOk(): void;

  /**
   * Behandelt den Abbrechen-Befehl im Kategorienfenster.
   */
  onCategoryCancel(): void;

  /**
   * Behandelt den OK-Befehl im Verkaufsfenster.
   */
  onSellOk(): void;

  /**
   * Behandelt den Abbrechen-Befehl im Verkaufsfenster.
   */
  onSellCancel(): void;

  /**
   * Behandelt den OK-Befehl im Zahlenfenster.
   */
  onNumberOk(): void;

  /**
   * Behandelt den Abbrechen-Befehl im Zahlenfenster.
   */
  onNumberCancel(): void;

  /**
   * Führt den Kauf eines Items aus.
   * @param number - Die Anzahl der zu kaufenden Items.
   */
  doBuy(number: number): void;

  /**
   * Führt den Verkauf eines Items aus.
   * @param number - Die Anzahl der zu verkaufenden Items.
   */
  doSell(number: number): void;

  /**
   * Beendet die Eingabe der Anzahl.
   */
  endNumberInput(): void;

  /**
   * Gibt die maximale Kaufanzahl zurück.
   */
  maxBuy(): number;

  /**
   * Gibt die maximale Verkaufsanzahl zurück.
   */
  maxSell(): number;

  /**
   * Gibt das verfügbare Geld zurück.
   */
  money(): number;

  /**
   * Gibt die Währungseinheit zurück.
   */
  currencyUnit(): string;

  /**
   * Gibt den Kaufpreis eines Items zurück.
   */
  buyingPrice(): number;

  /**
   * Gibt den Verkaufspreis eines Items zurück.
   */
  sellingPrice(): number;
}
