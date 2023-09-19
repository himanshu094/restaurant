import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  root: {
    width:"auto",
    height:"89vh",
    background:"#dfe4ea",
    display:"flex",
    flexDirection:'column',
    alignItems:"center",
    justifyContent:"center",
    paddingBlock:'40px',
    gap:18
  },
  box:{
    width:"80%",
    height:"auto",
    borderRadius:10,
    background:"#fff",
    padding:15,
    boxShadow:"0 0 15px #222",
  },
  center:{
    display:"flex",
    justifyContent:"center",
    alignItems:"center"
  }
});