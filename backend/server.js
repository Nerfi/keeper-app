const express = require('express')
const app = express()
const port = 8000;
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require('path');

const notes = require("./data/notes");
//addign mongo
const mongoose = require("mongoose");

app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use(bodyParser.json())


//this route it's hoted: http://localhost:8000/notes;
app.get('/notes', (req, res) => res.send("index"));

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

//connection to DB
mongoose
.connect("mongodb://localhost:27017/notesDB", {useNewUrlParser: true, useUnifiedTopology: true})
.catch(e => {
  console.log("connection error", e.message)
});


//creating schema for the notes model/Schema

const notesSchema = new mongoose.Schema({
  title: String,
  content: String
});
