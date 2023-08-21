import { useStyles } from "./WaiterTableInterfaceCss";
import {Grid,TextField,Button,Select,InputLabel,MenuItem,FormControl,Avatar,FormHelperText} from '@mui/material';
import Heading from "../../components/heading/Heading";

import {useState,useEffect} from 'react';
import { getData,postData} from "../../services/FetchNodeServices";
import Swal from 'sweetalert2';

import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';



export default function WaiterTableInterface(){
  const classes = useStyles();
  const admin=JSON.parse(localStorage.getItem('ADMIN'));

   ///? useStates///////////////////////////
   const [restaurantId,setRestaurantId]=useState("");
   const [waiter,setWaiter]=useState([]);
   const [waiterId,setWaiterId]=useState("");
   const [table,setTable]=useState([]);
   const [tableId,setTableId]=useState("");
   const [currentDate,setCurrentDate]=useState("");
   const [resError,setResError]=useState({});

   const handleDate=(event)=>{
    const m=String(Number(event.$M)+1);
    const d=String(event.$D);
    const y=String(event.$y);
    setCurrentDate(y+"-"+m+"-"+d);   
  }


  //? Dropdown Filling/////////////////////////////////
  const fetchAllWaiter=async()=>{
     const result=await getData('waitertable/fetch_all_waiter');
     setWaiter(result.data);
  }

  useEffect(function(){
      fetchAllWaiter();
      fetchAllTable(); 
      setRestaurantId(admin.restaurantid) 
  },[]);

  const fillWaiter=()=>{
    return waiter.map((item)=>{
      return <MenuItem value={item.waiterid}>{item.waitername}</MenuItem>
    });
  }

  const fetchAllTable=async()=>{
    const result=await getData('waitertable/fetch_all_table');
    setTable(result.data);
 }

 const fillTable=()=>{
   return table.map((item)=>{
     return <MenuItem value={item.tableid}>{item.tableno}</MenuItem>
   });
 }
  //?.///////////////////////////////////////////////// ////////////////////

  const handleSubmit=async()=>{
    if(true){
      const body={
        'restaurantid':restaurantId,
        'waiterid':waiterId,
        'tablenoid':tableId,
        'currentdate':currentDate
      }

      const result=await postData('waitertable/waitertable_submit',body);
      
      if(result.status)
      {
        Swal.fire({
          icon: 'success',
          title: 'WaiterTable Registration',
          text: result.message
        })
      }
      else
      {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: result.message,
        })
      }
    }    
}



  return(<div className={classes.root}>
    <div className={classes.box}>
      <Grid container spacing={2}>

        <Grid item xs={12}>
          <Heading title={"Register Waiter table"} myroute={'/admindashboard/displayallwaitertable'}/>
        </Grid>
        
        <Grid item xs={6}>
           <TextField disabled
           value={restaurantId} fullWidth />
           
        </Grid>

        <Grid item xs={6}>
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

        <Grid item xs={6}>
           <FormControl fullWidth>
            <InputLabel>Table No</InputLabel>
            <Select label={"Table no"} 
             
               onChange={(event)=>setTableId(event.target.value)} 
              value={tableId}>
              <MenuItem>-Select Table No-</MenuItem>
              {fillTable()}
            </Select>
              
           </FormControl>
        </Grid>

        <Grid item xs={6}>
             <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DatePicker', 'DatePicker']}>        
                      <DatePicker
                        label="Current Date"
                        format="DD-MM-YYYY"
                        slotProps={{
                          textField: {
                            helperText: 'YYYY/MM/DD',
                          },
                        }}
                        onChange={handleDate}     
                      />
                 </DemoContainer>
             </LocalizationProvider>
          </Grid>
        
       

        <Grid item xs={6}>
          <Button  variant="contained" onClick={handleSubmit} fullWidth>Submit</Button> 
        </Grid>
        <Grid item xs={6}>
          <Button variant="contained" fullWidth>Reset</Button>
        </Grid>

      </Grid>
    </div>
  </div>)
}