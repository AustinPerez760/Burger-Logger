var express = require("express");
var router = express.Router();
//import our model to use database
var burger = require("..models/burger.js");

//ROUTES
router.get("/", function (req, res) {
  burger.selectAll(function (data) {
    let hbsObject = {
      burgers: data,
    };
    res.render("index", hbsObject);
  });
});

router.post("/burgers/insertOne", function (req, res) {
  burger.insertOne(["burger_name"], [req.body.burger_name], function (data) {
    res.redirect("/");
  });
});
