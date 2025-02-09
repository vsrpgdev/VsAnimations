declare class ConfigManager {
  static alwaysDash: boolean;
  static commandRemember: boolean;
  static touchUI: boolean;
  private static _isLoaded: boolean;

  static bgmVolume: number;
  static bgsVolume: number;
  static meVolume: number;
  static seVolume: number;

  static load(): void;
  static save(): void;
  static isLoaded(): boolean;
  private static makeData(): Record<string, any>;
  private static applyData(config: Record<string, any>): void;
  private static readFlag(config: Record<string, any>, name: string, defaultValue: boolean): boolean;
  private static readVolume(config: Record<string, any>, name: string): number;
}