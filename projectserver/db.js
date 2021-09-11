const mongoose=require("mongoose")

const schema=mongoose.Schema({
    username:{
        type:String
    },
    password:{
        type:String
    },
    name:{
        type:String
    },
    last:{
        type:String
    }
})

module.exports=mongoose.model("users",schema)