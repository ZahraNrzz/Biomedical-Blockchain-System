const mongoose = require("mongoose");

const DatasetSchema = new mongoose.Schema({

    title:{
        type:String,
        required:true
    },

    description:{
        type:String,
        required:true
    },

    hospital:{
        type:String,
        required:true
    },

    downloadLink:{
        type:String,
        required:true
    }

},{timestamps:true});

module.exports = mongoose.model("Dataset",DatasetSchema);