// append(value) adds a new node containing value to the end of the list
//     prepend(value) adds a new node containing value to the start of the list
//     size returns the total number of nodes in the list
//     head returns the first node in the list
//     tail returns the last node in the list
//     at(index) returns the node at the given index
//     pop removes the last element from the list
//     contains(value) returns true if the passed in value is in the list and otherwise returns false.
//     find(value) returns the index of the node containing value, or null if not found.
//     toString represents your LinkedList objects as strings, so you can print them out and preview them in the console. The format should be: ( value ) -> ( value ) -> ( value ) -> null
//     insertAt(value, index) that inserts a new node with the provided value at the given index.
//     removeAt(index) that removes the node at the given index.

export class Node {
  #value;
  #next;
  constructor(value) {
    this.#value = value;
    this.#next = null;
  }
  get value() {
    return this.#value;
  }
  set value(val) {
    this.#value = val;
  }
  get next() {
    return this.#next;
  }
  set next(nextNode) {
    this.#next = nextNode;
  }
}

export class LinkedList {
  #head;
  #size;
  constructor() {
    this.#head = null;
    this.#size = 0;
  }

  get size() {
    return this.#size;
  }

  get head() {
    return this.#head;
  }

  tail() {
    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  at(index) {
    let currentNode = this.head;
    let counter = 0;
    while (currentNode.next) {
      counter++;
      currentNode = currentNode.next;
      if (counter === index) {
        return currentNode.value;
      }
    }
    return null;
  }

  find(val) {
    if (this.size === 0) {
      return -2; // Not found, empty list
    }
    let currentNode = this.head;
    let counter = 0;
    while (counter < this.size) {
      if (currentNode.value === val) {
        return counter;
      }
      counter++;
    }
    return -1; //Not found
  }
  contains(val){

  }

  toString() {
    let valueArray = this.toArray();
    let str = ``;
    for (let i = 0; i < valueArray.length; i++) {
      str += valueArray[i] + "=>";
    }
    str += `null`;
    return str;
  }

  toArray() {
    let returnArray = [];
    let currentNode = this.head;
    if (this.size === 0) {
      return "null";
    }

    if (this.size === 1) {
      returnArray.push(currentNode.value);
      return returnArray;
    }
    while (currentNode.next) {
      returnArray.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return returnArray;
  }

  append(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.#head = new Node(value);
    } else {
      let currentNode = this.head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = newNode;
      this.#size++;
    }
  }

  prepend(value) {
    let newNode = new Node(value);
    newNode.next = this.#head;
    this.#head = newNode;
    this.#size++;
  }

  insertAt(val, index) {
    if (index > this.size || index < 0) {
      return false;
    }
    if (index === 0) {
      this.prepend(val);
      return true;
    }
    if (index === this.size) {
      this.append(val);
      return true;
    }
    let counter = 0;
    let currentNode = this.head;
    let tmpNode = new Node(val);
    while (currentNode.next) {
      currentNode = currentNode.next;
      counter++;
      if (counter === index - 1) {
        tmpNode.next = currentNode.next;
        currentNode.next = tmpNode;
        return true;
      }
    }
    return false;
  }

  removeAt(index) {
    let counter = 0;
    let currentNode = this.head;
    if (index < 0) {
      return false;
    }
    if (index === 0) {
      this.#head = this.#head.next;
      this.#size--;
      return true;
    }
    while (index < this.#size) {
      if (counter === index - 1) {
        currentNode.next = currentNode.next.next;
        this.#size--;
        return true;
      }
      counter++;
    }
    return false;
  }

  pop() {
    let currentNode = this.head;
    let index = 0;
    if (this.size === 0) {
      return false;
    }
    if (this.size === 1) {
      this.#head = null;
      this.#size = 0;
      return true;
    }
    while (currentNode.next) {
      currentNode = currentNode.next;
      index++;
      if (index === this.size - 2) {
        currentNode.next = null;
        this.#size--;
        return true;
      }
      return false;
    }
  }

  shift() {
    if (this.size === 0) {
      return false;
    }
    this.#head = this.#head.next;
    this.#size--;
  }
}
