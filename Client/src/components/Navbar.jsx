import * as React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Button,
  MenuItem,
  ImageListItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LinkWithScroll, { NavLinkWithScroll } from "./LinkWithScroll";
import logo from "../assets/logo.png";
import Data from "../data/pages.json";

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="fixed" sx={{ backgroundColor: "common.white" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ display: { xs: "none", md: "flex" }, mr: 1, width: 90 }}>
            <LinkWithScroll to="/">
              <ImageListItem>
                <img src={logo} alt="logo ásdesaber" />
              </ImageListItem>
            </LinkWithScroll>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{ color: "common.black" }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {Data.Links.map((page) => (
                <NavLinkWithScroll
                  key={page.name}
                  to={page.href}
                  style={{ color: "#080F25", textDecoration: "none" }}
                >
                  {({ isActive }) =>
                    isActive ? (
                      <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                        <Typography
                          textAlign="center"
                          variant="body2"
                          color="primary"
                        >
                          {page.name}
                        </Typography>
                      </MenuItem>
                    ) : (
                      <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                        <Typography textAlign="center" variant="body2">
                          {page.name}
                        </Typography>
                      </MenuItem>
                    )
                  }
                </NavLinkWithScroll>
              ))}
            </Menu>
          </Box>
          <Box
            sx={{
              flexGrow: { xs: 1, md: 0 },
              display: { xs: "flex", md: "none" },
            }}
          >
            <LinkWithScroll to="/">
              <ImageListItem sx={{ width: 80 }}>
                <img src={logo} alt="logo ásdesaber" />
              </ImageListItem>
            </LinkWithScroll>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
            }}
          >
            {Data.Links.map((page) => (
              <NavLinkWithScroll
                key={page.name}
                to={page.href}
                onClick={handleCloseNavMenu}
                style={{ my: 2, display: "block", textDecoration: "none" }}
              >
                {({ isActive }) =>
                  isActive ? (
                    <Button
                      sx={{
                        color: "primary",
                        "&::before": {
                          content: "''",
                          display: "block",
                          position: "absolute",
                          top: 0,
                          width: "100%",
                          height: "2px",
                          backgroundColor: "#1893C6",
                          borderRadius: "2em",
                        },
                      }}
                    >
                      {page.name}
                    </Button>
                  ) : (
                    <Button sx={{ color: "#080F25" }}>{page.name}</Button>
                  )
                }
              </NavLinkWithScroll>
            ))}
          </Box>
          <Box
            sx={{ flexGrow: 0, ml: 1 }}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <LinkWithScroll to="/contactos" style={{ textDecoration: "none" }}>
              <Button variant="contained" color="secondary">
                Inscreva-se!
              </Button>
            </LinkWithScroll>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
