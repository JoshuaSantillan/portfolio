function Stack(value) {
  let top;
  if (value)
    top = new Node(value);
  else
    top = null;

  this.pop = function () {
    if (!top)
      return null;

    const result = top;
    top = top.next;

    return result.value;
  }

  this.push = function (value) {
    const newNode = new Node(value);

    newNode.next = top;
    top = newNode;
  }

  this.isEmpty = function () {
    return top === null;
  }

  function Node(value) {
    this.value = value;
    this.next = null;
  }
}

// Test for push and pop operations
const myStack = new Stack();
console.log('Is Stack Empty?', myStack.isEmpty()); // Is Stack Empty? true

myStack.push('First');
myStack.push('Second');
myStack.push('Third');
console.log('Is Stack Empty?', myStack.isEmpty()); // Output: Is Stack Empty? false

console.log('Pop:', myStack.pop()); // Pop: Third
console.log('Pop:', myStack.pop()); // Pop: Second
console.log('Pop:', myStack.pop()); // Pop: First
console.log('Is Stack Empty?', myStack.isEmpty()); // Is Stack Empty? true
