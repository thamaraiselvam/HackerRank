/*
 Title: Custom Hashmap
 Difficulty: -
 Score: -
 Link: -
*/
class customHashMap {
    constructor() {
        this.list = [];
    }

    get(x) {
        return this.list[this.hashCode(x)];
    }

    set(x, y) {
        this.list[this.hashCode(x)] = y;
    }

    hashCode(str) {
        let hash = 0;
        if (str.length == 0) return hash;
        for (let i = 0; i < str.length; i++) {
            let char = str.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash = hash & hash; // Convert to 32bit integer
        }
        return hash;
    }
}

let m = new customHashMap();

m.set('hello', 'world');
console.log(m.get('hello'));
