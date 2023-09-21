const mongoose = require("mongoose");


const BookMarkSchema = new mongoose.Schema(

    {
        job: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Job"
        },
        userId: { type: String, require: true },
        // title: { type: String, require: true },
        // imageUrl: { type: String, require: true },
        // location: { type: String, require: true },
        // company: { type: String, require: true },

    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("BookMark", BookMarkSchema);