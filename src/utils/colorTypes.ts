export enum E_ColorType {
    HEX,
    RGB,
    RGBA,
    HSL,
    HSLA,
}
export interface I_Color {
    type: E_ColorType
    hex: string
    /*hsl*/
    hue?: number,
    saturation?: number,
    lightness?: number,
    /*rgb*/
    red?: number,
    green?: number,
    blue?: number,
    /*opacity*/
    alpha?: number
}
