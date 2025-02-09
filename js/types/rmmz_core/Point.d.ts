
/**
 * The point class.
 * Extends PIXI.Point to provide additional functionality.
 */
declare class Point extends PIXI.Point {
    /**
     * Constructs a new Point instance.
     * @param x - The x coordinate.
     * @param y - The y coordinate.
     */
    constructor(x?: number, y?: number);

    /**
     * Initializes the point with given coordinates.
     * @param x - The x coordinate.
     * @param y - The y coordinate.
     */
    initialize(x?: number, y?: number): void;
}

