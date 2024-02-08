const express = require("express");
const app = express();
const path = require("path");

app.get("/", (req,res)=>{
    res.sendFile(path.join(__dirname + "/routes/index.html") )
});

app.use(express.static(__dirname + '/node_modules/bootstrap/dist'));
app.use(express.static('public'));

app.listen(2077,()=>{
    console.log('Puerto 2077 hosteando app');
});