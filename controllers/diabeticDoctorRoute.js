const express = require("express")
const diabeticDoctorModel = require("../models/diabeticDoctorModel")

const router = express.Router()


router.post("/addDiabeticDoc",async(req,res)=>{

    let input = req.body
    let diabeticDoc = new diabeticDoctorModel(input)
    let result = await diabeticDoc.save()
    res.json(
        {
            status : "success"
        }
    )

})


module.exports = router
