var express = require('express');
var router = express.Router();
const pool=require('./pool');
const upload = require('./multer');

/* GET home page. */

router.post('/table_submit', upload.any(),function(req, res, next) {
  pool.query("insert into tablebooking (restaurantid, tableno, noofchairs, floor) values(?,?,?,?)",[ req.body.restaurantid, req.body.tableno, req.body.noofchairs, req.body.floor],function(error,result){
  if(error)
  {
      console.log("Errorrr",error);
      res.status(200).json({status:false,message:'Database Error'})
  
  }
  else
  {
      res.status(200).json({status:true,message:'table Added Successfully'})
  }
  
  })
  });


module.exports = router;
