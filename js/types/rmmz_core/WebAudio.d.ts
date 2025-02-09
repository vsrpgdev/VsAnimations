declare class WebAudio {
  constructor(url: string);

  // Static Properties
  static _context: AudioContext | null;
  static _masterGainNode: GainNode | null;
  static _masterVolume: number;

  // Static Methods
  static initialize(): boolean;
  static setMasterVolume(value: number): void;

  // Instance Properties
  url: string;
  volume: number;
  pitch: number;
  pan: number;
  type: string;
  power: number;

  // Instance Methods
  initialize(url: string): void;
  clear(): void;
  isReady(): boolean;
  isError(): boolean;
  isPlaying(): boolean;
  play(loop: boolean, offset?: number): void;
  stop(): void;
  destroy(): void;
  fadeIn(duration: number): void;
  fadeOut(duration: number): void;
  seek(): number;
  addLoadListener(listener: () => void): void;
  addStopListener(listener: () => void): void;
  retry(): void;

  // Protected Methods
  protected _startLoading(): void;
  protected _startXhrLoading(url: string): void;
  protected _startFetching(url: string): void;
  protected _onXhrLoad(xhr: XMLHttpRequest): void;
  protected _onFetch(response: Response): void;
  protected _onError(): void;
  protected _updateBuffer(): void;
  protected _onDecode(buffer: AudioBuffer): void;
  protected _startPlaying(offset: number): void;
  protected _createPannerNode(): void;
  protected _createGainNode(): void;
  protected _createAllSourceNodes(): void;
  protected _createSourceNode(index: number): void;
  protected _removeNodes(): void;
  protected _createEndTimer(): void;
  protected _removeEndTimer(): void;
  protected _updatePanner(): void;
  protected _onLoad(): void;

  // Helper Methods for OGG Metadata
  protected _readLoopComments(arrayBuffer: ArrayBuffer): void;
  protected _readMetaData(view: DataView, index: number, size: number): void;
  protected _readFourCharacters(view: DataView, index: number): string;
}