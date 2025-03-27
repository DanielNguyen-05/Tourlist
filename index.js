const express = require('express')
const path = require('path');
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://nguyenhaidang26112005:kYNZfPDTX71rFoQU@cluster0.cyoye4e.mongodb.net/tour-management');

const Tour = mongoose.model('Tour', { 
    name: String, 
    vehicle: String
});
/*
If the collection name "abcs" -> the model must be "Abc"
For ex: tours -> Tour, users -> User, products -> Product
*/

const app = express()
const port = 3000

// Implement the folder `views`
app.set('views', path.join(__dirname, "views"));
app.set('view engine', 'pug');  // set the template engine for folder views -> PUG

// Implement a folder for Front-end static files
app.use(express.static(path.join(__dirname, "public")));

app.get('/', (req, res) => {
    res.render("client/pages/home", {
        pageTitle: "The home of page"
    })
})

app.get('/tours', async (req, res) => {
    const tourList = await Tour.find({});
    console.log(tourList);

    res.render("client/pages/tour-list", {
        pageTitle: "The list of tours",
        tourList: tourList
    })
})

app.listen(port, () => {
    console.log(`Website is running on port ${port}`)
})
