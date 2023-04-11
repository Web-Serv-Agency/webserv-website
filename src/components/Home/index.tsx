import { Box } from "@mui/material";
import NavBar from "../navbar";
import Banner from "./Banner";
import ChooseUs from "./ChooseUs";
import Facts from "./Facts";
import Services from "./Services";
import Teams from "./Teams";
import Testimonials from "./Testimonials";

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
        <ChooseUs />
        <Services />
        <Facts />
        <Teams />
        <Testimonials />
      </Box>
    </>
  );
};

export default Home;
