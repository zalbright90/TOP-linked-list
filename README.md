# TOP-linked-list
This project implements a custom Linked List data structure in JavaScript using ES6 modules. The LinkedList class provides a comprehensive set of methods for manipulating and interacting with a singly linked list.


## Features
- Create and manage a linked list
- Basic operations: append, prepend, insert, remove
- Utility methods: size, head, tail, find
- String representation of the list


### Methods
- `append(value)`: Add a node to the end of the list
- `prepend(value)`: Add a node to the start of the list
- `size()`: Get the total number of nodes
- `head()`: Get the first node
- `tail()`: Get node last node
- `at(index)`: Get node at a specific index
- `pop()`: Remove the last node
- `contains(value)`: Check if a value exists in the list
- `find(value)`: Find the index of a value
- `toString()`: Convert list to a string representation
- `insertAt(value, index)`: Insert a node at a specific index
- `removeAt(index)`: Remove a node at a specific index

### Setup
1. Clone the repo
2. Ensure you have Node.js installed
3. Run with `node main.mjs`


#### Example of Use
```javascript

const placesToVisit = new LinkedList();
placesToVisit.append(" Norway ");
placesToVisit.prepend(" Finland ");
console.log(placesToVisit.toString());

```
#### Learning Objectives
- Understand linked list data structure
- Practice JavaScript class implementation
- Explore ES6 module syntax
