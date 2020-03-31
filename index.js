const express = require("express");
const app = express();
const port = 3000;
const todoRouter = require("./routers/todoRouter");
const userRouter = require("./routers/userRouter");
const weatherRouter = require("./routers/APIrouter");

app.use(express.urlencoded({extended:false}));//express method that to recognize the incoming request object as string or arrays

//middleware
app.use("/todos",todoRouter);
app.use("/users",userRouter);
app.use("/weather",weatherRouter);
app.use(express.json());//express method that to recognize the incoming request object as JSON object

app.listen(port,()=>{
    console.log(`Listening to this port ${port}`)
})