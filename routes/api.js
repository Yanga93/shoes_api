const express = require('express');
const router = express.Router();
const Shoe = require('../models/shoe');

//get a list of all shoes from the database
router.get("/shoes", function(req, res) {
  Shoe.find(req.body).then(function(shoe) {
    res.send(shoe);
  });
});

//get list of all shoes for a given brand
router.get("/shoes/brand/:brandname", function(req, res) {
  const brandname = req.params.brandname;
  Shoe.find({brand:brandname}).then(function(shoe) {
    res.send(shoe);
  });
});

//get list of all shoes for a given size
router.get("/shoes/size/:size", function(req, res) {
  const size = req.params.size;
  Shoe.find({size:size}).then(function(shoe) {
    res.send(shoe);
  });
});

//get list of shoes for a given brand and size on the db
router.get("/shoes/brand/:brandname/size/:size", function(req, res) {
  const brandname = req.params.brandname;
  const size = req.params.size;
  Shoe.find({brand:brandname, size:size}).then(function(shoe) {
    res.send(shoe);
  });
});

//Add a new shoe to the stock db
router.post("/shoes", function(req, res) {
  Shoe.create(req.body).then(function(shoe) {
    res.send(shoe);
  });
});

//Update the stock levels when a shoe is sold on the db
router.delete("/shoes/sold/:id", function(req, res) {
  Shoe.find({size:size}).then(function(shoe) {
    res.send(shoe);
  });
});

module.exports = router;
