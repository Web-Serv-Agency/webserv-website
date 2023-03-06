import { Poppins } from "next/font/google";
import { createTheme } from "@mui/material";

// const preferMode = useMediaQuery("(prefers-color-scheme: dark)");
// console.log(preferMode);

export const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Helvetica", "Arial", "sans-serif"],
});

const theme = createTheme({
  palette: {
    // mode: preferMode ? "dark" : "light",
    primary: {
      // light1: "#bbdefb", //blue[100]
      light: "#64b5f6", //blue[300]
      main: "#2196f3", // blue[500]
      dark: "#1565c0", //blue[800]
    },
    secondary: {
      main: "#B60766",
    },
    third: {
      main: "#C45211",
    },
    dark: {
      main: "#181F29",
      light: "#1B4667",
    },
    text: {
      primary: "#eee",
    },
  },
  typography: {
    fontFamily: poppins.style.fontFamily,
  },
});

export default theme;
