import { createTheme, useMediaQuery } from "@mui/material";

// const preferMode = useMediaQuery("(prefers-color-scheme: dark)");
// console.log(preferMode);

const theme = createTheme({
  palette: {
    // mode: preferMode ? "dark" : "light",
    primary: {
      main: "#00C4D8",
    },
    secondary: {
      main: "#B60766",
    },
    third: {
      main: "#C45211",
    },
    dark: {
      main: "#181F29",
    },
    textColorForBgSecondary: {
      main: "#FFFFFF",
      lightWhite: "#E1D9D1",
    },
  },
});

export default theme;
