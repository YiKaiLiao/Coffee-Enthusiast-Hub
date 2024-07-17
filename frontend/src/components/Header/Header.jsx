import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Header = () => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h6" sx={{ flexGrow: 1 }}>
        Coffee Enthusiast Hub
      </Typography>
      <Button color="inherit" component={Link} to="/">
        Home
      </Button>
      <Button color="inherit" component={Link} to="/gallery">
        Coffee Gallery
      </Button>
      <Button color="inherit" component={Link} to="/journal">
        Coffee Journal
      </Button>
      <Button color="inherit" component={Link} to="/about">
        About Coffee
      </Button>
    </Toolbar>
  </AppBar>
);

export default Header;
