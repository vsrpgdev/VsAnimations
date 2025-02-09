declare class Window_NameEdit extends Window_StatusBase {
  private _actor: Game_Actor | null;
  private _maxLength: number;
  private _name: string;
  private _index: number;
  private _defaultName: string;

  constructor(rect: Rectangle);

  initialize(rect: Rectangle): void;
  setup(actor: Game_Actor, maxLength: number): void;
  name(): string;
  restoreDefault(): boolean;
  add(ch: string): boolean;
  back(): boolean;
  faceWidth(): number;
  charWidth(): number;
  left(): number;
  itemRect(index: number): Rectangle;
  underlineRect(index: number): Rectangle;
  underlineColor(): string;
  drawUnderline(index: number): void;
  drawChar(index: number): void;
  refresh(): void;
}