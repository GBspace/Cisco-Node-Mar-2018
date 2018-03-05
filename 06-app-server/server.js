var http = require('http');


var server = http.createServer(function(req, res){
	console.log(req.method, '\t', req.url);
	if (req.url === '/calculator'){
		
	} else {
		res.statusCode = 404;
		res.end();
	}
});
server.listen(8085);
