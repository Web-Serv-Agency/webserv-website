import { Button } from "@mui/material";
import styles from "./button.module.css";
import { ReactNode } from "react";

export default function BtnOutlined({ children }: { children: ReactNode }) {
  return (
    <Button
      className={styles.btnOutlined}
      variant="outlined"
      color="primary"
      sx={{
        color: "primary.main",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 1,
        fontWeight: 600,
        py: 1,
        bgcolor: "white",
        "&:hover": {
          bgcolor: "white",
        },
      }}
      disableRipple
      // disabled={disabled}
      // onClick={onClick}
    >
      {children}
    </Button>
  );
}
