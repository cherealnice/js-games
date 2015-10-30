
var readline = require("readline");

var reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function HanoiGame () {
  this.towers = [[1,2,3],[],[]];
};


HanoiGame.prototype.promptMove = function (callback) {
  // this.print();

  reader.question("Which tower would you like to grab a disc from?", function (answer) {
    reader.question("Which tower would you like to move your disc to?", function (answer2) {
      var fromIdx = parseInt(answer);
      var toIdx = parseInt(answer2);
      callback(fromIdx, toIdx);
    });
  });
};



var hg = new HanoiGame();

hg.promptMove(function(a, b) { console.log( a+ b)});
