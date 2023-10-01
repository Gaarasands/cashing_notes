import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Divider, Typography, Avatar } from "@mui/material";
import LogoutIcon from '@mui/icons-material/Logout';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import {FcHome} from 'react-icons/fc';
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';
import { useNavigate } from 'react-router-dom';
import LocalCafeIcon from '@mui/icons-material/LocalCafe';
import { LuWarehouse } from "react-icons/lu";
import {FcSettings} from 'react-icons/fc'
import { deepOrange, deepPurple } from '@mui/material/colors';

const DrawerSlide = ({ open, onClose, username }) => {
  const clearToken = () => {
    localStorage.removeItem("token");
  };
  const navigate = useNavigate();
  const user = "/user/";

  const handleLogout = () => {
    clearToken();
    navigate("/");
  }

  const handleListItemClick = (text) => {
    switch(text) {
      case 'Home':
        navigate(user + 'home');
        break;
      case 'Products':
        navigate(user + 'products');
        break;
      case 'RawMaterial':
        navigate(user + 'rawmaterial');
        break;  
      case 'WareHouse':
        navigate(user + 'warehouse');
        break;
      case 'Employees':
        navigate(user + 'emplyees');
        break;
      case 'Details':
        navigate(user + 'details');
        break;
      case 'Cashing':
        navigate(user + 'cashing')
        break;
      case 'Settings':
        navigate(user + 'settings');
      default:
        break;
    }
    onClose();
  }

  return (
    <Drawer
      open={open}
      onClose={onClose}
      sx={{
        width: "300px",
        [`& .MuiDrawer-paper`]: {
          width: "300px",
          background: "rgba(0, 0, 0, 0.9)",
          color: "white",
        },
      }}
    >

      <List sx={{ padding: 0 }}>
      
        {[<Avatar sx={{ bgcolor: deepOrange[500] }}>T</Avatar>,'Home' , 'Products', 'RawMaterial', 'WareHouse', 'Emplyee', 'Cashing' ,'Settings'].map((text, index) => (
          <ListItem
            button 
            key={text}
            onClick={() => handleListItemClick(text)}
            sx={{ paddingLeft: 3, paddingRight: 3 }}
          >
            <ListItemIcon sx={{ color: "white" }}>
              {index === 0 ?  null :
               index === 1 ?  <FcHome /> :
               index === 2 ?  <LocalCafeIcon />:
               index === 3 ?  <Inventory2OutlinedIcon />:
               index === 4 ?  <LuWarehouse /> :
               index === 5 ?  <GroupsRoundedIcon />:
               index === 6 ?  <InboxIcon /> :
                            <FcSettings /> }
            </ListItemIcon>
            <ListItemText primary={text} sx={{ color: "white" }} />
          </ListItem>
        ))}
      </List>
      <Divider sx={{ backgroundColor: "white" }} />
      <List sx={{ padding: 0 }}>
        <ListItem
          button
          onClick={handleLogout}
          sx={{ paddingLeft: 3, paddingRight: 3 }}
        >
          <ListItemIcon sx={{ color: "white" }}>
            <LogoutIcon />
          </ListItemIcon>
          <ListItemText primary="Logout" sx={{ color: "white" }} />
        </ListItem>
      </List>
      <Divider sx={{ backgroundColor: "white" }} />
      <Typography
        variant="subtitle1"
        sx={{ color: "white", paddingLeft: 3, paddingTop: 2, paddingBottom: 2 }}
      >
        {`Logged in as ${username}`}
      </Typography>
    </Drawer>
  );
};

export default DrawerSlide;
