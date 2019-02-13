const router = require("express").Router();
const tableHTMLRoutes = require("./viewRoutes");

router.use("/", tableHTMLRoutes);

module.exports = router;