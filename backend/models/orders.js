const mongoose=rew=require('mongoose')
const orderSchema=mongoose.Schema({
   name:String,
   qty:Number,
   price:Number,
   mood:String
})
const Orders=mongoose.model('Orders',orderSchema)
module.exports=Orders