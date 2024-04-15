const mongoose = require("mongoose")

const recordSchema = mongoose.Schema(
    {
        Date : {
            type:Date,
            default:Date.now

        },

        Blood_Sugar : {
            type:String,
            required : true
        },
            Carbohydrates : {
                type:String,
                required : true
            },
            Medicine_Type : {
                type:String,
                required : true
            },
            Medicine_Dose : {
                type:String,
                required : true
            },
            Exercise_Type : {
                type:String,
                required : true
            },
            Exercise_Duration : {
                type:String,
                required : true
            },
            Unusual_Event : {
                type:String,
                required : true
            }
        
    }
)

module.exports = mongoose.model("record",recordSchema)