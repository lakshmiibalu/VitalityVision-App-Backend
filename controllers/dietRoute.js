const express = require("express");
const dietModel = require("../models/dietModel");


const router = express.Router()


router.post('/diets', async (req, res) => {
    let input = req.body
    let record = new dietModel(input)
    let result = await record.save()
    res.json(
        {
            status : "success"
        }
    )
  });

  router.post("/search",async(req,res)=>{
    let input=req.body
    let Diet_Type=req.body.Diet_Type
    let data=await dietModel.find({"Diet_Type":Diet_Type})
   
    if (!data ||data.length === 0) {
        return res.json({
            status:"Invalid diet type"
        })
    }
    else{
        const responseData = data.map(diets => ({
            diet: diets.Diet_Type,
            Recommended_Foods : diets.Recommended_Foods
        }))

        console.log(responseData);

        return res.json(responseData);
    } 
    
})


module.exports = router