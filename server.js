var express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");

var app =express();

var port = process.env.port || 5000;

app.use(bodyParser.json());

app.use(cors());

app.use(bodyParser.urlencoded({extended:false}));

const logger = require('morgan');
app.use(logger('dev'));

var Users = require('./routes/Users')

app.use('/users', Users)

var Visitors = require('./routes/Visitors')

app.use('/visitors', Visitors)

var Companies = require('./routes/Companies')

app.use('/companies', Companies)

app.listen(port, function() {
  console.log('Server is running on port: ' + port)
})

