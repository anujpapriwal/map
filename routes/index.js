var express = require("express");
var router = express.Router();
var mongo = require("mongodb").MongoClient;
var assert = require("assert");

var url = "mongodb://localhost:27017/map";

/* GET home page. */

router.get("/", function(req, res, next) {
  var dataArray = [];
  var as, na, sa, af, eu, oc;
  setTimeout(function() {
    mongo.connect(
      url,
      { useNewUrlParser: true },
      function(err, client) {
        var db = client.db("map");
        assert.equal(null, err);
        console.log("Connected to database!");
        var outlines = db.collection("continents").find({});
        outlines.forEach(
          function(doc, err) {
            assert.equal(null, err);
            dataArray.push(doc);
          },
          function() {
            client.close();
            as = dataArray[1];
            af = dataArray[0];
            eu = dataArray[2];
            na = dataArray[3];
            sa = dataArray[4];
            oc = dataArray[5];
            console.log("Database disconnected!");
            res.render("index", { title: "Express", data: dataArray });
          }
        );
      }
    );
  }, 1000);
});

module.exports = router;

/*L.geoJson(as, {
    clickable: false,
    style: oneFourth
}).addTo(map);

L.geoJson(na, {
    clickable: false,
    style: full
}).addTo(map);

L.geoJson(sa, {
    clickable: false,
    style: half
}).addTo(map);

L.geoJson(eu, {
    clickable: false,
    style: half
}).addTo(map);

L.geoJson(af, {
    clickable: false,
    style: zeroP
}).addTo(map);

L.geoJson(oc, {
    clickable: false,
    style: half
}).addTo(map);*/
