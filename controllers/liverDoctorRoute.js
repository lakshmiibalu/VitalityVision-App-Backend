const express = require("express")

const liverDoctorModel = require("../models/liverDoctorModel")

const router = express.Router()


router.post("/addLiverDoc",async(req,res)=>{

    let input = req.body
    let diabeticDoc = new liverDoctorModel(input)
    let result = await diabeticDoc.save()
    res.json(
        {
            status : "success"
        }
    )

})

router.get("/viewliverDoc",async(req,res)=>{

    let data = await liverDoctorModel.find()
    res.json(data)
})


router.post("/deleteliverDoc",async(req,res)=>{
    console.log(req.body)
    let {id} = req.body
    console.log(id)
    let data = await liverDoctorModel.deleteOne({_id:id})
    res.json({
        status:"success"
    })
})

module.exports = router