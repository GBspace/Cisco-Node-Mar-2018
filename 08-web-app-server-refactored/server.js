var http = require('http'),
	app = require('./app'),
	path = require('path'),
	calculator = require('./calculator'),
	logger = require('./logger'),
	dataParser = require('./data-parser'),
	serveStatic = require('./serve-static'),
	calculatorHandler = require('./calculator-handler'),
	notFoundHandler = require('./not-found-handler');

app.use(dataParser);
app.use(logger);
app.use(serveStatic(path.join(__dirname, '/public')));
app.use(calculatorHandler);
app.use(notFoundHandler);

http.createServer(app).listen(8085);
console.log('server listening on port 8085!!!');
