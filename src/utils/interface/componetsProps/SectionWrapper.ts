import { SxProps } from "@mui/material";

export interface SectionWrapperProps {
  children: React.ReactNode;
  bgColor?: "gradient" | "solid" | "transparent";
  container?: boolean;
  sx?: SxProps;
}