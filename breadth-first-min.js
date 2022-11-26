

const breadthFirstMin = (root) => {
    let smallest = Infinity;
    const queue = [root];
    while(stack.length > 0) {
        const current = stack.shift();
        if(current.val < smallest) smallest = current.val;
        if(current.left) stack.push(current.left);
        if(current.right) stack.push(current.right);
    }
    return smallest;
}; 