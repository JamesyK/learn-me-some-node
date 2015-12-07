var http = require('http');
getReq = process.argv[2];

http.get(getReq, function(response){
  response.on('data', function (data) {
    console.log(data.toString());
  });
});
