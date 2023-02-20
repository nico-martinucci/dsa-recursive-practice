const LinkedList = require("./linked-list");

function josephusSurvivor(num, skip) {
    let people = [];
    
    for (let i = 1; i <= num; i++) {
        people.push(i);
    }

    const peopleList = new LinkedList(people);
    peopleList.makeCircular();

    let removeIndex = skip - 1;
    while (peopleList.length > 1) {
        let val = peopleList.removeAt(removeIndex);
        peopleList.makeCircular();
        removeIndex = (removeIndex + skip - 1) % peopleList.length;
    }

    return peopleList.head.val;
}

module.exports = josephusSurvivor;