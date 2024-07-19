import React, { useEffect, useState } from "react";
import {
  Container,
  Card,
  CardContent,
  CardMedia,
  Typography,
  CircularProgress,
  Button,
} from "@mui/material";
import { getCoffeeIngrdientsData } from "services/api/coffeeAPI";

const RandomCoffee = () => {
  const [coffee, setCoffee] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchRandomCoffee();
  }, []);

  const fetchRandomCoffee = async () => {
    try {
      const coffeeList = await getCoffeeIngrdientsData();
      const randomCoffee =
        coffeeList[Math.floor(Math.random() * coffeeList.length)];
      setCoffee(randomCoffee);
    } catch (error) {
      console.error("Error fetching coffee data:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <CircularProgress />;
  }

  if (!coffee) {
    return <Typography variant="h6">No coffee data available</Typography>;
  }

  return (
    <Container maxWidth="sm" style={{ marginTop: "2rem" }}>
      <Card>
        <CardMedia
          component="img"
          image={coffee.image}
          alt={coffee.title}
          sx={{ maxHeight: "55vh" }}
        />
        <CardContent>
          <Typography variant="h5" component="div">
            {coffee.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {coffee.description}
          </Typography>
          <Typography
            variant="h6"
            component="div"
            style={{ marginTop: "1rem" }}
          >
            Ingredients:
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {coffee.ingredients.join(", ")}
          </Typography>
        </CardContent>
      </Card>
      <Button
        variant="contained"
        color="primary"
        style={{ marginTop: "2rem" }}
        onClick={fetchRandomCoffee}
      >
        Show Another Coffee
      </Button>
    </Container>
  );
};

export default RandomCoffee;
