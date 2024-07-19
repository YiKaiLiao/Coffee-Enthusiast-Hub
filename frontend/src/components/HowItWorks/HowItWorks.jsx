import React from "react";
import {
  Container,
  Typography,
  Box,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

const HowItWorks = () => (
  <Box sx={{ py: 4, backgroundColor: "#fff" }}>
    <Container maxWidth="md">
      <Typography variant="h4" gutterBottom>
        How It Works
      </Typography>
      <List>
        <ListItem>
          <ListItemText primary="Discover new coffee through Explore Coffee." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Add and manage your coffee reviews in your personal journal." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Learn more about different types of coffee and brewing methods." />
        </ListItem>
      </List>
    </Container>
  </Box>
);

export default HowItWorks;
