declare class FontManager {
  private static _urls: Record<string, string>;
  private static _states: Record<string, string>;

  static load(family: string, filename: string): void;
  static isReady(): boolean;
  private static startLoading(family: string, url: string): void;
  private static throwLoadError(family: string): void;
  private static makeUrl(filename: string): string;
}
