const asyncHandler = require("express-async-handler");
const contact = require("../models/contactModels");
const contactModels = require("../models/contactModels");

//GET
const getContacts = asyncHandler(async(req,res)=>{
    const contact = await contact.find();
    res.status(201).json(contact);
});


//CREAT
const creatContact = asyncHandler(async(req,res)=>{
    console.log("The Req body is", req.body);
    const { name, email, phone } = req.body;
    if(
        !name || !email || !phone
    ){
        res.status(400);
        throw new Error("All fields are mandatory..");
    }
    res.json({message: "Creat Contacts"});
});

//Get
const getContact = asyncHandler(async(req,res)=>{
    res.json({message: `Get Contacts for ${req.params.id}`});
});

//Update
const updateContact = asyncHandler(async(req,res)=>{
    res.json({message: `Update Contacts for ${req.params.id}`});
});

//Delete
const deleteContact = asyncHandler(async(req,res)=>{
    res.json({message: `Delete contact for ${req.params.id}`});
});

module.exports = {getContacts, creatContact, getContact, updateContact, deleteContact};