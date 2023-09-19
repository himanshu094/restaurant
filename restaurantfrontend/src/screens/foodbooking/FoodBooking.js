import { useEffect,useState } from "react";
import { TextField,Grid, MenuItem,FormControl,InputLabel,Select } from "@mui/material";
import { useStyles } from "./FoodBookingCss";
import { getData,postData,serverURL } from "../../services/FetchNodeServices";
import TableComponent from "../../components/tableComponent/TableComponent";
import CategoryComponent from "../../components/categoryComponent/CategoryComponent";
import TableCart from "../../components/tableCart/TableCart";

export default function FoodBooking() {
  const classes=useStyles();
  const admin=JSON.parse(localStorage.getItem('ADMIN'));

  const [currentDate,setCurrentDate]=useState();
  const [waiter,setWaiter]=useState([]);
  const [waiterId,setWaiterId]=useState("");
  const [floorNo,setFloorNo]=useState('');
  const [tableNo,setTableNo]=useState('');
  const [refresh,setRefresh]=useState(false);

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
    
    setCurrentDate("["+getCurrentDate()+"] "+" "+getCurrentTime());
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
        <Grid container spacing={3} style={{display:'flex',alignItems:'center'}}>

          <Grid item xs={3} >
            <img src={`${serverURL}/images/${admin.filelogo}`}  style={{width:80,height:'auto',paddingLeft:'20px'}}/>
          </Grid>
          
          <Grid item xs={3}>
            <TextField  value={currentDate}/>
          </Grid>

          <Grid item xs={3}>
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

          <Grid item xs={3} style={{fontFamily:'kanit',fontWeight:'bold',fontSize:32,textAlign:'right',color:'#273c75',paddingRight:'20px'}}>
            {floorNo} {tableNo.length!==0?<>Table {tableNo}</>:<></>} 
          </Grid>

        </Grid>
      </div>

      <div className={classes.box}> 
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <CategoryComponent tableno={tableNo} floorno={floorNo} refresh={refresh} setrefresh={setRefresh}/>
          </Grid>
          <Grid item xs={5}>
            <TableComponent floorno={floorNo}  setfloorno={setFloorNo} settableno={setTableNo} />
          </Grid>  
          <Grid item xs={5}>
             <TableCart floortableno={`#${floorNo}${tableNo}`} refresh={refresh} setrefresh={setRefresh} />
          </Grid>
        </Grid>
      </div>  
    </div>
  )
}
