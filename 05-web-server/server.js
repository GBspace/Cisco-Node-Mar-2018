var http = require('http'),
	path = require('path'),
	fs = require('fs');

var server = http.createServer(function(req, res){
	console.log(req.method, '\t', req.url);
	var resourcePath = path.join(__dirname, req.url === '/' ? '/index.html' : req.url);
	if (!fs.existsSync(resourcePath)){
		res.statusCode = 404;
		res.end();
		return;
	}
	fs.createReadStream(resourcePath).pipe(res);
});
server.listen(8085);
