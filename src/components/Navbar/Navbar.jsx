import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import concettoLogo from "../../assets/concettoLogo40x40.png";
import Wrapper from "./styles";
import scrollToSponsor from "../../utils/scrollToSponsors";

const StyledDrawer = styled(Drawer)({
  ".bottomBar": {
    borderTop: "1px solid #fff",
    zIndex: "9999",
    background: "black",
    transition: "all 0.3s ease",
    color: "#fff",
  },
});

const Navbar = () => {
  const window = document.body;
  const drawerWidth = document.body.clientWidth;
  const navItems = [
    { name: "Sponsors", url: "/#targetSection" },
    { name: "Merchandise", url: "/tshirt" },
    // { name: "Contact", url: "/tshirt" },
  ];
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  return (
    <Wrapper>
      {/* <section className="navbar"> */}
      <div className="d-center">
        <Box sx={{ display: "flex" }} className="d-center">
          <CssBaseline />
          <AppBar component="nav" className="navbar">
            <Toolbar className="w-full toolbar">
              <IconButton
                color="white"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 4, display: { sm: "none" } }}
              >
                <MenuIcon className="white" />
              </IconButton>
              <Typography
                variant="h6"
                component="div"
                sx={{
                  flexGrow: 1,
                  display: { xs: "none", sm: "block" },
                  color: "#fff",
                }}
              >
                <img
                  src={concettoLogo}
                  className="logo"
                  alt="Green logo of Concetto 23'"
                ></img>
              </Typography>
              <Box
                sx={{
                  display: { xs: "none", sm: "block" },
                }}
              >
                <Button className="nav-link" onClick={() => scrollToSponsor()}>
                  Sponsors
                </Button>
                <Button component={Link} className="nav-link" to="/tshirt">
                  Merchandise
                </Button>
              </Box>
            </Toolbar>
          </AppBar>
          <nav>
            <StyledDrawer
              container={window}
              variant="temporary"
              open={mobileOpen}
              anchor={"bottom"}
              className="bottomBar"
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
              sx={{
                display: { xs: "block", sm: "none" },
                "& .MuiDrawer-paper": {
                  boxSizing: "border-box",
                  width: "100vw",
                  height: "100vh",
                  background: "#171717",
                  color: "#fff",
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                  justifyContent: "center",
                },
              }}
            >
              <Box
                onClick={handleDrawerToggle}
                sx={{
                  textAlign: "center",
                }}
              >
                <Divider />
                <List>
                  <ListItem
                    disablePadding
                    sx={{ borderBottom: "1px solid white" }}
                  >
                    <ListItemButton
                      sx={{ textAlign: "center", "&:hover": { color: "blue" } }}
                      onClick={() => scrollToSponsor()}
                    >
                      <ListItemText primary="Sponsors" />
                    </ListItemButton>
                  </ListItem>
                  {/* <Divider  sx={{color: "white", width: "100vw", height: "2px", zIndex: "99999999"}}/> */}
                  <ListItem disablePadding>
                    <ListItemButton
                      sx={{ textAlign: "center" }}
                      component={Link}
                      to="/tshirt"
                    >
                      <ListItemText primary="Merchandise" />
                    </ListItemButton>
                  </ListItem>
                </List>
              </Box>
            </StyledDrawer>
          </nav>
        </Box>
      </div>
    </Wrapper>
  );
};

export default Navbar;
