declare class ColorFilter extends PIXI.Filter 
{
  constructor(vertexSrc?: string, fragmentSrc?: string, uniforms?: object);
  initialize(vertexSrc?: string, fragmentSrc?: string, uniforms?: object) : void;

  // Instance properties
  uniforms: {
      hue: number;
      colorTone: [number, number, number, number];
      blendColor: [number, number, number, number];
      brightness: number;
  };

  // Methods
  initialize(): void;
  setHue(hue: number): void;
  setColorTone(tone: [number, number, number, number]): void;
  setBlendColor(color: [number, number, number, number]): void;
  setBrightness(brightness: number): void;

  private _fragmentSrc(): string;
}
