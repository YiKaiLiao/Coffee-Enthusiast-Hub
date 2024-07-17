import React, { useEffect, useState } from "react";
// services
import getRandomCoffeeImage from "services/api/coffeeAPI";
// mui
import { Box, Container } from "@mui/material";

const RandomCoffeeImage = () => {
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCoffeeImage = async () => {
      try {
        const data = await getRandomCoffeeImage();
        setImage(data?.file);
      } catch (err) {
        setError("Failed to fetch coffee image");
      } finally {
        setLoading(false);
      }
    };

    fetchCoffeeImage();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <Box sx={{ py: 4, textAlign: "center" }}>
      <Container maxWidth="md">
        {image ? (
          <img
            src={image}
            alt="Random coffee"
            style={{ maxWidth: "100%", borderRadius: "10px" }}
          />
        ) : (
          <p>No coffee image available</p>
        )}
      </Container>
    </Box>
  );
};

export default RandomCoffeeImage;
