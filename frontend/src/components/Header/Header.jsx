import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  styled,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const StyledDrawer = styled(Drawer)(({ theme }) => ({
  "& .MuiDrawer-paper": {
    backgroundColor: "#f5f5f5",
    color: "#3e2723",
    width: 240,
  },
}));

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const menuItems = [
    { text: "Home", link: "/" },
    { text: "Explore Coffee", link: "/explore" },
    { text: "Coffee Journal", link: "/journal" },
    { text: "Coffee Products", link: "/products" },
  ];

  const drawer = (
    <StyledDrawer
      anchor="right"
      open={drawerOpen}
      onClose={toggleDrawer(false)}
    >
      <List>
        {menuItems.map((item, index) => (
          <ListItemButton
            key={index}
            component={Link}
            to={item.link}
            onClick={toggleDrawer(false)}
          >
            <ListItemText primary={item.text} />
          </ListItemButton>
        ))}
      </List>
    </StyledDrawer>
  );

  return (
    <AppBar position="static">
      <Toolbar>
        {isMobile ? (
          <>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              Coffee Enthusiast Hub
            </Typography>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
            {drawer}
          </>
        ) : (
          <>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              <Button color="inherit" component={Link} to="/">
                Coffee Enthusiast Hub
              </Button>
            </Typography>
            {menuItems.map((item, index) => (
              <Button
                key={index}
                color="inherit"
                component={Link}
                to={item.link}
              >
                {item.text}
              </Button>
            ))}
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
