declare class Sprite_Character extends Sprite {
  private _character: any;
  private _balloonDuration: number;
  private _tilesetId: number;
  private _upperBody: Sprite | null;
  private _lowerBody: Sprite | null;
  private _tileId: number | null;
  private _characterName: string | null;
  private _characterIndex: number | null;
  private _isBigCharacter: boolean;
  private _bushDepth: number;

  /**
   * Creates an instance of Sprite_Character.
   * @param character - The character object to be displayed.
   */
  constructor(character: any);

  /**
   * Initializes the sprite with the character object.
   * @param character - The character object to be displayed.
   */
  initialize(character: any): void;

  /**
   * Initializes members and properties of the sprite.
   */
  initMembers(): void;

  /**
   * Sets the character for the sprite.
   * @param character - The character object to be set.
   */
  setCharacter(character: any): void;

  /**
   * Checks if the given character matches the sprite's character.
   * @param character - The character to compare.
   */
  checkCharacter(character: any): boolean;

  /**
   * Updates the sprite every frame.
   */
  update(): void;

  /**
   * Updates the visibility of the sprite based on the character's state.
   */
  updateVisibility(): void;

  /**
   * Returns whether the character is a tile-based character.
   */
  isTile(): boolean;

  /**
   * Returns whether the character is an object character.
   */
  isObjectCharacter(): boolean;

  /**
   * Returns whether the character is empty (no tile or image).
   */
  isEmptyCharacter(): boolean;

  /**
   * Loads the tileset bitmap for the given tile ID.
   * @param tileId - The tile ID to load the bitmap for.
   */
  tilesetBitmap(tileId: number): Bitmap;

  /**
   * Updates the bitmap of the sprite based on the character's image or tile.
   */
  updateBitmap(): void;

  /**
   * Checks if the character's image has changed.
   */
  isImageChanged(): boolean;

  /**
   * Sets the bitmap for a tile-based character.
   */
  setTileBitmap(): void;

  /**
   * Sets the bitmap for a character image.
   */
  setCharacterBitmap(): void;

  /**
   * Updates the frame of the sprite based on the character's current state.
   */
  updateFrame(): void;

  /**
   * Updates the frame for a tile-based character.
   */
  updateTileFrame(): void;

  /**
   * Updates the frame for an image-based character.
   */
  updateCharacterFrame(): void;

  /**
   * Returns the block X coordinate of the character in the character sheet.
   */
  characterBlockX(): number;

  /**
   * Returns the block Y coordinate of the character in the character sheet.
   */
  characterBlockY(): number;

  /**
   * Returns the pattern X coordinate of the character's animation frame.
   */
  characterPatternX(): number;

  /**
   * Returns the pattern Y coordinate of the character's animation frame.
   */
  characterPatternY(): number;

  /**
   * Returns the width of a single pattern in the character's bitmap.
   */
  patternWidth(): number;

  /**
   * Returns the height of a single pattern in the character's bitmap.
   */
  patternHeight(): number;

  /**
   * Updates the half-body sprites for characters in a bush.
   */
  updateHalfBodySprites(): void;

  /**
   * Creates the half-body sprites for characters in a bush.
   */
  createHalfBodySprites(): void;

  /**
   * Updates the position of the sprite based on the character's screen position.
   */
  updatePosition(): void;

  /**
   * Updates other properties of the sprite, such as opacity and blend mode.
   */
  updateOther(): void;
}
