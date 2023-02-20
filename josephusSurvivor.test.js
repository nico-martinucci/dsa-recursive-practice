const josephusSurvivor = require("./josephusSurvivor");
const LinkedList = require("./linked-list");

describe("josephusSurvivor", function () {
    it("works", function () {
        expect(josephusSurvivor(10, 3)).toEqual(4);
    });
});

describe("makeCircular instance method", function() {
    it("works", function() {
        const list = new LinkedList([1, 2, 3]);
        list.makeCircular();

        expect(list.tail.next.val).toEqual(1);
        list.pop();

        expect(list.tail.next).toEqual(null);
        
        list.makeCircular();
        expect(list.tail.next.val).toEqual(1);
    })
});