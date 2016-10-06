// var nextId = (function () {
//   var id = 0;
//
//   return function () {
//     id += 1;
//     return id;
//   }
// })();
//
// console.log(nextId()); // 1
// console.log(nextId()); // 2
//
// var nextId = function () {
//   var id = 0;
//
//   return function () {
//     id += 1;
//     return id;
//   }
// };
//
// console.log(nextId()); // [function]
// console.log(nextId()); // function

var loadedDie = (function () {
  var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
  var idx = -1;
  return function () {
    idx += 1;
    return list[idx];
  };
})();

// console.log(loadedDie());  // 5
// console.log(loadedDie());  // 4
// console.log(loadedDie());  // 6

var countdownGenerator = function (x) {
  return function(){
    if(x === 0){
      console.log("Blast Off!");
    }
    else if(x < 0){
      console.log("Rockets already gone, bub!");
    }
    else console.log(`T-minus ${x}...`);
    x--;
  };
};

var countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!
