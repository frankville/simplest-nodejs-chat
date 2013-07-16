var express = require('express');
var fs = require('fs');
var app = express(express.logger());

app.use('/',express.static(__dirname +'/'));
app.get('/', function(request, response) {
  response.send(fs.readFileSync("index.html").toString());
});

var port = process.env.PORT || 2012;
app.listen(port, function() {
  console.log("Listening on " + port);
});
