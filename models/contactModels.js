const mongoose = require("mongoose");

const contactSchema = mongoose.Schema({
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