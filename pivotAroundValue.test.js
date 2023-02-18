// const LinkedList = require("./linked-list");
const LinkedListWithPivot = require("./pivotAroundValue");

describe("pivotAroundValue", function () {
    it("works", function () {
        const list = new LinkedListWithPivot([7, 6, 2, 3, 9, 1, 1]);
        list.pivot(5);

        expect(list.head.val).toEqual(2);
        expect(list.head.next.val).toEqual(3);
        expect(list.head.next.next.val).toEqual(1);
        expect(list.head.next.next.next.val).toEqual(1);
        expect(list.head.next.next.next.next.val).toEqual(7);
        expect(list.head.next.next.next.next.next.val).toEqual(6);
        expect(list.head.next.next.next.next.next.next.val).toEqual(9);
        expect(list.head.next.next.next.next.next.next.next).toEqual(null);
    });

    it("works with val in list", function () {
        const list = new LinkedListWithPivot([7, 6, 2, 5, 3, 5, 9, 1, 1]);
        list.pivot(5);

        expect(list.head.val).toEqual(2);
        expect(list.head.next.val).toEqual(3);
        expect(list.head.next.next.val).toEqual(1);
        expect(list.head.next.next.next.val).toEqual(1);
        expect(list.head.next.next.next.next.val).toEqual(7);
        expect(list.head.next.next.next.next.next.val).toEqual(6);
        expect(list.head.next.next.next.next.next.next.val).toEqual(5);
        expect(list.head.next.next.next.next.next.next.next.val).toEqual(5);
        expect(list.head.next.next.next.next.next.next.next.next.val).toEqual(9);
        expect(list.head.next.next.next.next.next.next.next.next.next).toEqual(null);
    })
});