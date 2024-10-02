//GET
const getContacts = (req,res)=>{
    res.json({message: "Get all Contacts"});
};


//CREAT
const creatContact = (req,res)=>{
    res.json({message: "Creat Contacts"});
}

//Get
const getContact = (req,res)=>{
    res.json({message: `Get Contacts for ${req.params.id}`});
}

//Update
const updateContact = (req,res)=>{
    res.json({message: `Update Contacts for ${req.params.id}`});
}

//Delete
const deleteContact = (req,res)=>{
    res.json({message: `Delete contact for ${req.params.id}`});
}

module.exports = {getContacts, creatContact, getContact, updateContact, deleteContact};