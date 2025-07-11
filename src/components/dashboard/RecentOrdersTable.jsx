import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TableSortLabel,
  Chip,
} from "@mui/material";

const mockOrders = [
  {
    id: 1001,
    customer: "John Doe",
    date: "2024-05-01",
    status: "Completed",
    amount: 120.5,
  },
  {
    id: 1002,
    customer: "Jane Smith",
    date: "2024-05-02",
    status: "Pending",
    amount: 80.0,
  },
  {
    id: 1003,
    customer: "Alice Brown",
    date: "2024-05-03",
    status: "Cancelled",
    amount: 45.2,
  },
  {
    id: 1004,
    customer: "Bob Lee",
    date: "2024-05-04",
    status: "Completed",
    amount: 210.0,
  },
  {
    id: 1005,
    customer: "Chris Green",
    date: "2024-05-05",
    status: "Pending",
    amount: 99.99,
  },
];

const getStatusColor = (status) => {
  switch (status) {
    case "Completed":
      return "success";
    case "Pending":
      return "warning";
    case "Cancelled":
      return "error";
    default:
      return "default";
  }
};

const columns = [
  { id: "id", label: "Order ID" },
  { id: "customer", label: "Customer" },
  { id: "date", label: "Date" },
  { id: "status", label: "Status" },
  { id: "amount", label: "Amount (₹)" },
];

function descendingComparator(a, b, orderBy) {
  if (a[orderBy] < b[orderBy]) return 1;
  if (a[orderBy] > b[orderBy]) return -1;
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

const RecentOrdersTable = () => {
  const [order, setOrder] = useState("desc");
  const [orderBy, setOrderBy] = useState("date");

  const handleSort = (property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const sortedOrders = [...mockOrders].sort(getComparator(order, orderBy));

  // if (Math.random() > 0.5) {
  //   return new Error("ERROR RUSLAN");
  // }
  return (
    <TableContainer
      component={Paper}
      className="mb-4 flex-shrink-1 h-auto col-12 col-md-12"
    >
      <Table
        size="small"
        aria-label="recent orders table"
        className="table-responsive-md"
      >
        <TableHead>
          <TableRow>
            {columns.map((col) => (
              <TableCell
                key={col.id}
                sortDirection={orderBy === col.id ? order : false}
              >
                <TableSortLabel
                  active={orderBy === col.id}
                  direction={orderBy === col.id ? order : "asc"}
                  onClick={() => handleSort(col.id)}
                >
                  {col.label}
                </TableSortLabel>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {sortedOrders.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.customer}</TableCell>
              <TableCell>{row.date}</TableCell>
              <TableCell>
                <Chip
                  label={row.status}
                  color={getStatusColor(row.status)}
                  size="small"
                />
              </TableCell>
              <TableCell>₹{row.amount.toFixed(2)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default RecentOrdersTable;
