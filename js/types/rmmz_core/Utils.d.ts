//=============================================================================
// rmmz_utils.d.ts
//=============================================================================

/**
 * The static Utils class that defines utility methods.
 */
declare class Utils {
  private constructor();

  /** The name of the RPG Maker. "MZ" in the current version. */
  static RPGMAKER_NAME: string;

  /** The version of the RPG Maker. */
  static RPGMAKER_VERSION: string;

  /**
   * Checks whether the current RPG Maker version is greater than or equal to the given version.
   * @param version - The "x.x.x" format string to compare.
   * @returns True if the current version is greater than or equal to the given version.
   */
  static checkRMVersion(version: string): boolean;

  /**
   * Checks whether the option is in the query string.
   * @param name - The option name.
   * @returns True if the option is in the query string.
   */
  static isOptionValid(name: string): boolean;

  /**
   * Checks whether the platform is NW.js.
   * @returns True if the platform is NW.js.
   */
  static isNwjs(): boolean;

  /**
   * Checks whether the platform is a mobile device.
   * @returns True if the platform is a mobile device.
   */
  static isMobileDevice(): boolean;

  /**
   * Checks whether the browser is Mobile Safari.
   * @returns True if the browser is Mobile Safari.
   */
  static isMobileSafari(): boolean;

  /**
   * Checks whether the browser is Android Chrome.
   * @returns True if the browser is Android Chrome.
   */
  static isAndroidChrome(): boolean;

  /**
   * Checks whether the browser is accessing local files.
   * @returns True if the browser is accessing local files.
   */
  static isLocal(): boolean;

  /**
   * Checks whether the browser supports WebGL.
   * @returns True if the browser supports WebGL.
   */
  static canUseWebGL(): boolean;

  /**
   * Checks whether the browser supports Web Audio API.
   * @returns True if the browser supports Web Audio API.
   */
  static canUseWebAudioAPI(): boolean;

  /**
   * Checks whether the browser supports CSS Font Loading.
   * @returns True if the browser supports CSS Font Loading.
   */
  static canUseCssFontLoading(): boolean;

  /**
   * Checks whether the browser supports IndexedDB.
   * @returns True if the browser supports IndexedDB.
   */
  static canUseIndexedDB(): boolean;

  /**
   * Checks whether the browser can play ogg files.
   * @returns True if the browser can play ogg files.
   */
  static canPlayOgg(): boolean;

  /**
   * Checks whether the browser can play webm files.
   * @returns True if the browser can play webm files.
   */
  static canPlayWebm(): boolean;

  /**
   * Encodes a URI component without escaping slash characters.
   * @param str - The input string.
   * @returns Encoded string.
   */
  static encodeURI(str: string): string;

  /**
   * Gets the filename that does not include subfolders.
   * @param filename - The filename with subfolders.
   * @returns The filename without subfolders.
   */
  static extractFileName(filename: string): string;

  /**
   * Escapes special characters for HTML.
   * @param str - The input string.
   * @returns Escaped string.
   */
  static escapeHtml(str: string): string;

  /**
   * Checks whether the string contains any Arabic characters.
   * @param str - The input string.
   * @returns True if the string contains any Arabic characters.
   */
  static containsArabic(str: string): boolean;

  /**
   * Sets information related to encryption.
   * @param hasImages - Whether the image files are encrypted.
   * @param hasAudio - Whether the audio files are encrypted.
   * @param key - The encryption key.
   */
  static setEncryptionInfo(hasImages: boolean, hasAudio: boolean, key: string): void;

  /**
   * Checks whether the image files in the game are encrypted.
   * @returns True if the image files are encrypted.
   */
  static hasEncryptedImages(): boolean;

  /**
   * Checks whether the audio files in the game are encrypted.
   * @returns True if the audio files are encrypted.
   */
  static hasEncryptedAudio(): boolean;

  /**
   * Decrypts encrypted data.
   * @param source - The data to be decrypted.
   * @returns The decrypted data.
   */
  static decryptArrayBuffer(source: ArrayBuffer): ArrayBuffer;

  static _audioElement :HTMLAudioElement;
  static _videoElement :HTMLVideoElement;

  static _hasEncryptedImages? : boolean;
  static _hasEncryptedAudio? : boolean;

  static _encryptionKey?: string;
  
}
