const sortSortedLinkedLists = require("./sortSortedLinkedLists");
const LinkedList = require("./linked-list");

describe("sortSortedLinkedLists", function () {
    it("works for evenly-sorted lists", function () {
        const listA = new LinkedList();
        listA.push(1);
        listA.push(3);
        listA.push(5);
        const listB = new LinkedList();
        listB.push(2);
        listB.push(4);
        listB.push(6);

        const newList = sortSortedLinkedLists(listA, listB);

        expect(newList.length).toEqual(6);
        expect(newList.head.val).toEqual(1);
        expect(newList.head.next.val).toEqual(2);
        expect(newList.head.next.next.val).toEqual(3);
        expect(newList.head.next.next.next.val).toEqual(4);
        expect(newList.head.next.next.next.next.val).toEqual(5);
        expect(newList.head.next.next.next.next.next.val).toEqual(6);
        expect(newList.head.next.next.next.next.next.next).toEqual(null);
        expect(newList.tail.val).toEqual(6)
    });
    
    it("works for unevenly-sorted lists", function () {
        const listA = new LinkedList();
        listA.push(1);
        listA.push(2);
        listA.push(3);
        const listB = new LinkedList();
        listB.push(4);
        listB.push(5);
        listB.push(6);

        const newList = sortSortedLinkedLists(listA, listB);

        expect(newList.length).toEqual(6);
        expect(newList.head.val).toEqual(1);
        expect(newList.head.next.val).toEqual(2);
        expect(newList.head.next.next.val).toEqual(3);
        expect(newList.head.next.next.next.val).toEqual(4);
        expect(newList.head.next.next.next.next.val).toEqual(5);
        expect(newList.head.next.next.next.next.next.val).toEqual(6);
        expect(newList.head.next.next.next.next.next.next).toEqual(null);
        expect(newList.tail.val).toEqual(6)
    });
    
    it("works for empty lists", function () {
        const listA = new LinkedList();
        const listB = new LinkedList();

        const newList = sortSortedLinkedLists(listA, listB);

        expect(newList.length).toEqual(0);
        expect(newList.head).toEqual(null);
        expect(newList.tail).toEqual(null);
    });
});