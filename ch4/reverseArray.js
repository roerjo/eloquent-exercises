/*
For this exercise, write two functions, reverseArray and reverseArrayInPlace. The first, reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order. The second, reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument in order to reverse its elements. Neither may use the standard reverse method.
*/


//My solution:

function reverseArray(arr) {
    var newArr = [];
    
    for(var i = arr.length - 1; i >= 0; i--) {
        newArr.push(arr[i]);
    }
    return newArr;
}

function reverseArrayInPlace(arr) {
    var start = 0;
    var end = arr.length - 1;
    var halfArray = arr.length / 2;

    for(var i = end; i >= halfArray; i--) {
        var temp = arr[start];
        arr[start] = arr[i];
        arr[i] = temp;
        start++;
    }
    return arr;
}

console.log(reverseArray(["A", "B", "C"]));
var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);

