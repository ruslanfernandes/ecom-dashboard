import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TableSortLabel, IconButton, TextField, Avatar, Tooltip
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const columns = [
  { id: 'image', label: 'Image' },
  { id: 'title', label: 'Title' },
  { id: 'price', label: 'Price (₹)' },
  { id: 'stock', label: 'Stock' },
  { id: 'actions', label: 'Actions' },
];

function descendingComparator(a, b, orderBy) {
// final sorting
 if(a[orderBy] < b[orderBy]) return 1;
  if(a[orderBy] > b[orderBy]) return -1;
  return 0;
}
function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

/**
 * ProductTable displays a searchable, sortable table of products.
 * @param {Array} products - list of product objects
 * @param {function} onEdit - callback for editing a product
 * @param {function} onDelete - callback for deleting a product
 */
const ProductTable = ({ products, onEdit, onDelete }) => {
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('title');
  const [search, setSearch] = useState('');

  // Filter and sort products based on search and sort state
  const filteredProducts = useMemo(() => {
    return products
      .filter(p => p.title.toLowerCase().includes(search.toLowerCase()))
      .sort(getComparator(order, orderBy));
  }, [products, search, order, orderBy]);

  const handleSort = (property) => {
    const isAsc = orderBy === property && order === 'asc';
    // if you clicked on same 
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  return (
    <Paper className="p-3 mb-4">
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-3 gap-2">
        <h5 className="mb-0 ">Products</h5>
        <TextField
          size="small"
          label="Search by title"
          variant="outlined"
          value={search}
          onChange={e => setSearch(e.target.value)}
          style={{ maxWidth: 250 }}
        />
      </div>
      <TableContainer>
        <Table size="small" className="table-responsive-md">
          <TableHead>
            <TableRow>
              {columns.map(col => (
                <TableCell key={col.id}>
                  {col.id !== 'actions' ? (
                    <TableSortLabel
                      active={orderBy === col.id}
                      direction={orderBy === col.id ? order : 'asc'}
                      onClick={() => handleSort(col.id)}
                    >
                      {col.label}
                    </TableSortLabel>
                  ) : col.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredProducts.map(product => (
              <TableRow key={product.id}>
                <TableCell>
                  <Avatar
                    variant="rounded"
                    src={product.image || undefined}
                    alt={product.title}
                    sx={{ width: 48, height: 48 }}
                  >
                    {product.title[0]}
                  </Avatar>
                </TableCell>
                <TableCell>{product.title}</TableCell>
                <TableCell>₹{product.price.toFixed(2)}</TableCell>
                <TableCell>{product.stock}</TableCell>
                <TableCell>
                  <Tooltip title="Edit">
                    <IconButton size="small" color="primary" onClick={() => onEdit(product)}>
                      <EditIcon />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Delete">
                    <IconButton size="small" color="error" onClick={() => onDelete(product)}>
                      <DeleteIcon />
                    </IconButton>
                  </Tooltip>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

ProductTable.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    stock: PropTypes.number.isRequired,
    image: PropTypes.string,
    description: PropTypes.string,
  })).isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ProductTable; 