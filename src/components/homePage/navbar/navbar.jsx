import React from 'react';
import { useState } from 'react';
import { AppBar, Toolbar, Typography, CssBaseline, IconButton, Button, Badge, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { HideOnScroll } from './navfunctions';
import { useNavigate } from 'react-router-dom';
import DrawerSlide from '../../sidebar/sidebar';
import LanguageSharpIcon from '@mui/icons-material/LanguageSharp';

const Navbar = (props) => {
  const navigate = useNavigate();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(null);
  const token = localStorage.getItem('token');

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleProfileMenuOpen = (event) => {
    setProfileMenuOpen(event.currentTarget);
  };



  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}>
          <Toolbar style={{ backgroundColor: "rgba(0, 0, 0, 0.9)" }}>
          {token && (  
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            style={{ marginRight: 16 }}
            onClick={handleDrawerOpen}>
            <MenuIcon />
          </IconButton>
        )}  

            <Button color="inherit" onClick={() => { navigate('/') }}>Home</Button>
            <Button color="inherit">About Us</Button>
            <Button color="inherit">Contact</Button>
            <Typography variant="h6" style={{ flexGrow: 1, color: "black" }}>
              Notes
            </Typography>
            <IconButton color="inherit">
              <Badge badgeContent={7} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton color="inherit">
              <Badge badgeContent={5} color="error">
                <MailOutlineIcon />
              </Badge>
            </IconButton>
            <IconButton color="inherit">
              <SearchIcon />
            </IconButton>
            {token ? null: (
          <IconButton color="inherit">
            <LanguageSharpIcon />
          </IconButton>)}
{/*token auth */}
            {token ? (
              <div>
              <Button color="inherit">
              <IconButton
              color="inherit"
              onClick={handleProfileMenuOpen}>
              <AccountCircleIcon />
              </IconButton>
              </Button>
              <Menu
              anchorEl={profileMenuOpen}
              open={Boolean(profileMenuOpen)}
              onClose={() => setProfileMenuOpen(null)}>
              <Button>talal</Button>
              
            </Menu>
              </div>
              


            ) : (
              <div>
                <Button color="inherit" onClick={() => { navigate('/signin') }}>Login</Button>
                <Button color="inherit" onClick={() => { navigate('/signup') }}>Signup</Button>
              </div>
            )}

          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <DrawerSlide open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </React.Fragment>
  );
}

export default Navbar;
