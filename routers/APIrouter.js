const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/",(req,res)=>{
    // console.log("masuk  pa eko")
    axios.get('http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=3736aac5d5b0505bf92dc61ce8b220a4')
    .then(function(response){
        // handle success
        res.status(200).json(response.data)
        // console.log(response);
    })
    .catch(function(error){
        // handle error
        res.status(404).json(error)
        // console.log(error);
    })
})

module.exports=router