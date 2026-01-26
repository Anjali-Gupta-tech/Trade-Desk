const mongoose=require('mongoose');
const holdingSchema=new mongoose.Schema({
name:{
    type:String,
    required:true
},
  qty: {
        type:Number
    },
    avg:{
        type:Number
    },
    
    price: {
        type:Number
    },
    net:{
        type:Number,
      
    },
    day: {
        type:Number,

    },
})
const Holdings=mongoose.model('Holdings',holdingSchema)
module.exports=Holdings