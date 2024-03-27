const mongoose = require("mongoose")

const userSchema = mongoose.Schema(
    {
        name : {
            type:String,
            required : true
        },
        userName : {
            type:String,
            required : true
        },
        email :{
            type:String,
            required : true
        },
        mobileno :{
            type:String,
            required : true
        },
        address : {
            type:String,
            required : true
        }, 
        idProof :{
            type:String,
            required : true
        },
        idNumber :{
            type:String,
            required : true
        },
        gender :{
            type:String,
            required : true
        },
        bloodGroup : {
            type:String,
            required : true
        },
        height :{
            type:String,
            required : true
        },
        weight :{
            type:String,
            required : true
        },
        password :{
            type:String,
            required : true
        },
        confirmPassword :{
            type:String,
            required : true
        }
    }
)

module.exports = mongoose.model("users",userSchema)