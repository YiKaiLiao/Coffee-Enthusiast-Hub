import React from "react";
import { Box, Container, Paper, Typography } from "@mui/material";

const JournalEntries = ({ entries }) => (
  <Box
    sx={{
      background: "url(/path/to/brick-wall.jpg) no-repeat center center/cover",
      py: 4,
    }}
  >
    <Container maxWidth="lg" sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
      {entries.map((entry, index) => (
        <Paper
          key={index}
          sx={{
            width: 200,
            height: 200,
            padding: 2,
            backgroundColor: "yellow",
            boxShadow: 3,
            transform: `rotate(${Math.random() * 10 - 5}deg)`,
          }}
        >
          <Typography variant="h6">{entry.coffeeType}</Typography>
          <Typography variant="body2">{entry.brand}</Typography>
          <Typography variant="body2">Rating: {entry.rating}</Typography>
          <Typography variant="body2">{entry.notes}</Typography>
        </Paper>
      ))}
    </Container>
  </Box>
);

export default JournalEntries;
