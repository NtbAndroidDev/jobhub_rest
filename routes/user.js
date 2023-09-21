const userController = require("../controllers/userController");

const router = require("express").Router();

const { verifyandAuthorization, verifyToken, verifyandAdmin } = require("../middleware/verifyToken")


// UPDATE USER 
router.put("/", verifyandAuthorization, userController.updateUser);

// DELETE USER 
router.delete("/", verifyandAuthorization, userController.deleteUser);


// GET USER 
router.get("/", verifyandAuthorization, userController.getUser);


// GET ALL USER 
router.get("/", verifyandAdmin, userController.getAllUser);


module.exports = router