/*
For this exercise, write two functions, reverseArray and reverseArrayInPlace. The first, reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order. The second, reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument in order to reverse its elements. Neither may use the standard reverse method.
*/


//My solution:

function reverseArray(list) {
  let newList = [];

  for (let i of list) {
    newList.unshift(i);
  }

  return newList;
}

function reverseArrayInPlace(list) {
  for (let i=0; i < list.length; i++) {
    list.splice(i, 0, list.pop());
  }

  return list;
}

console.log(reverseArray(["A", "B", "C"]));
var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);

/*
    Eloquents solution:
    function reverseArray(array) {
      let output = [];
      for (let i = array.length - 1; i >= 0; i--) {
        output.push(array[i]);
      }
      return output;
    }

    function reverseArrayInPlace(array) {
      for (let i = 0; i < Math.floor(array.length / 2); i++) {
        let old = array[i];
        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - i] = old;
      }
      return array;
    }
*/


