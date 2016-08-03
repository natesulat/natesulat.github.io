/**
 *
 * Independent Practice: Functions and Callbacks
 *
 * GOALS
 *
 * Your goal in this exercise is for the last line of code in this file to log
 * the number of odd numbers in the array.
 *
 * DIRECTIONS
 *
 * Implement 'makeCountingFunction()', so that it accepts a predicate function
 * as an argument. 'makeCountingFunction()' should return another function that
 * is able to:
 *
 * 	1. iterate through an array and apply the predicate function to each item in
 * 	   that array,
 * 	2. increment a counter based on the result of applying the predicate function
 * 	   to that item (i.e. does it match what we're looking for?)
 * 	3. return the final count.
 *
 * The predicate function 'isOdd()' should accept an individual number as a
 * parameter and return whether or not that number is odd.
 *
 * BONUS 1: Can you write another predicate function that counts evens?
 * BONUS 2: Can you write a function that will sum up all the numbers?
 *
 */

function makeCountingFunction(condition) {
    return function(arr) {
    	var counter = 0;
    	arr.forEach(function(i) {
    		if(condition(i)) counter += 1;
    	});
        return counter;
    }
}

function sumFunction(condition) {
	return function(arr) {
		var counter = 0;
		arr.forEach(function(i) {
			counter += i;
		});
		return counter;
	}
}

function isOdd(x) {
    if (x % 2 !== 0) return x;
}

function isEven(x) {
	if (x % 2 === 0) return x;
}

function summing(x) {
	return x;
}

// =============================================================================
// The code below should work without modification.
// =============================================================================

/**
 * The line below should package up 'makeCountingFunction()' and 'isOdd()' into
 * a single function that accepts an array of items as a parameter, iterates
 * through it and returns a count of how many of those items are odd numbers.
 * This new function is being assigned to the variable 'countTheOdds'.
 */

var countTheOdds = makeCountingFunction(isOdd);
var countTheEvens = makeCountingFunction(isEven);
var sumTheNumbers = sumFunction(summing);

/**
 * The final line below calls our new 'countTheOdds()' function and passes in an
 * array of numbers. Once your code is working, the line below should return the
 * number 4.
 */


var testArray = [1, 2, 3, 4, 5, 6, 7];
var oddCount = countTheOdds(testArray);
var evenCount = countTheEvens(testArray);
var sumCount = sumTheNumbers(testArray);
console.log('There are ' + oddCount + ' odd numbers.');
console.log('There are ' + evenCount + ' even numbers.');
console.log('The sum of the array is: ' + sumCount);
// expected output: There are 4 odd numbers.
