var express = require('express');
var router = express.Router();
const pool=require("./pool");
const upload=require('./multer');

router.post('/bill_submit',upload.any(),function(req,res,next){
  pool.query("",function(error,result){
    if(error)
    {
      console.log("Errorrr",error);
      res.status(200).json({status:false,message:'Database Error'})
    }
    else
    {
       res.status(200).json({statis:true,message:'Category Added Successfully'})
    }
  })
})

module.exports=router;