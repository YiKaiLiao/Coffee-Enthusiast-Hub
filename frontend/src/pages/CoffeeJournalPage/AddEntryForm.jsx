import React, { useState } from "react";
import { TextField, Button, Container, Box } from "@mui/material";

const AddEntryForm = ({ addEntry }) => {
  const [form, setForm] = useState({
    coffeeType: "",
    brand: "",
    rating: "",
    notes: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addEntry(form);
    setForm({ coffeeType: "", brand: "", rating: "", notes: "" });
  };

  return (
    <Container maxWidth="sm">
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ display: "flex", flexDirection: "column", gap: 2, py: 4 }}
      >
        <TextField
          label="Coffee Type"
          name="coffeeType"
          value={form.coffeeType}
          onChange={handleChange}
          required
        />
        <TextField
          label="Brand"
          name="brand"
          value={form.brand}
          onChange={handleChange}
          required
        />
        <TextField
          label="Rating"
          name="rating"
          value={form.rating}
          onChange={handleChange}
          required
        />
        <TextField
          label="Notes"
          name="notes"
          value={form.notes}
          onChange={handleChange}
          multiline
          rows={4}
        />
        <Button type="submit" variant="contained" color="primary">
          Add Entry
        </Button>
      </Box>
    </Container>
  );
};

export default AddEntryForm;
