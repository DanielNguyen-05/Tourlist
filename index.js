const express = require('express')
const path = require('path');

const app = express()
const port = 3000

// Implement the folder `views`
app.set('views', path.join(__dirname, "views"));
app.set('view engine', 'pug');  // set the template engine for folder views -> PUG

// Implement a folder for Front-end static files
app.use(express.static(path.join(__dirname, "public")));

app.get('/', (req, res) => {
    res.render("client/pages/home.pug", {pageTitle: "The home of page"})
})

app.get('/tours', (req, res) => {
    res.render("client/pages/tour-list.pug", {pageTitle: "The list of tours"})
})

app.listen(port, () => {
    console.log(`Website is running on port ${port}`)
})