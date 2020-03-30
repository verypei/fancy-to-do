const express = require("express");
const app = express();
const port = 3000;
const todoRouter = require("./routers/todoRouter")

app.use(express.urlencoded({extended:false}));

app.use("/todos",todoRouter);
app.use(express.json())

app.listen(port,()=>{
    console.log(`Listening to this port ${port}`)
})