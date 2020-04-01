require("dotenv").config()
const express = require("express");
const app = express();
const port = process.env.PORT||3000;
const router = require("./routers/index");


app.use(express.json());//kirim data dalam bentuk bentuk JSON
app.use(express.urlencoded({ extended: false }));

app.use('/',router)

app.listen(port,()=>{
    console.log(`Listening to this port ${port}`)
})