const userController = require("../controllers/userController");

const router = require("express").Router();

const { verifyandAuthorization, verifyToken, verifyandAdmin } = require("../middleware/verifyToken")


// UPDATE USER 
router.put("/:id", verifyandAuthorization, userController.updateUser);

// DELETE USER 
router.delete("/:id", verifyandAuthorization, userController.deleteUser);


// GET USER 
router.get("/:id", verifyandAuthorization, userController.getUser);


// GET ALL USER 
router.get("/", verifyandAdmin, userController.getAllUser);


module.exports = router