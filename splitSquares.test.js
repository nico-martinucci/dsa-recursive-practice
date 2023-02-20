const { dump } = require("./splitSquares");

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