const router = require("express").Router();
const path = require("path");

// serve up home page
router.get("/", function (req, res) {
  // use res.sendFile to send home.html
  res.sendFile(path.join(__dirname, "../../public/home.html"));
});

// serve up tables page
router.get("/tables", function (req, res) {
  // use res.sendFile to send tables.html
  res.sendFile(path.join(__dirname, "../../public/tables.html"));
});

// serve up add table page
router.get("/add", function (req, res) {
  // use res.sendFile to send add.html
  res.sendFile(path.join(__dirname, "../../public/add.html"));
});

module.exports = router;