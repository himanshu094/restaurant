import { useState,useEffect } from "react";
import { Grid,TextField,Button,Select } from "@mui/material";
import { makeStyles } from '@mui/styles';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import UploadIcon from '@mui/icons-material/Upload';

import { serverURL,getData,postData} from "../../services/FetchNodeServics";
import Heading from "../../components/heading/Heading";
import { UploadFile } from "@mui/icons-material";

const useStyles = makeStyles({
  root: {
    width:"100vw",
    height:"100vh",
    background:"#dfe4ea",
    display:"flex",
    alignItems:"center",
    justifyContent:"center"
  },
  box:{
    width:"60%",
    height:"auto",
    borderRadius:10,
    background:"#fff",
    padding:15
  }
});

function RestaurantInterface(){

  const classes=useStyles()
  const [states,setStates]=useState([]);
  const [cities,setCities]=useState([]);
  const [stateid,setStateId]=useState('');

  const [cityid,setCityId]=useState('');
  const [restaurantName,setRestaurantName]=useState('');
  const [ownerName,setOwnerName]=useState('');
  const [phoneNumber,setPhoneNumber]=useState('');
  const [emailid,setEmailid]=useState('');
  const [mobileNumber,setMobileNumber]=useState('');
  const [url,setUrl]=useState('');
  const [fssai,setFssai]=useState('');
  const [gstNo,setGstNo]=useState('');
  const [gstType,setGstType]=useState('')
  const [fileFssai,setFileFssai]=useState({url:'',bytes:''})
  const [fileShopAct,setFileShopAct]=useState({url:'',bytes:''})
  const [fileLogo,setFileLogo]=useState({url:'',bytes:''})
  const [address,setAddress]=useState('')




  const fetchAllStates=async()=>{
     const result=await getData('statecity/fetch_all_states');
     setStates(result.data);
     console.log(result.data);
  }

  useEffect(function(){
      fetchAllStates()  
  },[])

  const fillState=()=>{
    return states.map((item)=>{
      return <MenuItem value={item.stateid}>{item.statename}</MenuItem>
    });
  }

  const fetchAllCities=async(stateid)=>{
    const body={stateid:stateid}
    const result=await postData('statecity/fetch_all_cities',body);
    setCities(result.data)
  }

  const fillCities=()=>{
    return cities.map((item)=>{
      return <MenuItem value={item.cityid}>{item.cityname}</MenuItem>
    });
  }

  const handleStateChange=(event)=>{
    setStateId(event.target.value);
    fetchAllCities(event.target.value);
  }

  return(<div className={classes.root}>
            <div className={classes.box}>
                <Grid container spacing={2}>

                    <Grid item xs={12} className={classes.heading}>
                      <Heading title={"Restaurant Register"}/>
                    </Grid>

                    <Grid item xs={6}>
                      <TextField label="Restaurant Name" onChange={(event)=>setRestaurantName(event.target.value)} fullWidth/>
                    </Grid>
                    <Grid item xs={6}>
                      <TextField onChange={(event)=>setOwnerName(event.target.value)} label="Owner Name" fullWidth/>
                    </Grid>

                    <Grid item xs={4}>
                      <TextField onChange={(event)=>setPhoneNumber(event.target.value)} label="Phone Number" fullWidth/>
                    </Grid>
                    <Grid item xs={4}>
                      <TextField onChange={(event)=>setMobileNumber(event.target.value)} label="Mobile Number" fullWidth/>
                    </Grid>
                    <Grid item xs={4}>
                      <TextField label="Email Address" onChange={(event)=>setEmailid(event.target.value)} fullWidth/>
                    </Grid>

                    <Grid item xs={12}>
                      <TextField onChange={(event)=>setAddress(event.target.value)} label="Address" fullWidth/>
                    </Grid>

                    <Grid item xs={4}>
                      <FormControl fullWidth>
                        <InputLabel>States</InputLabel>
                        <Select onChange={handleStateChange} value={stateid} label="States">
                          <MenuItem>-Select State-
                          </MenuItem>
                          {fillState()}
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={4}>
                      <FormControl fullWidth>
                        <InputLabel>City</InputLabel>
                        <Select label="city" onChange={(event)=>setCityId(event.target.value)} value={cityid}>
                          <MenuItem>-Select City-
                          </MenuItem>
                          {fillCities()}
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={4}>
                       <TextField onChange={(event)=>setUrl(event.target.value)} label="URL" fullWidth/>
                    </Grid>

                    <Grid item xs={4}>
                      <TextField onChange={(event)=>setFssai(event.target.value)} label="Fssai Number" fullWidth/>
                    </Grid>
                    <Grid item xs={4}>
                      <TextField onChange={(event)=>setGstNo(event.target.value)} label="GST Number" fullWidth/>
                    </Grid>
                    <Grid item xs={4}>
                      <FormControl fullWidth>
                        <InputLabel>GST Type</InputLabel>
                        <Select label="GST Type" value={gstType} onChange={(event)=>setGstType(event.target.value)}>
                          <MenuItem>-Select Gst Type-</MenuItem>
                          <MenuItem>5 Star</MenuItem>
                          <MenuItem>Other</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                    
                    <Grid item xs={4}>
                      <Button fullWidth component="label" variant="contained" endIcon={<UploadIcon/>}>
                      <input hidden accept="image/*" type="file"/>
                      Upload Fssai
                      </Button>
                    </Grid>
                    <Grid item xs={4}>
                      <Button fullWidth component="label" variant="contained" endIcon={<UploadIcon/>}>
                      <input hidden accept="image/*" type="file"/>
                      Upload Shop Act
                      </Button>
                    </Grid>
                    <Grid item xs={4}>
                      <Button fullWidth component="label" variant="contained" endIcon={<UploadIcon/>}>
                      <input hidden accept="image/*" type="file"/>
                      Upload Logo
                      </Button>
                    </Grid>
                    
                    
                      <Grid item xs={6}>
                        <Button variant="contained" fullWidth>Submit</Button> 
                      </Grid>
                      <Grid item xs={6}>
                        <Button variant="contained" fullWidth>Reset</Button>
                      </Grid>
                    

                </Grid>
            </div>
         </div>)
}

export default RestaurantInterface;