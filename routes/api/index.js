// Importing our express router, userRoutes, and thoughtRoutes
const router = require("express").Router();
const userRoutes = require("./userRoutes");
const thoughtRoutes = require("./thoughtRoutes")

// Specify and use the certain route for userRoutes and thoughtRoutes
router.use("/users", userRoutes);
router.use("/thoughts", thoughtRoutes)

module.exports = router; // export our router