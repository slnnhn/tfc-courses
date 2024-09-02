'use client';

import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import { AppBar, Toolbar, Typography, Button, InputBase, IconButton, Select, MenuItem, FormControl, Menu, Avatar, Badge, Popover, List, ListItem, ListItemText, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
//import { useLanguage } from '../contexts/LanguageContext';

// Styled components
const WhiteAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: 'white',
  color: theme.palette.text.primary, // This will use the default dark text color
  boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.2)', // Optional: adds a subtle shadow
}));

const PaddedToolbar = styled(Toolbar)(({ theme }) => ({
  padding: '0 50px',
  width: '100%',
  boxSizing: 'border-box',
}));

const ContentWrapper = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
});

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.grey[200],
  '&:hover': {
    backgroundColor: theme.palette.grey[300],
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.text.secondary,
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

const StyledLink = styled(Link)({
  textDecoration: 'none',
  color: 'inherit',
  '&:hover': {
    textDecoration: 'none',
    cursor: 'pointer', // Add this to show a pointer cursor on hover
  },
});

const LogoContainer = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
});

const StyledLogo = styled(Image)({
  marginRight: '10px',
});

const ExploreButton = styled(Button)(({ theme }) => ({
  color: theme.palette.text.primary,
  marginRight: theme.spacing(2),
}));

export default function MainHeader() {
  const [searchQuery, setSearchQuery] = useState('');
  const [anchorEl, setAnchorEl] = useState(null);
  const [notificationAnchorEl, setNotificationAnchorEl] = useState(null);
  const [notifications, setNotifications] = useState([]);
  const router = useRouter();
  //const { language, changeLanguage } = useLanguage();

  // Simulating fetching notifications
  useEffect(() => {
    // This would typically be an API call
    const fetchNotifications = () => {
      const mockNotifications = [
        { id: 1, message: 'New course available' },
        { id: 2, message: 'Your assignment is due tomorrow' },
        { id: 3, message: 'New message from your instructor' },
      ];
      setNotifications(mockNotifications);
    };

    fetchNotifications();
  }, []);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const handleLanguageChange = (event) => {
    changeLanguage(event.target.value);
  };

  const handleProfileClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleProfileClose = () => {
    setAnchorEl(null);
  };

  const handleNotificationClick = (event) => {
    setNotificationAnchorEl(event.currentTarget);
  };

  const handleNotificationClose = () => {
    setNotificationAnchorEl(null);
  };

  const handleProfileMenuItemClick = (path) => {
    handleProfileClose();
    router.push(path);
  };

  const handleLogoClick = () => {
    router.push('/');
  };

  const [exploreAnchorEl, setExploreAnchorEl] = useState(null);

  const handleExploreClick = (event) => {
    setExploreAnchorEl(event.currentTarget);
  };

  const handleExploreClose = () => {
    setExploreAnchorEl(null);
  };

  return (
    <WhiteAppBar position="static">
      <PaddedToolbar>
        <ContentWrapper>
          <LogoContainer onClick={handleLogoClick}>
            <StyledLogo
              src="/logo.png"
              alt="Teach For Cambodia Logo"
              width={50}
              height={50}
            />
            <Typography variant="h5" component="div" sx={{ color: 'text.primary' }}>
              Teach For Cambodia
            </Typography>
          </LogoContainer>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <ExploreButton
              endIcon={<KeyboardArrowDownIcon />}
              onClick={handleExploreClick}
            >
              Explore
            </ExploreButton>
            <Menu
              anchorEl={exploreAnchorEl}
              open={Boolean(exploreAnchorEl)}
              onClose={handleExploreClose}
            >
              <MenuItem 
                onClick={handleExploreClose} 
                component={Link}
                href="/allcourses"
              >
                All Courses
              </MenuItem>
              <MenuItem onClick={handleExploreClose} component={Link} href="/subjects">Subjects</MenuItem>
              <MenuItem onClick={handleExploreClose} component={Link} href="/instructors">Instructors</MenuItem>
            </Menu>
            <form onSubmit={handleSearchSubmit}>
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ 'aria-label': 'search' }}
                  value={searchQuery}
                  onChange={handleSearchChange}
                />
              </Search>
            </form>
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
              <Select
                //value={language}
                onChange={handleLanguageChange}
                displayEmpty
                inputProps={{ 'aria-label': 'Without label' }}
                startAdornment={<LanguageIcon sx={{ mr: 1 }} />}
                sx={{ color: 'text.primary', backgroundColor: 'background.paper', borderRadius: '4px' }}
              >
                <MenuItem value="en">English</MenuItem>
                <MenuItem value="km">ភាសាខ្មែរ</MenuItem>
              </Select>
            </FormControl>
            <IconButton color="default" onClick={handleNotificationClick}>
              <Badge badgeContent={notifications.length} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <Popover
              open={Boolean(notificationAnchorEl)}
              anchorEl={notificationAnchorEl}
              onClose={handleNotificationClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
            >
              <List sx={{ width: '250px' }}>
                {notifications.map((notification) => (
                  <ListItem key={notification.id}>
                    <ListItemText primary={notification.message} />
                  </ListItem>
                ))}
              </List>
            </Popover>
            <Button
              color="inherit"
              onClick={handleProfileClick}
              startIcon={<Avatar sx={{ width: 32, height: 32 }}>U</Avatar>}
              endIcon={<KeyboardArrowDownIcon />}
            >
              User
            </Button>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleProfileClose}
            >
              <MenuItem onClick={handleProfileClose} component={Link} href="/profile">
                Profile
              </MenuItem>
              <MenuItem onClick={handleProfileClose} component={Link} href="/account">My account</MenuItem>
              <MenuItem onClick={handleProfileClose}>Logout</MenuItem>
            </Menu>
          </div>
        </ContentWrapper>
      </PaddedToolbar>
    </WhiteAppBar>
  );
}