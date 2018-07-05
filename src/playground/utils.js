console.log( 'utils.js is running' );

// // Inline export of functions.
// export const square = ( x ) => x * x;
// export const add = ( a, b ) => a + b;

const square = ( x ) => x * x;
const add = ( a, b ) => a + b;

const subtract = ( a, b ) => a - b;

export default ( age ) => age > 64 && true;
/**
 * export is used to export certain functions to other files
 * the name of those functions are defined here inside the {}
 * Any file that wants to import these functions can use import to include them there.
 */
export { square, add };