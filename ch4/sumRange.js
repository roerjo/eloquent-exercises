/*
Write a range function that takes two arguments, start and end, and returns an array containing
all the numbers from start up to (and including) end.

Next, write a sum function that takes an array of numbers and returns the sum of these numbers.
Run the previous program and see whether it does indeed return 55.

As a bonus assignment, modify your range function to take an optional third argument that
indicates the “step” value used to build up the array. If no step is given, the array elements
go up by increments of one, corresponding to the old behavior. The function call range(1, 10, 2)
should return [1, 3, 5, 7, 9]. Make sure it also works with negative step values so that
range(5, 2, -1) produces [5, 4, 3, 2].
*/

//My solution:

function range(start, end, step = 1) {
    let numbers = [];

    if (start > end && step < 0) {
        while (end <= start) {
            numbers.push(start);
            start += step;
        }
    } else if (start < end && step > 0) {
        while (start <= end) {
            numbers.push(start);
            start += step;
        }
    }

    return numbers;
}

function sum(numbers) {
    let total = 0;

    for (let num of numbers) {
        total += num;
    }

    return total;
}

/*

    Eloquent's Solution:

    function range(start, end, step = start < end ? 1 : -1) {
      let array = [];

      if (step > 0) {
        for (let i = start; i <= end; i += step) array.push(i);
      } else {
        for (let i = start; i >= end; i += step) array.push(i);
      }
      return array;
    }

    function sum(array) {
      let total = 0;
      for (let value of array) {
        total += value;
      }
      return total;
    }

*/

console.log(sum(range(1, 10, 2)));
console.log(range(5, 2, -1));
