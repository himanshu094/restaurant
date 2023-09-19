import { Button, Divider, Grid, Paper, TextField, dividerClasses } from "@mui/material";
import { useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";
import { postData } from "../../services/FetchNodeServices";
import {useSelector,useDispatch} from "react-redux";
import { Calculate } from "@mui/icons-material";
import Plusminus from "../plusminus/Plusminus";

export default function TableCart(props){
  const navigate=useNavigate();
  const admin=JSON.parse(localStorage.getItem('ADMIN'));
  const gst=(admin.gsttype)/2;
  

  const foodOrder=useSelector((state)=>state.orderData);
  const dispatch=useDispatch();

  let foodList=[];  
  if(props.floortableno.length!=1){
      const cart=foodOrder[props.floortableno];
      if(cart!=undefined)
      foodList=Object.values(cart);
  }

  const handleQtyChange=(v,item)=>{
    const foodList=foodOrder[props.floortableno];

    console.log("foodorder",foodOrder);
    console.log("foodlist",foodList);
    if(v==0){
      delete foodList[item.fooditemid];
      foodOrder[props.floortableno]=foodList;
    }
    else{
      foodList[item.fooditemid].qty=v;
      foodOrder[props.floortableno]=foodList;
    }
    console.log("add qty foodorder",foodOrder);
    dispatch({type:'ADD_ORDER',payload:[props.floortableNo,foodOrder[props.floortableNo]]});
    props.setrefresh(!props.refresh);
  }


  const totalPrice=foodList.reduce(calculateTotal,0);
  const totalOffer=foodList.reduce(calculateTotalOffer,0)

  function calculateTotal(item1,item2){
     return item1+(item2.price*item2.qty)  
  }

  function calculateTotalOffer(item1,item2){
    return item1+(item2.offerprice*item2.qty)
  }

  const [floor,setFloor]=useState([]);
  const [table,setTable]=useState([]);

  const handleSave=()=>{

  }

  const showFoodList=()=>{
    return foodList.map((item,i)=>{
      return(<>
         <Grid item xs={1}>{i+1}</Grid>
         <Grid item xs={3}>{item?.fooditemname}</Grid>
         <Grid item xs={2} style={{textAlign:'right'}}>&#8377;{item?.price}</Grid>
         <Grid item xs={2} style={{textAlign:'right'}}>&#8377;{item?.offerprice}</Grid>
         <Grid item xs={2} ><Plusminus onChange={(v)=>handleQtyChange(v,item)} qty={item?.qty}/></Grid>
         <Grid item xs={2} style={{textAlign:'right',fontWeight:'bold'}}>&#8377;{item?.offerprice*item?.qty}</Grid>
      </>)
    })
  }

  const showTotalBill=()=>{
    return(<>
        
        <Grid item xs={12}><Divider/></Grid>

        <Grid item xs={6} style={{fontWeight:'bold'}}>Amount:</Grid>
        <Grid item xs={6} style={{fontWeight:'bold',textAlign:'right'}}>&#8377;{totalPrice}</Grid>

        <Grid item xs={6} style={{fontWeight:'bold'}}>Discount:</Grid>
        <Grid item xs={6} style={{fontWeight:'bold',textAlign:'right'}}>&#8377;{totalPrice-totalOffer}</Grid>

        <Grid item xs={6} style={{fontWeight:'bold'}}>Net Amount:</Grid>
        <Grid item xs={6} style={{fontWeight:'bold',textAlign:'right'}}>&#8377;{totalOffer}</Grid> 

        <Grid item xs={6} style={{fontWeight:'bold'}}>CGST:</Grid>
        <Grid item xs={6} style={{fontWeight:'bold',textAlign:'right'}}>&#8377;{totalOffer*gst/100}</Grid>

        <Grid item xs={6} style={{fontWeight:'bold'}}>SGST:</Grid>
        <Grid item xs={6} style={{fontWeight:'bold',textAlign:'right'}}>&#8377;{totalOffer*gst/100}</Grid>

        <Grid item xs={6} style={{fontWeight:'bold'}}>Net Amount:</Grid>
        <Grid item xs={6} style={{fontWeight:'bold',textAlign:'right'}}>&#8377;{totalOffer+(totalOffer*admin.gsttype/100)}</Grid> 

        <Grid item xs={12}><Divider/></Grid> 

        <Grid item xs={12}>
          <Button onClick={handleSave} variant="contained" style={{display:'flex',marginLeft:'auto'}} color="primary" >Save & Print</Button> 
        </Grid>
    </>)
  }
  
  const heading=()=>{
    return(<div>
          <Grid container spacing={1} style={{fontFamily:'kanit'}}>

          <Grid item xs={6}><TextField label="Customer Name" variant="standard"/></Grid>
          <Grid item xs={6}><TextField label="Mobile" variant="standard"/></Grid>

          <Grid item xs={12}><Divider /></Grid>
          <Grid item xs={1} style={{fontWeight:'bold'}}>Sn</Grid>
          <Grid item xs={3} style={{fontWeight:'bold'}}>Name</Grid>
          <Grid item xs={2} style={{fontWeight:'bold',textAlign:'right'}}>Rate</Grid>
          <Grid item xs={2} style={{fontWeight:'bold',textAlign:'right'}}>Offer</Grid>
          <Grid item xs={2} style={{fontWeight:'bold',textAlign:'right',paddingRight:12}}>Qty</Grid>
          <Grid item xs={2} style={{fontWeight:'bold',textAlign:'right'}}>Amount</Grid>
          <Grid item xs={12}><Divider /></Grid>
            {showFoodList()}
            {showTotalBill()}
        </Grid> 
       
    </div>)
  }

  return(<div>
        {heading()}
  </div>)
}  