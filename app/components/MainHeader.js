"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Menu,
  MenuItem,
  InputBase,
  Select,
  FormControl,
  IconButton,
  Badge,
  Avatar,
  Tabs,
  Tab,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import LanguageIcon from "@mui/icons-material/Language";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { createClient } from "../utils/supabase/client";
export default function MainHeader() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [language, setLanguage] = useState("en");
  const [profileAnchorEl, setProfileAnchorEl] = useState(null);
  const [tabValue, setTabValue] = useState(0);
  const open = Boolean(anchorEl);
  const profileOpen = Boolean(profileAnchorEl);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLanguageChange = event => {
    setLanguage(event.target.value);
  };

  const handleProfileClick = event => {
    setProfileAnchorEl(event.currentTarget);
  };

  const handleProfileClose = () => {
    setProfileAnchorEl(null);
  };

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <AppBar
      position="static"
      sx={{ paddingRight: "25px", paddingLeft: "25px", height: "70px", boxShadow: "none", backgroundColor: "" }}
    >
      <Toolbar>
        <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
          Teach For Cambodia
        </Typography>
        <Button color="inherit" onClick={handleClick} endIcon={<KeyboardArrowDownIcon />}>
          Explore
        </Button>
        <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
          <MenuItem onClick={handleClose}>Option 1</MenuItem>
          <MenuItem onClick={handleClose}>Option 2</MenuItem>
          <MenuItem onClick={handleClose}>Option 3</MenuItem>
        </Menu>
        <div style={{ position: "relative", marginLeft: "50px", marginRight: "px" }}>
          <div
            style={{ position: "absolute", display: "flex", alignItems: "center", height: "100%", padding: "0 10px" }}
          >
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
            style={{
              paddingLeft: "40px",
              color: "inherit",
              backgroundColor: "rgba(255, 255, 255, 0.15)",
              borderRadius: "4px",
            }}
          />
        </div>
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
          <Select
            value={language}
            onChange={handleLanguageChange}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
            startAdornment={<LanguageIcon sx={{ mr: 1 }} />}
            sx={{ color: "inherit", backgroundColor: "rgba(255, 255, 255, 0.15)", borderRadius: "4px" }}
          >
            <MenuItem value="en">English</MenuItem>
            <MenuItem value="km">ភាសាខ្មែរ</MenuItem>
          </Select>
        </FormControl>
        <IconButton color="inherit">
          <Badge badgeContent={4} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>

        <Button
          color="inherit"
          onClick={handleProfileClick}
          startIcon={<Avatar sx={{ width: 32, height: 32 }}>U</Avatar>}
          endIcon={<KeyboardArrowDownIcon />}
        ></Button>
        <Menu anchorEl={profileAnchorEl} open={profileOpen} onClose={handleProfileClose} sx={{ paddingRight: "2px" }}>
          <MenuItem onClick={handleProfileClose}>Profile</MenuItem>
          <MenuItem onClick={handleProfileClose}>My account</MenuItem>
          <MenuItem onClick={handleProfileClose}>Logout</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}
