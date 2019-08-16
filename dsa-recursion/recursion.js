/** product: calculate the product of an array of numbers. */

function product(nums) {
  if (nums.length === 0) return 1;
  return nums[0] * product(nums.slice(1))

}

/** longest: return the length of the longest word in an array of words. */
function longest(words, max = 0, i = 0) {
  if (words.length === i) return max;
  if (words[i].length > max) max = words[i].length
  return longest(words, max, i + 1)
}

/** everyOther: return a string with every other letter. */


function everyOther(str, end = "", i = 0) {
  if (str.length === i) return end;
  if (i % 2 === 0) end += str[i];
  return everyOther(str, end, i + 1)

}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, i = 0, k = str.length - 1, result = true) {
  if (i > k || result === false) return result;
  result = str[i] === str[k]
  return isPalindrome(str, i + 1, k - 1, result)
}
/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val) {

}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {

}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let newArray = [];
  function _gatherString(obj){
    for(let k in obj){
      if(typeof obj[k] === 'object'){
        _gatherString(obj[k])
      }else{
        if(typeof obj[k] === 'string'){
          newArray.push(obj[k])
        }
      }
    }
  }
  _gatherString(obj)
  return newArray
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val) {

}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
