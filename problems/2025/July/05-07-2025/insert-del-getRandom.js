/*
Implement the RandomizedSet class:

RandomizedSet() Initializes the RandomizedSet object.
bool insert(int val) Inserts an item val into the set if not present. Returns true if the item was not present, false otherwise.
bool remove(int val) Removes an item val from the set if present. Returns true if the item was present, false otherwise.
int getRandom() Returns a random element from the current set of elements (it's guaranteed that at least one element exists 
when this method is called). Each element must have the same probability of being returned.
*/

class RandomizedSet {
    constructor() {
        this.map = new Map();
        this.arr = [];
    }

    insert(val) {
        if (this.map.has(val)) return false;
        this.map.set(val, this.arr.length);
        this.arr.push(val);
        return true;
    }

    remove(val) {
        if (!this.map.has(val)) return false;
        const index = this.map.get(val);
        const last = this.arr[this.arr.length - 1];

        this.arr[index] = last;
        this.map.set(last, index);

        this.arr.pop();
        this.map.delete(val);
        return true;
    }

    getRandom() {
        const idx = Math.floor(Math.random() * this.arr.length);
        return this.arr[idx]
    }
}

const rs = new RandomizedSet();

console.log(rs.insert(1));
console.log(rs.insert(2));
console.log(rs.insert(1));
console.log(rs.getRandom());
console.log(rs.remove());
console.log(rs.getRandom());
