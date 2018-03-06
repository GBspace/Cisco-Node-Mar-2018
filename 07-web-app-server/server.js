var http = require('http'),
	path = require('path'),
	fs = require('fs'),
	url = require('url'),
	querystring = require('querystring'),
	calculator = require('./calculator');

var staticExtns = ['.html', '.css', '.js', '.png', '.jpg', '.ico', '.xml', '.json'];
function isStatic(resource){
	var resourceExtn = path.extname(resource);
	return staticExtns.indexOf(resourceExtn) !== -1;
}
var server = http.createServer(function(req, res){
	var urlObj = url.parse(req.url);
	console.log(req.method, '\t', urlObj.pathname);

	//static resource
	if (isStatic(urlObj.pathname)){
		var resourcePath = path.join(__dirname, urlObj.pathname === '/' ? '/index.html' : urlObj.pathname);
		if (!fs.existsSync(resourcePath)){
			res.statusCode = 404;
			res.end();
			return;
		}
		fs.createReadStream(resourcePath).pipe(res);
	} else if (urlObj.pathname === '/calculator' && req.method === 'GET'){
		var queryData = querystring.parse(urlObj.query),
			op = queryData.op,
			n1 = parseInt(queryData.n1),
			n2 = parseInt(queryData.n2);

		var result = calculator[op](n1, n2);
		res.write(result.toString());
		res.end();
	} else if (urlObj.pathname === '/calculator' && req.method === 'POST'){
		var rawData = '';
		req.on('data', function(chunk){
			rawData += chunk;
		});
		req.on('end', function(){
			console.log(rawData);
			var bodyData = querystring.parse(rawData),
				op = bodyData.op,
				n1 = parseInt(bodyData.n1),
				n2 = parseInt(bodyData.n2);

			var result = calculator[op](n1, n2);
			res.write(result.toString());
			res.end();
		});
		
	} else {
		res.statusCode = 404;
		res.end();
	}
});
server.listen(8085);
console.log('server listening on port 8085!!!');
