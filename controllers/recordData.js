const express = require("express")
const recordDtaModel = require("../models/recordDtaModel")



const router = express.Router()


router.post("/record",async(req,res)=>{

    let input = req.body
    let record = new recordDtaModel(input)
    let result = await record.save()
    res.json(
        {
            status : "success"
        }
    )

})

router.post("/viewRecord", async (req, res) => {

    let input = req.body
    let recordId = req.body.recordId // Assuming you send the user's object ID as userId in the request body
    

    try {
        // Find the  by ID
       let data = await recordDtaModel.findById(recordId)
        
        if (!data) {
            return res.json({
                status: "Invalid user"
            })
        } else {
            // Prepare response data
            const responseData = {
                Date: data.Date,
                Blood_Sugar: data.Blood_Sugar,
                Carbohydrates: data.Carbohydrates,
                Medicine_Type: data.Medicine_Type,
                Medicine_Dose: data.Medicine_Dose,
                Exercise_Type: data.Exercise_Type,
                Exercise_Duration: data.Exercise_Duration,
                Unusual_Event: data.Unusual_Event

            }

            console.log(responseData)

            return res.json(responseData)
        }
    } catch (error) {
        console.error('Error fetching user profile:', error)
        return res.status(500).json({
            status: "Internal Server Error"
        })
    }
})


module.exports = router