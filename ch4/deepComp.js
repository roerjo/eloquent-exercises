/*
Write a function, deepEqual, that takes two values and returns true only if they are the same value
or are objects with the same properties whose values are also equal when compared with a recursive
call to deepEqual.

To find out whether to compare two things by identity (use the === operator for that) or by looking
at their properties, you can use the typeof operator. If it produces "object" for both values, you
should do a deep comparison. But you have to take one silly exception into account: by a historical
accident, typeof null also produces "object".
*/

//My solution:

function deepEqual(firstThing, secondThing) {
  if (firstThing !== null && secondThing !== null &&
      typeof firstThing === 'object' && typeof secondThing === 'object'
  ) {
    for (const key of Object.keys(firstThing)) {
      return deepEqual(firstThing[key], secondThing[key]);
    }
  } else if (firstThing !== secondThing) {
    return false;
  }

  return true;
}

/*
    Eloquent's solution:
    function deepEqual(a, b) {
      if (a === b) return true;

      if (a == null || typeof a != "object" ||
          b == null || typeof b != "object") return false;

      let keysA = Object.keys(a), keysB = Object.keys(b);

      if (keysA.length != keysB.length) return false;

      for (let key of keysA) {
        if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false;
      }

      return true;
    }
*/

var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, {here: 1, object: 2}));
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
