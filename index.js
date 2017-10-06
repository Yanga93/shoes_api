const express = require('express');
const bodyParser = require('body-parser');

//set up express app
const app = express();

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
