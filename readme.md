# RPG Maker MZ - VsAnimations Plugin - Version: 1.0.0

1. [Dependencies](#1-dependencies)
1. [Installation](#2-installation)
    1. [Fast](#21-fast)
    1. [Manual](#22-manual)
1. [Configuration](#3-configuration)
1. [Usage](#4-usage)
1. [How does the plugin work](#5-how-does-the-plugin-work)
1. [Changes to the core script](#6-changes-to-the-core-script)
1. [Troubleshooting](#7-troubleshooting)
1. [License](#8-license)

this plugin contains multiple utility methods used in my other plugins.
some of them are
- a method ro parse json strings recursive (json object which contain other json objects)
- a way to register plugin commands in a typed way (define a class for your arguments and auto creates a instance)

# 1. Dependencies
- Plugin [vsrpgdev/VsConvertEscapeCharacters v1.2+](https://github.com/vsrpgdev/VsConvertEscapeCharacters)
- Plugin [vsrpgdev/VsUtils v1.5+](https://github.com/vsrpgdev/VsUtils)
# 2. Installation 

## 2.1. fast

1. create a new rpg maker project or choose an existing one.
2. copy everything from the [demo](./demo/) directory into your rpg maker project directory\
**be mindfull of what you overwrite if you copy into an existing project**\
**make sure you dont already have an jsonconfig.json in your project**

## 2.2. manual

1. install and activate [VsConvertEscapeCharacters](https://github.com/vsrpgdev/VsConvertEscapeCharacters) from github
1. install and activate [VsUtils](https://github.com/vsrpgdev/VsUtils) from github
1. Copy [VsAnimations.js](./js/plugins/VsAnimations.js) into your plugin directory
2. Activate the Plugin in **RPG Maker**
3. *[Optional]* if you want to use vscode IntelliSense also copy all *.d.ts files into your plugins directory\
  Additionally, if you don’t already have one, copy  [jsconfig.json](./js/jsconfig.json) into you **js** directory (**not the plugin directory**).\
  to fully use IntelliSense you also ned type files for the rpg maker core files. you can use your own or copy the [types](./js/types/) folder into your js directory.

# 3. Configuration
no configuration required
# 4. Usage
like all my plugins you get multiple entry points for the plugin.

```javascript
//through the window object
window.VsAnimations

//global
VsAnimations

//Vs.plugins namespace
Vs.plugins.VsAnimations
```

### VsAnimator Class

The `VsAnimator` class is responsible for handling animations with keyframes and easing functions.

example 
```javascript
let anim = new Vs.plugins.VsAnimations.VsAnimator(spriteProxy, easeFunc,iterations);
anim.addKeyframe(0,{x:50, opacity:255});
anim.addKeyframe(50,{x:Graphics.width-50, opacity:50});
anim.addKeyframe(100,{x:50, opacity:255});
anim.start(duration,haltInterpreter);
anim.addEventListener("animationcomplete", ()=>{
  console.log("animation is done");
})
```

#### Constructor

```typescript
constructor(target: Vs.plugins.VsAnimations.AnimationTarget, easing?: EasingType, iterations?: number)
```
- **target**: The target object for the animation.
- **easing** *(optional)*: The easing type for the animation (default: `'linear'`).
- **iterations** *(optional)*: The number of iterations (-1 for infinite, default: `1`).

#### Methods

- **`addKeyframe(percent: number, properties: AnimationTarget): void`**  
  Adds a keyframe to the animation.

- **`addKeyframe(keyFrame: Vs.plugins.VsAnimations.VsKeyFrame): void`**  
  Adds a keyframe using a `VsKeyFrame` object.

- **`start(duration?: number, haltInterpreter?: boolean): void`**  
  Starts the animation.
  - **duration** *(optional)*: Duration in milliseconds.
  - **haltInterpreter** *(optional)*: Whether to pause interpreter execution until the animation completes.

- **`update(deltaTime: number): void`**  
  Updates the animation progress.

- **`stop(): void`**  
  Stops the animation and resets progress.

- **`pause(): void`**  
  Pauses the animation.

- **`get progress(): number`**  
  Retrieves the current animation progress.

- **`destroy(): void`**  
  Destroys the animator instance.

- **`addEventListener<K extends keyof VsAnimatorEventsMap>(type: K, listener: (this: VsAnimator, ev: VsAnimatorEventsMap[K]) => any, context?: any): void`**  
  Adds an event listener for animation events.

- **`on<K extends keyof VsAnimatorEventsMap>(type: K, listener: (this: VsAnimator, ev: VsAnimatorEventsMap[K]) => any, context?: any): void`**  
  Adds an event listener (alternative syntax).

### VsKeyFrame Class

The `VsKeyFrame` class represents an individual keyframe in an animation sequence.

#### Constructor

```typescript
constructor(percent?: number, properties?: AnimationTarget)
```
- **percent** *(optional)*: The percentage of the animation timeline for this keyframe.
- **properties** *(optional)*: The properties associated with the keyframe.

#### Properties

- **`readonly percent: number`**  
  The percentage of the animation timeline at which this keyframe occurs.

- **`readonly properties: AnimationTarget`**  
  The property values for this keyframe.

### VsAnimatorEvents

The `VsAnimatorEvents` namespace defines the available animation events and their structures.

#### IterationCompleteEvent

```typescript
interface IterationCompleteEvent {
  currentIteration: number;
  maxIterations: number;
}
```
- **currentIteration**: The current iteration count.
- **maxIterations**: The maximum number of iterations.

#### UpdateEvent

```typescript
interface UpdateEvent {
  ease: number;
  progress: number;
}
```
- **ease**: The eased progress value.
- **progress**: The actual progress value.

---

This documentation provides an overview of the VsAnimations API, making it easier to implement animations in your project.
# 5. How does the plugin work

# 6. Changes to the core script
here you can look for possible conflicts with other plugins which change the same files
  - ## rmmz_objects.js
    - ### Game_Interpreter 
      - ### updateWaitMode
        **method override, orignal gets called**\
        wait for VsInterpreterWaiter is added

# 7. Troubleshooting
# 8. License
VsAnimations by vsrpgdev is marked with CC0 1.0 Universal. To view a copy of this license, visit https://creativecommons.org/publicdomain/zero/1.0/