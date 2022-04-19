// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  let res = 0
  let str = '';

  for(let i = 0; i < array1.length; i++)
    str += array1[i]
  res += Number(str);
  
  str = ''
  for(let i = 0; i < array2.length; i++)
    str += array2[i]
  res += Number(str)
  return (res)
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean}  whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  let str = String(value);

  for(let i = 0; i < str.length; i++)
  {
    if (str[i] != str[str.length - 1 - i])
      return (false);
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

  input ? Number(input) ? res = '' : res = 'Must be a number besides 0' : res = 'Required field' 
  return (res);
}
