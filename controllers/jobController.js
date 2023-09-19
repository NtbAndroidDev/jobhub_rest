const Job = require("../models/Job");


module.exports = {
    createJob: async (req, res) => {
        const newJob = new Job(req.body);


        try {
            const savedJob = await newJob.save();
            const { __v, createdAt, updatedAt, ...newJobInfo } = savedJob._doc;

            res.status(200).json(newJobInfo);
        } catch (error) {
            res.status(500).json(error);
        }
    },

    updateJob: async (req, res) => {
        try {
            const updateJob = await Job.findByIdAndUpdate(
                req.params.id,
                { $set: req.body },
                { new: true }
            );

            const { __v, createdAt, updatedAt, ...updateJobInfo } = updateJob._doc;
            res.status(200).json(updateJobInfo);
        } catch (error) {
            res.status(500).json(error);
        }
    },

    deteleJob: async (req, res) => {
        try {
            const updateJob = await Job.findByIdAndDelete(req.params.id,);

            res.status(200).json("Job Successfully Deleted");
        } catch (error) {
            res.status(500).json(error);
        }
    },


    getJob: async (req, res) => {
        try {
            const jobInfo = await Job.findById(req.params.id,);

            res.status(200).json(jobInfo);
        } catch (error) {
            res.status(500).json(error);
        }
    },

    getAllJob: async (req, res) => {
        try {
            const allJob = await Job.find();

            res.status(200).json(allJob);
        } catch (error) {
            res.status(500).json(error);
        }
    },


    searchJobs: async (req, res) => {
        try {
            const results = await Job.aggregate(
                [
                    {
                        $search: {
                            index: "jobsearch",
                            text: {
                                query: req.params.key,
                                path: {
                                    wildcard: "*"
                                }
                            }
                        }
                    }
                ]
            );

            res.status(200).json(results);
        } catch (error) {
            res.status(500).json(error);
        }
    },



}