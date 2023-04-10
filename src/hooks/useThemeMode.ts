import { toggleThemeMode as toggleMode } from "@/features/theme/themeSlice";
import { RootState } from "@/utils/store";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

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
