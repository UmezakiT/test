const db = require("../db/connection");

module.exports = {
  getAllTables: function (req, res) {
    db
      .query("SELECT * FROM table", function (err, dbTableData) {
        if (err) {
          console.log(err);
          return res
            .status(400)
            .json(err);
        }
        res.json(dbTableData);
      });
  },
  getWaitingList: function (req, res) {
    console.log(req.params);
    /*
    {isWaiting: true}
    {isWaiting: false}
  */
    // set initial where value to true for isWaiting
    const paramObj = {
      isWaiting: "1"
    }

    // if request parameter value for isWaiting is "false", set to false
    if (req.params.isWaiting === "false") {
      paramObj.isWaiting = "0";
    }

    const query = db.query("SELECT * FROM tables WHERE ?", paramObj, function (err, dbTableData) {
      if (err) {
        console.log(err);
        return res
          .status(400)
          .json(err);
      }

      res.json(dbTableData);
    });
    console.log(query.sql);

  },
  postReservation: function (req, res) {
    console.log("=========");
    console.log(req.body);
    console.log("=========");
    // query database for all people NOT on the waiting list
    db.query("SELECT COUNT(*) AS count from tables WHERE isWaiting = '0'", function (err, dbTableData) {

      if (err) {
        console.log(err);
        return res
          .status(400)
          .json(err);
      }

      // if dbTableData[0].count === 5...put new reservation on waiting list
      if (dbTableData[0].count > 5) {
        req.body.isWaiting = true;
      } else {
        req.body.isWaiting = false;
      }

      db
        .query("INSERT INTO tables SET ?", req.body, function (err, dbTableData) {
          if (err) {
            console.log(err);
            return res
              .status(400)
              .json(err);
          }
          console.log(dbTableData);

          // send back response to user letting them know if they are on the waiting list
          // or not
          res.json({isWaiting: req.body.isWaiting});
        });

    });
  }
}