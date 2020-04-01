//ketika kita login kita mendapatkan token,lalu token tersebut dimassukan ke req.headers,lalu dgn jwt verify 
// kita kan mendaptkan user data \

const jwt = require("jsonwebtoken");

const Authentication = (req,res,next)=>{
  try{
    const {token}=req.headers
      if(!token){
        res.status(404).json({message:"token not found"})
      }
      else{
        const decoded  = jwt.verify(token,"secret")//harus sama dengn jwt sign di controller user
        //jwt.verify untuk penyamaan token yg diinput di postman headers sama dengan database
        req.user=decoded
        next()//fungsi selanjutnya
      }
  }
  catch(error){
      res.status(400).json({message:"forbiden access"})
  }
}
module.exports=Authentication