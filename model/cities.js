var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var cities = new Schema({
  name: {
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
  desc: {
    type: String,
    required: true
  },
  populations: [
    {
      year: Number,
      population: Number
    },
    {
      year: Number,
      population: Number
    },
    {
      year: Number,
      population: Number
    },
    {
      year: Number,
      population: Number
    }
  ]
});

module.exports = mongoose.model("cities", cities);
