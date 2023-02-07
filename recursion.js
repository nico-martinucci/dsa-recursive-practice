/** product: calculate the product of an array of numbers. */

function product(nums) {

  /**
   * base case: empty array; return 1
   * progress: nums[0] * rest of nums
   *
   * 1
   * 4 * p([])
   * 3 * p([4])
   * 2 * p([3, 4])
   * p([2, 3, 4]) => bottom of the stack
   */

  if(nums.length === 0) return 1;
  return nums[0] * product(nums.slice(1))
}

/** longest: return the length of the longest word in an array of words. */

function longest(words) {
  /**
   * 0
   * 4  l([]) ==> Math.max(4, 0) => 4
   * 2  l(["hola"]) ==> Math.max(2, 4) => 4
   * 5  l(["hi", "hola"]) ==> Math.max(5, 4) => 5
   * l(["hello", "hi", "hola"]) => bottom of the stack => 5
   */

  if(words.length === 0) return 0;

  return Math.max(words[0].length, longest(words.slice(1)))
}

/** everyOther: return a string with every other letter. */

function everyOther(str) {

  /**
   * ""
   * "o" e("")
   * "l" e("o") ?
   * "h" e("llo")
   * e("hello")
   */

  if(str.length === 0) return "";

  return str[0] + everyOther(str.slice(2))

}

/** find: return boolean depending on if val exists in array or not. */

function find(arr, val) {

}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {

}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {

}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val) {

}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {

  let results = []

  function _gatherStrs(obj){
    for(let val of Object.values(obj)){
      if(typeof val === "object") {
        _gatherStrs(val)
      } else if (typeof val === "string") {
        results.push(val)
      }
    }
  }

  _gatherStrs(obj);
  return results;

}

// FURTHER STUDY

/** binarySearch: given a sorted array of numbers, and a value,
 * return true if val is in array, false if not present). */

function binarySearch(arr, val) {

}


/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearchIndex(arr, val) {

}

// you might find the above two problems easier if you change the function signature to:
//
// function binarySearch(arr, val, left = 0, right = arr.length) {
//
// }


module.exports = {
  product,
  longest,
  everyOther,
  find,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch,
  binarySearchIndex,
};
