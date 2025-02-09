declare class Tilemap extends PIXI.Container {
  constructor();

  /** The width of the tilemap in pixels. */
  width: number;

  /** The height of the tilemap in pixels. */
  height: number;

  /** The width of each tile in pixels. */
  tileWidth: number;

  /** The height of each tile in pixels. */
  tileHeight: number;

  /** The origin point of the tilemap for scrolling. */
  origin: PIXI.Point;

  /** The tileset flags. */
  flags: number[];

  /** The animation count for autotiles. */
  animationCount: number;

  /** Whether the tilemap loops horizontally. */
  horizontalWrap: boolean;

  /** Whether the tilemap loops vertically. */
  verticalWrap: boolean;

  /**
   * Destroys the tilemap.
   * @param {boolean} options - Options for destruction.
   */
  destroy(options?: { children?: boolean; texture?: boolean }): void;

  /**
   * Sets the tilemap data.
   * @param width The width of the map in tiles.
   * @param height The height of the map in tiles.
   * @param data The one-dimensional array for the map data.
   */
  setData(width: number, height: number, data: number[]): void;

  /**
   * Checks whether the tileset is ready to render.
   * @returns True if the tilemap is ready.
   */
  isReady(): boolean;

  /**
   * Updates the tilemap for each frame.
   */
  update(): void;

  /**
   * Sets the bitmaps used as a tileset.
   * @param bitmaps The array of tileset bitmaps.
   */
  setBitmaps(bitmaps: PIXI.BaseTexture[]): void;

  /**
   * Forces a repaint of the entire tilemap.
   */
  refresh(): void;

  /**
   * Updates the transform on all children for rendering.
   */
  updateTransform(): void;

  private _createLayers(): void;
  private _updateBitmaps(): void;
  private _addAllSpots(startX: number, startY: number): void;
  private _addSpot(startX: number, startY: number, x: number, y: number): void;
  private _addSpotTile(tileId: number, dx: number, dy: number): void;
  private _addTile(layer: Tilemap.Layer, tileId: number, dx: number, dy: number): void;
  private _addNormalTile(layer: Tilemap.Layer, tileId: number, dx: number, dy: number): void;
  private _addAutotile(layer: Tilemap.Layer, tileId: number, dx: number, dy: number): void;
  private _addTableEdge(layer: Tilemap.Layer, tileId: number, dx: number, dy: number): void;
  private _addShadow(layer: Tilemap.Layer, shadowBits: number, dx: number, dy: number): void;
  private _readMapData(x: number, y: number, z: number): number;
  private _isHigherTile(tileId: number): boolean;
  private _isTableTile(tileId: number): boolean;
  private _isOverpassPosition(mx: number, my: number): boolean;
  private _sortChildren(): void;
  private _compareChildOrder(a: PIXI.DisplayObject, b: PIXI.DisplayObject): number;

  static TILE_ID_B: number;
  static TILE_ID_C: number;
  static TILE_ID_D: number;
  static TILE_ID_E: number;
  static TILE_ID_A5: number;
  static TILE_ID_A1: number;
  static TILE_ID_A2: number;
  static TILE_ID_A3: number;
  static TILE_ID_A4: number;
  static TILE_ID_MAX: number;

  static isVisibleTile(tileId: number): boolean;
  static isAutotile(tileId: number): boolean;
  static getAutotileKind(tileId: number): number;
  static getAutotileShape(tileId: number): number;
  static makeAutotileId(kind: number, shape: number): number;
  static isSameKindTile(tileID1: number, tileID2: number): boolean;
  static isTileA1(tileId: number): boolean;
  static isTileA2(tileId: number): boolean;
  static isTileA3(tileId: number): boolean;
  static isTileA4(tileId: number): boolean;
  static isTileA5(tileId: number): boolean;
  static isWaterTile(tileId: number): boolean;
  static isWaterfallTile(tileId: number): boolean;
  static isGroundTile(tileId: number): boolean;
  static isShadowingTile(tileId: number): boolean;
  static isRoofTile(tileId: number): boolean;
  static isWallTopTile(tileId: number): boolean;
  static isWallSideTile(tileId: number): boolean;
  static isWallTile(tileId: number): boolean;
  static isFloorTypeAutotile(tileId: number): boolean;
  static isWallTypeAutotile(tileId: number): boolean;
  static isWaterfallTypeAutotile(tileId: number): boolean;

  static FLOOR_AUTOTILE_TABLE: number[][][];
  static WALL_AUTOTILE_TABLE: number[][][];
  static WATERFALL_AUTOTILE_TABLE: number[][][];
}

declare namespace Tilemap {
  declare class Layer extends PIXI.Container {
    static MAX_GL_TEXTURES: number;
    static VERTEX_STRIDE: number;
    static MAX_SIZE: number;

    destroy(): void;
    setBitmaps(bitmaps: PIXI.BaseTexture[]): void;
    clear(): void;
    size(): number;
    addRect(setNumber: number, sx: number, sy: number, dx: number, dy: number, w: number, h: number): void;
    render(renderer: PIXI.Renderer): void;
    isReady(): boolean;

    private _createVao(): void;
    private _updateIndexBuffer(): void;
    private _updateVertexBuffer(): void;
  }

  class CombinedLayer extends PIXI.Container {
    destroy(): void;
    setBitmaps(bitmaps: PIXI.BaseTexture[]): void;
    clear(): void;
    size(): number;
    addRect(setNumber: number, sx: number, sy: number, dx: number, dy: number, w: number, h: number): void;
    isReady(): boolean;
  }

  class Renderer extends PIXI.ObjectRenderer {
    constructor(renderer: PIXI.Renderer);

    destroy(): void;
    getShader(): PIXI.Shader;
    contextChange(): void;
    updateTextures(renderer: PIXI.Renderer, images: (HTMLImageElement | HTMLCanvasElement)[]): void;
    bindTextures(renderer: PIXI.Renderer): void;

    private _createShader(): PIXI.Shader;
    private _createInternalTextures(): void;
    private _destroyInternalTextures(): void;
  }
}