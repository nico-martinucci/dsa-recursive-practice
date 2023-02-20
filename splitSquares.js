/**
 * dump: Creates a string representation of a split square scheme, where "1"
 * represents filled and "0" represents unfilled.
 * 
 * @example
 *  input: [0, 0, 0, [1, 0, [1, 1, 0, 1], 0, 0]]
 *  output: "0 0 0 1 0 1 1 0 1 0 0"
 * 
 * @param {*} square - split square scheme to be dumped
 * @param {*} accumulator - optional starting data; defaults to []
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
 * @param {*} square 
 * @returns 
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

module.exports = {
    dump,
    validate
}