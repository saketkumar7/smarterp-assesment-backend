const express=require("express");
const router=express.Router();
const Url=require("../Model/Url");

router.get("/shorten",(req,res)=>{
    res.json("url");
});
module.exports=router;