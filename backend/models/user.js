const mongoose=rew=require('mongoose')
const userSchema=mongoose.Schema({
    username:String,
   email:{
    type:String,
    required:true,unique:true
   },
   password:{
    type:String,
    required:true
   }
})
const Users=mongoose.model('Users',userSchema)
module.exports=Users