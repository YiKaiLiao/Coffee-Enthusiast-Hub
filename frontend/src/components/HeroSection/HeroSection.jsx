import React from "react";
import { Container, Typography, Box } from "@mui/material";

const HeroSection = () => (
  <Box
    sx={{
      background: `url(${process.env.PUBLIC_URL}/assets/coffee-hero-bg2.png) no-repeat center center/cover`,
      color: "orange",
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
