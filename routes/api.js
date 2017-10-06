const express = require('express');
const router = express.Router();




//get a list of all shoes from the database
router.get("/shoes", function(req, res) {
  res.send({
    type: 'get a list of all shoes from the db'
  });
});

//get list all of shoes for a given brand
router.get("/shoes/brand/:brandname", function(req, res) {
  const brandname = req.params.brandname;
  res.send({
    type: brandname
  });
});

//get list of all shoes for a given size
router.get("/shoes/size/:size", function(req, res) {
  const size = req.params.size;
  res.send({
    type: size
  });
});

//get list of shoes for a given brand and size on the db
router.get("/shoes/brand/:brandname/size/:size", function(req, res) {
  const brandname = req.params.brandname;
  const size = req.params.size;
  res.send({
    type: 'get list of shoes for a given brand and size on the db'
  });
});

//Add a new shoe to the stock db
router.post("/shoes", function(req, res) {
console.log(req.body);
  res.send({
    type: 'POST'
  });
});

//Update the stock levels when a shoe is sold to the db
router.put("/shoes/sold/:id", function(req, res) {
  res.send({
    type: 'Update the stock levels when a shoe is sold to the db'
  });
});


module.exports = router;
