/*
  Zero is even.

  One is odd.

  For any other number N, its evenness is the same as N - 2.

Define a recursive function isEven corresponding to this description. The function should accept a number parameter and return a Boolean.

*/

function isEven(num) {
  if (num == 0)
    return true;
  else if (num == 1)
    return false;
  else if (num > 1)
    return isEven(num - 2);
  else 
    return isEven(num + 2);
}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-5));
