import React, { useEffect, useState } from "react";
import {
  Grid,
  Container,
  Card,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";

const CoffeeGalleryPage = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Fetch multiple coffee images here and set them in state
    const fetchImages = async () => {
      const responses = await Promise.all(
        Array.from({ length: 9 }).map(() =>
          fetch("https://coffee.alexflipnote.dev/random")
        )
      );
      const data = await Promise.all(responses.map((res) => res.json()));
      setImages(data.map((d) => d.file));
    };
    fetchImages();
  }, []);

  return (
    <Container maxWidth="lg">
      <Grid container spacing={4}>
        {images.map((image, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image={image}
                alt={`Coffee ${index}`}
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  Delicious coffee!
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default CoffeeGalleryPage;
