const exp = require("constants");
const { dump, validate } = require("./splitSquares");

describe("dump", function () {
    it("works for simple squares", function () {
        const filledSquare = 1;
        expect(dump(filledSquare)).toEqual("1");
        
        const emptySquare = 0;
        expect(dump(emptySquare)).toEqual("0");
    });
    
    it("works for nested square", function () {
        const nestedSquare = [0, 1, 0, 1];
        expect(dump(nestedSquare)).toEqual("0 1 0 1");
    });
    
    it("works for deeply nested squares", function () {
        const nestedSquare = [0, [0, 1, 1, 1], 0, 0];
        expect(dump(nestedSquare)).toEqual("0 0 1 1 1 0 0");
        
        const moreNestedSquare = [0, 0, 0, [1, 1, 1, [0, 0, 0, [1, 1, 1, 1]]]];
        expect(dump(moreNestedSquare)).toEqual("0 0 0 1 1 1 0 0 0 1 1 1 1");
    });
});

describe("validate", function () {
    it("works for simple squares", function () {
        const filledSquare = 1;
        expect(validate(filledSquare)).toBeTruthy();
        
        const emptySquare = 0;
        expect(validate(emptySquare)).toBeTruthy();
        
        const badSquare = 2;
        expect(validate(badSquare)).toBeFalsy();
    });

    it("works for nested squares", function () {
        const goodNestedSquare = [1, 0, 1, 0];
        expect(validate(goodNestedSquare)).toBeTruthy();

        const tooManyVals = [1, 0, 1, 0, 1];
        expect(validate(tooManyVals)).toBeFalsy();

        const badVals = [1, 2, 3, 4];
        expect(validate(badVals)).toBeFalsy();
    });

    it("works for deeply nested squares", function () {
        const nestedSquare = [0, [0, 1, 1, 1], 0, 0];
        expect(validate(nestedSquare)).toBeTruthy();
        
        const moreNestedSquare = [0, 0, 0, [1, 1, 1, [0, 0, 0, [1, 1, 1, 1]]]];
        expect(validate(moreNestedSquare)).toBeTruthy();

        const badNestedSquare = [0, [0, 1, 1], 0, 0, 1, 0];
        expect(validate(badNestedSquare)).toBeFalsy();
        
        const badNestedSquareVals = [0, [0, 1, 9, 0], 0, 0, 1];
        expect(validate(badNestedSquareVals)).toBeFalsy();
    });
});