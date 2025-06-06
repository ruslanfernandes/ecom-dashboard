import React, { useState } from "react";
import { Container, Typography, Button, Box, CircularProgress, Alert } from "@mui/material";
import ProductTable from "../components/products/ProductTable";
import ProductModal from "../components/products/ProductModal";

// Initial mock product data
const initialProducts = [
  { id: 1, title: 'Wireless Mouse', price: 25.99, stock: 120, image: '', description: 'A smooth wireless mouse.' },
  { id: 2, title: 'Bluetooth Headphones', price: 59.99, stock: 80, image: '', description: 'Noise-cancelling headphones.' },
  { id: 3, title: 'USB-C Charger', price: 19.99, stock: 200, image: '', description: 'Fast charging USB-C adapter.' },
];

const ProductManagement = () => {
  // State for loading, error, products, and modal
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [products, setProducts] = useState(initialProducts);
  const [modalOpen, setModalOpen] = useState(false);
  const [editProduct, setEditProduct] = useState(null);

  // Handler for opening Add Product modal
  const handleAdd = () => {
    setEditProduct(null);
    setModalOpen(true);
  };

  // Handler for editing a product
  const handleEdit = (product) => {
    setEditProduct(product);
    setModalOpen(true);
  };

  // Handler for deleting a product
  const handleDelete = (product) => {
    setProducts(prev => prev.filter(p => p.id !== product.id));
  };

  // Handler for saving (add or edit) a product
  const handleSave = (product) => {
    if (product.id) {
      // Edit existing product
      setProducts(prev => prev.map(p => p.id === product.id ? product : p));
    } else {
      // Add new product (assign new id)
      const newId = Math.max(0, ...products.map(p => p.id)) + 1;
      setProducts(prev => [...prev, { ...product, id: newId }]);
    }
    setModalOpen(false);
  };

  if (loading) return <Box display="flex" justifyContent="center" alignItems="center" minHeight="50vh"><CircularProgress /></Box>;
  if (error) return <Alert severity="error">{error}</Alert>;

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Box className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-3 gap-2">
        <Typography variant="h4" gutterBottom>Product Management</Typography>
        <Button variant="contained" color="primary" onClick={handleAdd}>
          Add Product
        </Button>
      </Box>
      <ProductTable products={products} onEdit={handleEdit} onDelete={handleDelete} />
      <ProductModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        onSave={handleSave}
        product={editProduct}
      />
    </Container>
  );
};

export default ProductManagement; 