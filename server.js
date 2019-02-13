// import dependencies
const express = require("express");

// import routes
const routes = require("./routes");

// create new express server
const app = express();

// set up port
const PORT = process.env.PORT || 3000;

// set up express middleware to accept incoming post data and have it read as a JSON object
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// make all front end html/css/js/images/etc available instead of express thinking they're api routes
app.use(express.static("public"));

// turn on routes
app.use(routes);

// turn on express app / server
app.listen(PORT, () => console.log(`🌎 => now connected on ${PORT}`));