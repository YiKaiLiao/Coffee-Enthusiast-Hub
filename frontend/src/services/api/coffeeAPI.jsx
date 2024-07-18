import axios from "axios";

export const getRandomCoffeeImage = async () => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_BACEND_URL}/random-coffee-image/`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching random coffee image:", error);
    throw error;
  }
};

export const getCoffeeProducts = async () => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_BACEND_URL}/all-coffee-products/`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching coffee products:", error);
    throw error;
  }
};
