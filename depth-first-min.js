const depthFirstMinIterative = (root) => {
    if(!root) return Infinity;
    let smallest = Infinity;
    const stack = [root];
    while(stack.length > 0) {
        const current = stack.pop();
        if(current.val < smallest) smallest = current.val;
        if(current.left) stack.push(current.left);
        if(current.right) stack.push(current.right);
    }
    return smallest;
}; 
const depthFirstMinRecursive = (root) => {
   if(!root) return Infinity;
   const leftMin = depthFirstMinRecursive(root.left);
   const rightMin = depthFirstMinRecursive(root.right);
   return Math.min(root.val, leftMin, rightMin);
}; 
