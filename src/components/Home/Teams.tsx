import {
  Box,
  Grid,
  IconButton,
  Stack,
  Theme,
  Typography,
  useTheme,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import SectionHeading from "../common/SectionHeading";
import SectionWrapper from "../common/SectionWrapper";

import authApi from "@/utils/authApi";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaFacebookF, FaGoogle, FaLinkedinIn, FaTwitter } from "react-icons/fa";

type Props = {};

// const data = [
//   {
//     id: 1,
//     name: "Mohammad Ali",
//     designation: "CO-Founder",
//     img: "https://res.cloudinary.com/webserv/image/upload/v1681331248/team/IMG_5282_cropped_tllx4v.jpg",
//     facebook: "https://www.facebook.com/itsproali",
//     twitter: "https://twitter.com/itsproali",
//     linkedin: "https://linkedin.com/in/itsproali",
//     email: "itsproali@gmail.com",
//   },
//   {
//     id: 2,
//     name: "Akram Sakib",
//     designation: "CO-Founder",
//     img: "https://res.cloudinary.com/webserv/image/upload/v1681332526/team/sakib_sa3rxi.jpg",
//     facebook: "https://www.facebook.com/akramSakibA",
//     twitter: "https://twitter.com/AkramSakib4",
//     linkedin: "https://linkedin.com/in/akram-sakib",
//     email: "sayedakramsakib@gmail.com",
//   },
//   {
//     id: 3,
//     name: "Sheikh Siam",
//     designation: "CO-Founder",
//     img: "https://res.cloudinary.com/webserv/image/upload/v1681332526/team/siam_jyf5qv.jpg",
//     facebook: "https://www.facebook.com/checkiamsiam",
//     twitter: "https://twitter.com/checkiamsiam",
//     linkedin: "https://linkedin.com/in/checkiamsiam",
//     email: "issiam02415@gmail.com",
//   },
// ];

const useStyles = makeStyles((theme: Theme) => ({
  card: {
    "&:hover img": {
      transform: "scale(1.02)",
    },

    "&:hover::after": {
      height: "100%",
    },

    "&:hover h4": {
      color: "white",
    },

    "&:hover h6": {
      color: "white",
    },
  },

  img: {
    transition: "transform .3s",
  },
}));

export default function Teams({}: Props) {
  const theme = useTheme();
  const styles = useStyles();
  const [teamMembers, setTeamMembers] = useState([]);

  const fetchTeamMembers = async () => {
    try {
      const { data } = await authApi.get("/api/team");
      if (data?.success) {
        setTeamMembers(data?.data);
      }
    } catch (error: any) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    fetchTeamMembers();
  }, []);

  const linearGradient: string = `linear-gradient(45deg,  #1565c0, #64b5f6  )`;
  return (
    <SectionWrapper bgColor="primary">
      <SectionHeading
        heading="Meet our Experts"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
            incidunt rerum dolores pariatur. Odio, id. Iure commodi, similique."
        position="left"
      />

      <Grid container spacing={{ xs: 3, md: 8 }} sx={{ my: 6 }}>
        {teamMembers.map((item: any) => (
          <Grid item xs={12} sm={6} lg={4} key={item._id}>
            <Box
              className={styles.card}
              sx={{
                p: { xs: 4, sm: 2, md: 4 },
                position: "relative",
                overflow: "visible",
                borderRadius: 2,
                boxShadow: 5,
                bgcolor:
                  theme.palette.mode === "dark"
                    ? "background.secondary"
                    : "background.primary",

                "&::after": {
                  content: "''",
                  borderRadius: 2,
                  width: "100%",
                  height: "2%",
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  bgcolor:
                    theme.palette.mode === "dark"
                      ? "primary.darker"
                      : "primary.main",
                  transition: "all 0.3s linear",
                  zIndex: 0,
                },
              }}
            >
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="flex-start"
                spacing={{ xs: 3, sm: 2, md: 5 }}
                sx={{ ml: { xs: 0, md: 1 } }}
              >
                <Stack
                  direction="column"
                  alignItems="center"
                  justifyContent="center"
                  spacing={2}
                  sx={{ zIndex: 2 }}
                >
                  <Link
                    href={item?.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IconButton
                      color="primary"
                      sx={{ background: linearGradient }}
                    >
                      <FaFacebookF color="white" size={20} />
                    </IconButton>
                  </Link>
                  <Link
                    href={item?.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IconButton
                      color="primary"
                      sx={{ background: linearGradient }}
                    >
                      <FaTwitter color="white" size={20} />
                    </IconButton>
                  </Link>
                  <Link
                    href={item?.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IconButton
                      color="primary"
                      sx={{ background: linearGradient }}
                    >
                      <FaLinkedinIn color="white" size={20} />
                    </IconButton>
                  </Link>
                  <Link
                    href={item?.email}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IconButton
                      color="primary"
                      sx={{ background: linearGradient }}
                    >
                      <FaGoogle color="white" size={20} />
                    </IconButton>
                  </Link>
                </Stack>
                <Box
                  className={styles.img}
                  component="img"
                  src={item?.img}
                  sx={{
                    display: "block",
                    height: { xs: 200, lg: 250 },
                    width: { xs: 200, lg: 250 },
                    objectFit: "contain",
                    position: "relative",
                    mr: { xs: 0, md: -50 },
                    borderRadius: 4,
                    zIndex: 2,
                  }}
                />
              </Stack>

              <Stack
                direction="column"
                alignItems="center"
                justifyContent="flex-start"
                spacing={1}
                sx={{ mt: 5, zIndex: 2 }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    color: "text.primary",
                    transition: "color 0.3s",
                    fontWeight: 600,
                    zIndex: 2,
                  }}
                >
                  {item?.name}
                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{
                    color: "primary.main",
                    transition: "color 0.3s",
                    fontWeight: 500,
                    zIndex: 2,
                  }}
                >
                  {item?.designation}
                </Typography>
              </Stack>
            </Box>
          </Grid>
        ))}
      </Grid>
    </SectionWrapper>
  );
}
