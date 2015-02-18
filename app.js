var path = require('path');
var express = require('express');
var app = express();

app.use(express.static('public'));

var server = app.listen(3000, 'localhost', function(){
    var host = server.address().address;
    var port = server.address().port;

    console.log('Ref app listening at http://%s:%s', host, port)
});
