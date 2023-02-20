const polishCalculator = require("./polishCalculator");

describe("polishCalculator", function () {
    it("works for addition", function () {
        expect(polishCalculator("+ 1 2")).toEqual(3);
    });
    
    it("works for subtraction", function () {
        expect(polishCalculator("- 2 1")).toEqual(1);
    });
    
    it("works for multiplication", function () {
        expect(polishCalculator("* 3 2")).toEqual(6);
    });
    
    it("works for division", function () {
        expect(polishCalculator("/ 6 3")).toEqual(2);
    });
    
    it("works for mixed operations", function () {
        expect(polishCalculator("+ 9 * 2 3")).toEqual(15);
        expect(polishCalculator("- 9 * 2 3")).toEqual(3);
        expect(polishCalculator("/ 6 - 4 2")).toEqual(3);
    });
});