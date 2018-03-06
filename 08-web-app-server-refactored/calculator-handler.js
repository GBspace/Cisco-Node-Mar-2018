var querystring = require('querystring'),
	calculator = require('./calculator');

module.exports = function(req, res){

	if (req.urlObj.pathname === '/calculator' && req.method === 'GET'){
		console.log('[@calculatorHandler] - serving calculator requests');
		var queryData = querystring.parse(req.urlObj.query),
			op = queryData.op,
			n1 = parseInt(queryData.n1),
			n2 = parseInt(queryData.n2);

		var result = calculator[op](n1, n2);
		res.write(result.toString());
		res.end();
	} else if (req.urlObj.pathname === '/calculator' && req.method === 'POST'){
		console.log('[@calculatorHandler] - serving calculator requests');
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
	}
};