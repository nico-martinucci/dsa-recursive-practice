class CircularArray extends Array {

    constructor() {
        super();
        this.startIndex = 0;
    }

    addItem(val) {
        if (this.startIndex - 1 === -1) {
            this.push(val);
        } else {
            this.splice(this.startIndex, 0, val);
            this.startIndex += 1;
        }
    }

    printArray() {
        for (let i = this.startIndex; i < this.length + this.startIndex; i++) {
            if (i >= this.length) {
                console.log(this[i - this.length]);
            } else {
                console.log(this[i]);
            }
        }
    }

    getByIndex(idx) {
        return this[(idx + this.startIndex) % this.length];
    }

    rotate(num) {
        this.startIndex += num % this.length;
        
        if (this.startIndex > this.length - 1) this.startIndex -= this.length;
        if (this.startIndex < 0) this.startIndex += this.length;
    }
}

let c = new CircularArray();
c.push(1);
c.push(2);
c.push(3);


module.exports = CircularArray;