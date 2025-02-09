declare class AudioManager {
  private static _bgmVolume: number;
  private static _bgsVolume: number;
  private static _meVolume: number;
  private static _seVolume: number;
  private static _currentBgm: AudioData | null;
  private static _currentBgs: AudioData | null;
  private static _bgmBuffer: WebAudio | null;
  private static _bgsBuffer: WebAudio | null;
  private static _meBuffer: WebAudio | null;
  private static _seBuffers: WebAudio[];
  private static _staticBuffers: WebAudio[];
  private static _replayFadeTime: number;
  private static _path: string;

  static get bgmVolume(): number;
  static set bgmVolume(value: number);
  static get bgsVolume(): number;
  static set bgsVolume(value: number);
  static get meVolume(): number;
  static set meVolume(value: number);
  static get seVolume(): number;
  static set seVolume(value: number);

  static playBgm(bgm: AudioData, pos?: number): void;
  static replayBgm(bgm: AudioData): void;
  private static isCurrentBgm(bgm: AudioData): boolean;
  private static updateBgmParameters(bgm: AudioData): void;
  private static updateCurrentBgm(bgm: AudioData, pos: number): void;
  static stopBgm(): void;
  static fadeOutBgm(duration: number): void;
  static fadeInBgm(duration: number): void;

  static playBgs(bgs: AudioData, pos?: number): void;
  static replayBgs(bgs: AudioData): void;
  private static isCurrentBgs(bgs: AudioData): boolean;
  private static updateBgsParameters(bgs: AudioData): void;
  private static updateCurrentBgs(bgs: AudioData, pos: number): void;
  static stopBgs(): void;
  static fadeOutBgs(duration: number): void;
  static fadeInBgs(duration: number): void;

  static playMe(me: AudioData): void;
  private static updateMeParameters(me: AudioData): void;
  static fadeOutMe(duration: number): void;
  static stopMe(): void;

  static playSe(se: AudioData): void;
  private static updateSeParameters(buffer: WebAudio, se: AudioData): void;
  private static cleanupSe(): void;
  static stopSe(): void;

  static playStaticSe(se: AudioData): void;
  static loadStaticSe(se: AudioData): void;
  private static isStaticSe(se: AudioData): boolean;
  static stopAll(): void;

  static saveBgm(): AudioData;
  static saveBgs(): AudioData;
  private static makeEmptyAudioObject(): AudioData;
  private static createBuffer(folder: string, name: string): WebAudio;
  private static updateBufferParameters(buffer: WebAudio, configVolume: number, audio: AudioData): void;
  private static audioFileExt(): string;
  static checkErrors(): void;
  private static throwLoadError(webAudio: WebAudio): void;
}

declare interface AudioData {
  name: string;
  volume: number;
  pitch: number;
  pan: number;
  pos?: number;
}

declare interface WebAudio {
  constructor(url: string);
  name: string;
  frameCount: number;

  isPlaying(): boolean;
  isError(): boolean;
  seek(): number;
  play(loop: boolean, offset?: number): void;
  stop(): void;
  fadeIn(duration: number): void;
  fadeOut(duration: number): void;
  destroy(): void;
  retry(): void;
}