import { Grid,TextField,Button } from "@mui/material";
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    width:"100vw",
    height:"100vh",
    background:"#dfe4ea"
  },
  box:{
    width:"70%",
    height:"50%",
    borderRadius:10,
    background:"#fff"
  }
});

function RestaurantInterface(){
  const classes=useStyles()

  return(<div className={classes.root}>
            <div className={classes.box}>
                <Grid container spacing={2}>
                    <Grid item>
                    </Grid>  
                </Grid>
            </div>
         </div>)
}

export default RestaurantInterface;