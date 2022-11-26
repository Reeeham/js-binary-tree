
class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}
const depthFirstSumRecursive = (root) => {

    if(!root) return 0;
    return  Number(root.val) + depthFirstSumRecursive(root.left) + depthFirstSumRecursive(root.right);
}


const a = new Node('3');
const b = new Node('11');
const c = new Node('4');
const d = new Node('4');
const e = new Node('2');
const f = new Node('1');


a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;


//      3
//     / \
//    11   4
//   / \   \
//  4   2   1


console.log(depthFirstSumRecursive(a)); //25