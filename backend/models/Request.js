const mongoose = require("mongoose");

const RequestSchema = new mongoose.Schema({

    researcher:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },

    dataset:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Dataset"
    },

    blockchainId:{
        type:Number,
        default:null
    },

    txHash:{
        type:String,
        default:""
    },

    status:{
        type:String,
        enum:["Pending","Approved","Rejected"],
        default:"Pending"
    },

    createTxHash: {
    type: String
    },

    approveTxHash: {
        type: String
    }

},{timestamps:true});

module.exports = mongoose.model("Request",RequestSchema);