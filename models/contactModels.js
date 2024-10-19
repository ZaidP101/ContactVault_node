const { type } = require("express/lib/response");
const mongoose = require("mongoose");

const contactSchema = mongoose.Schema({
    user_id:{
        type: mongoose.Schema.ObjectId,
        required: true,
        ref:"user",
    },
    name:{
        type:String,
        required: [true, "Please enter a Contact Name. "],
    },
    email:{
        type:String,
        required: [true, "Please enter a Contact E-mail Address. "],
    },
    phone:{
        type:String,
        required: [true, "Please enter a Contact Phone Number. "],
    },
},{
    timestamps: true,
});

module.exports = mongoose.model("Contact", contactSchema);