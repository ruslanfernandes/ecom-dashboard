import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";

import Avatar from "@mui/material/Avatar";

const Topbar = ({ onSidebarToggle }) => (
  <AppBar position="sticky" color="primary.light" elevation={10}>
    <Toolbar className="d-flex justify-content-between align-items-center  pt-2">
      <div className="d-flex align-items-center ">
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={onSidebarToggle}
          className="me-2"
        >
          <MenuIcon />
        </IconButton>

        <Typography variant="h6" noWrap component="div">
          E-Commerce Admin
        </Typography>
      </div>
      <Avatar alt="Admin User" src="" />
    </Toolbar>
  </AppBar>
);

export default Topbar;
