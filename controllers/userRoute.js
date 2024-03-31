const express = require("express")

const router = express.Router()
const bcrypt = require("bcryptjs")
const userModel = require("../models/userModel")


hashPasswordgenerator=async(pass)=>{
    const salt = await bcrypt.genSalt(10)
    return bcrypt.hash(pass,salt)
}


router.post("/register", async (req, res) => {
    try {
        let { password, confirmPassword, ...userData } = req.body;

        if (password !== confirmPassword) {
            return res.json({
                status: "Passwords do not match"
            });
        }
        else{

            const hashedPassword = await hashPasswordgenerator(password);
        const hashedConfirmPassword = await hashPasswordgenerator(confirmPassword);

        userData.password = hashedPassword;
        userData.confirmPassword = hashedConfirmPassword;

        let user = new userModel(userData);
        await user.save();

        res.json({
            status: "success"
        });
    } 
        }
        catch (error) {
            res.status(500).json({
                status: "error",
                message: error.message
            });
        }
        
});

router.post("/login",async(req,res)=>{
    let input = req.body
    let email = req.body.email
   let data = await userModel.findOne({"email":email})

   if(!data)
   {
       return res.json(
           {
               status:"invalid user"
           }
       )
   }

   console.log(data)
   let dbPassword = data.password
   let inputPassword = req.body.password
   console.log(dbPassword)
   console.log(inputPassword)

   const match = await bcrypt.compare(inputPassword,dbPassword)

   if (!match) {
       return res.json({
           status:"incorrect password"
       })
       
   }

   res.json({
       status:"success","userData":data
   })
   

})


router.post("/userprofile", async (req, res) => {

            let input = req.body
            let userId = req.body.userId // Assuming you send the user's object ID as userId in the request body
            

            try {
                // Find the user profile by ID
               let data = await userModel.findById(userId)
                
                if (!data) {
                    return res.json({
                        status: "Invalid user"
                    })
                } else {
                    // Prepare response data
                    const responseData = {
                        name: data.name,
                        address: data.address,
                        weight: data.weight,
                        height: data.height,
                        idproof: data.idProof,
                        emailid: data.email,
                        contactno: data.mobileno,
                        dob: data.dob,
                        idNumber: data.idNumber,
                        gender: data.gender,
                        bloodGroup: data.bloodGroup,
                        userName: data.userName,

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