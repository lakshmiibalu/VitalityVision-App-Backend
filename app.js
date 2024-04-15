const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")


const app = express()

const userRoute = require("./controllers/userRoute")
const diabeticDocterRoute = require("./controllers/diabeticDoctorRoute")
const liverDocterRoute = require("./controllers/liverDoctorRoute")
const record = require("./controllers/recordData")
const diet = require("./controllers/dietRoute")
const history = require("./controllers/historyRoute")

//middleware
app.use(express.json())
app.use(cors())



mongoose.connect("mongodb+srv://Lakshmi:ZEPH26YR@cluster0.gs9xdes.mongodb.net/VitalityDb?retryWrites=true&w=majority",
{useNewUrlParser:true})

app.use("/api/user",userRoute)
app.use("/api/diabetic",diabeticDocterRoute)
app.use("/api/liver",liverDocterRoute)
app.use("/api/healthrecord",record)
app.use("/api/food",diet)
app.use("/api/history",history)

app.listen(3001,()=>{
    console.log("Server Running")
})