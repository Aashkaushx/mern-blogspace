const router = require("express").Router();
const userController = require("../controller/userController");
const authMiddleware = require("../middlewares/authMiddleware");
const upload = require("../middlewares/ImageUpload");
// sign-up api

router.post("/sign-up", userController.signupUser);
// log-in
router.post("/log-in", userController.loginUser);

//chech cookie
router.get("/check-cookie", userController.checkcookie);

//Logout
router.post("/logout", userController.logout );

router.get(
    "/getProfileData", 
    authMiddleware.verifyToken,
    authMiddleware.authorizeRole("user"),
    userController.getProfileData 
);


router.put(//put not patch
    "/changeUserPassword", 
    authMiddleware.verifyToken,
    authMiddleware.authorizeRole("user"),
    userController.changeUserPassword 
);

//change avatar
router.put(//put not patch
    "/changeAvatar", 
    authMiddleware.verifyToken,
    authMiddleware.authorizeRole("user"),
    upload.single("image"),
    userController.changeAvatar 
);
module.exports = router;
 