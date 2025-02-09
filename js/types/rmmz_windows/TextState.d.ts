/**
 */
declare class TextState {
  text: string; // The processed text after escape characters are converted
  index: number; // The current position in the text
  x: number; // The x-coordinate for drawing text
  y: number; // The y-coordinate for drawing text
  width: number; // The maximum width available for text rendering
  height: number; // The calculated height of the text block
  startX: number; // The starting x-coordinate for the text block
  startY: number; // The starting y-coordinate for the text block
  rtl: boolean; // Indicates if the text direction is right-to-left
  buffer: any; // A buffer used for drawing the text (type depends on implementation)
  drawing: boolean; // Indicates if the text is currently being drawn
  outputWidth: number; // The width of the output text area
  outputHeight: number; // The height of the output text area
}