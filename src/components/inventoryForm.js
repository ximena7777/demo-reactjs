import React, { useState } from 'react';
import { TextField, Button, Grid } from '@mui/material';

const InventoryForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (name.trim() !== '' && quantity.trim() !== '') {
      const newItem = {
        id: Date.now(),
        name,
        quantity: parseInt(quantity),
      };

      onSubmit(newItem);
      setName('');
      setQuantity('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField
            label="Item Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            label="Quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            type="number"
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={2}>
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Add
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default InventoryForm;