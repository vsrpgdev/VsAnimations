declare class StorageManager {
  private static _forageKeys: string[];
  private static _forageKeysUpdated: boolean;

  static isLocalMode(): boolean;
  static saveObject(saveName: string, object: any): Promise<void>;
  static loadObject(saveName: string): Promise<any>;
  private static objectToJson(object: any): Promise<string>;
  private static jsonToObject(json: string): Promise<any>;
  private static jsonToZip(json: string): Promise<string>;
  private static zipToJson(zip: string): Promise<string>;
  private static saveZip(saveName: string, zip: string): Promise<void>;
  private static loadZip(saveName: string): Promise<string>;
  static exists(saveName: string): boolean;
  static remove(saveName: string): Promise<void>;
  private static saveToLocalFile(saveName: string, zip: string): Promise<void>;
  private static loadFromLocalFile(saveName: string): Promise<string>;
  private static localFileExists(saveName: string): boolean;
  private static removeLocalFile(saveName: string): void;
  private static saveToForage(saveName: string, zip: string): Promise<void>;
  private static loadFromForage(saveName: string): Promise<string>;
  private static forageExists(saveName: string): boolean;
  private static removeForage(saveName: string): Promise<void>;
  private static updateForageKeys(): Promise<void>;
  static forageKeysUpdated(): boolean;

  private static fsMkdir(path: string): void;
  private static fsRename(oldPath: string, newPath: string): void;
  private static fsUnlink(path: string): void;
  private static fsReadFile(path: string): string | null;
  private static fsWriteFile(path: string, data: string): void;
  private static fileDirectoryPath(): string;
  private static filePath(saveName: string): string;
  private static forageKey(saveName: string): string;
  private static forageTestKey(): string;
}
