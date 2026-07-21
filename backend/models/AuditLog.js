const mongoose = require("mongoose");

const AuditSchema = new mongoose.Schema({

    requestId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Request"
    },

    action:{
        type:String,
        required:true
    },

    txHash:{
        type:String,
        default:""
    },

    performedBy:{
        type:String
    }

},{timestamps:true});

module.exports = mongoose.model("AuditLog",AuditSchema);