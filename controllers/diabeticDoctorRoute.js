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

router.get("/viewdiabeticDoc",async(req,res)=>{

    let data = await diabeticDoctorModel.find()
    res.json(data)
})


router.post("/deletediabieticDoc",async(req,res)=>{
    console.log(req.body)
    let {id} = req.body
    console.log(id)
    let data = await diabeticDoctorModel.deleteOne({_id:id})
    res.json({
        status:"success"
    })
})

module.exports = router
