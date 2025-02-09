//-----------------------------------------------------------------------------
// Global Variables
//-----------------------------------------------------------------------------
declare let $dataActors: Actor[];
declare let $dataClasses: Class[];
declare let $dataSkills: Skill[];
declare let $dataItems: Item[];
declare let $dataWeapons: Weapon[];
declare let $dataArmors: Armor[];
declare let $dataEnemies: Enemy[];
declare let $dataTroops: Troop[];
declare let $dataStates: State[];
declare let $dataAnimations: Animation[];
declare let $dataTilesets: Tileset[];
declare let $dataCommonEvents: CommonEvent[];
declare let $dataSystem: System;
declare let $dataMapInfos: MapInfo[];
declare let $dataMap: Map;

declare let $gameTemp: Game_Temp;
declare let $gameSystem: Game_System;
declare let $gameScreen: Game_Screen;
declare let $gameTimer: Game_Timer;
declare let $gameMessage: Game_Message;
declare let $gameSwitches: Game_Switches;
declare let $gameVariables: Game_Variables;
declare let $gameSelfSwitches: Game_SelfSwitches;
declare let $gameActors: Game_Actors;
declare let $gameParty: Game_Party;
declare let $gameTroop: Game_Troop;
declare let $gameMap: Game_Map;
declare let $gamePlayer: Game_Player;

declare let $testEvent: any;

//-----------------------------------------------------------------------------
// DataManager
//-----------------------------------------------------------------------------
declare class DataManager {
    private constructor();

    private static _globalInfo: any[] | null;
    private static _errors: { name: string; src: string; url: string }[];
    private static _databaseFiles: { name: string; src: string }[];

    static loadGlobalInfo(): void;
    static removeInvalidGlobalInfo(): void;
    static saveGlobalInfo(): void;
    static isGlobalInfoLoaded(): boolean;
    static loadDatabase(): void;
    static loadDataFile(name: string, src: string): void;
    static onXhrLoad(xhr: XMLHttpRequest, name: string, src: string, url: string): void;
    static onXhrError(name: string, src: string, url: string): void;
    static isDatabaseLoaded(): boolean;
    static loadMapData(mapId: number): void;
    static makeEmptyMap(): void;
    static isMapLoaded(): boolean;
    static onLoad(object: any): void;
    static isMapObject(object: any): boolean;
    static extractArrayMetadata(array: any[]): void;
    static extractMetadata(data: { note: string; meta: Record<string, any> }): void;
    static checkError(): void;
    static isBattleTest(): boolean;
    static isEventTest(): boolean;
    static isTitleSkip(): boolean;
    static isSkill(item: any): boolean;
    static isItem(item: any): boolean;
    static isWeapon(item: any): boolean;
    static isArmor(item: any): boolean;
    static createGameObjects(): void;
    static setupNewGame(): void;
    static setupBattleTest(): void;
    static setupEventTest(): void;
    static isAnySavefileExists(): boolean;
    static latestSavefileId(): number;
    static earliestSavefileId(): number;
    static emptySavefileId(): number;
    static loadAllSavefileImages(): void;
    static loadSavefileImages(info: { characters: [string, number][]; faces: [string, number][] }): void;
    static maxSavefiles(): number;
    static savefileInfo(savefileId: number): any | null;
    static savefileExists(savefileId: number): boolean;
    static saveGame(savefileId: number): Promise<number>;
    static loadGame(savefileId: number): Promise<number>;
    static makeSavename(savefileId: number): string;
    static selectSavefileForNewGame(): void;
    static makeSavefileInfo(): {
        title: string;
        characters: [string, number][];
        faces: [string, number][];
        playtime: string;
        timestamp: number;
    };
    static makeSaveContents(): {
        system: Game_System;
        screen: Game_Screen;
        timer: Game_Timer;
        switches: Game_Switches;
        variables: Game_Variables;
        selfSwitches: Game_SelfSwitches;
        actors: Game_Actors;
        party: Game_Party;
        map: Game_Map;
        player: Game_Player;
    };
    static extractSaveContents(contents: any): void;
    static correctDataErrors(): void;
}
