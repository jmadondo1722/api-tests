const express = require('express');
const app = express();// app is backend application

app.get("/",(req,res)=>{
    res.send("Welcome to my Josiah's backend application");
});//forward slash means the context root of the application, or the url without

app.get("Josiah",(req,res)=>{
    res.send("Hello Josiah!");
});

app.listen(3000,()=>{
    console.log("Listening");
});