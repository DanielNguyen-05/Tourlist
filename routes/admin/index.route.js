// this is the final file route to store all the routes of admin
const router = require('express').Router(); 
const accountRoutes = require("./account.route");


router.use('/account', accountRoutes);

module.exports = router;

