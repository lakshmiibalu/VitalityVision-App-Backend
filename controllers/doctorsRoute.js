const express = require("express")
const doctorsModel = require("../models/doctorsModel")

const router = express.Router()

router.post("/addDoctor",async(req,res)=>{

    let input = req.body
    let doc = new doctorsModel(input)
    let result = await doc.save()
    res.json(
        {
            status : "success"
        }
    )

})

router.get("/viewDoc",async(req,res)=>{

    let data = await doctorsModel.find()
    res.json(data)
})


router.post("/search",async(req,res)=>{
    let input=req.body
    let specialisation=req.body.specialisation
    let data = await doctorsModel.find({"specialisation":specialisation})
   
    if (!data ||data.length === 0) {
        return res.json({
            status:"Invalid specialisation"
        })
    }
    else{
        const responseData = data.map(doctor => ({
            name : doctor.name,
            specialisation : doctor.specialisation,
            hospital : doctor.hospital,
            number : doctor.number
        }))

        console.log(responseData);

        return res.json(responseData);
    } 
    
})


module.exports = router