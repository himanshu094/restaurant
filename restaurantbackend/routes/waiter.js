var express = require('express');
var router = express.Router();
const pool=require('./pool');
const upload = require('./multer');

/* GET home page. */

router.post('/waiter_submit', upload.any(),function(req, res, next) {
  pool.query("insert into waiters (restaurantid, waitername, gender, dob, mobileno, emailid, address, picture) values(?,?,?,?,?,?,?,?)",[ req.body.restaurantid, req.body.waitername, req.body.gender, req.body.dob, req.body.mobileno, req.body.emailid, req.body.address, req.files[0].filename],function(error,result){
  if(error)
  {
      console.log("Errorrr",error);
      res.status(200).json({status:false,message:'Database Error'})
  
  }
  else
  {
      res.status(200).json({status:true,message:'waiter Added Successfully'})
  }
  
  })
  });

module.exports = router;