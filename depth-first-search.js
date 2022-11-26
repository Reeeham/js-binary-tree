
class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}
//relies on stack
const depthFirstSearch = (root, target) =>{
    if(!root) return false;
    if(root.val == target) return true;
    return depthFirstSearch(root.left, target) || depthFirstSearch(root.right, target);
};

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


console.log(depthFirstSearch(a,'r')); //false
console.log(depthFirstSearch(a,'e')); //true

// time complexity O(n)
// space complexity O(n)