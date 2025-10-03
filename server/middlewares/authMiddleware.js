const jwt = require("jsonwebtoken");
const User = require("../models/user");

const authMiddleware = {
    verifyToken: async(req, res, next) => {
        const token = req.cookies.blogspace;
        if(!token) {
            return res
            .status(401)
            .json({ message: "Access Denied. No token provided"});
        }

        try{
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            
        
            //fetch userDetails
            const user = await User.findById(decoded.id);
            if(!user){
                return res.status(404).json({ message:" User not found"});

            }
            req.user = user;
            next();
        } catch (error) {
            res.status(400).json({ message: "Invalid Token"});
        }
    },

    authorizeRole:(role)=>{
        return(req,res,next) => {
            if(req.user.role !==role){
                return res.status(403).json({ message: " Access denied"});
            }
            next();
        };
    }
};
module.exports = authMiddleware;