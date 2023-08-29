import { Paper } from "@mui/material";
import { useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import { postData } from "../../services/FetchNodeServices";

const useStyles = makeStyles({
 
  tableBox:{width:80,
          height:80,
          display:'flex',
          flexDirection:'column',
          justifyContent:"center",
          alignItems:'center',
          padding:5,
          background:'#d35400 !important',
          borderRadius:5,
          cursor:'pointer'},      

  floorBoxText:{fontFamily:'Kanit',
                fontWeight:'bold',
                fontSize:16,
                color:'#fff'},

  clickedFloorBox:{
    width:80,
        height:80,
        display:'flex',
        justifyContent:"center",
        alignItems:'center',
        padding:5,
        background:'#33691E !important',
        borderRadius:'7px !important',
        boxShadow:"0 0 11px  #c0392b !important",
        cursor:'pointer'
  },
  notClickedFloorBox:{
    width:80,
        height:80,
        display:'flex',
        justifyContent:"center",
        alignItems:'center',
        padding:5,
        borderRadius:'4px !important',
        background:'#27ae60 !important',
        cursor:'pointer'
  }     
 
});

export default function TableComponent({title,myrouter}){
  const navigate=useNavigate();
  const classes=useStyles();
  const admin=JSON.parse(localStorage.getItem('ADMIN'));


  const [floor,setFloor]=useState([]);
  const [table,setTable]=useState([]);
  const [selectedFloorIndex,setSelectedFloorIndex]=useState(-1)

  const fetchAllFloor=async()=>{
     const result=await postData('tablebooking/fetch_all_floor',{restaurantid:admin.restaurantid});
     setFloor(result.data);
  }

  const fetchAllTable=async(clickedfloor,i)=>{
    setSelectedFloorIndex(i);
    const result=await postData('tablebooking/fetch_all_table_by_floor',{restaurantid:admin.restaurantid,floor:clickedfloor});
    setTable(result.data);
  }

  const showTable=()=>{
    return table.map((item)=>{
      return(<Paper elevation={3} className={classes.tableBox}>

          <div className={classes.floorBoxText}>  
           Table {item.tableno}
          </div>
          <div className={classes.floorBoxText} style={{fontSize:13,fontWeight:'normal'}}>  
           Chairs {item.noofchairs}
          </div> 
          <div className={classes.floorBoxText} style={{fontSize:14,fontWeight:'bolder'}}>  
          &#8377; {0}
          </div> 

      </Paper>)
    })
  }

  const showFloor=()=>{
    return floor.map((item,i)=>{
      return(<Paper onClick={()=>fetchAllTable(item.floor,i)} elevation={3} className={i===selectedFloorIndex?classes.clickedFloorBox:classes.notClickedFloorBox} >

          <div className={classes.floorBoxText}>  
           {item.floor}
          </div> 
      </Paper>)
    })
  }

  useEffect(function(){
    fetchAllFloor();
  },[]);

  return(<div style={{display:'flex',              flexDirection:'column'}}>
      <div style={{ display:'flex',
                    gap:15,
                    marginBlock:8,
                    flexWrap:'wrap'}}>
          {showFloor()} 
      </div>
      <div style={{ display:'flex',
                    gap:15,
                    marginBlock:8,
                    flexWrap:'wrap'}}>
          {showTable()} 
      </div>
  </div>)
}