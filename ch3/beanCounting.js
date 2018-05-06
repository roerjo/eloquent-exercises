/*
Write a function countBs that takes a string as its only argument and returns a number that indicates how
many uppercase “B” characters are in the string.

Next, write a function called countChar that behaves like countBs, except it takes a second argument that
indicates the character that is to be counted (rather than counting only uppercase “B” characters).
Rewrite countBs to make use of this new function.
*/

function countBs(str) {
  return countChar(str, "B");
}

function countChar(str, chr) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === chr) count++;
  return count;
}

/*
    Eloquent Solution:

    function countBs(string) {
        return countChar(string, "B");
    }

    function countChar(string, ch) {
        let counted = 0;
        for (let i = 0; i < string.length; i++) {
            if (string[i] == ch) {
                counted += 1;
            }
        }
        return counted;
    }
*/

console.log(countBs("BBC"));
console.log(countChar("kakkerlak", "k"));
