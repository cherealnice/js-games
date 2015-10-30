var readline = require("readline");

var reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function HanoiGame () {
  this.towers = [[1,2,3],[],[]];
};

HanoiGame.prototype.isWon = function () {
  var gameWon = true
  for ( var i = 0; i < 2; i++ ){
    if (this.towers[i].length > 0){
    gameWon = false;
  }
}
return gameWon;
};

HanoiGame.prototype.isValidMove = function(startIdx, endIdx) {
  var startDisc = this.towers[startIdx][0];
  var endDisc = this.towers[endIdx][0];

  return this.towers[startIdx].length > 0 &&
      (this.towers[endIdx].length === 0 ||
       endDisc > startDisc);
};

HanoiGame.prototype.move = function(startIdx, endIdx) {
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
  while (this.isWon() === false) {
    this.promptMove(this.move.bind(this));
  }
  completionCallback();
};

var hg = new HanoiGame

hg.run(function () {
console.log("You won!");
reader.close();
});

// console.log("Last program line");
