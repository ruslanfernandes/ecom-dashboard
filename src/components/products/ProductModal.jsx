import React, { useState, useEffect } from 'react';
import {
  Dialog, DialogTitle, DialogContent, DialogActions,
  TextField, Button, Box, Avatar, Typography
} from '@mui/material';

/**
 * ProductModal handles both adding and editing a product.
 * @param {boolean} open - whether the modal is open
 * @param {function} onClose - called to close the modal
 * @param {function} onSave - called with product data on save
 * @param {object|null} product - product to edit, or null to add
 */
const ProductModal = ({ open, onClose, onSave, product }) => {
  // Local state for form fields
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [stock, setStock] = useState('');
  const [image, setImage] = useState(''); // base64 or url
  const [imageFile, setImageFile] = useState(null);
  const [errors, setErrors] = useState({});

  // Prefill form when editing
  useEffect(() => {
    if (product) {
      setTitle(product.title || '');
      setPrice(product.price?.toString() || '');
      setDescription(product.description || '');
      setStock(product.stock?.toString() || '');
      setImage(product.image || '');
      setImageFile(null);
    } else {
      setTitle(''); setPrice(''); setDescription(''); setStock(''); setImage(''); setImageFile(null);
    }
    setErrors({});
  }, [product, open]);

  // Handle image file upload and preview
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onload = (ev) => setImage(ev.target.result);
      reader.readAsDataURL(file);
    }
  };

  // Validate form fields
  const validate = () => {
    const newErrors = {};
    if (!title.trim()) newErrors.title = 'Title is required';
    if (!price || isNaN(price) || Number(price) <= 0) newErrors.price = 'Valid price required';
    if (!stock || isNaN(stock) || Number(stock) < 0) newErrors.stock = 'Valid stock required';
    if (!description.trim()) newErrors.description = 'Description is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle save (add/edit)
  const handleSave = () => {
    if (!validate()) return;
    onSave({
      ...product,
      title: title.trim(),
      price: Number(price),
      description: description.trim(),
      stock: Number(stock),
      image,
    });
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>{product ? 'Edit Product' : 'Add Product'}</DialogTitle>
      <DialogContent>
        <Box className="d-flex flex-column align-items-center mb-3">
          <Avatar
            variant="rounded"
            src={image || undefined}
            alt={title}
            sx={{ width: 80, height: 80, mb: 2 }}
          >
            {title ? title[0] : '?'}
          </Avatar>
          <Button variant="outlined" component="label" size="small">
            Upload Image
            <input type="file" accept="image/*" hidden onChange={handleImageChange} />
          </Button>
          {imageFile && (
            <Typography variant="caption" className="mt-1">{imageFile.name}</Typography>
          )}
        </Box>
        <TextField
          margin="dense"
          label="Title"
          fullWidth
          value={title}
          onChange={e => setTitle(e.target.value)}
          error={!!errors.title}
          helperText={errors.title}
        />
        <TextField
          margin="dense"
          label="Price"
          type="number"
          fullWidth
          value={price}
          onChange={e => setPrice(e.target.value)}
          error={!!errors.price}
          helperText={errors.price}
        />
        <TextField
          margin="dense"
          label="Stock"
          type="number"
          fullWidth
          value={stock}
          onChange={e => setStock(e.target.value)}
          error={!!errors.stock}
          helperText={errors.stock}
        />
        <TextField
          margin="dense"
          label="Description"
          fullWidth
          multiline
          minRows={2}
          value={description}
          onChange={e => setDescription(e.target.value)}
          error={!!errors.description}
          helperText={errors.description}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="secondary">Cancel</Button>
        <Button onClick={handleSave} variant="contained" color="primary">{product ? 'Save Changes' : 'Add Product'}</Button>
      </DialogActions>
    </Dialog>
  );
};

export default ProductModal; 