/** product: calculate the product of an array of numbers. */
// O(n) space and time
function product(nums, i = 0) {
  // base case
  if (nums.length === i) return 1;
  return nums[i] * product(nums, i + 1); // progress
}

/** longest: return the length of the longest word in an array of words. */
// O(n) space and time
function longest(words, i = 0) {
  if (words.length === i) return 0;
  return Math.max(words[i].length, longest(words, i + 1));
}

/** everyOther: return a string with every other letter. */
// O(n) space and time
function everyOther(str, i = 0) {
  if (str.length <= i) return "";
  return str[i] + everyOther(str, i + 2);
}

/** find: return boolean depending on if val exists in array or not. */
// O(n) space and time
function find(arr, val, i = 0) {
  if (arr.length === i) return false;
  return arr[i] === val || find(arr, val, i + 1);
}

/** isPalindrome: checks whether a string is a palindrome or not. */
// O(n) space and time
function isPalindrome(str, left = 0, right = str.length - 1) {
  // base case
  if (left >= right) return true;

  if (str[left] === str[right]) {
    return isPalindrome(str, left + 1, right - 1); // progress
  } else {
    return false;
  }
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, i = str.length - 1) {
  // base case
  if (i < 0) return "";
  return str[i] + revString(str, i - 1); // progress
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, i = 0) {
  // base case
  if (i >= arr.length) return -1;
  return arr[i] === val ? i : findIndex(arr, val, i + 1); // progress

}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj, results = []) {
  for (let val of Object.values(obj)) {
    if (typeof val === "object") {
      gatherStrings(val, results);
    } else if (typeof val === "string") {
      results.push(val);
    }
  }

  return results;
}

// FURTHER STUDY

/** binarySearch: given a sorted array of numbers, and a value,
 * return true if val is in array, false if not present). */

function binarySearch(arr, val, left = 0, right = arr.length - 1) {
  // base case
  if (left > right) {
    return false;
  }

  const middle = Math.floor((left + right) / 2);

  if (arr[middle] === val) {
    return true;
  } else if (arr[middle] > val) {
    return binarySearch(arr, val, left, middle - 1);  // progress
  } else {
    return binarySearch(arr, val, middle + 1, right); // progress
  }
}


/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearchIndex(arr, val, left = 0, right = arr.length - 1) {
  // base case

  if (left > right) {
    return -1;
  }

  const middle = Math.floor((left + right) / 2);

  if (arr[middle] === val) {
    return middle;
  } else if (arr[middle] > val) {
    return binarySearchIndex(arr, val, left, middle - 1); // progress
  } else {
    return binarySearchIndex(arr, val, middle + 1, right); // progress
  }
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
