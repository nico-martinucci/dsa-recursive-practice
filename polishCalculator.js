/**
 * polishCaluclator: takes a polish notation calculator expression and actually
 * does the math to return a result.
 * 
 * @example
 *  input: / 6 - 4 2 (i.e. 6 / (4 - 2))
 *  output: 3
 * 
 * @param {String} exp - polish calculator expression to evaluate
 * @returns result of the calculation
 */
function polishCalculator(exp) {
    const expArr = exp.split(" ");
    let result = +expArr[expArr.length - 1];
    let tempNum = null;

    for (let i = expArr.length - 2; i >= 0; i--) {
        if (typeof +expArr[i] === "number" && !isNaN(+expArr[i])) {
            tempNum = +expArr[i];
        } else {
            if (expArr[i] === "+") result += tempNum;
            if (expArr[i] === "-") result = tempNum - result;
            if (expArr[i] === "*") result *= tempNum;
            if (expArr[i] === "/") result = tempNum / result;
        }
    }

    return result;
}


module.exports = polishCalculator;