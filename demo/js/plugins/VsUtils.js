// #region RPG Maker MZ --------------------------------------------------------------------------
/*:
 * @target MZ
 * @plugindesc Version 1.5.0 VsUtils, helper methods and other utilities
 * @author VsRpgDev
 * @url https://github.com/vsrpgdev/VsUtils
 * @help 
 * 
 * @command preloadImage
 * @text preload image
 * @desc preloads an image 
 * @arg image
 * @default ""
 * @type string
 * @arg waitForCompletion
 * @text wait for completion
 * @desc should the game interpreter be halted until the images is loaded
 * @default false
 * @type boolean
 * @arg throwError
 * @text throw error
 * @desc should and error be trhown if the image couldn't be loaded
 * @default false
 * @type boolean
 * 
 * @command preloadImages
 * @text preload images
 * @desc preloads a list of images
 * @arg images
 * @default []
 * @type string[]
 * @arg waitForCompletion
 * @text wait for completion
 * @desc should the game interpreter be halted until the images is loaded
 * @default false
 * @type boolean
 * @arg throwError
 * @text throw error
 * @desc should and error be trhown if the image couldn't be loaded
 * @default false
 * @type boolean
 * 
*/
//#endregion --------------------------------------------------------------------------

//@ts-ignore ---------------- Header line for all VsRpgDev Plugins, create the global VsRpgDev object -------------
"undefined"==typeof Vs&&(Vs={get author(){return"VsRpgDev"}, get isVsRpgDev(){return"VsRpgDev"==Vs.author}, plugins:{}, c(m,...p){ p.filter(x => { const v=x.split("."); const found = Object.entries(Vs.plugins).some(p => p[1].PluginName == v[0] && (v.length < 2 || v[1]==p[1].Version[0])&& (v.length < 3 || v[2]<=p[1].Version[1]));    return !found;   }).forEach(e => {throw new Error(`${m} Error: plugin '${e}' not found or wrong version`)}); } });

(()=>{
  
  const pluginName = "VsUtils";


//#region global Classes --------------------------------------------------------------------------
  
  class _VsInterpreterWaiter
  {
    #_destroyed = false;

    destroy()
    {
      if (this.#_destroyed) return;
      this.#_destroyed=true;

      // @ts-ignore
      this.helper?.ReduceCounter();
    }
  }

  let _vsUtils = class{
    

    static VsInterpreterWaiter = _VsInterpreterWaiter;

    static get PluginName () {return pluginName}
    
    /**  @type {[number,number,number]} */
    static get Version () {return [1,5, 0]}

    /**
     * 
     * @param {string} json string
     * @returns {any} returns object
     */
    static jsonParseRecursive(json)
    {
      try
      {
        let data=JSON.parse(json);
  
        if (Array.isArray(data))
          return data.map(v => Vs.plugins.VsUtils.jsonParseRecursive(v));
        else if (typeof(data) == "object")
          return Object.entries(data).map(v => [v[0], Vs.plugins.VsUtils.jsonParseRecursive(v[1])]).reduce((p,c,i,a) => { p[c[0]]=c[1]; return p},{});
        if (typeof(data) =="string")
          data = Vs.Utils.convertEscapeCharacters(data);
        return data;
      }
      catch{
        let result = Vs.Utils.convertEscapeCharacters(json);
        try
        {
          return JSON.parse(result);
        }
        catch
        {
          return result
        }
      }
    }

    /**
     * 
     * @param {any} instance 
     * @param {any} obj 
     */
    static assignObjectEntries(instance, obj)
    {
      if (typeof(obj) != "object" )
        return;
      if (typeof(instance) != "object" )
        return;

      Object.entries(obj).forEach((key)=> {
        if(instance[key[0]] && typeof(instance[key[0]]) == "object")
        {
          this.assignObjectEntries(instance[key[0]], key[1]);
        }
        else
        {
          instance[key[0]] = key[1];
        }
      });

      return;
    }

    static createInstanceFromJson(classType, json)
    {

      if (classType == Number || classType == "number")
      {
        try
        {
          let result = Number(json);

          return isNaN(result) ? 0 : result;
        }
        catch
        {
          return 0;
        }
      }
      if (classType == String || classType == "string")
        return json.toString() ?? json ?? "";

      let instance = new classType();
      let obj = this.jsonParseRecursive(json);
      
      if (typeof(obj) == "object")
        this.assignObjectEntries(instance,obj);

      return instance;
    }

    static pluginParameterToObject(classType, param, nullable)
    {
      if (nullable == undefined) nullable = false;

      let instance = classType ? new classType() : {};
      
      if (param == null)
      {
        if (nullable)
          return null;
        else
          param = {};
      }

      return Object.entries(param).reduce((p,c,i,a) => {
        if (p[c[0]] != undefined && typeof(p[c[0]]) == "object")
          this.assignObjectEntries(p[c[0]], this.jsonParseRecursive(c[1]));
        else
          p[c[0]] = this.jsonParseRecursive(c[1]);
        return p;
      }, instance);
    }

    
    /**
     * Creates a proxy for a single instance, ensuring it is of the specified class type.
     *
     * @param classType - The class type used for the instance.
     * @param obj - The object in which the instance is stored.
     * @param key - The key under which the instance is stored.
     * @param {boolean|undefined} [nullable] , is the variable nullable
     */
    static instanceProxy(classType,obj, key,nullable)
    {
      if (nullable == undefined) nullable = false;
      let privateData = null;
      
      let getter = () => {return privateData;};
      let setter = (value) => {
        if (!(value instanceof classType)) {

          if (nullable && value == null)
          {
            privateData = value;
            return;
          }
          const newInstance = new classType();
          _vsUtils.assignObjectEntries(newInstance, value);
          privateData = newInstance;
        } else {
          privateData = value;
        }
      }
      
      Object.defineProperty(obj, key, {
        get: getter,
        set: setter,
        configurable: false,
        enumerable: true
      });
    }

    /**
     * Creates a proxy for a single instance, ensuring it is of the specified class type.
     *
     * @param classType - The class type used for the instance.
     * @param obj - The object in which the instance is stored.
     * @param key - The key under which the instance is stored.
     * @param {boolean} [nullable] , is the variable nullable
     */
    static arrayInstanceProxy(classType,obj, key,nullable)
    {
      if (nullable == undefined) nullable = false;
      let privateData = [];
    
      let proxy = new Proxy(privateData,{
        get: (target, prop, receiver) => {
          return Reflect.get(target, prop, receiver);
        },
        set: (target, prop, value, receiver) => {
          if (!isNaN(Number(prop)))
          {
            if (nullable && value == null)
            {
              return Reflect.set(target, prop, null, receiver);
            }
            let newC = new classType();
            this.assignObjectEntries(newC,value);
            return Reflect.set(target, prop, newC, receiver);
          }
          return  Reflect.set(target, prop, value, receiver);
        },
      });
    
      Object.defineProperty(obj, key, {
        value: proxy,
        writable: false, 
        configurable: false, 
        enumerable: true
      });
    }

    
    static registerCommandTyped(pluginName,commandName, classType , func)
    {
      PluginManager.registerCommand(pluginName,commandName, (v)=> {
        func(Vs.Utils.pluginParameterToObject(classType,v));
      });
    }


    /**
     * returns all property keys of the object (prototype chain included)
     * @param {any} obj 
     * @returns {string[]} property keys
     */
    static getAllProperties(obj) 
    {
      if (obj == undefined) return [];
      if (typeof obj != "object") return [];

      let properties = new Set();
      let proto = obj;
  
      while (proto && proto !== Object.prototype) {
        Object.getOwnPropertyNames(proto).forEach(prop => {
          
          if (!this.hasGetterAndSetter(proto,prop))
          return;
          if (!properties.has(prop)) {
              properties.add(prop);
          }
        });
        proto = Object.getPrototypeOf(proto);
      }
      return Array.from(properties);
    }

    /**
     * 
     * @param {any} obj 
     * @param {string} prop 
     * @returns {boolean}
     */
    static hasGetterAndSetter(obj, prop) 
    {
      const descriptor = Object.getOwnPropertyDescriptor(obj, prop);
      
      return descriptor && typeof descriptor.get === "function" && typeof descriptor.set === "function";
    }

    /**
     * creates a proxy object for target, with the additonal properties from additionalValues
     * @template {object} T - source type
     * @template  {object & { target: T }}  U - extending type
     * @param {T} target - source object
     * @param {U=} [additionalValues] -  extending object
     * @returns {T & Omit<U, "target">} - proxy object combinding source and extending type
     */
    static createProxyObj(target, additionalValues) {
      
      // @ts-ignore
      additionalValues = additionalValues ?? {target:target};

      if (additionalValues["target"] === undefined)
      {
        additionalValues["target"] = target;
      }
      let keys = _vsUtils.getAllProperties(additionalValues);

      // @ts-ignore
      return new Proxy(target, {
        has: (target, p) => {

          keys.includes(p.toString());
    
          return p in target;
        },
        get: (target, p, receiver) => {
          
          if (keys.includes(p.toString())) {
            // @ts-ignore
            return Reflect.get(additionalValues, p);
          }
    
          return Reflect.get(target, p);
        },
        set: (target, p, value, receiver) => {
          
          if (keys.includes(p.toString())) {
            // @ts-ignore
            let result = Reflect.set(additionalValues, p, value);
            return result;
          }
    
          return Reflect.set(target, p, value);
        }
      });
    }

    /**
     * 
     * @param {string} image 
     * @param {boolean} waitForCompletion 
     * @param {boolean} throwError 
     */
    static preloadImage(image, waitForCompletion, throwError)
    {
      const bitmap = ImageManager.loadPicture(image);

      if (bitmap.isReady() || bitmap.isError())
        return;

      /**
       * @type {Vs.plugins.VsUtils.VsInterpreterWaiter}
       */
      let waiter = undefined;
      if (waitForCompletion)
        waiter = Vs.System.spawnInterpreterWaiter();

      bitmap.addLoadListener(() => {
        waiter?.destroy();
      });
      bitmap.addErrorListener((bitmap) => {
        waiter?.destroy();
        if (throwError)
          Graphics.printError("Failed to load:",bitmap.url);
      });
    }
    static preloadImages(images, waitForCompletion, throwError)
    {
      images.forEach(i => {
        _vsUtils.preloadImage(i,waitForCompletion,throwError);
      })
    }
  }
  

  // @ts-ignore
  PluginManager.registerCommandTyped =  _vsUtils.registerCommandTyped;
  window.VsUtils = _vsUtils;
  window.VsInterpreterWaiter = _VsInterpreterWaiter;

// #endregion -------------------------------------------------------------------------------

//#region internal Classes,Methods and variables ---------------------------------------------------
  function degToRad(degrees) {
    return degrees * (Math.PI / 180);
  }

  function radToDeg(radians) {
    return radians * (180 / Math.PI);
  }

  class Game_InterpreterWaitHelper
  {
    /**@type {number} */
    static #_counter =0;

    static IncreaseCounter(){
      Game_InterpreterWaitHelper.#_counter++;
    }
    static ReduceCounter(){
      if (Game_InterpreterWaitHelper.#_counter > 0)
        Game_InterpreterWaitHelper.#_counter--;
    }

    static spawnInterpreterWaiter()
    {
      Game_InterpreterWaitHelper.IncreaseCounter();
      let waiter = new _VsInterpreterWaiter();

      // @ts-ignore
      waiter.helper = Game_InterpreterWaitHelper;

      return waiter;
    }

    /**
     * 
     * @returns {boolean}
     */
    static isBusy()
    {
      return Game_InterpreterWaitHelper.#_counter > 0;
    }
  }

  _vsUtils.spawnInterpreterWaiter = Game_InterpreterWaitHelper.spawnInterpreterWaiter.bind(Game_InterpreterWaitHelper);

  
  class PreloadImageArgs
  {
    /**@type {string} */
    image = ""; 

    /**@type {boolean} */
    waitForCompletion = false; 

    /**@type {boolean} */
    throwError = false; 

  }
  _vsUtils.registerCommandTyped(pluginName, 'preloadImage',PreloadImageArgs, args => {
    _vsUtils.preloadImage(args.image,args.waitForCompletion,args.throwError);
  });
  class PreloadImagesArgs
  {
    /**@type {string[]} */
    images = []; 

    /**@type {boolean} */
    waitForCompletion = false; 

    /**@type {boolean} */
    throwError = false; 

  }
  _vsUtils.registerCommandTyped(pluginName, 'preloadImages',PreloadImagesArgs, args => {
    _vsUtils.preloadImages(args.images,args.waitForCompletion,args.throwError);
  });


//#endregion internal Classes,Methods and variables ---------------------------------------------------

//#region core script overrides ------------------------------------------------------------------------------
  const Game_Interpreter_prototype_updateWaitMode = Game_Interpreter.prototype.updateWaitMode;

  Game_Interpreter.prototype.updateWaitMode = function()
  {
    let result = Game_Interpreter_prototype_updateWaitMode.call(this);

    if (result) return result;

    return Game_InterpreterWaitHelper.isBusy();
  }

  /**
   * Adds a callback function that will be called when the bitmap is loaded.
   *
   * @param {(bitmap:Bitmap)=>void} listner - The callback function.
   */
  let Bitmap_prototype_addErrorListener = Bitmap.prototype.addErrorListener;
  Bitmap.prototype.addErrorListener = function(listner) {
      if (!this.isError()) {
          if (this._vsErrorListeners == undefined) 
            this._vsErrorListeners = [];

          this._vsErrorListeners.push(listner);
      } else {
          listner(this);
      }
      if (Bitmap_prototype_addErrorListener)
        Bitmap_prototype_addErrorListener?.call(this,...arguments);
  };

  
  // @ts-ignore
  let Bitmap_prototype__onError = Bitmap.prototype._onError;
  // @ts-ignore
  Bitmap.prototype._onError = function() {
    Bitmap_prototype__onError.call(this);
    
    this._vsCallErrorListeners();
  };
    
  let Bitmap_prototype__callErrorListeners = Bitmap.prototype._vsCallErrorListeners;
  Bitmap.prototype._vsCallErrorListeners = function() {
    if (Bitmap_prototype__callErrorListeners)
      Bitmap_prototype__callErrorListeners.call(this);

    if (this._vsErrorListeners == undefined) 
      return;
    
    while (this._vsErrorListeners.length > 0) {
        const listener = this._vsErrorListeners.shift();
        listener(this);
    }
  };

// #endregion core script overrides --------------------------------------------------------------------------

//#region Vs namespace  --------------------------------------------------------------------------
  if (Vs.isVsRpgDev)
  {
    Vs.plugins.VsUtils = _vsUtils;

    Vs.Utils={...(Vs.Utils ?? {}),
      jsonParseRecursive: _vsUtils.jsonParseRecursive,
      assignObjectEntries: _vsUtils.assignObjectEntries,
      createInstanceFromJson: _vsUtils.createInstanceFromJson,
      pluginParameterToObject: _vsUtils.pluginParameterToObject,
      instanceProxy: _vsUtils.instanceProxy,
      arrayInstanceProxy: _vsUtils.arrayInstanceProxy,
      createProxyObj: _vsUtils.createProxyObj,
      hasGetterAndSetter: _vsUtils.hasGetterAndSetter,
      getAllProperties: _vsUtils.getAllProperties
    };

    Vs.System={...(Vs.System ?? {}),
      registerCommandTyped: _vsUtils.registerCommandTyped,
      spawnInterpreterWaiter : Game_InterpreterWaitHelper.spawnInterpreterWaiter.bind(Game_InterpreterWaitHelper),
      preloadImage: _vsUtils.preloadImage,
      preloadImages: _vsUtils.preloadImages
    }; 
    Vs.Math={...(Vs.Math ?? {}),
      degToRad: degToRad,
      radToDeg: radToDeg
    };
  }
  else
  {
    console.error("Vs is already used by another Plugin!!!");
  }
//#endregion Vs namespace  --------------------------------------------------------------------------
  
})();

