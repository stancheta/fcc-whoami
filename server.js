var express = require('express');
var whoami = require('./whoami');
var getWhoAmI = whoami.getWhoAmI;

var app = express();

var port = process.env.PORT || 8080;

app.get('/', function(req, res) {
    res.send(getWhoAmI(req));
});

app.listen(port, function() {
    console.log('Now listening on port ' + port);
});
