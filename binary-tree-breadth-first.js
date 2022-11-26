
class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}
//can't be implemented using recursion because of stack and breadth first should use queue
const breadthFirstValues = (root) => {
    if(root === null) return [];

    const values = [];
    const queue = [root];

    while(queue.length > 0) {
        const current = queue.shift();
        if(current) values.push(current.val); //like visiting it

        if(current.left !== null) queue.push(current.left);
        if(current.right !== null) queue.push(current.right);
    }
    return values;
}


const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');


a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;


//      a
//     / \
//    b   c
//   / \   \
//  d   e   f

console.log(breadthFirstValues(a)); //[ 'a', 'b', 'c', 'd', 'e', 'f' ]