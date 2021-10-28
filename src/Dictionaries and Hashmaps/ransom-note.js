/*
 Title: Hash Tables: Ransom Note
 Difficulty: Easy
 Score: 25
 Link: https://www.hackerrank.com/challenges/ctci-ransom-note/
*/

class ExtendedMap {

    constructor(){
        this.map = new Map();
    }

    get(x) {
        let value = this.map.get(x);
        if (value === 1) {
            this.map.delete(x);
            return true;
        }

        return this.map.set(x, --value);
    }

    set(x, y) {
        if (this.map.get(x)) {
            return this.map.set(x, this.map.get(x) + 1);
        }

        return this.map.set(x, y);
    }
}


function checkMagazine(magazine, note) {

    let m = new ExtendedMap()

    for (let i = 0; i < magazine.length; i++) {
        m.set(magazine[i], 1)
    }

    for (let i = 0; i < note.length; i++) {
        if (!m.get(note[i])) {
            console.log('No');
            return;
        };
    }

    console.log('Yes');
}

let magazine = [ 'give', 'me', 'one', 'grand', 'today', 'night' ];
let note = [ 'give', 'one', 'grand', 'today' ];

console.time('Time Taken');
checkMagazine(magazine, note);
console.timeEnd('Time Taken');
