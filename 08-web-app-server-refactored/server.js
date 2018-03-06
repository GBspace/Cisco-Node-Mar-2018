var http = require('http'),
	calculator = require('./calculator'),
	logger = require('./logger'),
	dataParser = require('./data-parser'),
	serveStatic = require('./serve-static'),
	calculatorHandler = require('./calculator-handler'),
	notFoundHandler = require('./not-found-handler');

var server = http.createServer(function(req, res){
	dataParser(req);
	logger(req);
	serveStatic(req, res);
	calculatorHandler(req, res);
	notFoundHandler(res);
});

server.listen(8085);
console.log('server listening on port 8085!!!');
