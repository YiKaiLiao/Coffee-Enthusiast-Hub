import React from "react";
import { Container, Typography, Box } from "@mui/material";
import cover from "assets/coffee-hero-bg2.png";

const HeroSection = () => (
  <Box
    sx={{
      background: `url(${cover}) no-repeat center center/cover`,
      color: "white",
      py: 8,
      textAlign: "center",
    }}
  >
    <Container maxWidth="md">
      <Typography variant="h2" gutterBottom>
        Coffee Enthusiast Hub
      </Typography>
      <Typography variant="h5">
        Your place to discover, review, and enjoy coffee.
      </Typography>
    </Container>
  </Box>
);

export default HeroSection;
