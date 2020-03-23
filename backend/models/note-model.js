const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
  title: {type: String, required: [true, 'why no title?'], unique: true},
  content: { type: String, required: [true, 'why no content?']}
});

module.exports = mongoose.model('Note', noteSchema);
