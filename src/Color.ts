import { I_Color } from "./utils/colorTypes"
import {I_ColorPack} from "./utils/colorPack"
import { midGreen } from "./colors/solid-rgb-colors"
import { GREEN } from "./colors/default-colors"

class ColorBuilder {
    protected solidColor: I_Color = midGreen
    protected colorPack: I_ColorPack = GREEN

    private  _Color: ColorBuilder;

    constructor(solid?: I_Color, pack?: I_ColorPack) {
        if(solid)
            this.solidColor = solid
        if(pack)
            this.colorPack = pack
    }

    getSolidColor() {
        return this.solidColor
    }
    setSolidColor(solid: I_Color) {
        return this.solidColor = solid
    }

    getColorPack() {
        return this.colorPack
    }
    setColorPack(pack: I_ColorPack) {
        return this.colorPack = pack
    }

    createSolidColor(solid: I_Color) {
        this._Color = new ColorBuilder(solid)
    }
    createColorPack(pack: I_ColorPack) {
        this._Color = new ColorBuilder(null, pack)
    }
    create(solid: I_Color, pack: I_ColorPack) {
        this._Color = new ColorBuilder(solid, pack)
    }
    build(): ColorBuilder {
        return this._Color
    }


}


export default ColorBuilder