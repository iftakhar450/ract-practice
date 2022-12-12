import { PaletteColorOptions } from "@material-ui/core";
import { ThemeOptions, PaletteOptions, PaletteColor } from "@mui/material/styles";

declare module "@mui/material/styles" {


    interface Palette {
        myColor?:PaletteColor
    }
    interface PaletteOptions {
        myColor?: PaletteColorOptions
    }
}