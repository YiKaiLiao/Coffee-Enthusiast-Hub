import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Header = () => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h6" sx={{ flexGrow: 1 }}>
        <Button color="inherit" component={Link} to="/">
          Coffee Enthusiast Hub
        </Button>
      </Typography>
      <Button color="inherit" component={Link} to="/">
        Home
      </Button>
      <Button color="inherit" component={Link} to="/journal">
        Coffee Journal
      </Button>
      <Button color="inherit" component={Link} to="/products">
        Coffee Products
      </Button>
    </Toolbar>
  </AppBar>
);

export default Header;
