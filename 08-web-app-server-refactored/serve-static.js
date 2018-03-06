var path = require('path'),
	fs = require('fs');
	
	
var staticExtns = ['.html', '.css', '.js', '.png', '.jpg', '.ico', '.xml', '.json'];
function isStatic(resource){
	var resourceExtn = path.extname(resource);
	return staticExtns.indexOf(resourceExtn) !== -1;
}

module.exports = function(req, res){
	var resourceName = req.urlObj.pathname === '/' ? '/index.html' : req.urlObj.pathname;
	//static resource
	if (isStatic(resourceName)){
		var resourcePath = path.join(__dirname, resourceName);
		if (!fs.existsSync(resourcePath)){
			res.statusCode = 404;
			res.end();
			return;
		}
		fs.createReadStream(resourcePath).pipe(res);
	}
}