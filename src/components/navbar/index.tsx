import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import logo from "@/assets/images/logo-with-name.png";
import logoMini from "@/assets/images/logo.png";

import useThemeMode from "@/hooks/useThemeMode";
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Link as MuiLink,
  Slide,
  Stack,
  Toolbar,
  useScrollTrigger,
} from "@mui/material";

import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { BsFillMoonFill, BsSunFill } from "react-icons/bs";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import BtnPrimary from "../button/BtnPrimary";

interface Props {
  window?: () => Window;
  children: React.ReactElement;
}

const links = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Services",
    href: "/services",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

const NavBar = () => {
  const { themeMode, toggleThemeMode } = useThemeMode();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { data: session } = useSession();
  const router = useRouter();

  const isActive = (href: string) => {
    return router.pathname === href ? true : false;
  };

  const toggleDrawer = (open: boolean) => (event: any) => {
    if (
      event.type === "keydown" &&
      ((event as KeyboardEvent).key === "Tab" ||
        (event as KeyboardEvent).key === "Shift")
    ) {
      return;
    }

    setDrawerOpen(open);
  };

  // Hide Navbar on Scroll
  const HideOnScroll = (props: Props) => {
    const { children, window } = props;
    const trigger = useScrollTrigger({
      target: window ? window() : undefined,
    });

    return (
      <Slide appear={false} direction="down" in={!trigger}>
        {children}
      </Slide>
    );
  };

  // Track Scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <HideOnScroll>
        <AppBar
          enableColorOnDark
          position="fixed"
          color="transparent"
          sx={{
            transition: "0.5s ease",
            boxShadow: scrolled ? "inherit" : "none",
            border: "none",
            backgroundColor:
              scrolled || router.pathname !== "/"
                ? "rgba(24, 31, 41, 0.6)"
                : "transparent",
            backdropFilter: scrolled ? "blur(10px) brightness(0.8)" : "none",
          }}
        >
          <Container maxWidth="lg">
            <Toolbar
              sx={{
                boxShadow: "none",
                bgcolor: "transparent",
                justifyContent: "space-between",
              }}
            >
              {/* Logo */}
              <MuiLink component={Link} href="/">
                <Image src={logo} alt="Webserv" width={150} height={30} />
              </MuiLink>

              {/* Nav Links */}
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="center"
                spacing={4}
                sx={{ display: { xs: "none", md: "flex" } }}
              >
                {links?.map((item, i) => (
                  // <ListItem
                  //   key={i}
                  //   sx={{
                  //     color: isActive(item.href) ? "primary.light" : "white",
                  //   }}
                  // >
                  //   <Link href={item.href}>
                  //     <ListItemText primary={item.name} />
                  //   </Link>
                  // </ListItem>
                  <MuiLink
                    component={Link}
                    underline="none"
                    key={i}
                    sx={{
                      color: isActive(item.href) ? "primary.light" : "white",
                    }}
                    href={item.href}
                  >
                    {item.name}
                  </MuiLink>
                ))}
              </Stack>

              {/* Nav Right */}
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="flex-end"
                spacing={3}
              >
                {themeMode === "light" ? (
                  <IconButton
                    edge="end"
                    sx={{
                      color: "white",
                    }}
                    aria-label="menu"
                    onClick={toggleThemeMode}
                  >
                    <BsSunFill />
                  </IconButton>
                ) : (
                  <IconButton
                    edge="end"
                    sx={{
                      color: "white",
                    }}
                    aria-label="menu"
                    onClick={toggleThemeMode}
                  >
                    <BsFillMoonFill />
                  </IconButton>
                )}

                {session?.user ? (
                  <IconButton>
                    <Avatar
                      alt={session?.user?.name}
                      sx={{ width: 40, height: 40 }}
                    />
                  </IconButton>
                ) : (
                  <BtnPrimary
                    sx={{ px: 4, display: { xs: "none", md: "block" } }}
                    onClick={() => router.push("/login")}
                  >
                    Login
                  </BtnPrimary>
                )}

                <IconButton
                  edge="end"
                  sx={{
                    mr: 2,
                    color: "white",
                    display: { xs: "block", md: "none" },
                  }}
                  aria-label="menu"
                  onClick={toggleDrawer(true)}
                >
                  <HiOutlineMenuAlt3 />
                </IconButton>
              </Stack>
            </Toolbar>
          </Container>
        </AppBar>
      </HideOnScroll>

      {/* Mobile Navbar */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        sx={{
          backgroundColor:
            themeMode === "dark"
              ? "rgba(24, 31, 41, 0.5)"
              : "rgba(243, 245, 255, 0.5)",
          backdropFilter: "blur(10px) brightness(0.8)",
        }}
      >
        <Box
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
          sx={{
            width: 300,
            height: "100vh",
            bgcolor: "background.primary",
          }}
        >
          <MuiLink
            component={Link}
            href="/"
            sx={{ display: "block", textAlign: "center", mt: 5 }}
          >
            <Image src={logoMini} alt="Webserv" width={50} height={30} />
          </MuiLink>

          <List sx={{ mt: 5 }}>
            {links?.map((item, i) => (
              <ListItem
                key={i}
                component={Button}
                sx={{ color: "text.primary" }}
              >
                <Link href={item.href} passHref>
                  <ListItemText primary={item.name} />
                </Link>
              </ListItem>
            ))}
          </List>
          <Stack direction="row" justifyContent="center">
            <BtnPrimary
              sx={{ px: 4, mx: "auto", width: "95%" }}
              onClick={() => router.push("/login")}
            >
              Login
            </BtnPrimary>
          </Stack>
        </Box>
      </Drawer>
    </>
  );
};

export default NavBar;
