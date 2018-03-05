var fs = require('fs');

var stream = fs.createReadStream('./data.txt', {encoding : 'utf8'});

//events => open, data, end, close & error

var readCount = 0;
stream.on('data', function(chunk){
	//console.log(chunk);
	++readCount;
});

stream.on('open', function(){
	console.log('Job started');
});


stream.on('end', function(){
	console.log('Job done');
	console.log('readCount = ', readCount);
});
stream.on('close', function(){
	console.log('file closed');
});

stream.pipe(process.stdout);