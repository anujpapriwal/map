var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");
var schema = mongoose.Schema;
var mapSchema = require("../model/nMap");
var cities = require("../model/cities");

/* GET home page. */

router.post("/", function(req, res, next) {
  var userInputs = {
    name: req.body.name,
    email: req.body.email,
    lat: req.body.lat,
    long: req.body.long,
    zoom: req.body.zoom,
    desc: req.body.desc
  };

  mapSchema.findOneAndUpdate(
    { email: userInputs.email },
    userInputs,
    { upsert: true, new: true, setDefaultsOnInsert: true },
    function(err, userInputs) {
      if (err) return console.error(err);
    }
  );

  res.render("map", {
    title: "Express",
    lat: req.body.lat,
    long: req.body.long,
    desc: req.body.desc,
    zoom: req.body.zoom
  });
});

router.get("/", function(req, res, next) {
  res.redirect("/newMap");
});

module.exports = router;

router.get("/:continent", function(req, res, next) {
  var db = mongoose.connection;
  db.on("error", console.error.bind(console, "connection error:"));
  db.once("open", function() {
    // we're connected!
  });
  var input = req.params.continent;
  cities.findOne({ continent: input }, function(err, city) {
    if (err) return console.log(err);
    if (!city) {
      res.redirect("/newMap");
    } else {
      res.render("map", {
        title: "Express",
        lat: city.lat,
        long: city.long,
        zoom: 12,
        desc: city.desc
      });
    }
  });
});

module.exports = router;
