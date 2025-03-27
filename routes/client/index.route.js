// This is the biggest file router to store tabs (/tours/list/...)
const router = require('express').Router(); 
const homeRoutes = require("./home.route");
const tourRoutes = require("./tour.route");

router.use('/', homeRoutes);
router.use('/tours', tourRoutes);

module.exports = router;

