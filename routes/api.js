const express =  require('express');
const router = express.Router();

//get a list of all shoes from the database
router.get("/shoes", function(req, res) {
res.send({type: 'get a list of all shoes from the db'});
});

//get list all of shoes for a given brand
router.get("/shoes/brand/:brandname", function(req, res) {
res.send({type: req.params.brandname});
});

//get list of all shoes for a given size
router.get("/shoes/size/:size", function(req, res) {
res.send({type: 'get list of all shoes for a given size'});
});

//get list of shoes for a given brand and size on the db
router.get("/shoes/brand/:brandname/size/:size", function(req, res) {
res.send({type: 'get list of shoes for a given brand and size on the db'});
});

//Add a new shoe to the stock db
router.post("/shoes", function(req, res) {
  res.send({type: 'Add a new shoe to the stock db'});
});

//Update the stock levels when a shoe is sold to the db
router.put("/shoes/sold/:iPUTd", function(req, res) {
res.send({type: 'Update the stock levels when a shoe is sold to the db'});
});


module.exports = router;
