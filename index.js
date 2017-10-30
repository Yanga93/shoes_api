const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const exphbs = require('express-handlebars');

//set up express app
const app = express();

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', '"Origin, X - Requested - With, Content - Type, Accept "');
  next();
})

//connect to mongodb
mongoose.connect(process.env.MONGO_DB_URL || 'mongodb://localhost/shoeapi');
mongoose.Promise = global.Promise;

//configuring handlebars
app.engine('handlebars', exphbs({
  defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

//using static
app.use(express.static('public'));

//using bodyParser
app.use(bodyParser.urlencoded({
  extended: false
}))


//initialize routes
app.use('/api', require("./routes/api"));

//listen for requests
app.listen(process.env.PORT || 4000, function() {
  console.log('Now listening for requests at port 4000');
});
