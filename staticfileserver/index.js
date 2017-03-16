var http = require('http');
var path = require('path');
var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var fs = require('fs');

var app = express();

app.use(morgan('dev'));

var filePath = path.join(__dirname, 'public');
app.use(express.static(filePath));

app.use(function(req, res) {
  res.status(404);
  res.send('File not found');
});

app.listen(3000, function() {
  console.log('Teh file server is start on port 3000, so nice');
})
