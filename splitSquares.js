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


module.exports = {
    dump
}