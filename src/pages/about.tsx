import NavBar from "@/components/navbar";
import { Box, Container, Typography } from "@mui/material";

const About = () => {
  return (
    <>
      <NavBar />
      <Box
        sx={{
          minHeight: "100vh",
          width: "100%",
          display: "grid",
          placeItems: "center",
          bgcolor: "background.primary",
          textAlign: "center",
          color: "text.primary",
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="h4">This is About Page</Typography>
        </Container>
      </Box>
    </>
  );
};

export default About;
