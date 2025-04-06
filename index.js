const express = require('express')
const path = require('path');
require('dotenv').config();
const database = require("./config/database");
const clientRoutes = require("./routes/client/index.route");

const app = express()
const port = 3000

// Connect the database
database.connect();

// Set up the folder `views`
app.set('views', path.join(__dirname, "views"));
app.set('view engine', 'pug');  // set the template engine for folder views -> PUG

// Set up a folder for Front-en d static files
app.use(express.static(path.join(__dirname, "public")));

// Implement the Route
app.use("/", clientRoutes);

app.listen(port, () => {
    console.log(`Website is running on port ${port}`)
})