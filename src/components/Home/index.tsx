import React from "react";
import { Typography, Box } from "@mui/material";
import logo from "@/assets/images/logo.png";
import Image from "next/image";

const Home = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: 5,
          minHeight: "100vh",
          backgroundColor: "dark.main",
        }}
      >
        <Image src={logo} alt="webserv" width={150} height={100} />
        <Typography variant="h2" sx={{ color: "primary.main" }}>
          Welcome to Web Serv
        </Typography>
      </Box>
    </>
  );
};

export default Home;
