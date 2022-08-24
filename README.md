# color-kit

This is an color library made to use with CSS.
Consists of pre-made hex colors based on <strong>[this page](https://dribbble.com/shots/6456667-Core-Design-System-01-Color-Dark-Theme)</strong>.

## Usage

#### install

```
    npm install @ifeelblue/color-kit
```

#### use :monocle_face:

```typescript
import { darkGreen, BLUE, buildColor } from "@ifeelblue/color-kit";
import { I_Color, E_ColorType } from "@ifeelblue/color-kit";

const greenColorHEX: string = buildColor(darkGreen); //  #01ff9b as string
// OR
const greenColorHEX2 = darkGray.hex;

const softBlueAsHEX: string = buildColor(BLUE.dark); //  #ff4580 as string

const myCustomHSLAColor: I_Color = {
  hue: 5,
  saturation: 50, // 50%
  lightness: 88, // 88%
  alpha: 0.7,
  type: E_ColorType.HSLA,
};

const myCustomColorHSLA = buildColor(myCustomHSLAColor); //  hsla(5, 50%, 88%, 0.7) as string
```

<hr />

## Types

### solid color

```typescript
export enum E_ColorType {
  HEX,
  RGB,
  RGBA,
  HSL,
  HSLA,
}
export interface I_Color {
  type: E_ColorType;
  hex: string;
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
```

### color pack

```typescript
export interface I_ColorPack {
  colorName: string;
  dark: I_Color;
  mid: I_Color;
  soft: I_Color;
}
```

<hr />

## Default Colors

### solid

```typescript
/*gray*/
const darkGray: I_Color = {
  type: E_ColorType.HEX,
  hex: "#28293D",
};
const midGray: I_Color = {
  type: E_ColorType.HEX,
  hex: "#555870",
};
const softGray: I_Color = {
  type: E_ColorType.HEX,
  hex: "#9090A7",
};
/*White*/
/*Red*/
/*Green*/
/*Blue*/
/*Orange*/
/*Yellow*/
/*Teal*/
/*Purple*/
```

### pack

```typescript
const GRAY: I_ColorPack = {
  colorName: "gray",
  dark: rgb.darkGray,
  mid: rgb.midGray,
  soft: rgb.softGray,
};
const WHITE: I_ColorPack = {
  colorName: "white",
  dark: rgb.darkWhite,
  mid: rgb.midWhite,
  soft: rgb.softWhite,
};
const RED;
const GREEN;
const BLUE;
const ORANGE;
const YELLOW;
const TEAL;
const PURPLE;
```
