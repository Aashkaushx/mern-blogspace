const router = require("express").Router();
const adminController = require("../controller/adminController");
const authMiddleware = require("../middlewares/authMiddleware");
const upload = require("../middlewares/ImageUpload");

router.post("/adminLogin" , adminController.adminLogin)
module.exports = router;