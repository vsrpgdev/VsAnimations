declare class EffectManager {
  private static _cache: Record<string, any>;
  private static _errorUrls: string[];

  static load(filename: string): any;
  private static startLoading(url: string): any;
  static clear(): void;
  private static onLoad(url: string): void;
  private static onError(url: string): void;
  private static makeUrl(filename: string): string;
  private static checkErrors(): void;
  private static throwLoadError(url: string): void;
  static isReady(): boolean;
}
