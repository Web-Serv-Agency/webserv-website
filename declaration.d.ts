// declare module '*.png';
// declare module '*.jpg';

namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: "development" | "production";
    DB_URI: string;
  }
}

// Material UI Declaration
import "@mui/material";
declare module "@mui/material/styles" {
  // Allows to extend the default theme
  interface PaletteOptions {
    third?: PaletteColorOptions;
    dark?: PaletteColorOptions;
  }

  // Allows to use extended theme/Palette
  interface Palette {
    third?: PaletteColor;
    dark?: PaletteColor;
  }
}
