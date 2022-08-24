# color-kit

This is an color library made to use with CSS.
Consists of pre-made hex colors based on <strong>[this page](https://dribbble.com/shots/6456667-Core-Design-System-01-Color-Dark-Theme)</strong>. 

## types
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
```
### color pack
```typescript
export interface I_ColorPack {
    colorName: string
    dark: I_Color
    mid: I_Color
    soft: I_Color
}
```

## default colors
### solid
```typescript
/*gray*/
export const darkGray: I_Color = {
    type: E_ColorType.HEX, 
    hex: "#28293D"
}
export const midGray: I_Color = {
    type: E_ColorType.HEX, 
    hex: "#555870"
}
export const softGray: I_Color = {
    type: E_ColorType.HEX, 
    hex: "#9090A7"
}

/*White*/
export const darkWhite: I_Color = {
    type: E_ColorType.HEX, 
    hex: "#EBEAEF"
}
export const midWhite: I_Color = {
    type: E_ColorType.HEX, 
    hex: "#F2F2F4"
}
export const softWhite: I_Color = {
    type: E_ColorType.HEX, 
    hex: "#FAFAFC"
}

/*Red*/
export const darkRed: I_Color = {
    type: E_ColorType.HEX, 
    hex: "#FF3B3B"
}
export const midRed: I_Color = {
    type: E_ColorType.HEX, 
    hex: "#FF5C5C"
}
export const softRed: I_Color = {
    type: E_ColorType.HEX, 
    hex: "#FF8080"
}

/*Green*/
export const darkGreen: I_Color = {
    type: E_ColorType.HEX, 
    hex: "#05C270"
}
export const midGreen: I_Color = {
    type: E_ColorType.HEX, 
    hex: "#39DA8A"
}
export const softGreen: I_Color = {
    type: E_ColorType.HEX, 
    hex: "#57EBA3"
}

/*Blue*/
export const darkBlue: I_Color = {
    type: E_ColorType.HEX, 
    hex: "#1E3669"
}
export const midBlue: I_Color = {
    type: E_ColorType.HEX, 
    hex: "#5B8DEE"
}
export const softBlue: I_Color = {
    type: E_ColorType.HEX, 
    hex: "#9DBFF8"
}

/*Orange*/
export const darkOrange: I_Color = {
    type: E_ColorType.HEX, 
    hex: "#FF8801"
}
export const midOrange: I_Color = {
    type: E_ColorType.HEX, 
    hex: "#FDAC41"
}
export const softOrange: I_Color = {
    type: E_ColorType.HEX, 
    hex: "#FCCC76"
}

/*Yellow*/
export const darkYellow: I_Color = {
    type: E_ColorType.HEX, 
    hex: "#FFCC00"
}
export const midYellow: I_Color = {
    type: E_ColorType.HEX, 
    hex: "#FEDD49"
}
export const softYellow: I_Color = {
    type: E_ColorType.HEX, 
    hex: "#FEED73"
}

/*Teal*/
export const darkTeal: I_Color = {
    type: E_ColorType.HEX, 
    hex: "#00CFDD"
}
export const midTeal: I_Color = {
    type: E_ColorType.HEX, 
    hex: "#74E0E6"
}
export const softTeal: I_Color = {
    type: E_ColorType.HEX, 
    hex: "#A9EFF3"
}

/*Purple*/
export const darkPurple: I_Color = {
    type: E_ColorType.HEX, 
    hex: "#6500CD"
}
export const midPurple: I_Color = {
    type: E_ColorType.HEX, 
    hex: "#AC5CD9"
}
export const softPurple: I_Color = {
    type: E_ColorType.HEX, 
    hex: "#DEA5E8"
}

```
### pack
```typescript
export const GRAY: I_ColorPack = {
    colorName: "gray",
    dark: rgb.darkGray,
    mid: rgb.midGray,
    soft: rgb.softGray,
} 

export const WHITE: I_ColorPack = {
    colorName: "white",
    dark: rgb.darkWhite,
    mid: rgb.midWhite,
    soft: rgb.softWhite,
} 

export const RED: I_ColorPack = {
    colorName: "red",
    dark: rgb.darkRed,
    mid: rgb.midRed,
    soft: rgb.softRed,
} 

export const GREEN: I_ColorPack = {
    colorName: "green",
    dark: rgb.darkGreen,
    mid: rgb.midGreen,
    soft: rgb.softGreen,
} 

export const BLUE: I_ColorPack = {
    colorName: "blue",
    dark: rgb.darkBlue,
    mid: rgb.midBlue,
    soft: rgb.softBlue,
} 

export const ORANGE: I_ColorPack = {
    colorName: "orange",
    dark: rgb.darkOrange,
    mid: rgb.midOrange,
    soft: rgb.softOrange,
} 

export const YELLOW: I_ColorPack = {
    colorName: "yellow",
    dark: rgb.darkYellow,
    mid: rgb.midYellow,
    soft: rgb.softYellow,
} 

export const TEAL: I_ColorPack = {
    colorName: "teal",
    dark: rgb.darkTeal,
    mid: rgb.midTeal,
    soft: rgb.softTeal,
} 

export const PURPLE: I_ColorPack = {
    colorName: "purple",
    dark: rgb.darkPurple,
    mid: rgb.midPurple,
    soft: rgb.softPurple,
} 
```
