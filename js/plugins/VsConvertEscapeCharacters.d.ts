


declare namespace Vs
{
  namespace plugins
  {
    /**
     * static class for registering and handling of escape characters
     */
    declare class VsConvertEscapeCharacters
    {
      /**
       * gets the plugin name
       */
      static readonly PluginName: string;

      /**
       * gets the version in major, minor, patch
       */
      static readonly Version : [number,number,number];
      /**
       * converts the escaped characters in a string to their corresponding values
       * @param text text with escaped characters
       */
      static convertEscapeCharacters(text: string) : string;
      
      /**
       * returns the actor name for n
       * @param n 
       */
      static actorName(n: number) : string;
      
      /**
       * returns the party member name for n
       * @param n 
       */
      static partyMemberName (n:number) : string;

      /**
       * register a new escape character 
       * @param char escape character to use
       * @param method callback method which gets the parameter from within the brackets [] and should return the replacement text
       */
      static registerEscapeCharacter(char : string, method: (string)=>string) : void;

      /**
       * retursn all registered escape characters
       */
      static get CustomEscapeCharacters() :  { [id: string]:(string)=>string; };

      /**
       * register process escape character, these get processed character by character when the textbox draws the message text
       * @param char scape character to use
       * @param method callback method which gets the the current windows, the textstate and parameter from within the brackets [] and should return the replacement text
       */
      static registerProcessEscapeCharacter(char : string, method: (windowBase:Window_Base, state: TextState, param: string)=>void) : void;

      /**
       * retursn all registered process escape characters
       */
      static get ProcessEscapeCharacter() :  { [id: string]: (windowBase:Window_Base, state: TextState, param: string)=>void; };
    }

  }
  
  /**
   * namsepace for all kind of utility methods
   */
  declare namespace Utils
  {
    let convertEscapeCharacters : typeof Vs.plugins.VsConvertEscapeCharacters.convertEscapeCharacters;
  }

  declare namespace System
  {
    let registerEscapeCharacter : typeof Vs.plugins.VsConvertEscapeCharacters.registerEscapeCharacter;
    let registerProcessEscapeCharacter : typeof Vs.plugins.VsConvertEscapeCharacters.registerProcessEscapeCharacter;
  }
}

interface Window 
{
  VsConvertEscapeCharacters: typeof Vs.plugins.VsConvertEscapeCharacters;
}

declare interface Window_Base
{
  vsObtainEscapeParamArray(textState: TextState): String[];
}

declare let VsConvertEscapeCharacters : typeof Vs.plugins.VsConvertEscapeCharacters;