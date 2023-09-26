const Bookmark = require("../models//Bookmark");
const Job = require("../models/Job");

module.exports = {
    createBookmark: async (req, res) => {


        const jobID = req.body.job;





        try {
            const job = await Job.findById(jobID);

            if(!job){
                res.status(404).json({error: "Job not found"});
            }
            const newBook = new Bookmark({job: job, userId: req.user.id})

            const savedBookmark = await newBook.save();

            const {__v, updatedAt, ...newBookmarkInfo} = savedBookmark._doc;

            res.status(200).json(newBookmarkInfo);
        } catch (error) {
            res.status(500).json(error);
        }
    },

    deleteBookmark: async (req, res) => {
        try {
            await Bookmark.findOneAndDelete(req.params.id);
            res.status(200).json("BookMark Successfully Deleted");
        } catch (error) {
            res.status(500).json(error);
        }
    },

    getBookmarks: async (req, res) => {
        try {
            const bookmarks = await Bookmark.find({userId: req.user.id});
            res.status(200).json(bookmarks);
        } catch (error) {
            res.status(500).json(error);
        }
    },


}