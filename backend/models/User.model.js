// import mongoose from "mongoose";
const mongoose = require('mongoose');


const userSchema= new mongoose.Schema({
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    user_type:String,
});


module.exports=mongoose.model("Users",userSchema);