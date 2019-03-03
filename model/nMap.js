var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var mapSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  lat: {
    type: Number,
    required: true
  },
  long: {
    type: Number,
    required: true
  },
  zoom: {
    type: Number,
    required: true
  },
  desc: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("mapSchema", mapSchema);
