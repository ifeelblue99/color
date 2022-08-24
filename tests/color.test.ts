import Color from "../src/Color";
import { buildColor } from "../src/utils/buildColor";
import { I_Color } from "../src/utils/colorTypes";
import { I_ColorPack } from "../src/utils/colorPack";
import * as solidColors from "../src/colors/solid-rgb-colors";
import * as colorPacks from "../src/colors/default-colors";
import { changeColorType } from "../src/utils/changeColorType";

describe("Color.ts", () => {
  it("should initialize with default colors", () => {
    const color = new Color();
    expect(color.getColorPack).toBe(colorPacks.GREEN);
  });
});
