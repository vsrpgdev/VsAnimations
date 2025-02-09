declare namespace rm.types {
  /**
   * A superclass of actor, class, skill, item, weapon, armor, enemy, and state.
   *
   * Some items are unnecessary depending on the type of data, but they are included for convenience sake.
   */
  export type BaseItem = {
    /**
     * The description text.
     */
    description: string;
    /**
     * The icon number.
     */
    iconIndex: number;
    /**
     * The item ID.
     */
    id: number;
    meta: Object;
    /**
     * The item name.
     */
    name: string;
    note: string;
  }
  export type EnemyAction = {
    /**
     * The first parameter of the condition.
     */
    conditionParam1: number;
    /**
     * The second parameter of the condition.
     */
    conditionParam2: number;
    /**
     * The type of condition.
     *
     * 0: Always
     * 1: Turn No.
     * 2: HP
     * 3: MP
     * 4: State
     * 5: Party Level
     * 6: Switch
     */
    conditionType: number;
    /**
     * The action's priority rating (1..10).
     */
    rating: number;
    /**
     * The ID of skills to be employed as actions.
     */
    skillId: number;
  }
  export type Damage = {
    /**
     * Critical hit (true/false).
     */
    critical: boolean;
    /**
     * The element ID.
     */
    elementId: number;
    /**
     * The formula.
     */
    formula: string;
    /**
     * The type of damage.
     *
     * 0: None
     * 1: HP damage
     * 2: MP damage
     * 3: HP recovery
     * 4: MP recovery
     * 5: HP drain
     * 6: MP drain
     */
    type: number;
    /**
     * The degree of variability.
     */
    variance: number;
  }

  export type UsableItem = {
    /**
     * The animation ID.
     */
    animationId: number;
    /**
     * Damage (RPG.Damage).
     */
    damage: rm.types.Damage;
    /**
     * The description text.
     */
    description: string;
    /**
     * A list of use effects. An RPG.Effect array.
     */
    effects: rm.types.Effect[];
    /**
     * The type of hit.
     *
     * 0: Certain hit
     * 1: Physical attack
     * 2: Magical attack
     */
    hitType: number;
    /**
     * The icon number.
     */
    iconIndex: number;
    /**
     * The item ID.
     */
    id: number;
    meta: Object;
    /**
     * The item name.
     */
    name: string;
    note: string;
    /**
     * When the item/skill may be used.
     *
     * 0: Always
     * 1: Only in battle
     * 2: Only from the menu
     * 3: Never
     */
    occasion: number;
    /**
     * The number of repeats.
     */
    repeats: number;
    /**
     * The scope of effects.
     *
     * 0: None
     * 1: One Enemy
     * 2: All Enemies
     * 3: One Random Enemy
     * 4: Two Random Enemies
     * 5: Three Random Enemies
     * 6: Four Random Enemies
     * 7: One Ally
     * 8: All Allies
     * 9: One Ally (Dead)
     * 10: All Allies (Dead)
     * 11: The User
     */
    scope: number;
    /**
     * The speed correction.
     */
    speed: number;
    /**
     * The success rate.
     */
    successRate: number;
    /**
     * The number of TP gained.
     */
    tpGain: number;
  }
  export type Effect = {
    /**
     * The use effect code.
     */
    code: number;
    /**
     * The ID of data (state, parameter, and so on) according to the type of use effect.
     */
    dataId: number;
    /**
     * Value 1 set according to the type of use effect.
     */
    value1: number;
    /**
     * Value 2 set according to the type of use effect.
     */
    value2: number;
  }
export type State = {
  /**
   * The timing of automatic state removal.
   *
   * 0: None
   * 1: At end of action
   * 2: At end of turn
   */
  autoRemovalTiming: number;
  /**
   * Chance of state being removed by damage (%).
   */
  chanceByDamage: number;
  description: string;
  doc: string;
  /**
   * The icon number.
   */
  iconIndex: number;
  /**
   * The ID.
   */
  id: number;
  internal: boolean;
  links: string[];
  /**
   * The maximum turns of the duration.
   */
  maxTurns: number;
  /**
   * The message when an actor fell in the state.
   */
  message1: string;
  /**
   * The message when an enemy fell in the state.
   */
  message2: string;
  /**
   * The message when the state remains.
   */
  message3: string;
  /**
   * The message when the state is removed.
   */
  message4: number;
  /**
   * The minimum turns of the duration.
   */
  minTurns: number;
  /**
   * The side-view motion.
   */
  motion: number;
  /**
   * The name.
   */
  name: string;
  /**
   * The side-view overlay.
   */
  overlay: number;
  parameters: string[];
  platforms: haxe.display.Platform[];
  /**
   * The state priority (0..100).
   */
  priority: number;
  releaseByDamage: boolean;
  /**
   * Removes state at end of battle (true/false).
   */
  removeAtBattleEnd: boolean;
  /**
   * Removes state by damage (true/false).
   */
  removeByDamage: boolean;
  /**
   * Removes state by action restriction (true/false).
   */
  removeByRestriction: boolean;
  /**
   * Removes state by walking (true/false).
   */
  removeByWalking: boolean;
  /**
   * Action restrictions.
   *
   * 0: None
   * 1: Attack enemy
   * 2: Attack enemy or ally
   * 3: Attack ally
   * 4: Cannot act
   */
  restriction: number;
  /**
   * Number of steps until state is removed.
   */
  stepToRemove: number;
  targets: haxe.display.MetadataTarget[];
  /**
   * The array of Trait data.
   */
  traits: rm.types.Trait[];
}
export type Trait = {
  /**
   * The trait code.
   */
  code: number;
  /**
   * The ID of the data (such as elements or states) according to the type of the trait.
   */
  dataId: number;
  /**
   * The map tree expansion flag, which is used internally.
   */
  expanded: boolean;
  /**
   * The x-axis scroll position, which is used internally.
   */
  scrollX: number;
  /**
   * The y-axis scroll position, which is used internally.
   */
  scrollY: number;
  /**
   * The value set according to the type of the trait.
   */
  value: number;
}
export type Skill = {
  /**
   * The animation ID.
   */
  animationId: number;
  /**
   * Damage (RPG.Damage).
   */
  damage: rm.types.Damage;
  /**
   * The description text.
   */
  description: string;
  /**
   * A list of use effects. An RPG.Effect array.
   */
  effects: rm.types.Effect[];
  /**
   * The type of hit.
   *
   * 0: Certain hit
   * 1: Physical attack
   * 2: Magical attack
   */
  hitType: number;
  /**
   * The icon number.
   */
  iconIndex: number;
  /**
   * The item ID.
   */
  id: number;
  /**
   * The use message.
   */
  message1: string;
  /**
   * The use message.
   */
  message2: string;
  meta: Object;
  /**
   * Number of MP consumed.
   */
  mpCost: number;
  /**
   * The item name.
   */
  name: string;
  note: string;
  /**
   * When the item/skill may be used.
   *
   * 0: Always
   * 1: Only in battle
   * 2: Only from the menu
   * 3: Never
   */
  occasion: number;
  /**
   * The number of repeats.
   */
  repeats: number;
  /**
   * Weapon type required.
   */
  requiredWtypeId1: number;
  /**
   * Weapon type required.
   */
  requiredWtypeId2: number;
  /**
   * The scope of effects.
   *
   * 0: None
   * 1: One Enemy
   * 2: All Enemies
   * 3: One Random Enemy
   * 4: Two Random Enemies
   * 5: Three Random Enemies
   * 6: Four Random Enemies
   * 7: One Ally
   * 8: All Allies
   * 9: One Ally (Dead)
   * 10: All Allies (Dead)
   * 11: The User
   */
  scope: number;
  /**
   * The speed correction.
   */
  speed: number;
  /**
   * Skill type ID.
   */
  stypeId: number;
  /**
   * The success rate.
   */
  successRate: number;
  /**
   * Number of TP consumed
   */
  tpCost: number;
  /**
   * The number of TP gained.
   */
  tpGain: number;
}
export type Item = {
  /**
   * The animation ID.
   */
  animationId: number;
  /**
   * The truth value indicating whether the item disappears when used.
   */
  consumable: boolean;
  /**
   * Damage (RPG.Damage).
   */
  damage: rm.types.Damage;
  /**
   * The description text.
   */
  description: string;
  /**
   * A list of use effects. An RPG.Effect array.
   */
  effects: rm.types.Effect[];
  /**
   * The type of hit.
   *
   * 0: Certain hit
   * 1: Physical attack
   * 2: Magical attack
   */
  hitType: number;
  /**
   * The icon number.
   */
  iconIndex: number;
  /**
   * The item ID.
   */
  id: number;
  /**
   * The item type ID.
   *
   * 1: Regular item
   * 2: Key item
   */
  itypeId: number;
  meta: Object;
  /**
   * The item name.
   */
  name: string;
  note: string;
  /**
   * When the item/skill may be used.
   *
   * 0: Always
   * 1: Only in battle
   * 2: Only from the menu
   * 3: Never
   */
  occasion: number;
  /**
   * The item's price.
   */
  price: number;
  /**
   * The number of repeats.
   */
  repeats: number;
  /**
   * The scope of effects.
   *
   * 0: None
   * 1: One Enemy
   * 2: All Enemies
   * 3: One Random Enemy
   * 4: Two Random Enemies
   * 5: Three Random Enemies
   * 6: Four Random Enemies
   * 7: One Ally
   * 8: All Allies
   * 9: One Ally (Dead)
   * 10: All Allies (Dead)
   * 11: The User
   */
  scope: number;
  /**
   * The speed correction.
   */
  speed: number;
  /**
   * The success rate.
   */
  successRate: number;
  /**
   * The number of TP gained.
   */
  tpGain: number;
}
export type EquipItem = {
  /**
   * The description text.
   */
  description: string;
  /**
   * The type of weapon or armor.
   *
   * 0: Weapon
   * 1: Shield
   * 2: Head
   * 3: Body
   * 4: Accessory
   */
  etypeId: number;
  /**
   * The icon number.
   */
  iconIndex: number;
  /**
   * The item ID.
   */
  id: number;
  meta: Object;
  /**
   * The item name.
   */
  name: string;
  note: string;
  /**
   * The amount of parameter change. An array of integers using the following IDs as subscripts:
   *
   * 0: Maximum hit points
   * 1: Maximum magic points
   * 2: Attack power
   * 3: Defense power
   * 4: Magic attack power
   * 5: Magic defense power
   * 6: Agility
   * 7: Luck
   */
  params: number[];
  /**
   * The price of the weapon or armor.
   */
  price: number;
  /**
   * The array of Trait data.
   */
  traits: rm.types.Trait[];
}
export type Actor = {
  /**
   * The file name of the actor's battler graphic.
   */
  battlerName: string;
  /**
   * The index (0..7) of the actor's walking graphic.
   */
  characterIndex: number;
  /**
   * The file name of the actor's walking graphic.
   */
  characterName: string;
  /**
   * The actor's class ID.
   */
  classId: number;
  doc: string;
  /**
   * The actor's initial equipment. An array of weapon IDs or armor IDs with the following subscripts:
   */
  equips: number[];
  /**
   * The index (0..7) of the actor's face graphic.
   */
  faceIndex: number;
  /**
   * The file name of the actor's face graphic.
   */
  faceName: string;
  /**
   * The ID.
   */
  id: string;
  /**
   * The actor's initial level.
   */
  initialLevel: number;
  internal: boolean;
  links: string[];
  /**
   * The actor's max level
   */
  maxLevel: number;
  /**
   * The name.
   */
  name: string;
  /**
   * The actor's nickname.
   */
  nickname: string;
  parameters: string[];
  platforms: haxe.display.Platform[];
  /**
   * The profile.
   */
  profile: string;
  targets: haxe.display.MetadataTarget[];
  /**
   * The array of Trait data.
   */
  traits: rm.types.Trait[];
}
export type Weapon = {
  /**
   * The animation ID when using the weapon.
   */
  animationId: number;
  /**
   * The description text.
   */
  description: string;
  /**
   * The type of weapon or armor.
   *
   * 0: Weapon
   * 1: Shield
   * 2: Head
   * 3: Body
   * 4: Accessory
   */
  etypeId: number;
  /**
   * The icon number.
   */
  iconIndex: number;
  /**
   * The item ID.
   */
  id: number;
  meta: Object;
  /**
   * The item name.
   */
  name: string;
  note: string;
  /**
   * The amount of parameter change. An array of integers using the following IDs as subscripts:
   *
   * 0: Maximum hit points
   * 1: Maximum magic points
   * 2: Attack power
   * 3: Defense power
   * 4: Magic attack power
   * 5: Magic defense power
   * 6: Agility
   * 7: Luck
   */
  params: number[];
  /**
   * The price of the weapon or armor.
   */
  price: number;
  /**
   * The array of Trait data.
   */
  traits: rm.types.Trait[];
  /**
   * The weapon type ID.
   */
  wtypeId: number;
}
export type Armor = {
  /**
   * The armor type ID.
   */
  atypeId: number;
  /**
   * The description text.
   */
  description: string;
  /**
   * The type of weapon or armor.
   *
   * 0: Weapon
   * 1: Shield
   * 2: Head
   * 3: Body
   * 4: Accessory
   */
  etypeId: number;
  /**
   * The icon number.
   */
  iconIndex: number;
  /**
   * The item ID.
   */
  id: number;
  meta: Object;
  /**
   * The item name.
   */
  name: string;
  note: string;
  /**
   * The amount of parameter change. An array of integers using the following IDs as subscripts:
   *
   * 0: Maximum hit points
   * 1: Maximum magic points
   * 2: Attack power
   * 3: Defense power
   * 4: Magic attack power
   * 5: Magic defense power
   * 6: Agility
   * 7: Luck
   */
  params: number[];
  /**
   * The price of the weapon or armor.
   */
  price: number;
  /**
   * The array of Trait data.
   */
  traits: rm.types.Trait[];
}
export type EnemyDropItem = {
  /**
   * The ID of the data depending on the type of dropped item (item, weapon, or armor).
   */
  dataId: number;
  /**
   * N of the probability that the item will be dropped, 1/N.
   */
  denominator: number;
  /**
   * The type of dropped item.
   *
   * 0: None
   * 1: Item
   * 2: Weapon
   * 3: Armor
   */
  kind: number;
}

export type Enemy = {
  /**
   * The enemy's action pattern. An array of RPG.Enemy.Action.
   */
  actions: rm.types.EnemyAction[];
  /**
   * The adjustment value for the battler graphic's hue (0..360).
   */
  battlerHue: number;
  /**
   * The file name of the enemy's battler graphic.
   */
  battlerName: string;
  doc: string;
  /**
   * The items the enemy drops. An RPG.Enemy.DropItem array.
   */
  dropItems: rm.types.EnemyDropItem[];
  /**
   * The enemy's experience.
   */
  exp: number;
  /**
   * The enemy's gold.
   */
  gold: number;
  /**
   * The ID of the enemy in the database.
   *
   * @type {number}
   * @memberof Enemy
   */
  id: number;
  internal: boolean;
  links: string[];
  /**
   * The name of the enemy in the database.
   *
   * @type {string}
   * @memberof Enemy
   */
  name: string;
  parameters: string[];
  /**
   * Parameters. An array of integers using the following IDs as subscripts:
   *
   * 0: Maximum hit points
   * 1: Maximum magic points
   * 2: Attack power
   * 3: Defense power
   * 4: Magic attack power
   * 5: Magic defense power
   * 6: Agility
   * 7: Luck
   */
  params: number[];
  platforms: haxe.display.Platform[];
  targets: haxe.display.MetadataTarget[];
}
export type TroopMember = {
  /**
   * The enemy ID.
   */
  enemyId: number;
  /**
   * The truth value of the [Appear Halfway] option.
   */
  hidden: boolean;
  /**
   * The troop member's x-coordinate.
   */
  x: number;
  /**
   * The troop member's y-coordinate.
   */
  y: number;
}
export type PageCondition = {
  /**
   * The HP percentage specified in the [Actor] condition.
   */
  actorHp: number;
  /**
   * The actor ID specified in the [Actor] condition.
   */
  actorId: number;
  /**
   * The truth value indicating whether the [Actor] condition is valid.
   */
  actorValid: boolean;
  /**
   * The HP percentage specified in the [Enemy] condition.
   */
  enemyHp: number;
  /**
   * The troop member index specified in the [Enemy] condition (0..7).
   */
  enemyIndex: number;
  /**
   * The truth value indicating whether the [Enemy] condition is valid.
   */
  enemyValid: boolean;
  /**
   * The switch ID specified in the [Switch] condition.
   */
  switchId: number;
  /**
   * The truth value indicating whether the [Switch] condition is valid.
   */
  switchValid: boolean;
  /**
   * The a and b values specified in the [Turn No.] condition. To be input in the form A + B * X.
   */
  turnA: number;
  /**
   * The a and b values specified in the [Turn No.] condition. To be input in the form A + B * X.
   */
  turnB: number;
  /**
   * The truth value indicating whether the [At End of Turn] condition is valid.
   */
  turnEnding: boolean;
  /**
   * The truth value indicating whether the [Turn No.] condition is valid.
   */
  turnValid: boolean;
}
export type EventCommand = {
  /**
   * The event code.
   */
  code: number;
  /**
   * The indent depth. Usually 0. The [Conditional Branch] command, among others, adds 1 with every step deeper.
   */
  indent: number;
  /**
   * An array containing the Event command's arguments. The contents vary for each command.
   */
  parameters: any[];
}
export type Page = {
  /**
   * Condition (RPG.Troop.Page.Condition).
   */
  condition: rm.types.PageCondition;
  /**
   * Program contents. An RPG.EventCommand array.
   */
  list: rm.types.EventCommand[];
  /**
   * Span (0: battle, 1: turn, 2: moment).
   */
  span: number;
}

export type Troop = {
  /**
   * The troop ID.
   */
  id: number;
  /**
   * The troop members. An RPG.Troop.Member array.
   */
  members: rm.types.TroopMember[];
  /**
   * The troop name.
   */
  name: string;
  /**
   * The battle events. An RPG.Troop.Page array.
   */
  pages: rm.types.Page[];
}
export type EventPageConditions = {
  /**
   * The ID of that actor if the [Actor] condition is valid.
   */
  actorId: string;
  /**
   * The truth value indicating whether the [Actor] condition is valid.
   */
  actorValid: boolean;
  /**
   * The ID of that item if the [Item] condition is valid.
   */
  itemId: string;
  /**
   * The truth value indicating whether the [Item] condition is valid.
   */
  itemValid: boolean;
  /**
   * The letter of that self switch ("A".."D") if the [Self Switch] condition is valid.
   */
  selfSwitchCh: string;
  /**
   * The truth value indicating whether the [Self Switch] condition is valid.
   */
  selfSwitchValid: boolean;
  /**
   * The ID of that switch if the first [Switch] condition is valid.
   */
  switch1Id: number;
  /**
   * The truth value indicating whether the first [Switch] condition is valid.
   */
  switch1Valid: boolean;
  /**
   * The ID of that switch if the second [Switch] condition is valid.
   */
  switch2Id: number;
  /**
   * The truth value indicating whether the second [Switch] condition is valid.
   */
  switch2Valid: boolean;
  /**
   * The ID of that variable if the [Variable] condition is valid.
   */
  variableId: number;
  /**
   * The truth value indicating whether the [Variable] condition is valid.
   */
  variableValid: boolean;
  /**
   * The standard value of that variable (x and greater) if the [Variable] condition is valid.
   */
  variableValue: number;
}

export type EventPageImage = {
  /**
   * The index of the character's graphic file (0..7).
   */
  characterIndex: number;
  /**
   * The file name of the character's graphic.
   */
  characterName: string;
  /**
   * The direction in which the character is facing (2: down, 4: left, 6: right, 8: up).
   */
  direction: number;
  /**
   * The character's pattern (0..2).
   */
  pattern: number;
  /**
   * The tile ID. If the specified graphic is not a tile, this value is 0.
   */
  tileId: number;
}

export type MoveRoute = {
  /**
   * Program contents. An RPG.MoveCommand array.
   */
  list: rm.types.MoveCommand[];
  /**
   * The truth value of the [Repeat Action] option.
   */
  repeat: boolean;
  /**
   * The truth value of the [Skip If Cannot Move] option.
   */
  skippable: boolean;
  /**
   * The truth value of the [Wait for Completion] option.
   */
  wait: boolean;
}

export type EventPage = {
  /**
   * The event condition (RPG.EventPage.Condition).
   */
  conditions: rm.types.EventPageConditions;
  /**
   * The truth value of the [Direction Fix] option.
   */
  directionFix: boolean;
  /**
   * The event graphic (RPG.EventPage.Image) .
   */
  image: rm.types.EventPageImage;
  /**
   * A list of event commands. An RPG.EventCommand array.
   */
  list: rm.types.EventCommand[];
  /**
   * The movement frequency (1: lowest, 2: lower, 3: normal, 4: higher, 5: highest).
   */
  moveFrequency: number;
  /**
   * The movement route (RPG.MoveRoute). Referenced only when the movement type is set to custom.
   */
  moveRoute: rm.types.MoveRoute[];
  /**
   * The movement speed (1: x8 slower, 2: x4 slower, 3: x2 slower, 4: normal, 5: x2 faster, 6: x4 faster).
   */
  moveSpeed: number;
  /**
   * The type of movement (0: fixed, 1: random, 2: approach, 3: custom).
   */
  moveType: number;
  /**
   * The priority type (0: below characters, 1: same as characters, 2: above characters).
   */
  priorityType: number;
  /**
   * The truth value of the [Stepping Animation] option.
   */
  stepAnime: boolean;
  /**
   * The truth value of the [Through] option.
   */
  through: boolean;
  /**
   * The event trigger (0: action button, 1: player touch, 2: event touch, 3: autorun, 4: parallel).
   */
  trigger: number;
  /**
   * The truth value of the [Walking Animation] option.
   */
  walkAnime: boolean;
}
export type Tileset = {
  doc: string;
  /**
   * The flags table. A 1-dimensional array containing a variety of flags (Table).
   *
   * Uses tile IDs as subscripts. The correspondence of each bit is as shown below:
   *
   * 0x0001: Impassable downward
   * 0x0002: Impassable leftward
   * 0x0004: Impassable rightward
   * 0x0008: Impassable upward
   * 0x0010: Display on normal character
   * 0x0020: Ladder
   * 0x0040: Bush
   * 0x0080: Counter
   * 0x0100: Damage floor
   * 0x0200: Impassable by boat
   * 0x0400: Impassable by ship
   * 0x0800: Airship cannot land
   * 0xF000: Terrain tag
   * This manual does not discuss bit operations, but they are similar to those in C.
   * We recommend an Internet search using keywords such as "hexadecimal bit operations" when necessary.
   */
  flags: number[];
  /**
   * The ID of the tile set.
   */
  id: number;
  internal: boolean;
  links: string[];
  /**
   * The mode of the tile set (0: Field type, 1: Area type, 2: VX compatible type).
   */
  mode: number;
  /**
   * The name of the tile set.
   */
  name: string;
  parameters: string[];
  platforms: haxe.display.Platform[];
  targets: haxe.display.MetadataTarget[];
  /**
   * The file name of the graphic used as the number index (0-8) tile set.
   *
   * The correspondence between numbers and sets is illustrated in the table below.
   *
   * 0 TileA1
   * 1 TileA2
   * 2 TileA3
   * 3 TileA4
   * 4 TileA5
   * 5 TileB
   * 6 TileC
   * 7 TileD
   * 8 TileE
   */
  tilesetNames: string[];
}
export type MapEncounter = {
  /**
   * An array containing Region IDs.
   */
  regionSet: number[];
  /**
   * The enemy Troop ID.
   */
  troopId: number;
  /**
   * Weight/chance  among enemies on the map that you'll
   * meet this enemy.
   */
  weight: number;
}
export type AudioFile = {
  /**
   * The sound file name.
   */
  name: string;
  /**
   * The pan.
   */
  pan: number;
  /**
   * The sound's pitch (50..150). The default value is 100.
   */
  pitch: number;
  /**
   * The sound's volume (0..100). The default values are 100 for BGM and ME and 80 for BGS and SE.
   */
  volume: number;
}
export type SystemVehicle = {
  /**
   * The vehicle's BGM (RPG.AudioFile).
   */
  bgm: rm.types.AudioFile;
  /**
   * The index of the vehicle's walking graphic (0..7).
   */
  characterIndex: number;
  /**
   * The file name of the vehicle's walking graphic.
   */
  characterName: string;
  /**
   * The map ID of the vehicle's initial position.
   */
  startMapId: number;
  /**
   * The map's x-coordinate of the vehicle's initial position.
   */
  startX: number;
  /**
   * The map's y-coordinate of the vehicle's initial position.
   */
  startY: number;
}
}
  