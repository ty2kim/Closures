var wrapLog = function (callback, name) {
  //console.log(arguments); // { '0': [Function], '1': 'sum' }
  return function(){
    //console.log(arguments); // { '0': 5, '1': 3 }
    var sum = callback(arguments[0], arguments[1]);
    console.log(`${name}(${arguments[0]},${arguments[1]}) => ${sum}`);
  };
};

var sum = function (a,b) { return a + b; };
var logSum = wrapLog(sum, "sum");

// logSum = function(){
//   console.log(arguments); // { '0': 5, '1': 3 }
//   var sum = callback(arguments[0], arguments[1]);
//   console.log(`${name}(${arguments[0]},${arguments[1]}) => ${sum}`);
// };

logSum(5,3); // sum(5,3) => 8
logSum(3,2); // sum(3,2) => 5
