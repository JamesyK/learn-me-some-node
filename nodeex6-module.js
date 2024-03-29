var fs = require('fs');
var path = require('path');

module.exports = function (dirName, ext, callback) {
  fs.readdir(dirName, function(err, list) {
    var newArr = [];
    if (err) {
      return callback(err);
    }
    for ( i = 0; i < list.length; i++ ) {
      if ( path.extname(list[i]) === '.' + ext ) {
        newArr.push(list[i]);
      }
    };
    return callback(null, newArr);
  });
};