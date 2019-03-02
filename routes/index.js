var express = require("express");
var router = express.Router();
var fs = require("fs");
var path = require("path");

/* GET home page. */

var asPath = JSON.parse(
  fs.readFileSync(__dirname + "/public/jsonasia.geo.json", "utf8")
);
var naPath = JSON.parse(
  fs.readFileSync(__dirname + "/public/json/na.geo.json", "utf8")
);
var saPath = JSON.parse(
  fs.readFileSync(__dirname + "/public/json/sa.geo.json", "utf8")
);
var euPath = JSON.parse(
  fs.readFileSync(__dirname + "/public/json/eu.geo.json", "utf8")
);
var afPath = JSON.parse(
  fs.readFileSync(__dirname + "/public/json/africa.geo.json", "utf8")
);
var ocPath = JSON.parse(
  fs.readFileSync(__dirname + "/public/json/oc.geo.json", "utf8")
);

/*var as, na, sa, eu, af, oc;

$.getJSON(asPath, function(json) {
  as = json;
});

$.getJSON(naPath, function(json) {
  na = json;
});

$.getJSON(saPath, function(json) {
  sa = json;
});

$.getJSON(euPath, function(json) {
  eu = json;
});

$.getJSON(afPath, function(json) {
  af = json;
});

$.getJSON(ocPath, function(json) {
  oc = json;
});*/

router.get("/", function(req, res, next) {
  res.render("index", {
    title: "Express",
    message: msg,
    as: asPath,
    na: naPath,
    sa: saPath,
    eu: euPath,
    af: afPath,
    oc: ocPath
  });
});

module.exports = router;
