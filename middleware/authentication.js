//ketika kita login kita mendapatkan token,lalu token tersebut dimassukan ke req.headers,lalu dgn jwt verify 
// kita kan mendaptkan user data \

const jwt = require("jsonwebtoken");

function Authentication(req,res,next){//selalu 3 parameter,,yg next adalah call back
    console.log(req.headers,"====================")
    let token = req.headers.token//req.headers adalah input dari postman Headers
    try {
        var decoded = jwt.verify(token, 'secret');//keyword secret harus sama dengan jwt d controller
        console.log(decoded,"[][]][][][]][]][][")
        req.userData=decoded//req.userData = id,email,username
        next()  
      } catch(err) {
        // err
      }
}
module.exports=Authentication