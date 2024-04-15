const mongoose = require("mongoose")

const doctorSchema = mongoose.Schema(
    {
        name : {
            type:String,
            required : true
        },
        specialisation : {
            type:String,
            required : true
        },
        hospital : {
            type:String,
            required : true
        },
        number:{
            type:Number,
            required : true
        }
    }
)

module.exports = mongoose.model("doctors",doctorSchema)