var assert = require("assert");
var colors = require("colors");

var last = function (arr) { 
  	return arr[arr.length - 1];
};

  // return the last value in the arr
  // return undefined if arr.length is 0

var testArr = [5, 6, 7, 8];
// Write assertions for a function called 'last' that returns the last element
// of an array.
assert.equal(last(testArr), 8, ("returns 8 for [" + testArr + "]").red);
console.log("Assert is working!".cyan);


