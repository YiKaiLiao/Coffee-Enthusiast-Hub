import React, { useEffect, useState } from "react";
import { Box, Container } from "@mui/material";

const RandomCoffeeImage = () => {
  const [image, setImage] = useState("");

  useEffect(() => {
    fetch("https://coffee.alexflipnote.dev/random")
      .then((response) => response.json())
      .then((data) => setImage(data.file));
  }, []);

  return (
    <Box sx={{ py: 4, textAlign: "center" }}>
      <Container maxWidth="md">
        {image && (
          <img
            src={image}
            alt="Random coffee"
            style={{ maxWidth: "100%", borderRadius: "10px" }}
          />
        )}
      </Container>
    </Box>
  );
};

export default RandomCoffeeImage;
