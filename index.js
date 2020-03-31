const express = require("express");
const app = express();
const port = 3000;
const todoRouter = require("./routers/todoRouter")

app.use(express.urlencoded({extended:false}));//express method that to recognize the incoming request object as string or arrays

//middleware
app.use("/todos",todoRouter);
app.use(express.json())//express method that to recognize the incoming request object as JSON object

app.listen(port,()=>{
    console.log(`Listening to this port ${port}`)
})