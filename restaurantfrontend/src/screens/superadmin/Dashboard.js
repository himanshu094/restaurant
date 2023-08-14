import { useState } from "react";
import { useStyles } from "./DashboardCss";
import { Avatar,AppBar,Box,Toolbar,Typography,Grid,Paper } from "@mui/material";

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';

import RestaurantInterface from "../restaurant/RestaurantInterface";
import DisplayAllRestaurant from "../restaurant/DisplayAllRestaurant";
import { Routes,Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Dashboard(props){
  const classes=useStyles();
  const navigate=useNavigate();
  return(
    <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar variant="dense"> 
            <Typography variant="h6" color="inherit" component="div">
              Super Admin
            </Typography>
          </Toolbar>
        </AppBar>
        <Grid container spaces={3} style={{paddingInlineStart:5}}>
          <Grid item xs={2}>
            <Paper >
              <div className={classes.leftBarStyle}>
                <Avatar src='' variant="circular" style={{width:80,height:80}}/> 
                <div className={classes.nameStyle}>Peter Kumar</div>
                <div className={classes.emailStyle}>peterkumar@gmail.com</div>
                <div className={classes.phoneStyle}>+919301123085</div>
              </div>
              <div className={classes.menuStyle}>
                <List>
                  <Divider />
                  <ListItem disablePadding>
                    <ListItemButton onClick={()=>navigate('/dashboard/restaurantinterface')}>
                      <ListItemIcon>
                        <InboxIcon />
                      </ListItemIcon>
                      <ListItemText primary={<span className={classes.menuItemStyle}>Add New Restaurant</span>} />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton onClick={()=>navigate('/dashboard/displayallrestaurant')}>
                      <ListItemIcon>
                        <DraftsIcon />
                      </ListItemIcon>
                      <ListItemText primary={<span className={classes.menuItemStyle}>Restaurant List</span>} />
                    </ListItemButton>
                  </ListItem>
                  <Divider />
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon>
                        <DraftsIcon />
                      </ListItemIcon>
                      <ListItemText primary={<span className={classes.menuItemStyle}>Logout</span>} />
                    </ListItemButton>
                  </ListItem>
                </List>
              </div> 
            </Paper>
          </Grid> 
          <Grid item xs={10} style={{paddingLeft:5,paddingTop:10}}>
            <Routes>
              <Route element={<RestaurantInterface/>} path='/restaurantinterface'/>
              <Route element={<DisplayAllRestaurant/>} path='/displayallrestaurant' />
            </Routes> 
          </Grid>
        </Grid>
    </Box>
  )
}