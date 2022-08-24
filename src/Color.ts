import { I_Color } from "./utils/colorTypes"
import {I_ColorPack} from "./utils/colorPack"
import { midGreen } from "./colors/solid-rgb-colors"
import { GREEN } from "./colors/default-colors"

class Color {
    solidColor: I_Color = midGreen
    colorPack: I_ColorPack = GREEN
    
    
    constructor(solid?: I_Color, pack?: I_ColorPack) {
        if(solid)
            this.solidColor = solid
        if(pack)
            this.colorPack
    }
}


export default Color