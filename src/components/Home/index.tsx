import { Box } from "@mui/material";
import Banner from "./Banner";
import Services from "./Services";

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
        <Services />
      </Box>
    </>
  );
};

export default Home;
