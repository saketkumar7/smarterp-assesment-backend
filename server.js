const express =require('express');
const app=express();
const exphbs=require("express-handlebars");
const bodyParser =require('body-parser');

app.use(express.static(__dirname+"/public"));
app.use(express.static(__dirname+"/node_modules"));
app.engine("handlebars",exphbs());
app.set("view engine","handlebars");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.get("/",(req,res)=>{
    res.render("./home");
});

let port=5000;
app.listen(port,(err)=>{
    if (err) throw err;
    console.log("express server is running on port number "+port);
});