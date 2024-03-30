import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import "../css/Navbar.css";
import NavButton from "./NavButton";
import NavButtonSmaller from "./NavButtonSmaller";
import { userStore } from "../store/userStore";

// const pages = ["Home", "Add Product", "Favourites", "Product Details"];
const settings = ["Login", "Sign Up"];

function ResponsiveAppBar() {
  const { userID, setUserID } = userStore();
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  /*   const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  }; */

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="sticky">
      {/* <Container className="NavBarContainer" maxWidth="xl"> */}
      <div className="NavBarContainer">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "perpetua",
              fontWeight: 700,
              letterSpacing: ".1rem",
              fontSize: "21px",
              color: "inherit",
              textDecoration: "none",
            }}
          ></Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
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
              <NavButtonSmaller link="/AboutUs" name="About Us" />
              <NavButtonSmaller link="/WishList" name="Wish List" />
              {userID ? (
                <NavButtonSmaller link={`/UserPage/${userID}`} name="Account" />
              ) : (
                <NavButtonSmaller link="/login" name="Login" />
              )}
              <NavButtonSmaller link="/CartPage" name="Cart" />
              {userID && <NavButtonSmaller link="/" name="LogOut" />}
            </Menu>
          </Box>

          <Link className="Logo-Image-Link" to="/">
            <img src="../assets/CantekShop-Logo.png" className="Logo-Image" />
          </Link>
          <Typography
            variant="h5"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "Perpetua",
              fontWeight: 700,
              letterSpacing: ".1rem",
              fontSize: "24px",
              color: "inherit",
              textDecoration: "none",
            }}
          ></Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              padding: "0px",
              margin: "0px",
            }}
          >
            <NavButton link="/AboutUs" name="About Us" />
            <NavButton link="/WishList" name="Wish List" />
            <img
              src="../assets/Account-Icon.png"
              className="Account-Icon-Image"
            />
            {userID ? (
              <NavButton link={`/UserPage/${userID}`} name="Account" />
            ) : (
              <NavButton link="/login" name="Login" />
            )}
            <img src="../assets/Cart-Icon.png" className="Cart-Icon-Image" />
            <NavButton link="/CartPage" name="Cart" />
            {userID && (
              <NavButton
                link="/"
                name="LogOut"
                onclick={() => {
                  setUserID("");
                }}
              />
            )}

            {/* <NavButton link="/productDetail/:id" name="Product Details" /> */}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </div>

      {/* </Container> */}
    </AppBar>
  );
}
export default ResponsiveAppBar;
