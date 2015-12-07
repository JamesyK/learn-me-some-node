var fs = require('fs');

var contents = fs.readFileSync(process.argv[2]).toString();
var arr = contents.split("\n");
var length = arr.length - 1;
console.log(length);