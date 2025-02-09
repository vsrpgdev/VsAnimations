declare class Game_Followers {
  private _visible: boolean;
  private _gathering: boolean;
  private _data: Game_Follower[];

  constructor();

  initialize(): void;

  setup(): void;

  isVisible(): boolean;

  show(): void;

  hide(): void;

  data(): Game_Follower[];

  reverseData(): Game_Follower[];

  follower(index: number): Game_Follower;

  refresh(): void;

  update(): void;

  updateMove(): void;

  jumpAll(): void;

  synchronize(x: number, y: number, d: number): void;

  gather(): void;

  areGathering(): boolean;

  visibleFollowers(): Game_Follower[];

  areMoving(): boolean;

  areGathered(): boolean;

  isSomeoneCollided(x: number, y: number): boolean;
}
