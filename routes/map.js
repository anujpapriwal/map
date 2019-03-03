var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");
var schema = mongoose.Schema;
var mapSchema = require("../model/nMap");
mongoose.connect(
  "mongodb://localhost:27017/map",
  { useNewUrlParser: true }
);

/* GET home page. */

router.post("/", function(req, res, next) {
  var db = mongoose.connection;
  db.on("error", console.error.bind(console, "connection error:"));
  db.once("open", function() {
    // we're connected!
    console.log("connected!");
  });

  var userInputs = new mapSchema({
    name: req.body.name,
    email: req.body.email,
    lat: req.body.lat,
    long: req.body.long,
    zoom: req.body.zoom,
    desc: req.body.desc
  });

  userInputs.save(function(err, userInputs) {
    if (err) return console.error(err);
    console.log("doc saved is:");
    console.log(userInputs);
  });

  res.render("map", {
    title: "Express",
    lat: req.body.lat,
    long: req.body.long,
    desc: req.body.desc,
    zoom: req.body.zoom
  });
});

module.exports = router;
