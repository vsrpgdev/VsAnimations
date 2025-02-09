//=============================================================================
// rmmz_core.d.ts
//=============================================================================

/**
 * Extends the Array prototype with additional methods.
 */
interface Array<T> {
  /**
   * Makes a shallow copy of the array.
   * @returns A shallow copy of the array.
   */
  clone(): Array<T>;

  /**
   * Checks whether the array contains a given element.
   * @param element - The element to search for.
   * @returns True if the array contains the given element.
   * @deprecated Use includes() instead.
   */
  contains(element: T): boolean;

  /**
   * Checks whether the two arrays are the same.
   * @param array - The array to compare to.
   * @returns True if the two arrays are the same.
   */
  equals(array: Array<T>): boolean;

  /**
   * Removes a given element from the array (in place).
   * @param element - The element to remove.
   * @returns The array after the element has been removed.
   */
  remove(element: T): Array<T>;
}

/**
 * Extends the Math object with additional methods.
 */
interface Math {
  /**
   * Generates a random integer in the range (0, max-1).
   * @param max - The upper boundary (excluded).
   * @returns A random integer.
   */
  randomInt(max: number): number;
}

/**
 * Extends the Number prototype with additional methods.
 */
interface Number {
  /**
   * Returns a number whose value is limited to the given range.
   * @param min - The lower boundary.
   * @param max - The upper boundary.
   * @returns A number in the range (min, max).
   */
  clamp(min: number, max: number): number;

  /**
   * Returns a modulo value which is always positive.
   * @param n - The divisor.
   * @returns A modulo value.
   */
  mod(n: number): number;

  /**
   * Makes a number string with leading zeros.
   * @param length - The length of the output string.
   * @returns A string with leading zeros.
   */
  padZero(length: number): string;
}

/**
 * Extends the String prototype with additional methods.
 */
interface String {
  /**
   * Checks whether the string contains a given substring.
   * @param string - The substring to search for.
   * @returns True if the string contains the given substring.
   * @deprecated Use includes() instead.
   */
  contains(string: string): boolean;

  /**
   * Replaces %1, %2 and so on in the string with the arguments.
   * @param args - The objects to format.
   * @returns A formatted string.
   */
  format(...args: any[]): string;

  /**
   * Makes a string with leading zeros.
   * @param length - The length of the output string.
   * @returns A string with leading zeros.
   */
  padZero(length: number): string;
}

interface Window
{
  readonly mozIndexedDB?: IDBFactory;
  readonly webkitIndexedDB?: IDBFactory;

  readonly webkitAudioContext? : AudioContext;
  
}

interface HTMLOrSVGScriptElement
{
  src? : string;  
}
interface SVGScriptElement
{
  src? : string;  
}
interface HTMLScriptElement
{
  _url? : string;   
}
