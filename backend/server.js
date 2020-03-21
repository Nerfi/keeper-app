const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
//setting the port 3001, different from the one from React front-end
const port = 3001;

//importing db connection
const db = require("./db");

//importing routes
const noteRoutes = require("./routes/note-router");


app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())


app.get('/', (req, res) => {
    res.send('Hello World!');
});

// using the APi, dont know why is 'api', need to find info
app.use('/api', noteRoutes);


app.listen(port, () => console.log(`Server running on port ${port}`))

//listening to error
//not working on method
//db.on('error', console.error.bind(console, 'MongoDB connection error:'));
