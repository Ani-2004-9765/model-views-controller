const mongoose = require('mongoose');

const empSchema=mongoose.Schema({
    name:{
    type:String,
    required:true
    },

    sal:{
    type:Number,
    min:15000,
    max:25000,
    required:true
    },

    dept:{
        type:String,
        enum:["it","hr","acct"],
        required:true
    }

},{timestamps:true}
)
const empModel= mongoose.model("emp",empSchema);
module.exports =empModel
