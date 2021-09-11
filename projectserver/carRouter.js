const { request } = require("http");

const express=require("express")

const router=express.Router()

const cars=require("./cars")

router.get("/",async(req,res)=>{
    result=await  cars.find()
    res.send(result)
})

router.get("/name/:car",async(req,res)=>{
    result=await cars.findOne({"name":req.params.car})
    res.send(result)
})

router.get("/company/:car",async(req,res)=>{
    result=await cars.findOne({"company":req.params.car})
    res.send(result)
})

module.exports=router