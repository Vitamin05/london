
// Our first server

var http = require('http');

http.createServer(function (req, res) {
    res.end('Hello Regi');
}).listen(3000, function () {
    console.log('Server started somewhere');
});

