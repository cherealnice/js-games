var readline = require("readline");

var reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function HanoiGame () {
  this.towers = [[1,2,3],[],[]];
};

HanoiGame.prototype.isWon = function () {
  var gameWon = false
  for ( var i = 1; i < 3; i++ ){
    if (this.towers[i].length === 3){
    gameWon = true;
  }
}
return gameWon;
};

HanoiGame.prototype.isValidMove = function(startIdx, endIdx) {
  if (startIdx === 'undefined' || endIdx === 'undefined') {
    return false;
  };
  var startDisc = this.towers[startIdx][0];
  var endDisc = this.towers[endIdx][0];

  return this.towers[startIdx].length > 0 &&
      (this.towers[endIdx].length === 0 ||
       endDisc > startDisc);
};

HanoiGame.prototype.move = function(startIdx, endIdx) {
  this.print();
if (this.isValidMove(startIdx, endIdx)) {
  var movedDisc = this.towers[startIdx].shift();
  this.towers[endIdx].unshift(movedDisc);
  return true;
} else { console.log("Error: invalid move") }
};

HanoiGame.prototype.print = function() {
  console.log(JSON.stringify(this.towers));
};

HanoiGame.prototype.promptMove = function (callback) {
  this.print();

  reader.question("Which tower would you like to grab a disc from?", function (answer) {
    reader.question("Which tower would you like to move your disc to?", function (answer2) {
      var fromIdx = parseInt(answer);
      var toIdx = parseInt(answer2);
      callback(fromIdx, toIdx);
    });
  });
};

HanoiGame.prototype.run = function(completionCallback) {
    var fun = function(fromIdx, toIdx) {
      this.move.bind(this)(fromIdx, toIdx);
      if (this.isWon.bind(this)()) {
        completionCallback();
      } else {
        this.promptMove(fun.bind(this));
      }
    };

    this.promptMove(fun.bind(this))
  };

var hg = new HanoiGame

hg.run(function () {
console.log("You won!");
reader.close();
});
