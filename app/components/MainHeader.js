"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
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
import { createClient } from "../utils/supabase/client";
import { logout } from "../logout/actions";

const supabase = createClient();

export default function MainHeader() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [language, setLanguage] = useState("en");
  const [profileAnchorEl, setProfileAnchorEl] = useState(null);
  const [tabValue, setTabValue] = useState(0);
  const [user, setUser] = useState(null);

  const open = Boolean(anchorEl);
  const profileOpen = Boolean(profileAnchorEl);

  useEffect(() => {
    const getUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      setUser(user);
    };
    getUser();
  }, []);

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

  const handleLogout = async event => {
    event.preventDefault();
    await logout(); // Execute the logout action
    setUser(null); // Reset the user state
  };

  return (
    <AppBar position="static" sx={{ paddingRight: "25px", paddingLeft: "25px", height: "70px", boxShadow: "none" }}>
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

        {console.log("user", user)}
        {user ? (
          <>
            <Button
              color="inherit"
              onClick={handleProfileClick}
              startIcon={<Avatar sx={{ width: 32, height: 32 }} />}
              endIcon={<KeyboardArrowDownIcon />}
            >
              {user.user_metadata.full_name.split(" ")[0]}
            </Button>
            <form onSubmit={handleLogout}>
              <Button type="submit" color="inherit" variant="outlined" sx={{ color: "white" }}>
                Logout
              </Button>
            </form>
          </>
        ) : (
          <Link href="/login">
            <Button color="inherit" variant="outlined" sx={{ color: "white" }}>
              Login
            </Button>
          </Link>
        )}

        <Menu anchorEl={profileAnchorEl} open={profileOpen} onClose={handleProfileClose} sx={{ paddingRight: "2px" }}>
          <MenuItem onClick={handleProfileClose}>Profile</MenuItem>
          <MenuItem onClick={handleProfileClose}>My account</MenuItem>
          <MenuItem onClick={handleLogout}>Logout</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}
