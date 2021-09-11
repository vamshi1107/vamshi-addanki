const express=require('express')
const mongoose=require('mongoose')
const parser=require('body-parser')
const cors=require('cors')
const router=require("./Routers")
const fs=require('fs')
const carRouter=require("./carRouter")

const html=fs.readFileSync("./test.html")
app=express()


app.use(parser.json())
app.use(cors({origin:"http://localhost:4200"}))
app.use('/user',router)
app.use("/cars",carRouter)

mongoose.connect("mongodb://127.0.0.1:27017/new",{ useNewUrlParser: true },{ useUnifiedTopology: true })

mongoose.connection.on("open",()=>{
    console.log("connected")
})

app.get("/ht",(req,res)=>{
    res.sendfile("./test.html")
})

mongoose.connection.on("err",()=>{
    console.log("error")
})
app.listen(5008,()=>{
    console.log("LISTENING")
})