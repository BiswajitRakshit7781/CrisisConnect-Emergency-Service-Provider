import mongoose from "mongoose";
let new_user=mongoose.Schema({
    fullname:String,
    sex:String,
    height:Number,
    weight:Number,
    bloodgroup:String,
    dob:Date,
    email:String,
    phoneno:Number,
    adharno:Number,
    homeaddress:String,
    password:String
})
const registered_users=mongoose.model("RegisteredUsers",new_user)
export default registered_users