
namespace Vs
{
  namespace plugins{
    declare namespace VsUtils{

      declare class VsInterpreterWaiter
      {
        /**
         * destroys the waiter 
         */
        destroy();
      }

      /**
       * 
       * @param json json string
       * @returns returns object
       */
      function jsonParseRecursive(json: string): any;

      /**
       * @param instance - Die Instanz, der die Eigenschaften zugewiesen werden.
       * @param obj - Das Objekt mit den zuzuweisenden Werten.
       */
      function assignObjectEntries(instance: any, obj: any): void;

      /**
       * @param classType
       * @param json 
       * @returns 
       */
      function createInstanceFromJson<T>(classType: new () => T, json: string): T;

      /**
       * 
       * @param classType 
       * @param plugin param 
       * @param nullable 
       * @returns param as json object
       */ 
      function pluginParameterToObject<T>(classType?: new () => T, param: any, nullable?: boolean) : T

      /**
       * Creates a proxy for a single instance, ensuring it is of the specified class type.
       *
       * @param classType - The class type used for the instance.
       * @param obj - The object in which the instance is stored.
       * @param key - The key under which the instance is stored.
       * @param nullable - allow null as value
       */
      function instanceProxy<T>(classType: new () => T, obj: Record<string, any>, key: string, nullable? :boolean): void;

      /**
       * Creates a proxy for an array-like object, ensuring that all inserted elements
       * are instances of a specified class.
       *
       * @param classType - The class type used for new elements.
       * @param obj - The object in which the proxy is stored.
       * @param key - The key under which the proxied array is stored.
       * @param nullable - allow null as value
       */
      function arrayInstanceProxy<T>(classType: { new (): T }, obj: Record<string, any>, key: string, nullable? :boolean): void;


          
      /**
       * Registers a command for a plugin.
       * @param pluginName The name of the plugin.
       * @param commandName The name of the command.
       * @param classType class of the parameter
       * @param func The function to execute for the command.
       */
      function registerCommandTyped<T>(pluginName: string, commandName: string, classType: { new (): T },  func: (args: T) => void): void;
        

      /**
       * Returns all property keys of the object (prototype chain included)
       * @param obj The object whose properties should be retrieved
       * @returns An array of property keys
       */
      function getAllProperties(obj: any): string[];

      /**
       * check if the property of obj has getter and setter
       * @param {any} obj 
       * @param {string} prop 
       * @returns 
       */
      function hasGetterAndSetter(obj: any, prop: string) : boolean;

      /**
       * Creates a proxy object for target, with the additional properties from additionalValues.
       * @template T - Source type.
       * @template U - Extending type.
       * @param target - Source object.
       * @param additionalValues - Extending object.
       * @returns A proxy object combining source and extending type.
       */
      function createProxyObj<
        T extends object, 
        U extends object & { target: T } = { target: T }
      >(
        target: T,
        additionalValues?: U
      ): T & Omit<U, "target">;

      function spawnInterpreterWaiter(): Vs.plugins.VsUtils.VsInterpreterWaiter;

      /**
       * gets the plugin name
       */
      const PluginName: string;

      /**
       * gets the version in major, minor, patch
       */
      const Version : [number,number,number];
      
      /**
       * preloads a image and if waitForCompletion to true halts the game_interpreter until all images are loaded
       * @param image 
       * @param waitForCompletion 
       * @param throwError should a array be thrown if the image couldn't be loaded
       */
      function preloadImage(
        image: string,
        waitForCompletion: boolean,
        throwError: boolean
      ): void;
    
      /**
       * preloads a list of images and if waitForCompletion to true halts the game_interpreter until all images are loaded
       * @param images 
       * @param waitForCompletion 
       * @param throwError should a array be thrown if the image couldn't be loaded
       */
      function preloadImages(
        images: string[],
        waitForCompletion: boolean,
        throwError: boolean
      ): void;
    }
  }
  namespace Utils{
    let jsonParseRecursive : typeof Vs.plugins.VsUtils.jsonParseRecursive;
    let assignObjectEntries : typeof Vs.plugins.VsUtils.assignObjectEntries;
    let createInstanceFromJson : typeof Vs.plugins.VsUtils.createInstanceFromJson;
    let pluginParameterToObject : typeof Vs.plugins.VsUtils.pluginParameterToObject;
    let instanceProxy : typeof Vs.plugins.VsUtils.instanceProxy;
    let arrayInstanceProxy : typeof Vs.plugins.VsUtils.arrayInstanceProxy;
    let createProxyObj : typeof Vs.plugins.VsUtils.createProxyObj;
    let hasGetterAndSetter : typeof Vs.plugins.VsUtils.hasGetterAndSetter;
    let getAllProperties : typeof Vs.plugins.VsUtils.getAllProperties;
    
  }
  namespace System{
    let registerCommandTyped : typeof Vs.plugins.VsUtils.registerCommandTyped;
    let preloadImage : typeof Vs.plugins.VsUtils.preloadImage;
    let preloadImages : typeof Vs.plugins.VsUtils.preloadImages;

    /**
     * spawns a new waiter for the interpreter
     * interpreter is halted until all waiters are destroyed
     * @returns {Vs.plugins.VsUtils.VsInterpreterWaiter} a new waiter
     */
    let spawnInterpreterWaiter: typeof Vs.plugins.VsUtils.spawnInterpreterWaiter;
  }
  namespace Math{
    /**
     * converts degrees to radian
     */
    declare function degToRad(degrees:number) : number;

    /**
     * converts radian to degrees
     */
    declare function radToDeg(radians:number) : number;
  }
}
interface Window 
{
  VsUtils: typeof Vs.plugins.VsUtils;
  VsInterpreterWaiter: typeof Vs.plugins.VsInterpreterWaiter;
}

declare let VsUtils : typeof Vs.plugins.VsUtils;


declare interface Bitmap
{
  addErrorListener(listener: (bitmap: Bitmap) => void): void;

  _vsErrorListeners : ((bitmap: Bitmap)=>void)[]|undefined;

  _vsCallErrorListeners : () => void;
}