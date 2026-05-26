
const express = require('express');
const app=express()
const  {connectDB}= require('./db');
const router = require('./router/empRoute');
app.use(express.json())


connectDB();

app.use("/",router);

app.listen(3000,()=>{
    console.log("connected to the server");
    
})