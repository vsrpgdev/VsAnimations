
declare class Window_Base extends Window {
  protected _opening: boolean;
  protected _closing: boolean;
  protected _dimmerSprite: Sprite | null;

  constructor(rect: Rectangle);

  /**
   * Initialisiert das Fenster mit den gegebenen Dimensionen.
   * @param rect Das Rechteck, das Position und Größe definiert.
   */
  initialize(rect: Rectangle): void;

  /**
   * Zerstört das Fenster und bereinigt Ressourcen.
   */
  destroy(options?: any): void;

  /**
   * Prüft, ob das übergebene Objekt ein Rechteck ist.
   * @param rect Das zu prüfende Rechteck.
   */
  checkRectObject(rect: Rectangle): void;

  lineHeight(): number;
  itemWidth(): number;
  itemHeight(): number;
  itemPadding(): number;
  baseTextRect(): Rectangle;

  loadWindowskin(): void;
  updatePadding(): void;
  updateBackOpacity(): void;
  fittingHeight(numLines: number): number;
  updateTone(): void;

  createContents(): void;
  destroyContents(): void;

  contentsWidth(): number;
  contentsHeight(): number;

  resetFontSettings(): void;
  resetTextColor(): void;

  update(): void;
  updateOpen(): void;
  updateClose(): void;

  open(): void;
  close(): void;

  isOpening(): boolean;
  isClosing(): boolean;

  show(): void;
  hide(): void;

  activate(): void;
  deactivate(): void;

  systemColor(): string;
  translucentOpacity(): number;

  changeTextColor(color: string): void;
  changeOutlineColor(color: string): void;
  changePaintOpacity(enabled: boolean): void;

  drawRect(x: number, y: number, width: number, height: number): void;
  drawText(text: string, x: number, y: number, maxWidth: number, align: string): void;
  textWidth(text: string): number;

  drawTextEx(text: string, x: number, y: number, width: number): number;
  textSizeEx(text: string): { width: number; height: number };

  createTextState(text: string, x: number, y: number, width: number): TextState;
  processAllText(textState: TextState): void;
  flushTextState(textState: TextState): void;
  createTextBuffer(rtl: boolean): string;

  convertEscapeCharacters(text: string): string;

  actorName(n: number): string;
  partyMemberName(n: number): string;

  processCharacter(textState: TextState): void;
  processControlCharacter(textState: TextState, c: string): void;

  processNewLine(textState: TextState): void;
  obtainEscapeCode(textState: TextState): string;
  obtainEscapeParam(textState: TextState): number;

  processEscapeCharacter(code: string, textState: TextState): void;

  processColorChange(colorIndex: number): void;
  processDrawIcon(iconIndex: number, textState: TextState): void;

  makeFontBigger(): void;
  makeFontSmaller(): void;

  calcTextHeight(textState: TextState): number;
  maxFontSizeInLine(line: string): number;

  drawIcon(iconIndex: number, x: number, y: number): void;

  drawFace(faceName: string, faceIndex: number, x: number, y: number, width?: number, height?: number): void;

  drawCharacter(characterName: string, characterIndex: number, x: number, y: number): void;

  drawItemName(item: { iconIndex: number; name: string }, x: number, y: number, width: number): void;

  drawCurrencyValue(value: number, unit: string, x: number, y: number, width: number): void;

  setBackgroundType(type: number): void;
  showBackgroundDimmer(): void;
  createDimmerSprite(): void;
  hideBackgroundDimmer(): void;
  updateBackgroundDimmer(): void;
  refreshDimmerBitmap(): void;

  playCursorSound(): void;
  playOkSound(): void;
  playBuzzerSound(): void;
}
