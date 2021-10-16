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

	static hashCode(str) {
		let hash = 0;
		if (str.length === 0) return hash;
		for (let i = 0; i < str.length; i++) {
			const char = str.charCodeAt(i);
			hash = (hash << 5) - hash + char;
			hash &= hash; // Convert to 32bit integer
		}
		return hash;
	}
}

const m = customHashMap();

m.set('hello', 'world');
console.log(m.get('hello'));
