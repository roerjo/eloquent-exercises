/*
Write a function, deepEqual, that takes two values and returns true only if they are the same value or are objects with the same properties whose values are also equal when compared with a recursive call to deepEqual.

To find out whether to compare two things by identity (use the === operator for that) or by looking at their properties, you can use the typeof operator. If it produces "object" for both values, you should do a deep comparison. But you have to take one silly exception into account: by a historical accident, typeof null also produces "object".
*/

//My solution...pretty bad:

function deepEqual(val1, val2) {

    if(val1 === val2) {
        return true;
    }
    else if (typeof val1 == "object" && typeof val2 == "object") {
        var count = 0;
        for (var prop in val1) {
            count++;
        }
        var count2 = 0;
        for (var prop in val2) {
            count2++;
        }
        if(count != count2)
            return false;
        else {
            var test = true;
            for (var prop in val1) {
                test = deepEqual(val1[prop], val2[prop]);
                if(!test)
                  return false;
            }
            return true;
        }
    }
    else 
      return false;
}

var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, {here: 1, object: 2}));
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));

/*
	Eloquent's solution:
function deepEqual(a, b) {
  if (a === b) return true;
  
  if (a == null || typeof a != "object" ||
      b == null || typeof b != "object")
    return false;
  
  var propsInA = 0, propsInB = 0;

  for (var prop in a)
    propsInA += 1;

  for (var prop in b) {
    propsInB += 1;
    if (!(prop in a) || !deepEqual(a[prop], b[prop]))
      return false;
  }

  return propsInA == propsInB;
}
*/
