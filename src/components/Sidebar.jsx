import React from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import CollectionsIcon from "@mui/icons-material/Collections";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles";

const Sidebar = ({ open, onClose }) => {
  const theme = useTheme();

  return (
    <Drawer
      anchor="left"
      open={open}
      onClose={onClose}
      variant="temporary"
      ModalProps={{ keepMounted: true }}
      sx={{
        "& .MuiDrawer-paper": {
          position: "absolute",
          top: "80px",
          backgroundColor: theme.palette.primary.dark,
          color: theme.palette.primary.contrastText,
        },
      }}
    >
      <div
        style={{ width: 240 }}
        role="presentation"
        onClick={onClose}
        onKeyDown={onClose}
      >
        <List>
          <ListItem button component={Link} to="/">
            <ListItemIcon sx={{ color: theme.palette.primary.contrastText }}>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText
              sx={{
                color: theme.palette.primary.light,
                "&:hover": {
                  color: "#ffffff",
                },
              }}
              primary="Dashboard"
            />
          </ListItem>
          <ListItem button component={Link} to="/products">
            <ListItemIcon sx={{ color: theme.palette.primary.contrastText }}>
              <Inventory2Icon />
            </ListItemIcon>
            <ListItemText
              sx={{ color: theme.palette.primary.light }}
              primary="Products"
            />
          </ListItem>
          <ListItem button component={Link} to="">
            <ListItemIcon sx={{ color: theme.palette.primary.contrastText }}>
              <CollectionsIcon />
            </ListItemIcon>
            <ListItemText
              sx={{ color: theme.palette.primary.light }}
              primary="Gallery"
            />
          </ListItem>
          <ListItem button component={Link} to="">
            <ListItemIcon sx={{ color: theme.palette.primary.contrastText }}>
              <CalendarMonthIcon />
            </ListItemIcon>
            <ListItemText
              sx={{ color: theme.palette.primary.light }}
              primary="Calender"
            />
          </ListItem>
          <ListItem button component={Link} to="">
            <ListItemIcon sx={{ color: theme.palette.primary.contrastText }}>
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText
              sx={{ color: theme.palette.primary.light }}
              primary="Logout"
            />
          </ListItem>
        </List>
      </div>
    </Drawer>
  );
};

export default Sidebar;
