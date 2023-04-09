import { Box, Container } from "@mui/material";
import SectionHeading from "../common/SectionHeading";

export default function Services() {
  return (
    <>
      <Box
        sx={{
          minHeight: "100vh",
          // bgcolor: "#F3F5FF",
          bgcolor: "background.primary",
        }}
      >
        <Container maxWidth="lg">
          <SectionHeading heading="Our Services" />
        </Container>
      </Box>
    </>
  );
}
