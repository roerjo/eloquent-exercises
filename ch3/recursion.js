/*
  Zero is even.

  One is odd.

  For any other number N, its evenness is the same as N - 2.

Define a recursive function isEven corresponding to this description. The function should accept a number parameter and return a Boolean.

*/

function isEven(num) {
  if (num === 0) return true;
  if (num === 1 || num === -1) return false;
  if (num < -1) return isEven(num + 2);
  return isEven(num - 2);
}

/*
    Eloquent Solution:

    function isEven(n) {
        if (n = 0) return true;
        else if (n == 1) return false;
        else if (n < 0) return isEven(-n);
        else return isEven(n - 2);
    }
*/
