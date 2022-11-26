
class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const breadthFirstSumIterative = (root) => { 
    if(!root) return 0;
    const queue = [root];
    let totalSum = 0;
    while(queue.length > 0 ) {
        const current = queue.shift();
        totalSum += Number(current.val);
        if(current.left) queue.push(current.left);
        if(current.right) queue.push(current.right);
    }
    return totalSum;
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


console.log(breadthFirstSumIterative(a)); //25