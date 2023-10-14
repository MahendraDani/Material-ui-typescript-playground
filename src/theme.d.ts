import {
  ThemeOptions,
  PaletteOptions,
  PaletteColorOptions,
  Palette,
  PaletteColor,
} from "@mui/material";
import React from "react";

declare module "@mui/material/styles" {
  interface Palette {
    yellow?: PaletteColor;
  }
  interface PaletteOptions {
    yellow?: PaletteColorOptions;
  }
}
