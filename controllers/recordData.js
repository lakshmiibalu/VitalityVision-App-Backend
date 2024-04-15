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
    let userId = req.body.userId 
        try {
        const selectedPackages = await recordDtaModel.find({ userId }).populate("userId","name")
        res.json(selectedPackages);
    } catch (error) {
        console.error("Error fetching selected packages:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
})


       

module.exports = router