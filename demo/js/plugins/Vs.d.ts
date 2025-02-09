
/**
 * global namespace for VsRpgDev plugins
 */
declare namespace Vs{
    const author : string;
    const isVsRpgDev : boolean;

    /**
     * 
     * @param m current plugin name
     * @param p list of required plugins example: "Testplugin.1.3","NewPluginWithMajorVersion.1","PluginAnyVersion"
     */
    declare function c(m:string,...p:string[]) : void
    /**
     * namespace holding all VsRpgDev plugins
     */
    namespace plugins
    {
      /* placeholder for plugins */
    }
}
  