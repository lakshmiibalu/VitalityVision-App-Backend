const mongoose = require("mongoose")

const diabeticDocSchema = mongoose.Schema(
    {
        name : {
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

module.exports = mongoose.model("diabeticsDoc",diabeticDocSchema)