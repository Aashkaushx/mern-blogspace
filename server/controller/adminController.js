const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.adminLogin = async ( req,res) => {
    try{
        const {email,password} =req.body;
    
        if(!email || !password)
        {
            return res
                .status(400)
                .json({success:false, error: " All fields are required"});    
        }

        //does the username and email exists
        const existingUser = await User.findOne({ email});
        if(!existingUser) {
            return res
                .status(400)
                .json({success: false, error: "Invalid credentials"});
        }
        const checkPass = await bcrypt.compare(password, existingUser.password);
        if(!checkPass) {
            return res
                .status(400)
                .json({success: false, error: "Invalid credentials"});
        }

        const token = jwt.sign(
            {
                id: existingUser._id, 
                email: existingUser.email
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "30d", //Token expires in 30 days
            }
        );
        res.cookie("blogspace" , token , {
            httpOnly: true,
            maxAge: 30* 24 * 60 * 60 * 1000, //30 days
            secure: true,
            sameSite : "None", 
        });
 
        return res
            .status(200)
            .json({success: true, message: "Login Successfully"});
    }   catch (error) {
        // console.log(error);
        return res
            .status(400)
            .json({success:false, error: "Internal server error "});
    }
};