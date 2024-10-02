const express = require("express");
const dotenv = require("dotenv").config();
const app = express();
const route1 = require("./routs/contactRoutes")

const port = process.env.PORT || 5000;

app.use("/api/contacts", route1);

app.listen(port, console.log(`server started on port : ${port}...`));