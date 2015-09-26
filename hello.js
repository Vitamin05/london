
// Our first server
/*
var http = require('http');

var handleRequest = function (incomingRequest, response) {
    console.log('Request in');
    response.end('Hello Regi');
};

var server = http.createServer(handleRequest);

server.listen(3000, function () {
    console.log('Server started somewhere');
});
*/

var http = require('http');
var fs = require('fs');

fs.readFile('./web.html', function(err,html){
	if(err) {
		throw err;	
	}
	http.createServer(function(request,response){
	response.writeHeader(200,{"Content-Type": "text/html"});
	response.write(html);
	response.end();
	}).listen(3000);
});

