var express = require('express');
var app = express();



app.use(express.static('res'));


app.get('/', function (req, res) {
  res.sendfile("./www/index.html");
});

app.get('/user', function (req, res) {
  res.sendfile("./www/user.html");
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});