declare class Sprite_Battleback extends TilingSprite {
  constructor(type: number);

  initialize(type: number): void;

  /**
   * Adjusts the position, scale, and size of the battleback sprite
   * based on the screen dimensions and battle system type.
   */
  adjustPosition(): void;

  /**
   * Loads the bitmap for the first battleback image.
   * @returns {Bitmap} The loaded bitmap.
   */
  battleback1Bitmap(): Bitmap;

  /**
   * Loads the bitmap for the second battleback image.
   * @returns {Bitmap} The loaded bitmap.
   */
  battleback2Bitmap(): Bitmap;

  /**
   * Determines the name of the first battleback image.
   * @returns {string} The name of the first battleback image.
   */
  battleback1Name(): string;

  /**
   * Determines the name of the second battleback image.
   * @returns {string} The name of the second battleback image.
   */
  battleback2Name(): string;

  /**
   * Determines the name of the first overworld battleback image.
   * @returns {string} The name of the first overworld battleback image.
   */
  overworldBattleback1Name(): string;

  /**
   * Determines the name of the second overworld battleback image.
   * @returns {string} The name of the second overworld battleback image.
   */
  overworldBattleback2Name(): string;

  /**
   * Determines the name of the first normal terrain battleback image.
   * @returns {string} The name of the first normal terrain battleback image.
   */
  normalBattleback1Name(): string;

  /**
   * Determines the name of the second normal terrain battleback image.
   * @returns {string} The name of the second normal terrain battleback image.
   */
  normalBattleback2Name(): string;

  /**
   * Determines the name of the first terrain-specific battleback image.
   * @param {number} type - The terrain type.
   * @returns {string | null} The name of the first terrain-specific battleback image, or null if none.
   */
  terrainBattleback1Name(type: number): string | null;

  /**
   * Determines the name of the second terrain-specific battleback image.
   * @param {number} type - The terrain type.
   * @returns {string | null} The name of the second terrain-specific battleback image, or null if none.
   */
  terrainBattleback2Name(type: number): string | null;

  /**
   * Returns the default name of the first battleback image.
   * @returns {string} The default name.
   */
  defaultBattleback1Name(): string;

  /**
   * Returns the default name of the second battleback image.
   * @returns {string} The default name.
   */
  defaultBattleback2Name(): string;

  /**
   * Returns the name of the first ship battleback image.
   * @returns {string} The name of the first ship battleback image.
   */
  shipBattleback1Name(): string;

  /**
   * Returns the name of the second ship battleback image.
   * @returns {string} The name of the second ship battleback image.
   */
  shipBattleback2Name(): string;

  /**
   * Retrieves the autotile type at a specific layer.
   * @param {number} z - The layer index.
   * @returns {number} The autotile type.
   */
  autotileType(z: number): number;
}
