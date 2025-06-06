import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import PeopleIcon from "@mui/icons-material/People";

const summaryData = [
  {
    title: "Total Sales",
    value: "₹12,400",
    icon: <CurrencyRupeeIcon color="secondary" fontSize="large" />,
  },
  {
    title: "Orders",
    value: "1,230",
    icon: <ShoppingCartIcon color="secondary" fontSize="large" />,
  },
  {
    title: "Active Users",
    value: "320",
    icon: <PeopleIcon color="secondary" fontSize="large" />,
  },
];

const SummaryCards = () => (
  <Box
    className="mb-4"
    sx={{
      display: "flex",
      gap: "1rem",
      justifyContent: "space-between",
      alignItems: "center",
      width: "100%",
      gap: 3,
      flexWrap: { xs: "wrap", sm: "nowrap" },
    }}
  >
    {summaryData.map((item) => (
      <Card
        key={item.title}
        className="h-100 "
        sx={{
          flex: 1,
          flexBasis: "40%",
          maxWidth: "100%",
          bgcolor: "primary.dark",
          flexWrap: 1,
        }}
      >
        <CardContent className="d-flex align-items-center justify-content-around ">
          <div className="me-3" sx={{ color: "secondary.light" }}>
            {item.icon}
          </div>
          <div>
            <Typography variant="subtitle2" sx={{ color: "secondary.light" }}>
              {item.title}
            </Typography>
            <Typography
              variant="h5"
              sx={{ color: "secondary.light" }}
              fontWeight={600}
            >
              {item.value}
            </Typography>
          </div>
        </CardContent>
      </Card>
    ))}
  </Box>
);

export default SummaryCards;
