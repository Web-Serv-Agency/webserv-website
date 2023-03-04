import { Button } from "@mui/material";
import styles from "./button.module.css";
import { ReactNode } from "react";

export default function BtnPrimary({ children }: { children: ReactNode }) {
  return (
    <Button
      className={styles.btnPrimary}
      variant="contained"
      color="primary"
      sx={{
        bgcolor: "primary.main",
        color: "text.primary",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 1,
        fontWeight: 600,
        py: 1,
      }}
      disableRipple
      // disabled={disabled}
      // onClick={onClick}
    >
      {children}
    </Button>
  );
}
