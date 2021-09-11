const express=require('express')
const router =express.Router()
const user=require('./db')


router.get("/:lock/:username",async(req,res)=>{
    if(req.params.lock=="1107"){
    var value=req.params.username;
    var ans=await user.find({username:value});
    if(Object.keys(ans).length>0){
        res.send([{"registered":"true"}])
    }
    else{
        res.send([{"registered":"false"}])
    }
    }
    else{
        res.send("<h3>can't get</h3>")
    }
})

router.post("/",(req,res)=>{
    console.log(req.body.name)
})

router.get("/:lock/:username/:pass",async(req,res)=>{
    if(req.params.lock=="1107"){
    var value=req.params.username;
    var value2=req.params.pass;
    var ans=await user.find({username:value,password:value2});
    res.send(ans)
    } else{
        res.send("<h3>can't get</h3>")
    }
})

router.get("/",(req,res)=>{
    res.send("<h1>WELCOME</h1>")
})
module.exports=router;