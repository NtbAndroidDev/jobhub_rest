const mongoose = require("mongoose");


const JobSchema = new mongoose.Schema(

    {
        title: {type: String, require: true},
        location: {type: String, require: true},
        description: {type: String, require: true},
        company: {type: String, require: true},
        salary:{type: String, require: true},
        period:{type: String, require: true},
        contract:{type: String, require: true},
        requirements:{type: Array, require: true},
        imageUrl:{type: String, require: true},
        hiring: {type: Boolean, default: true},
        agentId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            require: true
        }




    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("Job", JobSchema);