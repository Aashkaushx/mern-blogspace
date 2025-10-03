const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
//signup-controller
exports.signupUser = async (req,res) => {
    try{
        const {username,email,password} =req.body;

        if(!username || !email || !password)
        {
            return res
            .status(400)
            .json({success:false, error: " All fields are required"});    
        }

        //does the username and email exists
        const existingUser = await User.findOne({ $or:[{username },{ email }] });
        if(existingUser) {
            return res
                .status(400)
                .json({success: false, error: " Username or email aready exists"});
        }
        const hashedPass = await bcrypt.hash(password, 10);

        const newUser =new User({ username, email, password: hashedPass});
        await newUser.save();
        return res
            .status(200)
            .json({success: true, message: "Account created"});
    }   catch (error) {
        console.log(error);
        return res
            .status(400)
            .json({success:false, error: "Internal server error "});
    }
    
};

//login-controller
exports.loginUser = async (req,res) => {
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
        console.log(error);
        return res
            .status(400)
            .json({success:false, error: "Internal server error "});
    }
    
};

//check-COOKIE
exports.checkcookie =(req, res)=>{
    try{
        const token = req.cookies.blogspace;
        if(token) {
            return res.status(200).json({ message: true});
        }
        return res.status(200).json({ message: false});
    } catch(error) {
        console.log(error);
        return res.status(500).json({ error: "Internal server error"});
    }

};

//Logout
exports.logout =(req, res) => {
    res.clearCookie("blogspace", {
        httpOnly: true,
        secure: true,
        sameSite: "None",
        path: "/",
    });
    res.json({ message: " Logged out successfully"});
};

//getprofiledata
exports.getProfileData = (req, res) => {
    try{
        const { user } = req;
        const { password, ...safeUserData} = user._doc;
        //console.log(safeUserData);
        res.status(200).json({ data:safeUserData });
    } catch(error) {
        return res.status(500).json({ error: "Internal server error"});
    }
};

//change user password
exports.changeUserPassword = async (req, res) => {
    try{
        const { user } = req;
        const {password, newPass, confirmNewPass} = req.body;
        if(newPass !== confirmNewPass) {
            return res
            .status(400)
            .json({
                error : "New password and confirm new password are not same",
            });
        }
        const Actualpassword = user.password;
        const checkPass = await bcrypt.compare(password , Actualpassword);
        if(!checkPass) {
            return res
                .status(400)
                .json({success: false, 
                error: "Password is not valid"});
        }

        user.password = await bcrypt.hash(comfirmNewPass, 10);
        await user.save();
        res.status(200).json({ message:"Password updated successfully" });
    } catch(error) {
        return res.status(500).json({ error: "Internal server error"});
    }
};

//change avatar
exports.changeAvatar = async (req, res) => {
    try{
        const { user } = req;
        if(!req.file) {
            return res.status(400).json({ message : " No image file uploaded."});
        }
        
        //console.log(req.file.path);
        // const user = req.user;
        user.avatar = req.file.path;
        await user.save();

        res.status(200).json({ message:"Avatar updated ", avatar: user.avatar });
    } catch(error) {
        console.error(error);// extra
        return res.status(500).json({ error: "Internal server error"});
    }
};