const express = require("express");
const dotenv = require("dotenv").config();
const connectDb = require("./config/dbConnection")
connectDb();
const app = express();
const route1 = require("./routs/contactRoutes");
const errorHandler = require("./middleware/errorHandler");
const { connect } = require("mongoose");

const port = process.env.PORT || 5000;

app.use(express.json());
app.use("/api/contacts", route1);
app.use("/api/users", require("./routs/userRoutes"));
app.use(errorHandler);

app.listen(port, console.log(`server started on port : ${port}...`));