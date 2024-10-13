const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    username:{
        type:String,
        required: [true, "Please enter a UserName"],
    },
    email:{
        type:String,
        required: [true, "Please enter an Email Address"],
        unique: [true, "email address alread used"],
    },
    password:{
        type:String,
        required: [true, "Please enter your Password"],
    }
},{
    timestamps: true
});

module.exports = mongoose.model("User", userSchema);