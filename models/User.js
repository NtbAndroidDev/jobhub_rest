const mongoose = require("mongoose");


const UserSchema = new mongoose.Schema(

    {
        username: {type: String, require: true, unique: true},
        phone: {type: String, require: true, unique: false},
        email: {type: String, require: true, unique : true},
        password: {type : String , require: true, unique: true},
        location: {type: String, require: false},
        isAdmin: {type: Boolean, default: false},
        isAgent: {type: Boolean, default: false},
        skills:{type: Array, default: false},
        profile: {type: String, require: true, default: "https://i.pinimg.com/564x/cd/df/aa/cddfaac6e5243036f2e250f7c4938bb0.jpg"
    },
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("User", UserSchema);