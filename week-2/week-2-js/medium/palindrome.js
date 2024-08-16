/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/
// The .replace(/[^\w]/g, '') method in JavaScript is used to remove all non-word characters from a string.
function isPalindrome(str) {
  str = str.replace(/[^\w]/g, '').toLowerCase();
  let i=0, j=str.length-1;
  while(i<=j){
    if(str[i]!=str[j]) return false;
    i++;
    j--;
  }
  return true;
}

module.exports = isPalindrome;
