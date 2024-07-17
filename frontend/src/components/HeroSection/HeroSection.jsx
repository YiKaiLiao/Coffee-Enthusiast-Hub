import React from "react";
import { Container, Typography, Box } from "@mui/material";

const HeroSection = () => (
  <Box
    sx={{
      background:
        "url(/path/to/coffee-hero-bg.jpg) no-repeat center center/cover",
      color: "white",
      py: 8,
      textAlign: "center",
    }}
  >
    <Container maxWidth="md">
      <Typography variant="h2" gutterBottom>
        Welcome to Coffee Enthusiast Hub
      </Typography>
      <Typography variant="h5">
        Your place to discover, review, and enjoy coffee.
      </Typography>
    </Container>
  </Box>
);

export default HeroSection;
