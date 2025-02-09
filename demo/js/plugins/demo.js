(()=>{

  class AnimActorHelper
  {
    /**
     * 
     * @param {Game_Actor} target 
     */
    constructor(target)
    {
      this.target = target;
    }
    /** @type {Game_Actor} */
    target;

    get HP (){
      return this.target.hp;
    }
    set HP (value){
      this.target.setHp(Math.round(value));
    }
  }

  class AnimPictureHelper
  {
    /**
     * 
     * @param {Sprite} target 
     */
    constructor(target)
    {
      this.target = target;
    }
    /** @type {Sprite} */
    target;
  }

  window.AnimatePicture = function(id,duration,easeFunc, haltInterpreter,iterations) 
  {
    if (iterations == undefined)
      iterations = 2;
    /**@type {Sprite} */
    let sprite = SceneManager._scene.children[0]._pictureContainer.children[id-1];

    let helper = new AnimPictureHelper(sprite);

    let spriteProxy = Vs.Utils.createProxyObj(sprite,helper);

    let anim = new Vs.plugins.VsAnimations.VsAnimator(spriteProxy, easeFunc,iterations);
    anim.addKeyframe(0,{x:50, opacity:255});
    anim.addKeyframe(50,{x:Graphics.width-50, opacity:50});
    anim.addKeyframe(100,{x:50, opacity:255});
    anim.start(duration,haltInterpreter);
    anim.addEventListener("animationcomplete", ()=>{
      console.log("animation is done");
    })
  }

  let Scene_Menu_prototype_initialize = Scene_Menu.prototype.initialize;
  Scene_Menu.prototype.initialize = function(...param)
  {
    Scene_Menu_prototype_initialize.call(this,...param);

    window.setTimeout(()=>{
      
      let actor = Vs.Utils.createProxyObj($gameActors.actor(1),new AnimActorHelper($gameActors.actor(1)));
      let anim = new Vs.plugins.VsAnimations.VsAnimator(actor, "linear",1);
      anim.addKeyframe(0,{HP:actor.hp});
      anim.addKeyframe(45,{HP:1});
      anim.addKeyframe(55,{HP:1});
      anim.addKeyframe(100,{HP:actor.hp});
      anim.start(2000,true);

      actor = Vs.Utils.createProxyObj($gameActors.actor(4),new AnimActorHelper($gameActors.actor(4)));
      anim = new Vs.plugins.VsAnimations.VsAnimator(actor, "ease-in-out",1);
      anim.addKeyframe(0,{HP:actor.hp});
      anim.addKeyframe(45,{HP:1});
      anim.addKeyframe(55,{HP:1});
      anim.addKeyframe(100,{HP:actor.hp});
      anim.start(2000,true);
    },100);
  }
})();