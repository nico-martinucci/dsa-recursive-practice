const exp = require("constants");
const { dump, validate, simplify, add } = require("./splitSquares");

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

describe("simplify", function () {
    it("works for simple squares", function () {
        const simpleSquare = 1;
        expect(simplify(simpleSquare)).toEqual(1);
    });

    it("works for simplifying nested squares", function () {
        const nestedSquareOnes = [1, 1, 1, 1];
        expect(simplify(nestedSquareOnes)).toEqual(1);
        
        const nestedSquareMix = [1, 1, 0, 1];
        expect(simplify(nestedSquareMix)).toEqual([1, 1, 0, 1]);
    });

    it("works for deeply-nested squares", function () {
        const nestedSquareOnes = [1, 1, [1, 1, 1, 1], [1, 1, 1, 1]];
        expect(simplify(nestedSquareOnes)).toEqual(1);

        const nestedSquareMix = [[1, 1, 1, 1], [0, 0, 0, 0], [1, 0, 1, 0], 0];
        expect(simplify(nestedSquareMix)).toEqual([1, 0, [1, 0, 1, 0], 0]);

        const noSimplification = [
            [1, 0, 1, 0], 
            [1, 0, 1, 0], 
            [1, 0, 1, 0], 
            [1, 0, 1, 0]
        ];
        expect(simplify(noSimplification)).toEqual([
            [1, 0, 1, 0], 
            [1, 0, 1, 0], 
            [1, 0, 1, 0], 
            [1, 0, 1, 0]
        ])
    })
});

describe("add", function () {
    it("works for simple squares", function () {
        const squareOne = 1;
        const squareTwo = 2;

        expect(add(squareOne, squareTwo)).toEqual()
    });
})