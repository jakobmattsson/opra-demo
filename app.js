var express = require('express');
var jit = require('express-jit-coffee');
var opra = require('opra');

var app = express.createServer(express.logger());
app.configure(function() {
  app.use(opra.serve(__dirname + '/public', { inline: true, compress: true, url: '/index.html' }));
  app.use(jit(__dirname + '/public'));
  app.use(express.static(__dirname + '/public'));
});

var port = 9000;
app.listen(port, function() {
  console.log("Listening on " + port);
});



