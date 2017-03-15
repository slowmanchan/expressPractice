var express = require('express');
// express framework
var path = require('path');
// resolve path issues
var http = require('http');
// node object. lets you create http servers.
var logger = require('morgan');
// logger middleware
var app = express();
// express function, enables mulitple request handlers

app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');
// view template engine 'ejs' and path to views
var publicPath = path.resolve(__dirname, "public");
// must use path resolve for os compatibility
app.use(express.static(publicPath));
// serve up static files
app.use(logger('short'));
// morgan.. logger middleware
app.get('/', function(req, res) {
  res.render('index', {
    message: 'Hey everyone! This is my webpage'
  });
});
// render templates
//sample get routes
app.get('/about', function(req, res) {
  res.end('About me');
});
// sample get routes
app.get('/weather', function(req, res) {
  res.sendFile('/index.js');
  res.end('The weather sucks');
});

app.get('/hello/:who', function(req, res) {
  res.redirect('/');
  res.end('Hello: ' + req.params.who + '.');
debugger;
});
// sample redirect
app.use(function(req, res) {
  res.statusCode = 404;
  res.end('404!!!!');
});

http.createServer(app).listen(3000);
// create server and use express as request handler.
// Listen on port 3000
