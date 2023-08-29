import { useEffect,useState } from "react";
import { TextField,Grid, MenuItem,FormControl,InputLabel,Select } from "@mui/material";
import { useStyles } from "./FoodBookingCss";
import { getData,postData } from "../../services/FetchNodeServices";
import TableComponent from "../../components/tableComponent/TableComponent";
import CategoryComponent from "../../components/categoryComponent/CategoryComponent";

export default function FoodBooking() {
  const classes=useStyles();
  const admin=JSON.parse(localStorage.getItem('ADMIN'));

  const [currentDate,setCurrentDate]=useState();
  const [waiter,setWaiter]=useState([]);
  const [waiterId,setWaiterId]=useState("");

  const getCurrentDate=()=>{
    const date=new Date();
    const cd=date.getFullYear()+"/"+(date.getMonth()+1)+"/"+date.getDate();
    return cd; 
  }
  const fetchAllWaiter=async()=>{
    const result=await postData('waiter/fetch_all_waiter',{restaurantid:admin.restaurantid});
    setWaiter(result.data)
  }

  const getCurrentTime=()=>{
    const time=new Date()
    const ct=time.getHours()+":"+time.getMinutes();
    return ct;
  }

  useEffect(function(){
    setCurrentDate(getCurrentDate()+" "+getCurrentTime());
    fetchAllWaiter() 
  },[]);

  const fillWaiter=()=>{
    return waiter.map((item)=>{
      return <MenuItem value={item.waiterid}>
        {item.waitername}
      </MenuItem>
    })
  }

  return (
    <div className={classes.root}>
      <div className={classes.box}>
        <Grid container spacing={3}>
          
          <Grid item xs={4}>
            <TextField label='Current Date' value={currentDate}/>
          </Grid>

          <Grid item xs={8}>
            <FormControl fullWidth>
              <InputLabel>Waiter Name</InputLabel>
              <Select label={"Category Name"} 
                onChange={(event)=>setWaiterId(event.target.value)} 
                value={waiterId}>
                <MenuItem>-Select Waiter-</MenuItem>
                {fillWaiter()}
              </Select>   
            </FormControl>
          </Grid>

        </Grid>
      </div>

      <div className={classes.box}> 
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <CategoryComponent/>
          </Grid>
          <Grid item xs={10}>
            <TableComponent/>
          </Grid>  
        </Grid>
      </div>  
    </div>
  )
}
