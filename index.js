const express = require('express');

var app = express();

app.set('view engine', 'ejs');


app.get('/', function (req, res) {
  res.send('This is home');

});

app.get('/news/:id', function (req, res) {
  res.send('ID is' + req.params.id);

})

app.listen(3000);
