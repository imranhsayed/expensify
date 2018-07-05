import './utils.js';

/**
 * import is used to import certain functions from a given file, the name of those functions are defined here
 * inside the {}.
 * Note that the order of these function names don't matter.
 */
import isSenior, { square, add } from "./utils.js";
import { isAdult, canDrink } from "./person.js";

console.log( square( 2 ) );
console.log( add( 3, 2 ) );
console.log( isAdult( 21 ) );
console.log( canDrink( 22 ) );
console.log( isSenior( 12 ) );

import validator from 'validator';
console.log( validator.isEmail( 'test@gmail.com' ) );