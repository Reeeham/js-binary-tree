// binary tree
// at most 2 children per node
// exactly 1 root
// exactly 1 path bet root and any node

class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const depthFirstIterative = (root) => {
    const result = [];
    const stack = [root];
    while(stack.length > 0) {
       const current = stack.pop();
       if(current.val) result.push(current.val);
       if(current.right) stack.push(current.right);
       if(current.left) stack.push(current.left);//will popped out first
    }
    return result;
}
const depthFirstRecursive = (root) => {
    if(root === null) return [];
    const leftValues = depthFirstRecursive(root.left); // [b, d, e]
    const rightValues = depthFirstRecursive(root.right); // [c,f]
    return [root.val, ...leftValues, ...rightValues];
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

console.log(depthFirstIterative(a)); //[ 'a', 'b', 'd', 'e', 'c', 'f' ]