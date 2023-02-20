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

}


module.exports = {
    dump,
    validate,
    simplify,
    add
}