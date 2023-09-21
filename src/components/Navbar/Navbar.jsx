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
import concettoLogo from "../../assets/concettoLogo40x40.png"
import Wrapper from "./styles";

const StyledDrawer = styled(Drawer)({
    ".bottomBar": {
        "borderTop": "1px solid #fff",
        "zIndex": "9999",
        "background": "black",
        "transition": "all 0.3s ease",
        "color": "#fff",
    }
});

const Navbar = () => {
    const window = document.body
    const drawerWidth = document.body.clientWidth;
    const navItems = ["Sponsors", "Merchandise", "Contact"];
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
                                sx={{ flexGrow: 1, display: { xs: "none", sm: "block" }, color: "#fff" }}
                            >
                                <img src={concettoLogo} className="logo" alt="Green logo of Concetto 23'"></img>
                            </Typography>
                            <Box sx={{ display: { xs: "none", sm: "block" } }}>
                                {navItems.map((item) => (
                                    <Button key={item} sx={{ color: "#fff" }}>
                                        {item}
                                    </Button>
                                ))}
                            </Box>
                        </Toolbar>
                    </AppBar>
                    <nav>
                        <StyledDrawer
                            container={window}
                            variant="temporary"
                            open={mobileOpen}
                            anchor={"bottom"}
                            onClose={handleDrawerToggle}
                            ModalProps={{
                                keepMounted: true // Better open performance on mobile.
                            }}
                            sx={{
                                display: { xs: "block", sm: "none" },
                                "& .MuiDrawer-paper": {
                                    boxSizing: "border-box",
                                    width: drawerWidth
                                }
                            }}
                        >
                            <Box onClick={handleDrawerToggle} sx={{
                                textAlign: "center"
                            }} className="bottomBar">
                                <Divider />
                                <List>
                                    {navItems.map((item) => (
                                        <ListItem key={item} disablePadding>
                                            <ListItemButton sx={{ textAlign: "center" }}>
                                                <ListItemText primary={item} />
                                            </ListItemButton>
                                        </ListItem>
                                    ))}
                                </List>
                            </Box>
                        </StyledDrawer>
                    </nav>
                </Box>
            </div>
        </Wrapper>
    )
}

export default Navbar;