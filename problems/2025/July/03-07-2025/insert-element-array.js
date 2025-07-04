//using binary search 
function insertSorted(arr, element) {
    let left = 0;
    let right = arr.length;

    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] < element) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }

    arr.splice(left, 0, element);
    return arr;
}

let sortedArray = [1, 3, 5, 7, 9];

console.log(insertSorted(sortedArray, 4))

//Method#2

function insertInSortedArray(arr, element) {
    let i = 0;
    while (i < arr.length && arr[i] < element) {
        i++
    }
    console.log(i);
    arr.splice(i, 0, element);

    return arr;
}
console.log(insertInSortedArray([1, 3, 5, 7], 4));

class CircularBuffer {
    constructor(size) {
        this.buffer = new Array(size);
        this.size = size;
        this.head = 0;
        this.tail = 0;
        this.count = 0;
    }

    insert(element) {
        this.buffer[this.tail] = element;
        this.tail = (this.tail + 1) % this.size;
        if (this.count < this.size) {
            this.count++;
        } else {
            this.head = (this.head + 1) % this.size;
        }
    }

    getBuffer() {
        return this.buffer.slice(this.head, this.head + this.count);
    }
}

let cb = new CircularBuffer(3);
cb.insert(1);
cb.insert(2);
cb.insert(3);
cb.insert(4);
console.log(cb.getBuffer()); //[2,3]

/*Sparse Array Insertion
Sparse array have "empty" slots. Here's how to work with them:
*/
let sparseArray = new Array();
sparseArray[2] = 'Hello';
sparseArray[4] = 'World';
console.log(sparseArray);
console.log(sparseArray.length);
sparseArray.forEach((item, index) => {
    if (item != undefined) {
        console.log(`${index}: ${item}`)
    }
});


/*
Insertion with Deduplication
*/
function insertUnique(arr, element) {
    if (!arr.includes(element)) {
        arr.push(element)
    }
    return arr;
}
let uniqueNumbers = [1, 2, 3, 4];
console.log(insertUnique(uniqueNumbers, 3));
console.log(insertUnique(uniqueNumbers, 4));

/*
Insertion with Priority
*/

class PriorityQueue {
    constructor() {
        this.queue = [];
    }
    insert(element, priority) {
        const item = { element, priority };
        console.log(element, priority)
        console.log(item, 'console.log(item')
        let added = false;
        console.log(this.queue, 'console.log(this.queue');
        for (let i = 0; i < this.queue.length; i++) {
            if (item.priority < this.queue[i].priority) {
                this.queue.splice(i, 0, item);
                added = true;
                break;
            }
        }
        if (!added) {
            this.queue.push(item)
        }
    }
    getQueue() {
        return this.queue.map(item => item.element)
    }
}

let pq = new PriorityQueue();
pq.insert('Task 1', 2);
pq.insert('Task 2', 1);
pq.insert('Task 3', 3);

// console.log(pq.getQueue());

/*
Dynamic 2D Array Insertion
*/
function create2DArray(rows, cols) {
    return Array.from({ length: rows }, () => new Array(cols).fill(0))
}

function insert2D(arr, row, col, value) {
    console.log(row, 'console.log(row,')
    console.log(col, 'console.log(col,')
    console.log(value, 'console.log(value,')
    console.log(arr, 'console.log(arr,')
    while (arr.length <= row) {
        arr.push([])
    }
    while (arr[row].length <= col) {
        arr[row].push(0)
    }
    arr[row][col] = value;
}

let metrix = create2DArray(2, 2);

insert2D(metrix, 1, 1, 5);
insert2D(metrix, 3, 3, 7);

// console.log(metrix, 'console.log(metrix,')

/*
Insertion into a Trie(Prefix Tree)
While not strictly array, a trie uses arrays(or objects) internally and is useful
for string instions
*/
class TrieNode {
    constructor() {
        this.children = {};
        this.isEndOfWord = false;
    }
}
class Trie {

    constructor() {
        this.root = new TrieNode();
    }

    insert(word) {

        let current = this.root;
        for (let char of word) {
            if (!current.children[char]) {
                current.children[char] = new TrieNode();
            }
            current = current.children[char];
        }
        current.isEndOfWord = true;
    }
    search(word) {
        let current = this.root;
        for (let char of word) {
            if (!current.children[char]) {
                return false;
            }
            current = current.children[char]
        }
        return current.isEndOfWord;
    }
}
let trie = new Trie();
trie.insert('apple');
trie.insert("app");
// console.log(trie, 'console.log(trie,')
// console.log(trie.search("apple"));
// console.log(trie.search("app"));

function insertSorted(arr, element, compareFn) {
    let index = arr.findIndex(item => compareFn(element, item) <= 0);
    if (index === -1) {
        arr.push(element)
    } else {
        arr.splice(index, 0, element)
    }
    return arr;
}

let words = ['cat', 'elephant', 'dog'];
let compareFn = (a, b) => {
    if (a.length !== b.length) {
        return a.length - b.length
    }
    return a.localCompare(b)
}
console.log(insertSorted(words, 'bear', compareFn))