const LinkedList = require("./linked-list");

class LinkedListWithPivot extends LinkedList {
    
    /**
     * pivot: Instance method to "pivot" a linked list based on the provided
     * value; all nodes with a lower value end up on left, and all nodes with
     * a greater than or equal to value end up on right, preserving original
     * order in both cases. Operates in-place.
     * 
     * @example
     *  Starting LinkedList: [7, 6, 2, 3, 9, 1, 1, 5]
     *  input: 5
     *  Pivoted LinkedList: [2, 3, 1, 1, 7, 6, 9, 5]
     * 
     * @param {number} val pivot value
     */
    pivot(val) {
        let opCounter = 0;
        let lessThanPointer = 0;
        let currNode = this.head;
        
        while(opCounter < this.length) {
            if (currNode.val < val) {
                lessThanPointer += 1;
            } else if (currNode.val >= val) {
                let tempVal = this.removeAt(lessThanPointer);
                this.push(tempVal);
            }

            currNode = currNode.next;
            opCounter += 1;
        }
    }
}


module.exports = LinkedListWithPivot;