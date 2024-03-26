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


module.exports = router