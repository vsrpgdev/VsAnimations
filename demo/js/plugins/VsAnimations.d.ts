
declare namespace Vs
{
  declare namespace plugins{
    declare namespace VsAnimations{

      declare type EasingType = "linear"|"ease-in"|"ease-out"|"ease-in-out"| (string & {})
      declare type EasingFunc = (p: number) => number;

      /**
       * Definiert die Struktur von AnimationTarget.
       * Falls AnimationTarget nicht definiert ist, muss sie entsprechend ergänzt werden.
       */
      declare interface AnimationTarget 
      {
        [key: string]: any;
      }

      /** mapping of event names to event arguments */
      interface VsAnimatorEventsMap {
        "iterationcomplete": IterationCompleteEvent;
        "animationcomplete": void;
        "animationstarted": void;
        "update": UpdateEvent;
      }

      /**
       * namespace containing the interfaces for the event arguments
       */
      declare namespace VsAnimatorEvents
      {
        interface IterationCompleteEvent
        {
          currentIteration: number;
          maxIterations: number;
        }
        interface UpdateEvent
        {
          /** progress after the easing function */
          ease:number;
          /** real progress */
          progress:number;
        }
      }
      

      /**
       * animator class
       */
      class VsAnimator extends PIXI.utils.EventEmitter
      {
        /**
         * Creates an animation configuration.
         * @param target The animation target.
         * @param {EasingType} [easing='linear'] - Easing type.
         * @param {number} [iterations=1] - Number of iterations (-1 for infinite).
         */
        constructor(target : Vs.plugins.VsAnimations.AnimationTarget, easing?:EasingType = 'linear', iterations?:number = 1);
        /**
         * adds a keyframe to the animation
         * @param percent the percentage of the keyframe
         * @param properties an object containing the property values for this keyframe
         */
        addKeyframe(percent: number, properties: AnimationTarget): void;
        
        /**
         * adds a keyframe to the animation
         * @param keyFrame keyframe object
         */
        addKeyframe(keyFrame: Vs.plugins.VsAnimations.VsKeyFrame): void;

        /**
         * start the animation
         * @param duration in ms
         * @param haltInterpreter pauses the execution of the interpreter until the animation is finished
         */
        start(duration?: number, haltInterpreter? :bolean = false): void;

        /**
         * update the animation since last frame
         * gets called by the animaion manager
         * @param deltaTime time since last update
         */
        update(deltaTime:number); 

        /**
         * stop the animation and reset progress and elapsed time
         */
        stop(): void;

        /**
         * halts the animation, can be continued by calling start again
         */
        pause(): void;

        /**
         * current progress
         */
        get progress(): number;

        destroy(): void;

        /**
         * adds an event listener
         * @param type event type
         * @param listener listener functions
         * @param context context
         */
        addEventListener<K extends keyof VsAnimatorEventsMap>(type: K, listener: (this: VsAnimator, ev: VsAnimatorEventsMap[K]) => any, context?:any): void;
        
        /**
         * adds an event listener
         * @param type event type
         * @param listener listener functions
         * @param context context
         */
        on<K extends keyof VsAnimatorEventsMap>(type: K, listener: (this: VsAnimator, ev: VsAnimatorEventsMap[K]) => any, context?:any): void;

      }
      declare class VsKeyFrame 
      {
        /**
         * Erzeugt eine neue Instanz von _vsKeyFrame.
         * @param percent - Der Prozentwert des Keyframes.
         * @param properties - Die Eigenschaften des Keyframes.
         */
        constructor(percent?: number, properties?: AnimationTarget);
    
        /**
         * Der Prozentwert des Keyframes (readonly).
         */
        readonly percent: number;
    
        /**
         * Die Eigenschaften des Keyframes (readonly).
         */
        readonly properties: AnimationTarget;
      }
    
    }
  }
}
interface Window 
{
  VsAnimations: typeof Vs.plugins.VsAnimations;
}

declare let VsAnimations : typeof Vs.plugins.VsAnimations;
