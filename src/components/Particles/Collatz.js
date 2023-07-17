import './treenode.js'
import './queue.js'
import './utils.js'
function CollatzTreeBuilder() {

  this.build = function (values) {

    const tree = new TreeNode(8); // Create a tree with root 8.
    for (let i = 0; i < values.length; i++) {
      const queue = new Queue();
      collatz(values[i], number => queue.enqueue(number));

      merge(tree, queue);
    }
    return tree;
  }
  function merge(tree, queue) {
    const stack = []; // Using a stack to keep track of the parent nodes.
    let current = tree;
  
    while (!queue.isEmpty()) {
      const value = queue.dequeue();
      let treeNode = findNode(current, node => node.value === value);
  
      if (!treeNode) {
        // If the node doesn't exist, create a new node and add it as a child to the current node.
        treeNode = new TreeNode(value);
        current.children.push(treeNode);
      }
  
      // Push the current node to the stack and move to the child node.
      stack.push(current);
      current = treeNode;
    }
  
    // Pop nodes from the stack and make them the current node to handle other values in the Collatz sequence.
    while (stack.length > 0) {
      current = stack.pop();
      merge(current, queue); // Recursively merge child nodes
    }
  }
  
  

  function findNode(root, predicate) {
    if (!root) return null;

    if (predicate(root)) {
      return root;
    }

    for (const child of root.children) {
      const node = findNode(child, predicate);
      if (node) return node;
    }

    return null;
  }
}


/* Repeats same sub problems */
function collatz(number, action) {
  action(number);
  if (number === 1)
    return;
  collatz(number % 2 === 0 ? number / 2 : (number * 3) + 1, action);
}
// Test Case 1
console.log('Test Case 1:');
const action1 = (num) => console.log(num);
collatz(10, action1);
// Expected Output: 10, 5, 16, 8, 4, 2, 1
// Test Case 2
console.log('Test Case 2:');
const action2 = (num) => console.log(num);
collatz(6, action2);
// Expected Output: 6, 3, 10, 5, 16, 8, 4, 2, 1
// Test Case 3
console.log('Test Case 3:');
const action3 = (num) => console.log(num);
collatz(27, action3);
// Expected Output: 27, 82, 41, 124, 62, 31, 94, 47, 142, 71, 214, 107, 322, 161, 484, 242, 121, 364, 182, 91, 274, 137, 412, 206, 103, 310, 155, 466, 233, 700, 350, 175, 526, 263, 790, 395, 1186, 593, 1780, 890, 445, 1336, 668, 334, 167, 502, 251, 754, 377, 1132, 566, 283, 850, 425, 1276, 638, 319, 958, 479, 1438, 719, 2158, 1079, 3238, 1619, 4858, 2429, 7288, 3644, 1822, 911, 2734, 1367, 4102, 2051, 6154, 3077, 9232, 4616, 2308, 1154, 577, 1732, 866, 433, 1300, 650, 325, 976, 488, 244, 122, 61, 184, 92, 46, 23, 70, 35, 106, 53, 160, 80, 40, 20, 10, 5, 16, 8, 4, 2, 1


// Test for Collatz conjecture tree builder algorithm with simpler input
const values = [5, 6, 7];
const builder = new CollatzTreeBuilder();
const collatzTree = builder.build(values);
console.log('DFS on Collatz Tree:');
dfs(collatzTree);

console.log("Testing Collatz builder")
const values2 = [8, 10, 12];
const builder2 = new CollatzTreeBuilder();
const collatzTree2 = builder2.build(values2);
console.log('DFS on Collatz Tree:');
dfs(collatzTree2);
 /* Expected Output: 
      8 -> 4 -> 2 -> 1 -> 10 -> 5 -> 16 -> 8 -> 12 -> 6 -> 3 -> 10 -> 5 -> 16 -> 8
 
 */



      
/*
Collatz conjecture Algorithm
let n be an integer > 0
  1. if n is even, n = n/2 
  2. if n is odd, n = 3n+1
  3. if n is 1, terminate, else step 1.

Conjecture -> For any n, algorithm will always stop at n = 1

Compare to fib -> Runtime is exponential if we do it recursively, multiple cases being repeated
  Iteratively with memoiztion and or bottom up? 
  Cache then color, or color while iterating?
  while (n != 1){


  }
/* https://www.youtube.com/watch?v=5mFpVDpKX70 */
