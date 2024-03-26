const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")


const app = express()

const userRoute = require("./controllers/userRoute")

//middleware
app.use(express.json())
app.use(cors())



mongoose.connect("mongodb+srv://Lakshmi:ZEPH26YR@cluster0.gs9xdes.mongodb.net/VitalityDb?retryWrites=true&w=majority",
{useNewUrlParser:true})

app.use("/api/user",userRoute)

app.listen(3001,()=>{
    console.log("Server Running")
})