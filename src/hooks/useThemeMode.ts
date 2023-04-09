import { useMediaQuery } from "@mui/material";
import { useCallback, useState } from "react";

export default function useThemeMode() {
  // Get Device Default Theme Mode
  const deviceMode: Boolean = useMediaQuery("(prefers-color-scheme: dark)");

  // ------------ Get Local User Theme Mode ------------
  // const prevMode : string | null = localStorage.getItem("themeMode")
  //   ? JSON.parse(localStorage.getItem("themeMode"))
  //   : "";

  // Set Default Theme Mode to Device Default or previous
  // Original Logic will be ==== prevMode ? prevMode : deviceMode ? "dark" : "light"
  const [themeMode, setThemeMode] = useState<"light" | "dark">(
    deviceMode ? "dark" : "light"
  );

  // Change Theme Mode
  const toggleThemeMode = useCallback(() => {
    const newMode = themeMode === "light" ? "dark" : "light";
    setThemeMode(newMode);
    localStorage.setItem("themeMode", JSON.stringify(newMode));
  }, [themeMode]);

  return { themeMode, toggleThemeMode };
}
