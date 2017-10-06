const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//set up express app
const app = express();

//connect to mongodb
mongoose.connect('mongodb://localhost/shoeapi');
mongoose.Promise = global.Promise;

//using bodyParser
app.use(bodyParser.urlencoded({
    extended: false
  }))
  // parse application/json
app.use(bodyParser.json());

//initialize routes
app.use('/api', require("./routes/api"));

//listen for requests
app.listen(process.env.port || 4000, function(){
  console.log('Now listening for requests');
});
