var http = require('http'),
	calculator = require('./calculator'),
	logger = require('./logger'),
	dataParser = require('./data-parser'),
	serveStatic = require('./serve-static'),
	calculatorHandler = require('./calculator-handler'),
	notFoundHandler = require('./not-found-handler');

var _middlewares = [dataParser, logger, serveStatic, calculatorHandler, notFoundHandler];

var server = http.createServer(function(req, res){
	function exec(req, res, middlewares){
		var first = middlewares[0],
			remaining = middlewares.slice(1),
			next = function(){
				exec(req, res, remaining)
			};
		if (typeof first === 'function')
			first(req, res, next);
	}
	exec(req, res, _middlewares);
});

server.listen(8085);
console.log('server listening on port 8085!!!');
