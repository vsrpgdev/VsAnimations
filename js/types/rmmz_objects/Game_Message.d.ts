declare class Game_Message {
  private _texts: string[];
  private _choices: string[];
  private _speakerName: string;
  private _faceName: string;
  private _faceIndex: number;
  private _background: number;
  private _positionType: number;
  private _choiceDefaultType: number;
  private _choiceCancelType: number;
  private _choiceBackground: number;
  private _choicePositionType: number;
  private _numInputVariableId: number;
  private _numInputMaxDigits: number;
  private _itemChoiceVariableId: number;
  private _itemChoiceItypeId: number;
  private _scrollMode: boolean;
  private _scrollSpeed: number;
  private _scrollNoFast: boolean;
  private _choiceCallback: ((choice: number) => void) | null;

  constructor();

  initialize(): void;
  clear(): void;

  choices(): string[];
  speakerName(): string;
  faceName(): string;
  faceIndex(): number;
  background(): number;
  positionType(): number;
  choiceDefaultType(): number;
  choiceCancelType(): number;
  choiceBackground(): number;
  choicePositionType(): number;
  numInputVariableId(): number;
  numInputMaxDigits(): number;
  itemChoiceVariableId(): number;
  itemChoiceItypeId(): number;
  scrollMode(): boolean;
  scrollSpeed(): number;
  scrollNoFast(): boolean;

  add(text: string): void;
  setSpeakerName(speakerName: string | null): void;
  setFaceImage(faceName: string, faceIndex: number): void;
  setBackground(background: number): void;
  setPositionType(positionType: number): void;
  setChoices(choices: string[], defaultType: number, cancelType: number): void;
  setChoiceBackground(background: number): void;
  setChoicePositionType(positionType: number): void;
  setNumberInput(variableId: number, maxDigits: number): void;
  setItemChoice(variableId: number, itemType: number): void;
  setScroll(speed: number, noFast: boolean): void;
  setChoiceCallback(callback: (choice: number) => void): void;

  onChoice(n: number): void;

  hasText(): boolean;
  isChoice(): boolean;
  isNumberInput(): boolean;
  isItemChoice(): boolean;
  isBusy(): boolean;

  newPage(): void;
  allText(): string;
  isRTL(): boolean;
}
