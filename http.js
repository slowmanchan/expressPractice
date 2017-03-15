var http = require('http');

function requestHandler(req, res) {
  if (req.url === '/') {
    res.end('Welcome to the home page!');
  } else if (req.url === '/about') {
    res.end('This is the about page!');
  } else if (req.url === '/dayman') {
    res.end('I am dayman!');
  } else {
    res.end("Error, File not found!");
  }
}

var server = http.createServer(requestHandler);

server.listen(3000);
