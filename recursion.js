/** product: calculate the product of an array of numbers. */

function product(nums) {
  if (nums.length === 0) return 1;
  return nums[0] * product(nums.splice(1));
}

function otherProduct(nums, i = 0) {
  if (i === nums.length) return 1;
  return nums[i] * otherProduct(nums, i + 1);
}

/** longest: return the length of the longest word in an array of words. */

function longest(words) {
  if (words.length === 0) return 0;
  const wordLength = words[0].length;
  const longestOfOtherWords = longest(words.splice(1));
  if (wordLength > longestOfOtherWords) return wordLength;
  else return longestOfOtherWords;
}

function otherLongest(words, i = 0) {
  if (i === words.length) return 0;
  const wordLength = words[i].length;
  const longestOfOtherWords = otherLongest(words, i + 1);
  if (wordLength > longestOfOtherWords) return wordLength;
  else return longestOfOtherWords;
}

/** everyOther: return a string with every other letter. */

function everyOther(str) {
  if (str.length === 0) return "";

  return str[0] + everyOther(str.slice(2));
}

function otherEveryOther(str, i = 0) {
  if (i >= str.length) return "";

  return str[i] + otherEveryOther(str, i + 2);
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
  if (str.length === 1 || str.length === 0) return true;
  const first = str[0];
  const last = str[str.length - 1];
  if (first !== last) return false;
  return isPalindrome(str.slice(1, str.length - 1));
}

function otherIsPalindrome(str, i = 0) {
  const first = i;
  const last = str.length - 1 - i;

  if (first >= last) return true;

  if (str[first] !== str[last]) return false;
  return otherIsPalindrome(str, i + 1);
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val) {
  if(arr.length === 0) return -1;
  if(arr[0]===val) return 0;
  const findResult = findIndex(arr.slice(1), val);

  if(findResult === -1){
    return -1;
  }
  else{
    return 1 + findResult;
  }
}

function otherFindIndex(arr, val, i = 0) {
  if(i === arr.length) return -1;
  if(arr[i] === val) return i;
  return otherFindIndex(arr, val, i + 1);
}


/** revString: return a copy of a string, but in reverse. */

function revString(str) {
  if (str.length === 0) return "";

  return revString(str.slice(1)) + str[0];
}

function otherRevString(str, i = 0) {
  if (i === str.length) return "";

  return otherRevString(str, i + 1) + str[i];
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let strings = [];


  function _gatherStrings(keys){
    if (keys.length === 0) return;
    if (typeof obj[keys[0]] === "string") strings.push(obj[keys[0]]);
    if (typeof obj[keys[0]] === "object") strings.push(...gatherStrings(obj[keys[0]]));
    _gatherStrings(keys.slice(1));
  }

  function _otherGatherStrings(keys, i = 0){
    if (i === keys.length) return;
    if (typeof obj[keys[i]] === "string") strings.push(obj[keys[i]]);
    if (typeof obj[keys[i]] === "object") strings.push(...gatherStrings(obj[keys[i]]));
    _gatherStrings(keys, i + 1);
  }
  
  _gatherStrings(Object.keys(obj));
  return strings;

}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val) {

  function _binarySearch(arr, val, left, right){
    let middle = Math.floor((left + right)/2);
    if(arr[middle] === val) return middle;
    else if (left === right) return -1;
    if ( arr[middle] > val) return _binarySearch(arr, val, left, middle-1);
    else if ( arr[middle] < val) return _binarySearch(arr, val, middle+1, right);
  }

  return _binarySearch(arr, val, 0, arr.length-1);
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
