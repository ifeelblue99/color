import { E_ColorType, I_Color } from "./colorTypes";

export function buildColor(color: I_Color): string {
  const { red, green, blue, hue, saturation, lightness, alpha, hex } = color;
  switch (color.type) {
    case E_ColorType.HEX:
      return hex;

    case E_ColorType.RGB:
      return `rgb(${red},${green},${blue})`;

    case E_ColorType.RGBA:
      return `rgba(${red},${green},${blue},${alpha})`;

    case E_ColorType.HSL:
      return `hsl(${hue},${saturation}%,${lightness}%)`;

    case E_ColorType.HSLA:
      return `hsla(${hue},${saturation}%,${lightness}%,${alpha})`;

    default:
      return "#fff";
  }
}
