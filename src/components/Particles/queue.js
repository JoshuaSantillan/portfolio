function Queue(value) {
  let top;
  if (value)
    top = new Node(value);
  else
    top = null;

  let last = top;

  this.dequeue = function () {
    if (!top)
      return null;

    const result = top;
    top = top.next;

    return result.value;
  }

  this.enqueue = function (value) {
    const newNode = new Node(value);

    if (top === null)
      top = newNode;
    else
      last.next = newNode;

    last = newNode;
  }

  this.isEmpty = function () {
    return top === null;
  }

  function Node(value) {
    this.value = value;
    this.next = null;
  }
}


/*
// Test for enqueue and dequeue operations
const myQueue = new Queue();
console.log('Is Queue Empty?', myQueue.isEmpty()); // Is Queue Empty? true

myQueue.enqueue('First');
myQueue.enqueue('Second');
myQueue.enqueue('Third');
console.log('Is Queue Empty?', myQueue.isEmpty()); // Is Queue Empty? false

console.log('Dequeue:', myQueue.dequeue()); // Dequeue: First
console.log('Dequeue:', myQueue.dequeue()); // Dequeue: Second
console.log('Dequeue:', myQueue.dequeue()); // Dequeue: Third
console.log('Is Queue Empty?', myQueue.isEmpty()); // Is Queue Empty? true

*/