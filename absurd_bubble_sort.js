
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
  });
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
        madeAnySwaps = true
      }
      innerBubbleSortLoop(arr, i + 1, madeAnySwaps, outerBubbleSortLoop)
    });
  }
};

function absurdBubbleSort (arr, sortCompletionCallback) {
  function outerBubbleSortLoop(madeAnySwaps){
    if (madeAnySwaps) {
      innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop)

    } else {
      sortCompletionCallback(arr);
    }
  }
  var madeAnySwaps = true;
  outerBubbleSortLoop(madeAnySwaps);
}

absurdBubbleSort([3,2,1], function (arr) {
  console.log("Sorted array: " + JSON.stringify(arr));
  reader.close();
});
console.log("Last program line");
