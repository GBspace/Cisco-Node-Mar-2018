var fs = require('fs');

fs.readFile('./data2.txt', { encoding : 'utf8'}, function(err, fileContents){
	if (err){
		console.log('something went wrong!', err);
		return;
	}
	console.log(fileContents);
	console.log('Job done');
});


