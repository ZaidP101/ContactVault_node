const express = require("express");
const route1 = express.Router();
const {getContacts} = require("../controllers/contactController");
const {creatContact} = require("../controllers/contactController");
const {getContact} = require("../controllers/contactController");
const {updateContact} = require("../controllers/contactController");
const {deleteContact} = require("../controllers/contactController");


route1.route("/").get(getContacts);

route1.route("/").post(creatContact);

route1.route("/:id").get(getContact);

route1.route("/:id").put(updateContact);

route1.route("/:id").delete(deleteContact);

module.exports = route1;