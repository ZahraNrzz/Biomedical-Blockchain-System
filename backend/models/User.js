const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true
    },

    email:{
        type:String,
        required:true,
        unique:true
    },

    password:{
        type:String,
        required:true
    },

    walletAddress:{
        type:String,
        default:""
    },

    role:{
        type:String,
        enum:["researcher","Admin"],
        default:"researcher"
    }

},{timestamps:true});

module.exports = mongoose.model("User",UserSchema);