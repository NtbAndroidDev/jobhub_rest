const jobController = require("../controllers/jobController");

const router = require("express").Router();

const { verifyandAuthorization, verifyToken, verifyandAdmin } = require("../middleware/verifyToken")

// POST JOB 
router.post("/", verifyandAdmin, jobController.createJob);

// UPDATE JOB 
router.put("/:id", verifyandAdmin, jobController.updateJob);

// DELETE JOB 
router.delete("/:id", verifyandAdmin, jobController.deteleJob);


// GET JOB 
router.get("/:id", jobController.getJob);


// GET ALL JOB 
router.get("/", jobController.getAllJob);


// SEARCH JOB 
router.get("/search/:key", jobController.searchJobs);

module.exports = router