const mongoose=require('mongoose')

const cars=mongoose.Schema({
    name:{
        type:String
    },
    link:{
        type:String
    },
    mileage:{
      type:String
    },
     cost:{
        type:String
    },
     type:{
        type:String
    },
    rating:{
        type:String
    },
    company:{
        type:String
    }
})

module.exports=mongoose.model("cars",cars)