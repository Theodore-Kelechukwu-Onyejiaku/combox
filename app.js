const express = require("express");
const app = express();
const path = require("path");
const bodyparser = require("body-parser");
const logger = require('morgan');
const cors = require("cors");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
//configuring dotenv
require("dotenv").config();
//Importing the body-parser middle ware
app.use(bodyparser.urlencoded({
    extended: true
}));
app.use(logger('dev'));
app.use(bodyparser.json());
app.use(cors());
//Use of cookies
app.use(cookieParser());

app.use(express.static("public"))

const characterRouter = require("./routers/charactersRoute");
const comicRouter = require("./routers/comicsRoute");
const eventRouter = require("./routers/eventsRoute");


//Character Routes
app.use("/api/characters", characterRouter);
//Comic Routes
app.use("/api/comics", comicRouter);
app.use("/api/events", eventRouter);


var mongoDB = process.env.DB;
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});
var db = mongoose.connections;
db.concat("error", console.error.bind(console, "MongoDB connection error."));

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
    console.log("Server running succesfully on port:"+PORT)
})