const express = require('express');
const router = express.Router();
const Shoe = require('../models/shoe');
const ObjectId = require('mongodb').ObjectId;
//console.log(ObjectId);

//get a list of all shoes from the database
router.get("/shoes", function(req, res) {
  Shoe.find(req.body).then(function(shoe) {
    res.send(shoe);
  });
});

//get list of all shoes for a given brand
router.get("/shoes/brand/:brandname", function(req, res) {
  const brandname = req.params.brandname;
  Shoe.find({
    brand: brandname
  }).then(function(shoe) {
    res.send(shoe);
  });
});

//get list of all shoes for a given size
router.get("/shoes/size/:size", function(req, res) {
  const size = req.params.size;
  Shoe.find({
    size: size
  }).then(function(shoe) {
    res.send(shoe);
  });
});

//get list of shoes for a given brand and size on the db
router.get("/shoes/brand/:brandname/size/:size", function(req, res) {
  const brandname = req.params.brandname;
  const size = req.params.size;
  Shoe.find({
    brand: brandname,
    size: size
  }).then(function(shoe) {
    res.send(shoe);
  });
});

//Add a new shoe to the stock db
router.post("/shoes", function(req, res, next) {
  var brand = req.body.brand;
  var color = req.body.color;
  var size = req.body.size;
  var price = req.body.price;
  var in_stock = req.body.in_stock

  Shoe.findOneAndUpdate({
      brand: brand,
      color: color,
      size: size,
      price: price
    }, {
      $inc: {
        in_stock: in_stock
      }
    },
    function(err, results) {

      if (err) {
        throw err;
      } else if (!results) {

        Shoe.create(req.body).then(function(shoe) {
          res.send(shoe);
        });
      }
    })
});

//Update the stock levels when a shoe is sold on the db
router.post("/shoes/sold/:id", function(req, res) {
  var uniqueId = req.params.id
  Shoe.findOneAndUpdate({
    _id: ObjectId(uniqueId)
  }, {
    $inc: {
      in_stock: -1
    }
  }, {
    upset: false
  }, function(error, results) {
    if (error) {
      console.log(error);
    } else {
      res.send(results)
    }
  });


});

module.exports = router;
