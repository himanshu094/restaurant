import { Grid,TextField,Button,Select } from "@mui/material";
import { makeStyles } from '@mui/styles';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import UploadIcon from '@mui/icons-material/Upload';

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

  return(<div className={classes.root}>
            <div className={classes.box}>
                <Grid container spacing={2}>

                    <Grid item xs={12} className={classes.heading}>
                      <Heading title={"Restaurant Register"}/>
                    </Grid>

                    <Grid item xs={6}>
                      <TextField label="Restaurant Name" fullWidth/>
                    </Grid>
                    <Grid item xs={6}>
                      <TextField label="Owner Name" fullWidth/>
                    </Grid>

                    <Grid item xs={4}>
                      <TextField label="Phone Number" fullWidth/>
                    </Grid>
                    <Grid item xs={4}>
                      <TextField label="Mobile Number" fullWidth/>
                    </Grid>
                    <Grid item xs={4}>
                      <TextField label="Email Address" fullWidth/>
                    </Grid>

                    <Grid item xs={12}>
                      <TextField label="Address" fullWidth/>
                    </Grid>

                    <Grid item xs={4}>
                      <FormControl fullWidth>
                        <InputLabel>States</InputLabel>
                        <Select>
                          <MenuItem>-Select State-
                          </MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={4}>
                      <FormControl fullWidth>
                        <InputLabel>City</InputLabel>
                        <Select>
                          <MenuItem>-Select City-
                          </MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={4}>
                       <TextField label="URL" fullWidth/>
                    </Grid>

                    <Grid item xs={4}>
                      <TextField label="Fssai Number" fullWidth/>
                    </Grid>
                    <Grid item xs={4}>
                      <TextField label="GST Number" fullWidth/>
                    </Grid>
                    <Grid item xs={4}>
                      <FormControl fullWidth>
                        <InputLabel>GST Type</InputLabel>
                        <Select>
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