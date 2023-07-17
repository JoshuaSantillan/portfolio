function TreeNode(value) {
  this.value = value;
  this.children = new Array();

  this.isLeaf = function () {
    return this.children.length === 0;
  }
}

// perform Depth-First Search (DFS)
function dfs(node, indent = '') {
  if (!node) return;
  console.log(indent + node.value); // Process the current node pre-order
  node.children.forEach((child, index) => {
    const isLastChild = index === node.children.length - 1;
    dfs(child, indent + (isLastChild ? '   ' : '|  '));
  });
}

/*function dfs(node) {
  if (!node) return;
  node.children.forEach(child => dfs(child));
}
*/

// perform Breadth-First Search (BFS)
function bfs(root) {
  if (!root) return;

  const queue = new Queue(root);
  while (!queue.isEmpty()) {
    const treeNode = queue.dequeue();
    console.log(treeNode.value);

    treeNode.children.forEach(child => queue.enqueue(child));
  }
}


/* 
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


*/ 

/*
      A
     / \
    B   C
   / \   \
  D   E   F

*/


/*
console.log("Testing Tree")
// Perform Depth-First Search (DFS)
console.log('DFS:');
dfs(rootNode); // A -> B -> D -> E -> C -> F

// Perform Breadth-First Search (BFS)
console.log('BFS:');
bfs(rootNode); // A -> B -> C -> D -> E -> F
*/
