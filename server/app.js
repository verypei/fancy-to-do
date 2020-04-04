require("dotenv").config()//environment variable
const express = require("express");
const app = express();
const cors = require("cors")//cross origin share,,
const port = process.env.PORT||3000;
const router = require("./routers");


app.use(cors());//
app.use(express.json());//kirim data dalam bentuk bentuk JSON
app.use(express.urlencoded({ extended: true }));//bisa menerima body dlm bentuk apapun,,false hanya array /string

app.use('/',router);

app.listen(port,()=>{
    console.log(`Listening to this port ${port}`);
})