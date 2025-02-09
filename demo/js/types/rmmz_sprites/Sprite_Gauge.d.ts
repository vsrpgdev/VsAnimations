declare class Sprite_Gauge extends Sprite {
  private _battler: Game_Battler | null;
  private _statusType: string;
  private _value: number;
  private _maxValue: number;
  private _targetValue: number;
  private _targetMaxValue: number;
  private _duration: number;
  private _flashingCount: number;

  constructor();

  initialize(): void;

  /**
   * Initializes the internal members of the gauge sprite.
   */
  initMembers(): void;

  /**
   * Destroys the bitmap associated with the gauge sprite.
   * @param options - Options for destruction.
   */
  destroy(options?: unknown): void;

  /**
   * Creates the bitmap for the gauge sprite.
   */
  createBitmap(): void;

  bitmapWidth(): number;

  bitmapHeight(): number;

  textHeight(): number;

  gaugeHeight(): number;

  gaugeX(): number;

  labelY(): number;

  labelFontFace(): string;

  labelFontSize(): number;

  valueFontFace(): string;

  valueFontSize(): number;

  /**
   * Sets up the gauge with a battler and status type.
   * @param battler - The battler to associate with the gauge.
   * @param statusType - The type of status to display (e.g., "hp", "mp").
   */
  setup(battler: Game_Battler, statusType: string): void;

  /**
   * Updates the gauge sprite each frame.
   */
  update(): void;

  /**
   * Updates the bitmap for the gauge sprite.
   */
  updateBitmap(): void;

  /**
   * Updates the target values for the gauge.
   * @param value - The current value of the gauge.
   * @param maxValue - The maximum value of the gauge.
   */
  updateTargetValue(value: number, maxValue: number): void;

  /**
   * Returns the smoothness of the gauge animation.
   */
  smoothness(): number;

  /**
   * Updates the gauge animation to transition between values.
   */
  updateGaugeAnimation(): void;

  /**
   * Updates the flashing effect for the gauge.
   */
  updateFlashing(): void;

  flashingColor1(): [number, number, number, number];

  flashingColor2(): [number, number, number, number];

  /**
   * Checks if the gauge is valid for display.
   */
  isValid(): boolean;

  currentValue(): number;

  currentMaxValue(): number;

  label(): string;

  gaugeBackColor(): string;

  gaugeColor1(): string;

  gaugeColor2(): string;

  labelColor(): string;

  labelOutlineColor(): string;

  labelOutlineWidth(): number;

  valueColor(): string;

  valueOutlineColor(): string;

  valueOutlineWidth(): number;

  /**
   * Redraws the gauge.
   */
  redraw(): void;

  /**
   * Draws the gauge bar.
   */
  drawGauge(): void;

  /**
   * Draws the rectangle for the gauge.
   * @param x - The x-coordinate of the rectangle.
   * @param y - The y-coordinate of the rectangle.
   * @param width - The width of the rectangle.
   * @param height - The height of the rectangle.
   */
  drawGaugeRect(x: number, y: number, width: number, height: number): void;

  gaugeRate(): number;

  /**
   * Draws the label for the gauge.
   */
  drawLabel(): void;

  /**
   * Sets up the font for the label text.
   */
  setupLabelFont(): void;

  measureLabelWidth(): number;

  labelOpacity(): number;

  /**
   * Draws the current value on the gauge.
   */
  drawValue(): void;

  /**
   * Sets up the font for the value text.
   */
  setupValueFont(): void;
}
