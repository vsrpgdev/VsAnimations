declare class Game_Picture {
  private _name: string;
  private _origin: number;
  private _x: number;
  private _y: number;
  private _scaleX: number;
  private _scaleY: number;
  private _opacity: number;
  private _blendMode: number;
  private _targetX: number;
  private _targetY: number;
  private _targetScaleX: number;
  private _targetScaleY: number;
  private _targetOpacity: number;
  private _duration: number;
  private _wholeDuration: number;
  private _easingType: number;
  private _easingExponent: number;
  private _tone: number[] | null;
  private _toneTarget: number[] | null;
  private _toneDuration: number;
  private _angle: number;
  private _rotationSpeed: number;

  constructor();

  initialize(): void;

  name(): string;
  origin(): number;
  x(): number;
  y(): number;
  scaleX(): number;
  scaleY(): number;
  opacity(): number;
  blendMode(): number;
  tone(): number[] | null;
  angle(): number;

  initBasic(): void;
  initTarget(): void;
  initTone(): void;
  initRotation(): void;

  show(
    name: string,
    origin: number,
    x: number,
    y: number,
    scaleX: number,
    scaleY: number,
    opacity: number,
    blendMode: number
  ): void;

  move(
    origin: number,
    x: number,
    y: number,
    scaleX: number,
    scaleY: number,
    opacity: number,
    blendMode: number,
    duration: number,
    easingType: number
  ): void;

  rotate(speed: number): void;

  tint(tone: number[], duration: number): void;

  update(): void;
  updateMove(): void;
  updateTone(): void;
  updateRotation(): void;

  private applyEasing(current: number, target: number): number;
  private calcEasing(t: number): number;
  private easeIn(t: number, exponent: number): number;
  private easeOut(t: number, exponent: number): number;
  private easeInOut(t: number, exponent: number): number;
}
