import logo from "@/assets/images/logo.png";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import BtnPrimary from "../button/BtnPrimary";
import BtnOutlined from "../button/BtnOutlined";
import Banner from "./Banner";

const Home = () => {
  return (
    <>
      <Box
        sx={{
          minHeight: "100vh",
          bgcolor: "white",
        }}
      >
        <Banner />
      </Box>
    </>
  );
};

export default Home;
