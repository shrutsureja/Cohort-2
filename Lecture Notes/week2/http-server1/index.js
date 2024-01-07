const express = require("express");

const app = express();

const port = 3002;

app.get('/', function(req, res){
    res.send('Hello world!');
});

app.get("/shrutsureja", (req,res)=>{
    // res.send("ShrutSureja");
})

app.listen(port, ()=>{
    console.log("the app is listening on the port" + port);
    console.log(`http://localhost:${port}/`);
});