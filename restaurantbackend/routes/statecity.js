var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/fetch_all_states', function(req, res, next) {
  try{
  pool.query("select * from states",function(error,result){
        if(error)
        {
          res.status(200).json({message:'Database Error...',data:[],status:false})
        }
        else
        {
          res.status(200).json({status:true,message:'success...',data:result})
        }
       })
     }
  catch(e)
  {
    res.status(200).json({message:'Server Error...',data:[],status:false})
  }
});

module.exports = router;