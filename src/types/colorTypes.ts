export enum E_ColorType {
  HEX,
  RGB,
  RGBA,
  HSL,
  HSLA,
}
export interface I_Color {
  type: E_ColorType;
  hex?: string;
  /*hsl*/
  hue?: number;
  saturation?: number;
  lightness?: number;
  /*rgb*/
  red?: number;
  green?: number;
  blue?: number;
  /*opacity*/
  alpha?: number;
}
export interface I_ColorPack {
  colorName: string;
  dark: I_Color;
  mid: I_Color;
  soft: I_Color;
}
