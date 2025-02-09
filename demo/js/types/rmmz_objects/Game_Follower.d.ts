declare class Game_Follower extends Game_Character {
  protected _memberIndex: number;

  constructor(memberIndex: number);

  initialize(memberIndex: number): void;

  refresh(): void;

  actor(): Game_Actor | undefined;

  isVisible(): boolean;

  isGathered(): boolean;

  update(): void;

  chaseCharacter(character: Game_Character): void;
}
