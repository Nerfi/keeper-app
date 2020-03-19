const express = require('express')
const app = express()
const port = 8000;
const bodyParser = require("body-parser");
const cors = require("cors");

const notes = require("./data/notes");

app.use(bodyParser.json(""));
app.use(cors());
//this route it's hoted: http://localhost:8000/notes;
app.get('/notes', (req, res) => res.send(notes))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
