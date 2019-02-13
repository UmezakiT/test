const router = require("express").Router();
const tableController = require("../../controllers/tables");

// methods for /api/tables (GET and POST)
router
  .route("/")
  .get(tableController.getAllTables)
  .post(tableController.postReservation);

// GET all tables where isWaiting = false GET all tables where isWaiting = true
router
  .route("/:isWaiting/")
  .get(tableController.getWaitingList);

module.exports = router;