const mongoose = require("mongoose");

mongoose
.connect('mongodb://127.0.0.1:27017/notes', {useNewUrlParser: true, useUnifiedTopology: true})
.catch(err => {
  console.error('Connection error', err.message)
});

const db = mongoose.Connection;

module.export = db;
