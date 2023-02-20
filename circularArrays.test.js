const CircularArray = require("./circularArrays");

describe("CircularArray", function () {
    it("addItem works", function () {
        const c = new CircularArray();
        
        c.addItem(1);
        expect(c[0]).toEqual(1);

        c.addItem(2);
        expect(c[0]).toEqual(1);
        expect(c[1]).toEqual(2);

        c.addItem(3);
        expect(c[0]).toEqual(1);
        expect(c[1]).toEqual(2);
        expect(c[2]).toEqual(3);
    });
    
    it("getByIndex works", function () {
        const c = new CircularArray();
        
        c.addItem(1);
        c.addItem(2);
        c.addItem(3);

        expect(c.getByIndex(0)).toEqual(1);
        expect(c.getByIndex(1)).toEqual(2);
        expect(c.getByIndex(2)).toEqual(3);
    });
    
    it("rotate works", function () {
        const c = new CircularArray();
        
        c.addItem(1);
        c.addItem(2);
        c.addItem(3);

        expect(c.getByIndex(0)).toEqual(1);

        c.rotate(1);
        expect(c.getByIndex(0)).toEqual(2);
        
        c.rotate(1);
        expect(c.getByIndex(0)).toEqual(3);
        
        c.rotate(-2);
        expect(c.getByIndex(0)).toEqual(1);
    });

    it("all works together", function () {
        const c = new CircularArray();
        
        c.addItem(1);
        c.addItem(2);
        c.addItem(3);

        c.rotate(1);
        c.addItem(4);

        expect(c.getByIndex(0)).toEqual(2);
        expect(c.getByIndex(3)).toEqual(4);
    })
});