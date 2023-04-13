import { useDispatch, useSelector } from "@/features/app/store";
// import { useDispatch, useSelector } from "react-redux";
import { toggleThemeMode as toggleMode } from "@/features/theme/themeSlice";
import { useCallback } from "react";
import { RootState } from "@/features/app/store";

export default function useThemeMode() {
  const dispatch = useDispatch();
  const { themeMode } = useSelector((state: RootState) => state.theme);

  // Get Device Default Theme Mode
  // const deviceMode: "light" | "dark" = useMediaQuery(
  //   "(prefers-color-scheme: dark)"
  // )
  //   ? "dark"
  //   : "light";

  // const defaultMode: "light" | "dark" = theme.themeMode
  //   ? theme.themeMode
  //   : deviceMode;

  // const [themeMode, setThemeMode] = useState<"light" | "dark">(defaultMode);

  // Change Theme Mode
  const toggleThemeMode = useCallback(() => {
    dispatch(toggleMode());
  }, [dispatch]);

  return { themeMode, toggleThemeMode };
}
