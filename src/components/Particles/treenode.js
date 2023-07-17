import './queue.js'

function TreeNode(value) {
  this.value = value;
  this.children = new Array();

  this.isLeaf = function () {
    return this.children.length === 0;
  }
}

// perform Depth-First Search (DFS)
function dfs(node) {
  if (!node) return;

  console.log(node.value); // Process the current node pre-order
  for (const child of node.children) {
    dfs(child); 
  }
}

// perform Breadth-First Search (BFS)
function bfs(root) {
  if (!root) return;

  const queue = new Queue(); // Create an instance of the Queue class
  queue.enqueue(root);

  while (!queue.isEmpty()) {
    const node = queue.dequeue();
    console.log(node.value); // Process the current node

    for (const child of node.children) {
      queue.enqueue(child); // Add children to the queue
    }
  }
}

// Testing With Random Tree & DFS/BFS
const rootNode = new TreeNode('A');
const nodeB = new TreeNode('B');
const nodeC = new TreeNode('C');
const nodeD = new TreeNode('D');
const nodeE = new TreeNode('E');
const nodeF = new TreeNode('F');

rootNode.children.push(nodeB);
rootNode.children.push(nodeC);
nodeB.children.push(nodeD);
nodeB.children.push(nodeE);
nodeC.children.push(nodeF);

/*
      A
     / \
    B   C
   / \   \
  D   E   F

*/

// Perform Depth-First Search (DFS)
console.log('DFS:');
dfs(rootNode); // A -> B -> D -> E -> C -> F

// Perform Breadth-First Search (BFS)
console.log('BFS:');
bfs(rootNode); // A -> B -> C -> D -> E -> F
