/**
 * dump: Creates a string representation of a split square scheme, where "1"
 * represents filled and "0" represents unfilled.
 * 
 * @example
 *  input: [0, 0, 0, [1, 0, [1, 1, 0, 1], 0, 0]]
 *  output: "0 0 0 1 0 1 1 0 1 0 0"
 * 
 * @param {number | (number | [])[]} square - split square scheme to be dumped
 * @param {[]} accumulator - optional starting data; defaults to []
 * @returns string version of square's scheme
 */
function dump(square, accumulator=[]) {
    if (!Array.isArray(square)) return square.toString();

    for (let elem of square) {
        accumulator.push(dump(elem));
    }

    return accumulator.join(" ");
}


/**
 * validate: Validates if a provided square is valid. Valid squares are made up
 * of only 1s, 0s, and arrays of length 4.
 * 
 * @example
 *  input: 1
 *  output: true
 * 
 *  input: 2
 *  output: false
 * 
 *  input: [1, 0, 1, 1]
 *  output: true
 * 
 *  input: [1, 0, 1, 1, 1]
 *  output: false
 * 
 * @param {number | (number | [])[]} square - split square to be validated
 * @returns true if split square is valid; false if not
 */
function validate(square) {
    if (!Array.isArray(square)) return square === 0 || square === 1;
    if (Array.isArray(square) && square.length !== 4) return false;

    let isValidSquare = true;
    for (let elem of square) {
        isValidSquare = isValidSquare && validate(elem);
    }

    return isValidSquare;
}


/**
 * simplify: Simplifies a square wherever possible, returning a simplified
 * square. Simplifications are possible where a square is made up of all of the
 * same value (e.g. [1, 1, 1, 1] --> 1)
 * 
 * @param {number | (number | [])[]} square 
 * @returns a simplified square
 */
function simplify(square) {
    if (!Array.isArray(square)) return square;

    let subSquare = [];
    for (let elem of square) {
        subSquare.push(simplify(elem));
    }

    if (subSquare.every(s => s === subSquare[0])) return subSquare[0];

    return subSquare;
}


function add(squareOne, squareTwo) {
    // some element of comparison: we'll have moments where one will be an
    //      array of length 4 and the other will just be a value; need to turn the
    //      value into an array of length 4 populated with just that value

    // base: if both s1 and s2 are numbers AND either s1 or s2 is a 1, return 1; otherwise return 0
    //      (can probably just return the Math.max of the two)

    // here: one or both of s1 and s2 are arrays
    // if either is NOT an array, convert it into an array of length 4 full of that value

    // create new array 
    // loop through s1 and s2, passing each val from each recursively into add; push results into new array

    // return new array

    if (typeof squareOne === "number" && typeof squareTwo === "number") {
        // will return 1 if either is a 1; 0 if neither is a 1
        return Math.max(squareOne, squareTwo);
    }

    let squareOneArr = squareOne;
    let squareTwoArr = squareTwo;

    if (typeof squareOne === "number") {
        squareOneArr = [];
        for (let i = 0; i < 4; i++) {
            squareOneArr.push(squareOne);
        }
    }
    
    if (typeof squareTwo === "number") {
        squareTwoArr = [];
        for (let i = 0; i < 4; i++) {
            squareTwoArr.push(squareTwo);
        }
    }

    let addedSquares = [];

    for (let i = 0; i < squareOneArr.length; i++) {
        addedSquares.push(add(squareOneArr[i], squareTwoArr[i]));
    }

    return addedSquares;
}


module.exports = {
    dump,
    validate,
    simplify,
    add
}