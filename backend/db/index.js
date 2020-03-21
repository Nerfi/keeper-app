const mongoose = require("mongoose");
//remember, the name of the DB is the what comes after the las `/` in this case is notes.`
mongoose
.connect('mongodb://127.0.0.1:27017/notes', {useNewUrlParser: true, useUnifiedTopology: true})
.catch(err => {
  console.error('Connection error', err.message)
});

// DeprecationWarning: collection.ensureIndex is deprecated. Use createIndexes instead
//solution donwn below
mongoose.set('useCreateIndex', true);

const db = mongoose.connection;

module.export = db;
