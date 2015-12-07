var mymodule = require('./nodeex6-module.js');
var dirName = process.argv[2];
var fileExt = process.argv[3];

mymodule(dirName, fileExt, myFunction);

function myFunction(err, data) {
  if (err) {
    console.log(err);
  }
  data.forEach(function(file){
    console.log(file);
  });
};


// function myFunction(err,res){
//   console.log('i got called!')
//   console.log(err,res)
// }

// function thirdFunction(){
//   console.log('thrid function called')
// }

// function anotherFunction(callback){
//   console.log('another function got called');
//   callback(null,'completed');
// }

// anotherFunction(myFunction);
// anotherFunction(thirdFunction)

// module.exports = function(){

// }