// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Create a function that returns a function making use of a closure to
 * perform a repeatable 2d translation of a coordinate pair.
 *
 * @param {number} dx the translate x component
 * @param {number} dy the translate y component
 *
 * @returns {function} a function which takes an x, y parameter, returns the
 *  translated coordinate pair in the form [x, y]
 */

export function translate2d(dx, dy) {
 const f = function(x, y)
 {
   x += dx;
   y += dy;
   return([x, y])
 }
 return (f);
}

/**
 * Create a function that returns a function making use of a closure to
 * perform a repeatable 2d scale of a coordinate pair.
 *
 * @param {number} sx the amount to scale the x component
 * @param {number} sy the amount to scale the y component
 *
 * @returns {function} a function which takes an x, y parameter, returns the
 *  scaled coordinate pair in the form [x, y]
 */
export function scale2d(sx, sy) {
  const f = function(x, y)
  {
    x *= sx;
    y *= sy;
    return([x, y])
  }
  return (f);
}

/**
 * Create a composition function that returns a function that combines two
 * functions to perform a repeatable transformation
 *
 * @param {function} f the first function to apply
 * @param {function} g the second function to apply
 *
 * @returns {function} a function which takes an x, y parameter, returns the
 *  transformed coordinate pair in the form [x, y]
 */
export function composeTransform(f, g) {
  const h = function(a, b)
  {
    let d = f(a, b);
    return (g(d[0], d[1]));
  }
  return (h);
}

/**
 * Return a function that memoizes the last result.  If the arguments are the same as the last call,
 * then memoized result returned.
 *
 * @param {function} f the transformation function to memoize, assumes takes two arguments 'x' and 'y'
 *
 * @returns {function} a function which takes x and y arguments, and will either return the saved result
 *  if the arguments are the same on subsequent calls, or compute a new result if they are different.
 */
export function memoizeTransform(f) {
  
  let x_mem;
  let y_mem;
  let res_mem;
  const h = function(x, y)
  {   
    if (x != x_mem && y != y_mem)
    {
      let d = f(x, y)
      res_mem = [d[0], d[1]]      
    }  
    x_mem = x;
    y_mem = y;
    return (res_mem);   
  }
  return (h);
}