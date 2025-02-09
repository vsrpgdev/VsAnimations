declare namespace Video {
  /**
   * Initializes the video system.
   * @param width - The width of the video.
   * @param height - The height of the video.
   */
  function initialize(width: number, height: number): void;

  /**
   * Changes the display size of the video.
   * @param width - The width of the video.
   * @param height - The height of the video.
   */
  function resize(width: number, height: number): void;

  /**
   * Starts playback of a video.
   * @param src - The URL of the video.
   */
  function play(src: string): void;

  /**
   * Checks whether the video is playing.
   * @returns True if the video is playing.
   */
  function isPlaying(): boolean;

  /**
   * Sets the volume for videos.
   * @param volume - The volume for videos (0 to 1).
   */
  function setVolume(volume: number): void;

  // Internal methods (not exposed directly in the public API)
  // These are primarily for internal use and should not typically be used outside the implementation
  // unless you have a specific purpose.

  /** @internal */
  function _createElement(): void;

  /** @internal */
  function _onLoad(): void;

  /** @internal */
  function _onError(): void;

  /** @internal */
  function _onEnd(): void;

  /** @internal */
  function _updateVisibility(videoVisible: boolean): void;

  /** @internal */
  function _isVisible(): boolean;

  /** @internal */
  function _setupEventHandlers(): void;

  /** @internal */
  function _onUserGesture(): void;

  // Internal properties (not directly exposed to users)
  /** @internal */
  const _element: HTMLVideoElement | null;

  /** @internal */
  let _loading: boolean;

  /** @internal */
  let _volume: number;
}
