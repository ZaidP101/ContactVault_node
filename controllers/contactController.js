const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModels");
const contactModels = require("../models/contactModels");

//GET
const getContacts = asyncHandler(async(req,res)=>{
    const contact = await Contact.find({user_id:req.user.id});
    res.status(200).json(contact);
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
    const contact = await Contact.create({
        name,
        email,
        phone,
        user_id:req.user.id
    });
    res.status(201).json(contact);
});

//Get
const getContact = asyncHandler(async(req,res)=>{
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Conatct not found ");
    }
    res.status(200).json(contact);
});

//Update
const updateContact = asyncHandler(async(req,res)=>{
    const contact = Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact not found");
    }
    if(contact.user_id.toString() !== req.user.id){
        res.status(403);
        throw new Error("User have no permission to update other users contacl");
    }
    const updatedContact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true}
    )
    res.status(200).json(updatedContact);
});

const deleteContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
        res.status(404);
        throw new Error("Contact not found");
    }
    if(contact.user_id.toString() !== req.user.id){
        res.status(403);
        throw new Error("User have no permission to delete other users contacl");
    }
    // Remove the contact
    await Contact.findByIdAndDelete(req.params.id); // Use instance method for removing the document
    res.status(200).json(contact);
});

module.exports = {getContacts, creatContact, getContact, updateContact, deleteContact};