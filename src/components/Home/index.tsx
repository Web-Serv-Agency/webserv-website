import { Box } from "@mui/material";
import Banner from "./Banner";
import Services from "./Services";
import NavBar from "../navbar";

const Home = () => {
  return (
    <>
      <Box
        sx={{
          minHeight: "100vh",
          bgcolor: "white",
        }}
      >
        <NavBar />
        <Banner />
        <Services />
      </Box>
    </>
  );
};

export default Home;
