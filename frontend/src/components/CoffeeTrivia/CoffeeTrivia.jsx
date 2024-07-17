import React, { useEffect, useState } from "react";
// services
import { getRandomCoffeeImage } from "services/api/coffeeAPI";
// mui
import {
  Container,
  Grid,
  CardContent,
  CardMedia,
  Typography,
  Button,
  CircularProgress,
} from "@mui/material";

const coffeeFacts = [
  "Coffee is a fruit.",
  "Coffee beans are actually seeds.",
  "Brazil is the largest coffee producer in the world.",
  "There are two main types of coffee: Arabica and Robusta.",
  "Coffee was discovered by a goat herder.",
];

const CoffeeTrivia = () => {
  const [coffeeImage, setCoffeeImage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [fact, setFact] = useState("");

  useEffect(() => {
    fetchCoffeeImage();
    getRandomFact();
  }, []);

  const fetchCoffeeImage = async () => {
    try {
      const data = await getRandomCoffeeImage();
      setCoffeeImage(data.file);
    } catch (err) {
      setError("Failed to fetch coffee image");
    } finally {
      setLoading(false);
    }
  };

  const getRandomFact = () => {
    const randomIndex = Math.floor(Math.random() * coffeeFacts.length);
    setFact(coffeeFacts[randomIndex]);
  };

  const handleRefresh = () => {
    setLoading(true);
    setError(null);
    fetchCoffeeImage();
    getRandomFact();
  };

  if (loading) {
    return <CircularProgress />;
  }

  if (error) {
    return <Typography color="error">{error}</Typography>;
  }

  return (
    <Container>
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={6}>
          <CardMedia
            component="img"
            height="400"
            image={coffeeImage}
            alt="Random Coffee"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <CardContent>
            <Typography variant="h4" gutterBottom>
              Coffee Trivia
            </Typography>
            <Typography variant="h5" component="div" gutterBottom>
              {fact}
            </Typography>
            <Button variant="contained" color="primary" onClick={handleRefresh}>
              Refresh
            </Button>
          </CardContent>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CoffeeTrivia;
