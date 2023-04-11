import { Box } from "@mui/material";
import NavBar from "../navbar";
import Banner from "./Banner";
import Facts from "./Facts";
import Services from "./Services";
import Testimonials from "./Testimonials";
import Teams from "./Teams";

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
        <Facts />
        <Teams />
        <Testimonials />
      </Box>
    </>
  );
};

export default Home;
