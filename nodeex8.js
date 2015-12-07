var http = require('http');
var bl = require('bl');
getReq = process.argv[2];

http.get(getReq, function(response){
  response.pipe(bl (function (err, data) {
    console.log(data.toString().length);
    console.log(data.toString());
  }));
});
