/*
Write a function arrayToList that builds up a data structure like the previous one when given [1, 2, 3] as argument, and write a listToArray function that produces an array from a list. Also write the helper functions prepend, which takes an element and a list and creates a new list that adds the element to the front of the input list, and nth, which takes a list and a number and returns the element at the given position in the list, or undefined when there is no such element.

If you haven’t already, also write a recursive version of nth.
*/

//My solution:

function arrayToList(array) {
    var list = null;
    
    for (var i = array.length - 1; i >= 0; i--) {
        list = {value: array[i], rest: list};
    }
    
    return list;
}

function listToArray(list) {
    var arr = [];

    while(list["rest"]) {
        arr.push(list["value"]);
        list = list["rest"];
    }
    return arr;
}

function prepend(elem, list) {
    var newList = {value: elem, rest: list};
    return newList;
}

function nth(list, num) {
    var count = 0;
    
    while(count != num) {
        list = list["rest"];
        if (!list)
          return undefined;
        count++;
    }

    return list["value"];
}

function nthRecursive(list, num) {
    if(num) {
        num--;
        list = list["rest"];
        if (!list) {
            return undefined;
        }
        return nthRecursive(list, num);
    }
    return list["value"];
}

console.log(arrayToList([10, 20]));
console.log(listToArray(arrayToList([10, 20, 30])));
console.log(prepend(10, prepend(20, null)));
console.log(nthRecursive(arrayToList([10, 20, 30]), 1));

/*
 Eloquent's Solution:

function arrayToList(array) {
  var list = null;
  for (var i = array.length - 1; i >= 0; i--)
    list = {value: array[i], rest: list};
  return list;
}

function listToArray(list) {
  var array = [];
  for (var node = list; node; node = node.rest)
    array.push(node.value);
  return array;
}

function prepend(value, list) {
  return {value: value, rest: list};
}

function nth(list, n) {
  if (!list)
    return undefined;
  else if (n == 0)
    return list.value;
  else
    return nth(list.rest, n - 1);
}
*/
