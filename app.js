const express = require("express");
const app = express();
const path = require("path");

app.get("/", (req,res)=>{
    res.sendFile(path.join(__dirname + "/index.html") )
});

app.listen(2077,()=>{
    console.log('Puerto 2077 hosteando app');
});