var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");
var assert = require("assert");
var cities = require("../model/cities");
/* mongoose.connect(
  "mongodb://127.0.0.1:27017/map",
  { useNewUrlParser: true, useFindAndModify: false }
); */

/* GET home page. */

router.get("/", function(req, res, next) {
  var myData;
  cities.find({}, function(err, data) {
    if (err) return console.log(err);
    myData = data;

    res.render("index", {
      title: "Express",
      as: myData[0],
      na: myData[1],
      sa: myData[2],
      eu: myData[3],
      af: myData[4],
      oc: myData[5]
    });
  });
});

module.exports = router;
