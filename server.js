var express = require('express');
var app = express();

var port = process.env.PORT || 8080;

app.get('/', function(req, res) {

});

app.listen(port, function() {
    console.log('Now listening on port ' + port);
});
