import {useEffect,useState} from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import { serverURL,getData,postData } from '../../services/FetchNodeServices';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { Paper,Dialog,DialogActions,DialogContent,Button } from '@mui/material';


export default function FoodComponent(props) {
  const admin=JSON.parse(localStorage.getItem('ADMIN'));

  const [listFood,setListFood]=useState([]);

  const fetchAllFood=async()=>{
    var result=await postData('fooditem/fetch_all_fooditem_by_category',{restaurantid:admin.restaurantid,categoryid:props.categoryid});
    setListFood(result.data);
  };

  useEffect(function(){
    fetchAllFood()
  },[props]);

  const showFoodInDialog=()=>{
    return listFood.map((item)=>{
      return(
      <div  >
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper',padding:0}}>

          <ListItemButton alignItems="flex-start" style={{display:'flex',alignItems:'center'}}>

              <ListItemAvatar>
                <Avatar src={`${serverURL}/images/${item.icon}`} sx={{width:30,height:30}}/>
              </ListItemAvatar>

              <ListItemText
                primary={item.fooditemname}
                secondary={ <>{item.price===item.offerprice?<b>&#8377;{item.price}</b>:<><s>&#8377;{item.price}</s><b> &#8377;{item.offerprice}</b></>}</>}
                />

          </ListItemButton>
        </List>
      </div>)
    })  
  }

  const handleDialogClose=()=>{
    props.setopen(false);
  }
  
  const showFoodDialog=()=>{
    return(
     <Dialog maxWidth={'sm'} open={props.open}>
        <DialogContent  >
            {showFoodInDialog()}
        </DialogContent>

        <DialogActions>
          <Button onClick={handleDialogClose}>Close</Button>
        </DialogActions>
     </Dialog>
    )}



  return (
    <Paper sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper',boxShadow:'0 0 4px  #222' }}>
      {showFoodDialog()}
    </Paper>
  );
}
