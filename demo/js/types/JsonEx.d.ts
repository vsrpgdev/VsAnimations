declare namespace JsonEx {
  /**
   * The maximum depth of objects.
   * @default 100
   */
  let maxDepth: number;

  /**
   * Converts an object to a JSON string with object information.
   * @param object - The object to be converted.
   * @returns The JSON string.
   */
  function stringify(object: object): string;

  /**
   * Parses a JSON string and reconstructs the corresponding object.
   * @param json - The JSON string.
   * @returns The reconstructed object.
   */
  function parse<T = any>(json: string): T;

  /**
   * Makes a deep copy of the specified object.
   * @param object - The object to be copied.
   * @returns The copied object.
   */
  function makeDeepCopy<T = any>(object: T): T;

  /** @internal */
  function _encode(value: any, depth: number): any;

  /** @internal */
  function _decode(value: any): any;
}
