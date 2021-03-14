var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");
var path = require("path");

var PORT = process.env.PORT || 8080;
var app = express();

//Serve static content to the public directory
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

//parse JSON
app.use(bodyParser.json());
// View engine setup
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller.js");

app.use("/", routes);

app.listen(PORT, function () {
  console.log("Server listening on localhost:" + PORT);
});
