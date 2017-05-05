var express = require('express');
var path = require('path');
var app = express();

var staticDirectory = './public';

app.use(express.static(path.join(__dirname, 'public')));


app.get('/', function(req, res) {
  res.send('./public/index.html');
});

app.listen(3000, function() {
  console.log('listening on port 3000');
});