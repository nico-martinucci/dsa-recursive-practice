const LinkedList = require("./linked-list")

/**
 * sortSortedLinkedLists: Given two already-sorted linked lists, returns a new,
 * combined, sorted linked list.
 * 
 * @param {LinkedList} a 
 * @param {LinkedList} b 
 * 
 * @returns A new, combined, sorted linked list.
 */
function sortSortedLinkedLists(a, b) {
    const newLL = new LinkedList();

    while (a.length && b.length) {
        if (a.head.val < b.head.val) {
            newLL.push(a.shift());
        } else if (b.head.val <= a.head.val) {
            newLL.push(b.shift());
        }
    }

    while (a.length) {
        newLL.push(a.shift());
    }

    while (b.length) {
        newLL.push(b.shift());
    }

    return newLL;
}


module.exports = sortSortedLinkedLists;