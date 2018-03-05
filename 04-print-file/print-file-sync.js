var fs = require('fs');

var fileContents = fs.readFileSync('./data.txt', { encoding : 'utf8'});

console.log(fileContents);