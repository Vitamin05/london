
// Our first server

var http = require('http');

var handleRequest = function (incomingRequest, response) {
    console.log('Request in');
    response.end('Hello Regi');
};

var server = http.createServer(handleRequest);

server.listen(3000, function () {
    console.log('Server started somewhere');
});

