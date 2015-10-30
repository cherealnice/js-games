"use strict";

function Clock () {
};

  Clock.TICK = 5000;

  Clock.prototype.printTime = function () {
    var hours = this.date.getHours();
    var minutes = this.date.getMinutes();
    var seconds = this.date.getSeconds();
    console.log(hours + " : " + minutes + " : " + seconds);
  };

  Clock.prototype.run = function () {
    this.date = new Date();
    this.printTime();
    window.setTimeout(function () {
      this._tick();
    }.bind(this), Clock.TICK
    );
  }

  Clock.prototype._tick = function () {
    this.date.setTime(this.date.getTime() + Clock.TICK);
    this.run();
  };

  var clock = new Clock();
  // clock.run();

//########################

var readline = require('readline');
var reader = readline.createInterface({

  input: process.stdin,
  output: process.stdout
});


function addNumbers (sum, numsLeft, completionCallback) {
  if (numsLeft > 0){
    reader.question("What is your number?", function (answer) {
      sum += parseInt(answer);
      console.log("Temporary sum: " + sum );
      addNumbers(sum, numsLeft - 1, completionCallback)
    });

  } else {
    completionCallback(sum);
  }
};

addNumbers(0, 3, function (sum) {
  console.log("Total Sum: " + sum);
});

  // it's okay if this part is magic; it just says that we want to
  // 1. output the prompt to the standard output (console)
  // 2. read input from the standard input (again, console)



console.log("Last program line");

var readline = require("readline");

var reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function askIfGreaterThan(el1, el2, callback) {
  reader.question("Is " + el1 + " greater than " + el2 + " ?", function (answer) {
    if (answer === 'yes') {
      callback(true);
    } else {
    callback(false);
    }
  };
};

function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
  if (i == arr.length - 1) {
    outerBubbleSortLoop(madeAnySwaps);
  } else {
    askIfGreaterThan(arr[i], arr[i+1], function(boolean) {
      if (boolean === true) {
        var store = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = store;
      }
    };)
  }
};

function absurdBubbleSort (arr, sortCompletionCallback) {

};
