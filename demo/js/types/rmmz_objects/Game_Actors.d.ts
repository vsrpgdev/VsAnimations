declare class Game_Actors {
  constructor();

  // Properties
  private _data: (Game_Actor | null)[];

  // Initialization
  initialize(): void;

  // Methods
  actor(actorId: number): Game_Actor | null;
}
