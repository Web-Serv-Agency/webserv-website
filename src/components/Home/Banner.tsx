import banner from "@/assets/images/banner.png";
import useThemeMode from "@/hooks/useThemeMode";
import { Box, Container, Stack, Typography, useTheme } from "@mui/material";
import Image from "next/image";
import BtnOutlined from "../button/BtnOutlined";
import styles from "./home.module.css";

export default function Banner() {
  const { themeMode, toggleThemeMode } = useThemeMode();
  const theme = useTheme();
  console.log(themeMode, theme.palette.mode);
  return (
    <>
      <Box
        className={styles.banner_bg}
        sx={{
          minHeight: { xs: "100vh", md: "110vh" },
          // background: `linear-gradient(45deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 50%, ${theme.palette.primary.light} 100%)`,
          bgcolor: "background.secondary",
          color: "text.primary",
          display: "grid",
          placeItems: "center",
          pt: { xs: 8, md: 0 },
        }}
      >
        <Container maxWidth="lg">
          <Stack
            direction={{ xs: "column", md: "row" }}
            alignItems="center"
            justifyContent="center"
            spacing={4}
            sx={{ pb: { xs: 20, md: 8 }, zIndex: 10, position: "relative" }}
          >
            {/* Left Side/Banner Text */}
            <Box
              sx={{
                width: { xs: "100%", md: "50%" },
                textAlign: { xs: "center", md: "left" },
              }}
            >
              <Typography
                variant="h1"
                sx={{ fontWeight: 600, fontSize: { xs: 40, md: 55 } }}
              >
                Grow Your Business Make More Money
              </Typography>

              <Typography
                variant="subtitle1"
                sx={{ fontWeight: 500, lineHeight: 1.4, my: 4 }}
              >
                Quis autem vel eum iure reprehenderit qui in ea voluptate velit
                esse quam nihil aenean socada commodo molestiae consequatur, vel
                illum qui dolorem eum fugiat quo voluptas nulla.
              </Typography>

              <BtnOutlined onClick={toggleThemeMode}>
                <span>Learn More</span>
              </BtnOutlined>
            </Box>

            {/* Right Side/Banner Image */}
            <Box
              sx={{
                display: { xs: "none", md: "block" },
                width: { xs: "100%", md: "50%" },
                textAlign: "center",
              }}
            >
              <Image src={banner} alt="banner" width={500} height={450} />
            </Box>
          </Stack>
        </Container>
      </Box>
    </>
  );
}
