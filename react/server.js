var express = require('express');
var app = express();

app.get('api/images', function (req, res) {
  req.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});




