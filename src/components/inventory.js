import React, { useState } from 'react';
import { Container, Typography, List } from '@mui/material';
import  InventoryItem from './inventoryItem';
import InventoryForm from './inventoryForm';

const Inventory = () => {
  const [inventory, setInventory] = useState([]);

  const addItem = (newItem) => {
    setInventory([...inventory, newItem]);
  };

  const deleteItem = (itemId) => {
    setInventory(inventory.filter((item) => item.id !== itemId));
  };

  return (
    <Container maxWidth="md">
      <Typography variant="h4" component="h1" align="center" gutterBottom>
        Inventory
      </Typography>
      <InventoryForm onSubmit={addItem} />
      {inventory.length > 0 ? (
        <List>
          {inventory.map((item) => (
            <InventoryItem key={item.id} item={item} onDelete={deleteItem} />
          ))}
        </List>
      ) : (
        <Typography variant="subtitle1" align="center">
          No items in inventory.
        </Typography>
      )}
    </Container>
  );
};

export default Inventory;