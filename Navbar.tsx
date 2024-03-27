import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
//import Avatar from "@mui/material/Avatar";
// import Button from "@mui/material/Button";
//import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
//import AdbIcon from "@mui/icons-material/Adb";
import { Link } from "react-router-dom";
import "./Navbar.css";
import NavButton from "./NavButton";
import NavButtonSmaller from "./NavButtonSmaller";


// const pages = ["Home", "Add Product", "Favourites", "Product Details"];
const settings = ["Login", "Sign Up"];

function ResponsiveAppBar() {
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
      <Container className="NavBarContainer" maxWidth="xl">
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
          >
          </Typography>

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
              <NavButtonSmaller link="/LoginPage" name="Account" />
              <NavButtonSmaller link="/CartPage" name="Cart" />
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
          >
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, padding:"0px", margin:"0px" }}>
            <NavButton link="/AboutUs" name="About Us" />
            <NavButton link="/WishList" name="Wish List" />
            <img src="../assets/Account-Icon.png" className="Account-Icon-Image" />
            <NavButton link="/LoginPage" name="Account" />
            <img src="../assets/Cart-Icon.png" className="Cart-Icon-Image" />
            <NavButton link="/CartPage" name="Cart" />

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
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;