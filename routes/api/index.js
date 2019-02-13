const router = require("express").Router();
// import any api routes
const tableRoutes = require("./tableRoutes");

// prefix api routes with their specific endpoint name
router.use("/tables", tableRoutes);

module.exports = router;