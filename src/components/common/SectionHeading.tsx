import { Box, Stack, Typography } from "@mui/material";

export default function SectionHeading({
  heading = "Section Header",
  description,
}: {
  heading?: string;
  description?: string;
}) {
  return (
    <>
      <Stack
        direction="column"
        alignItems={{ xs: "center", md: "flex-start" }}
        justifyContent={{ xs: "center", md: "flex-start" }}
        spacing={0.5}
        sx={{ pt: 8, pb: 6 }}
      >
        <Box
          component="div"
          sx={{ width: 40, height: 3.5, bgcolor: "primary.main" }}
        />
        <Typography
          variant="h2"
          sx={{
            display: "block",
            fontWeight: 500,
            fontSize: 35,
            letterSpacing: 1.2,
            color: "black",
          }}
        >
          {heading}
        </Typography>
        {description || (
          <Typography
            variant="subtitle1"
            sx={{
              pt: 3,
              fontWeight: 400,
              lineHeight: 1.4,
              maxWidth: { xs: "100%", md: "60%" },
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
            incidunt rerum dolores pariatur. Odio, id. Iure commodi, similique.
          </Typography>
        )}
      </Stack>
    </>
  );
}
