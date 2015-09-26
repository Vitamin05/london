
// Our first server
/*
var http = require('http');

http.createServer(function (req, res) {
    res.end('Hello Regi');
}).listen(3000, function () {
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

