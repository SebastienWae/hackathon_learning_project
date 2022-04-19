// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  let n = '';
  for (let k in array1){
    n += array1[k]; 
  }
  let m = '';
  for (let k in array2){
    m += array2[k];   
  }
  return (Number(m) + Number(n));
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean}  whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  let str = String(value);
  for (let k = 0; k < str.length / 2; k++){
    if (str[k] != str[str.length - 1 - k]){
      return(false);
    }
  }
  return (true);
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
  let res;
  input ? Number(input) ? res = '' : res = 'Must be a number besides 0' : res = 'Required field';
  return (res);
}
