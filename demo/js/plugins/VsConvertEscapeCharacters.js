// #region RPG Maker MZ --------------------------------------------------------------------------
/*:
 * @target MZ
 * @plugindesc Version 1.2.0 allows custom escape characters in message boxes
 * @author VsRpgDev
 * @url https://github.com/vsrpgdev/VsConvertEscapeCharacters
 * @help VsConvertEscapeCharacters.convertEscapeCharacters(string) allows you to use the standard escape 
 * character detection from anywhere in your plugin.
 * VsConvertEscapeCharacters.registerEscapeCharacter(string, ((string)=>string)) adds a custom escpape character to rpg maker
 * example:
 * // arrow functions -------------
   VsConvertEscapeCharacters.registerEscapeCharacter("X",(text)=> {
     return "your text was "+text;
   });
 
   // old style -------------------
   function ReplaceText(text)
   {
     return "your text was "+text;
   }
   VsConvertEscapeCharacters.registerEscapeCharacter("X",ReplaceText);
 
   // arrow functions -------------
   VsConvertEscapeCharacters.registerProcessEscapeCharacter("X",(currentWindow, textState, param)=> {
     //do whatever you like
     //example draw icon
     currentWindow.processDrawIcon(param, textState);
   });
 
   // old style -------------------
   function CustomMethod(currentWindow, textState, param)
   {
     return "your text was "+text;
     //do whatever you like
     //example draw icon
     currentWindow.processDrawIcon(param, textState);
   }
   VsConvertEscapeCharacters.registerProcessEscapeCharacter("X",CustomMethod);
*/
//#endregion --------------------------------------------------------------------------

//@ts-ignore ---------------- Header line for all VsRpgDev Plugins, create the global VsRpgDev object -------------
"undefined"==typeof Vs&&(Vs={get author(){return"VsRpgDev"}, get isVsRpgDev(){return"VsRpgDev"==Vs.author}, plugins:{}, c(m,...p){ p.filter(x => { const v=x.split("."); const found = Object.entries(Vs.plugins).some(p => p[1].PluginName == v[0] && (v.length < 2 || v[1]==p[1].Version[0])&& (v.length < 3 || v[2]<=p[1].Version[1]));    return !found;   }).forEach(e => {throw new Error(`${m} Error: plugin '${e}' not found or wrong version`)}); } });

(()=>{
  
  const pluginName = "VsConvertEscapeCharacters";
//#region global Classes --------------------------------------------------------------------------
  const _VsConvertEscapeCharacters = class {

    get PluginName () {return pluginName}
    
    /**  @type {[number,number,number]} */
    get Version () {return [1,2,0]}

    /**
     * 
     * @param {string} text 
     * @returns {string}
     */
    convertEscapeCharacters(text) {
      return Window_Base.prototype.convertEscapeCharacters.call(this,text);
    };
    
    actorName(n) {
      return Window_Base.prototype.actorName.call(this,n);
    };
    
    partyMemberName(n) {
      return Window_Base.prototype.partyMemberName.call(this,n);
    };


    /**
     * @type {Object.<string, (text:string)=>string>}
     */
    #customEscapeCharacters = {};

    get CustomEscapeCharacters() {return this.#customEscapeCharacters;}

    /**
     * @type {Object.<string, (window:Window_Base, textState: TextState, param:string)=>string>}
     */
    #processEscapeCharacter = {};

    get ProcessEscapeCharacter() {return this.#processEscapeCharacter;}
    /**
     * 
     * @param {string} char 
     * @param {(text:string)=>string} method 
     */
    registerEscapeCharacter(char, method)
    {
      if (typeof(char) != "string" || char.length != 1)
          throw Error("registerEscapeCharacter char '"+char+"' is not a single character");
      this.#customEscapeCharacters[char[0]] = method;
    }

    /**
     * 
     * @param {string} char 
     * @param {(window:Window_Base, textState: TextState, param:string)=>string} method 
     */
    registerProcessEscapeCharacter(char, method)
    {
    if (typeof(char) != "string" || char.length != 1)
        throw Error("registerEscapeCharacter char '"+char+"' is not a single character");

    this.#processEscapeCharacter[char[0]] = method;
    }
  };

  // @ts-ignore
  window.VsConvertEscapeCharacters = new _VsConvertEscapeCharacters();

// #endregion -------------------------------------------------------------------------------

//#region internal Classes,Methods and variables ---------------------------------------------------

  function findEndIndex(text, startIndex) {
    let depth = 0;
    for (let i = startIndex; i < text.length; i++) 
    {
      if (text[i] === "[") depth++;
      else if (text[i] === "]") 
      {
        if (depth === 0) return i;
        depth--;
      }
    }
    return text.length
  }

  function checkEscapeCharacter(character, text,index)
  {
    if (character == undefined) return false;
    if (text.length <= index+2 || text[index] != "\\" || text[index+1] != character[0] || text[index+2] != "[" || (index > 0 && text[index-1] == "\\" ))
    return false;

    return true;
  }
//#endregion internal Classes,Methods and variables ---------------------------------------------------

//#region core script overrides --------------------------------------------------------------------------
  const Window_Base_prototype_convertEscapeCharacters = Window_Base.prototype.convertEscapeCharacters;

  /**
   * 
   * @param {string} text 
   * @returns {string}
  */
  Window_Base.prototype.convertEscapeCharacters = function(text) 
  {
    if (!DataManager.isDatabaseLoaded() || text == undefined)
      return text;

    Object.entries(VsConvertEscapeCharacters.CustomEscapeCharacters).forEach(c => {

      let newText = [];
      let end = 0;
      for (let index = 0; index < text.length; index++)
      {
        if (!checkEscapeCharacter(c[0],text,index))
          continue;
        if (index > end)
        {
          newText.push(text.substring(end,index));
        }
        index+=c[0].length+2;
        end = findEndIndex(text,index);

        let subText = this.convertEscapeCharacters(text.substring(index,end));
        newText.push(c[1](subText));
        index=end;
        end++;
      }

      if (newText.length > 0)
      {
        if (end+1 < text.length)
        {
          newText.push(text.substring(end));
        }
        text = newText.join("");
      }
    });

  return Window_Base_prototype_convertEscapeCharacters.call(this,text);
  };

  const Window_Base_prototype_processEscapeCharacter = Window_Base.prototype.processEscapeCharacter;
  Window_Base.prototype.processEscapeCharacter = function(code, textState) 
  {
    Object.entries(VsConvertEscapeCharacters.ProcessEscapeCharacter).some (p => {
      if (p[0] != code)
          return false;

      const regExp = /^\[.+?]/;
      let result = undefined;
      const arr = regExp.exec(textState.text.slice(textState.index));
      if (arr) {
        textState.index += arr[0].length;
        result = p[1](this, textState, arr[0].substring(1,arr[0].length-1));
      } else {
        result = p[1](this, textState,null );
      }
      return true;
    });
    return Window_Base_prototype_processEscapeCharacter.call(this,code,textState);
  };
  
// #endregion core script overrides --------------------------------------------------------------------------

//#region Vs namespace  --------------------------------------------------------------------------
  if (Vs.isVsRpgDev)
  {
    Vs.plugins.VsConvertEscapeCharacters = VsConvertEscapeCharacters;

    Vs.Utils={...(Vs.Utils ?? {}),
        convertEscapeCharacters : VsConvertEscapeCharacters.convertEscapeCharacters.bind(VsConvertEscapeCharacters),
    };

    Vs.System={...(Vs.System ?? {}),
        registerEscapeCharacter: VsConvertEscapeCharacters.registerEscapeCharacter.bind(VsConvertEscapeCharacters),
        registerProcessEscapeCharacter: VsConvertEscapeCharacters.registerProcessEscapeCharacter.bind(VsConvertEscapeCharacters),
    };

  }
  else
  {
    console.error("Vs is already used by another Plugin!!!");
  }
//#endregion Vs namespace  --------------------------------------------------------------------------
})();



