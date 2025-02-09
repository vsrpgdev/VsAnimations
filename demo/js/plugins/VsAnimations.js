// #region RPG Maker MZ --------------------------------------------------------------------------
/*:
 * @target MZ
 * @plugindesc VsAnimations
 * @author VsRpgDev
 * @url https://github.com/vsrpgdev/VsAnimations
 * @help this plugin is used to create custom animations for your plugins or elements.
*/
//#endregion --------------------------------------------------------------------------

//@ts-ignore ---------------- Header line for all VsRpgDev Plugins, create the global VsRpgDev object -------------
"undefined"==typeof Vs&&(Vs={get author(){return"VsRpgDev"}, get isVsRpgDev(){return"VsRpgDev"==Vs.author}, plugins:{}, c(m,...p){ p.filter(x => { const v=x.split("."); const found = Object.entries(Vs.plugins).some(p => p[1].PluginName == v[0] && (v.length < 2 || v[1]==p[1].Version[0])&& (v.length < 3 || v[2]<=p[1].Version[1]));    return !found;   }).forEach(e => {throw new Error(`${m} Error: plugin '${e}' not found or wrong version`)}); } });

(()=>{
  
  const pluginName = "VsAnimations";
  /**  @type {[number,number,number]} */
  const version =  [1, 0, 0];

  Vs.c(pluginName,"VsConvertEscapeCharacters.1.2","VsUtils.1.5");

//#region global Classes --------------------------------------------------------------------------
  
  /**
   * Type representing easing functions.
   * @typedef {"linear"|"ease-in"|"ease-out"|"ease-in-out"| (string & {})} EasingType
   * @typedef {(p: number) => number} EasingFunc
   * @typedef {Object.<string, any>} AnimationTarget
   */

  /**keyframe class */
  class _vsKeyFrame
  {
    /**
     * 
     * @param {number} [percent]
     * @param {AnimationTarget} [properties]
     */
    constructor(percent, properties){
      if (percent != undefined)
        this.#_percent = percent;
      if (properties != undefined)
        this.#_properties= properties;
    }

    /**@type {number} */
    #_percent;

    /**@type {AnimationTarget} */
    #_properties;

    /**@readonly @type {number} */
    get percent(){return this.#_percent;}

    /**@readonly @type {AnimationTarget} */
    get properties(){return this.#_properties;}
  }




  /**
   * Animator class
   */
  class _vsAnimator extends PIXI.utils.EventEmitter 
  {

    /**
     * Creates an animation configuration.
     * @param {AnimationTarget} target The animation target.
     * @param {EasingType} [easing='linear'] - Easing type.
     * @param {number} [iterations=1] - Number of iterations (-1 for infinite).
     */
    constructor(target, easing = 'linear', iterations = 1) 
    {
      super();
      this.#_keyframes = []; 
      this.#_duration = 1000; 
      this.#_elapsedTime = 0;
      this.#_running = false;
      this.easing = this.getEasingFunction(easing);
      this.#_iterations = iterations;  
      this.#_currentIteration = 0; 

      this.#_target = target;
    }

    /**@type {AnimationTarget} */
    #_target;

    /**@type {Vs.plugins.VsAnimations.VsKeyFrame[]} */
    #_keyframes = [];

    /**@type {number} */
    #_duration = 1000; 
    /**@type {number} */
    #_elapsedTime = 0;
    
    /**@type {boolean} */
    #_running = false;
    /**@type {number} */
    #_iterations = -1;
    /**@type {number} */
    #_currentIteration = 0;

    /**@type {number} */
    #_progress=0;

    /**@type {EasingFunc} */
    easing;

    /**
     * 
     * @param {number|Vs.plugins.VsAnimations.VsKeyFrame} percent 
     * @param {AnimationTarget} [properties]
     */
    addKeyframe(percent, properties) 
    {
      if (typeof percent == "number")
      {
        this.#_keyframes.push({ percent, properties });
        this.#_keyframes.sort((a, b) => a.percent - b.percent);
      }
      else
      {
        if (!(properties instanceof _vsKeyFrame))
          this.#_keyframes.push(new _vsKeyFrame(percent.percent,percent.properties));
        else
          this.#_keyframes.push(percent);
      }
    }

    /**@type {Vs.plugins.VsUtils.VsInterpreterWaiter|null} */
    #_interpreterWaiter = null;

    /**@type {Vs.plugins.VsUtils.VsInterpreterWaiter|null} */
    get #InterpreterWaiter(){
      return this.#_interpreterWaiter;
    }

    /**@oaram {Vs.plugins.VsUtils.VsInterpreterWaiter|null} value */
    set #InterpreterWaiter(value){
      if (value == this.#_interpreterWaiter) return;
      if (this.#_interpreterWaiter != undefined)
      {
        this.#_interpreterWaiter.destroy();
        this.#_interpreterWaiter = null;
      }
      this.#_interpreterWaiter = value;
    }

    /**
     * start the animation
     * @param {number} [duration] 
     * @param {boolean} [haltInterpreter] haltInterpreter pauses the execution of the interpreter until the animation is finished
     */
    start(duration, haltInterpreter) 
    {
      if(haltInterpreter == undefined)
        haltInterpreter = false;

      if (this.#_running) return;
      _vsAnimators.push(this);

      this.#_duration = duration ?? this.#_duration;
      this.#_running = true;
      
      if (haltInterpreter)
      {
        this.#InterpreterWaiter = Vs.System.spawnInterpreterWaiter();
      }
      
      this.emit("animationstarted");  
    }

    /**
     */
    stop()
    {
      if (!this.#_running && this.#_progress > 0) return;
      this.#_running = false;
      this.#_progress=0;
      this.#_elapsedTime = 0;
      this.#_currentIteration = 0;

      let pos = _vsAnimators.indexOf(this);

      if (pos >= 0)
        _vsAnimators.splice(pos,1);

      this.#InterpreterWaiter = null;
    }
    /**
     */
    pause()
    {
      if (!this.#_running) return;
      this.#_running = false;
      let pos = _vsAnimators.indexOf(this);

      if (pos >= 0)
        _vsAnimators.splice(pos,1);

      this.#InterpreterWaiter = null;
    }

    /**
     * returns the progress
     * @returns {number} progess
     */
    get progress() {return this.#_progress;}

    /**
     * update the animation since last frame
     * gets called by the animaion manager
     * @param {number} deltaTime 
     */
    update(deltaTime) 
    {
      if (!this.#_running) return;
      
      this.#_elapsedTime += deltaTime;
      this.#_progress = Math.min(this.#_elapsedTime / this.#_duration, 1);
      this.updateAnimation();
      
    }

    /**
     * updates the animation
     */
    updateAnimation ()
    {
      if (!this.#_running) return;

      let progress = this.easing(this.#_progress);
      let prevFrame = this.#_keyframes[0];
      let nextFrame = this.#_keyframes[this.#_keyframes.length - 1];

      //progress can be greater then 1 if cubic-bezier is used
      if (progress > 1)
      {
        prevFrame = this.#_keyframes[this.#_keyframes.length - 2];
      }
      else
      {
        for (let i = 0; i < this.#_keyframes.length - 1; i++) {
          if (progress * 100 >= this.#_keyframes[i].percent && progress * 100 < this.#_keyframes[i + 1].percent) {
              prevFrame = this.#_keyframes[i];
              nextFrame = this.#_keyframes[i + 1];
              break;
          }
        }
      }

      let frameProgress = (progress * 100 - prevFrame.percent) / (nextFrame.percent - prevFrame.percent);

      for (let key in prevFrame.properties) {
        if (nextFrame.properties[key] !== undefined) {
          const prevValue = prevFrame.properties[key];
          const nextValue = nextFrame.properties[key];

          if (typeof prevValue === 'number' && typeof nextValue === 'number') {
              this.#_target[key] = prevValue + (nextValue - prevValue) * frameProgress;
          } else {
              if (this.#_progress*100 >= nextFrame.percent)
                this.#_target[key] = nextValue;
              else
                this.#_target[key] = prevValue;
          }
        }
      }

      this.emit("update",{ease:progress,progress: this.#_progress});  
      if (this.#_progress >= 1) 
      {
        this.#_elapsedTime = 0;
        this.#_currentIteration++;
        if (this.#_iterations < 0 || this.#_currentIteration < this.#_iterations) 
          {
          // Event auslösen, wenn eine Iteration abgeschlossen ist
          this.emit("iterationcomplete",this.#_currentIteration, this.#_iterations);  
        } else {
          // Animation abgeschlossen, alle Iterationen beendet
          this.stop();
          this.emit("animationcomplete");  
          this.#_currentIteration = 0;   // Reset der Iteration
        }
          
        this.#_progress=0;
      }
    }

    /**
     * 
     * @param {EasingType} type 
     * @returns {EasingFunc}
     */
    getEasingFunction(type) 
    {
      if (type.includes("cubic-bezier"))
      {
        return((bezier) => {
          const match = bezier.match(/cubic-bezier\(([^,]+),\s*([^,]+),\s*([^,]+),\s*([^\)]+)\)/);
          if (match) {
            // Werte korrekt umwandeln
            const p1x = parseFloat(match[1]);
            const p1y = parseFloat(match[2]);
            const p2x = parseFloat(match[3]);
            const p2y = parseFloat(match[4]);
    
            // Bezier-Koeffizienten
            const cx = 3 * p1x;
            const bx = 3 * (p2x - p1x) - cx;
            const ax = 1 - cx - bx;
            const cy = 3 * p1y;
            const by = 3 * (p2y - p1y) - cy;
            const ay = 1 - cy - by;
    
            // Funktion zur Berechnung von x für t
            const bezierX = (t) => ((ax * t + bx) * t + cx) * t;
            const bezierY = (t) => ((ay * t + by) * t + cy) * t;
    
            // Iterative Lösung für y(t), gegeben x(t)
            const cubicBezier = (t) => {
              let x = t, t0, t1, t2 = x;
              let i = 0;
    
              // Newton-Raphson Methode zur besseren Annäherung
              while (i < 10) {
                t0 = bezierX(t2) - x;
                if (Math.abs(t0) < 1e-5) break;
                t1 = (3 * ax * t2 + 2 * bx) * t2 + cx;
                if (Math.abs(t1) < 1e-5) break;
                t2 -= t0 / t1;
                i++;
              }
              return bezierY(t2);
            };
    
            return cubicBezier;
          }
          return t => t; // Fallback auf linear
        })(type);
      }

      const easingFunctions = {
          "linear": t => t,
          "ease-in": t => t * t,
          "ease-out": t => t * (2 - t),
          "ease-in-out": t => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t,
      };
      
      return easingFunctions[type] || easingFunctions.linear;
    }


    /**
     * 
     * @param {string} key 
     * @param {*} callback 
     * @param {any} [context]
     */
    addEventListener(key, callback, context)
    {
      this.on(key,callback,context);
    }

    destroy()
    {
      this.stop();
      this.#_target=undefined;
      this.easing = undefined;
      this.removeAllListeners();

      this.#InterpreterWaiter = null;
    }
  }

  let _vsAnimations = class{
    
    static get PluginName () {return pluginName}
    /**  @type {[number,number,number]} */
    static get Version () {return version}

    static VsAnimator = _vsAnimator;
    static VsKeyFrame = _vsKeyFrame;


  }

  // @ts-ignore
  window.VsAnimations = _vsAnimations;

// #endregion -------------------------------------------------------------------------------

//#region internal Classes,Methods and variables ---------------------------------------------------

  /**
   * @type {Vs.plugins.VsAnimations.VsAnimator[]}
   */
  let _vsAnimators = [];
  

//#endregion internal Classes,Methods and variables ---------------------------------------------------

//#region core script overrides --------------------------------------------------------------------------
  let SceneManager_update = SceneManager.update
  SceneManager.update = function(deltaTime) 
  {
    SceneManager_update.call(this,deltaTime);

    let t = Graphics.app.ticker.elapsedMS;
    try {
      _vsAnimators.forEach(a => {
        a.update(t);
      })
    } catch (e) {
      // @ts-ignore
      this.catchException(e);
    }
  };

// #endregion core script overrides --------------------------------------------------------------------------

//#region Vs namespace  --------------------------------------------------------------------------
    if (Vs.isVsRpgDev)
    {
      Vs.plugins.VsAnimations = _vsAnimations;
  
    }
    else
    {
      console.error("Vs is already used by another Plugin!!!");
    }
//#endregion Vs namespace  --------------------------------------------------------------------------
  

})();


