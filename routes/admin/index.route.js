// this is the final file route to store all the routes of admin
const router = require('express').Router(); 
const accountRoutes = require("./account.route");
const dashboardRoutes = require("./dashboard.route");
const categoryRoutes = require("./category.route");
const tourRoutes = require("./tour.route");
const orderRoutes = require("./order.route");
const userRoutes = require("./user.route");
const contactRouts = require("./contact.route");

router.use('/account', accountRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/category', categoryRoutes);
router.use('/tour', tourRoutes);
router.use('/order', orderRoutes);
router.use('/user', userRoutes);
router.use('/contact', contactRouts);

module.exports = router;

