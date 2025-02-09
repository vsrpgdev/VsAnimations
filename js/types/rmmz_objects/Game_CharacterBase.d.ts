declare class Game_CharacterBase {
  /** X-Koordinate des Charakters */
  get x(): number;
  /** Y-Koordinate des Charakters */
  get y(): number;

  private _x: number;
  private _y: number;
  private _realX: number;
  private _realY: number;
  private _moveSpeed: number;
  private _moveFrequency: number;
  private _opacity: number;
  private _blendMode: number;
  private _direction: number;
  private _pattern: number;
  private _priorityType: number;
  private _tileId: number;
  private _characterName: string;
  private _characterIndex: number;
  private _isObjectCharacter: boolean;
  private _walkAnime: boolean;
  private _stepAnime: boolean;
  private _directionFix: boolean;
  private _through: boolean;
  private _transparent: boolean;
  private _bushDepth: number;
  private _animationId: number;
  private _balloonId: number;
  private _animationPlaying: boolean;
  private _balloonPlaying: boolean;
  private _animationCount: number;
  private _stopCount: number;
  private _jumpCount: number;
  private _jumpPeak: number;
  private _movementSuccess: boolean;

  constructor();

  initialize(): void;
  initMembers(): void;

  pos(x: number, y: number): boolean;
  posNt(x: number, y: number): boolean;

  moveSpeed(): number;
  setMoveSpeed(moveSpeed: number): void;

  moveFrequency(): number;
  setMoveFrequency(moveFrequency: number): void;

  opacity(): number;
  setOpacity(opacity: number): void;

  blendMode(): number;
  setBlendMode(blendMode: number): void;

  isNormalPriority(): boolean;
  setPriorityType(priorityType: number): void;

  isMoving(): boolean;
  isJumping(): boolean;
  jumpHeight(): number;
  isStopping(): boolean;

  checkStop(threshold: number): boolean;
  resetStopCount(): void;

  realMoveSpeed(): number;
  distancePerFrame(): number;

  isDashing(): boolean;
  isDebugThrough(): boolean;

  straighten(): void;
  reverseDir(d: number): number;

  canPass(x: number, y: number, d: number): boolean;
  canPassDiagonally(x: number, y: number, horz: number, vert: number): boolean;

  isMapPassable(x: number, y: number, d: number): boolean;
  isCollidedWithCharacters(x: number, y: number): boolean;
  isCollidedWithEvents(x: number, y: number): boolean;
  isCollidedWithVehicles(x: number, y: number): boolean;

  setPosition(x: number, y: number): void;
  copyPosition(character: Game_CharacterBase): void;
  locate(x: number, y: number): void;

  direction(): number;
  setDirection(d: number): void;

  isTile(): boolean;
  isObjectCharacter(): boolean;
  shiftY(): number;

  scrolledX(): number;
  scrolledY(): number;
  screenX(): number;
  screenY(): number;
  screenZ(): number;

  isNearTheScreen(): boolean;

  update(): void;
  updateStop(): void;
  updateJump(): void;
  updateMove(): void;
  updateAnimation(): void;

  animationWait(): number;
  updateAnimationCount(): void;
  updatePattern(): void;
  maxPattern(): number;

  pattern(): number;
  setPattern(pattern: number): void;
  isOriginalPattern(): boolean;
  resetPattern(): void;

  refreshBushDepth(): void;

  isOnLadder(): boolean;
  isOnBush(): boolean;
  terrainTag(): number;
  regionId(): number;

  increaseSteps(): void;

  tileId(): number;
  characterName(): string;
  characterIndex(): number;

  setImage(characterName: string, characterIndex: number): void;
  setTileImage(tileId: number): void;

  checkEventTriggerTouchFront(d: number): void;
  checkEventTriggerTouch(x: number, y: number): boolean;

  isMovementSucceeded(): boolean;
  setMovementSuccess(success: boolean): void;

  moveStraight(d: number): void;
  moveDiagonally(horz: number, vert: number): void;

  jump(xPlus: number, yPlus: number): void;

  hasWalkAnime(): boolean;
  setWalkAnime(walkAnime: boolean): void;

  hasStepAnime(): boolean;
  setStepAnime(stepAnime: boolean): void;

  isDirectionFixed(): boolean;
  setDirectionFix(directionFix: boolean): void;

  isThrough(): boolean;
  setThrough(through: boolean): void;

  isTransparent(): boolean;
  bushDepth(): number;
  setTransparent(transparent: boolean): void;

  startAnimation(): void;
  startBalloon(): void;

  isAnimationPlaying(): boolean;
  isBalloonPlaying(): boolean;

  endAnimation(): void;
  endBalloon(): void;
}
