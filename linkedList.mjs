import Node from './node.mjs';

export default class LinkedList {
    constructor() {
        this.headNode = null;
    }

    // 1. Append: adds a new node to the end of the list
    append(value) {
        const newNode = new Node(value);

        if (!this.headNode) {
            this.headNode = newNode;
            return;
        }

        let current = this.headNode;
        while (current.nextNode) {
            current = current.nextNode;
        }
        current.nextNode = newNode;
        }

    // 2. Prepend: adds a new node to the start of the list
    prepend(value) {
        const newNode = new Node(value);
        newNode.nextNode = this.headNode;
        this.headNode = newNode;
    }

    // 3. Size: returns total number of nodes
    size() {
        let count = 0;
        let current = this.headNode;
        while (current) {
            count++;
            current = current.nextNode;
        }
        return count;
    }

    // 4. Head: returns the first node
    head() {
        return this.headNode;
    }

    // 5. Tail: returns the last node
    tail() {
        if (!this.headNode) return null;

        let current = this.headNode;
        while (current.nextNode) {
            current = current.nextNode;
        }
        return current;
    }

    // 6. At: returns the node at a given index
    at(index) {
        if (index < 0) return null;

        let current = this.headNode;
        for (let i = 0; i < index; i++) {
            if (!current) return null;
            current = current.nextNode;
        }
        return current;
    }

    // 7. Pop: Removes the last element
    pop() {
        if (!this.headNode) return null;

        // If only one node
        if (!this.headNode.nextNode) {
            const removedNode = this.headNode;
            this.headNode = null;
            return removedNode;
        }

        let current = this.headNode;
        while (current.nextNode.nextNode) {
            current = current.nextNode;
        }

        const removedNode = current.nextNode;
        current.nextNode = null;
        return removedNode;
    }

    // 8. Contains: checks if value exists in the list
    contains(value) {
        let current = this.headNode;
        while(current) {
            if (current.value === value) return true;
            current = current.nextNode;
        }
        return false;
    }

    // 9. Find: returns index of node with value, or null
    find(value) {
        let current = this.headNode;
        let index = 0;
        while(current) {
            if (current.value === value) return index;
            current = current.nextNode;
            index++;
        }
        return null;
    }

    // 10. ToString: represents list as a string
    toString() {
        let result = '';
        let current = this.headNode;
        while (current) {
            result += `( ${current.value} ) -> `;
            current = current.nextNode;
        }
        result += 'null';
        return result;
    }

    // Extra Credit 1: Insert a node at a specific index
    insertAt(value, index) {
        // Handle invalid index
        if (index < 0) return false;

        const newNode = new Node(value);

        // Inserting at the beginning
        if (index === 0) {
            newNode.nextNode = this.headNode;
            this.headNode = newNode;
            return true;
        }

        // Find the node before the insertion point
        let current = this.headNode;
        for (let i = 0; i < index - 1; i++) {
            // If we read the end before the index, we can't insert
            if (!current) return false;
            current = current.nextNode;
        }

        // If we've reached beyond the list's length
        if (!current) return false;

        // Insert the new Node
        newNode.nextNode = current.nextNode;
        current.nextNode = newNode;
        return true;
    }

    // Extra Credit 2: Remove a node at a specific index
    removeAt(index) {
        // Handle invalid index
        if (index < 0 || !this.headNode) return null;

        // Removing the first node
        if (index === 0) {
            const removedNode = this.headNode;
            this.headNode = this.headNode.nextNode;
            return removedNode;
        }

        // Find the node before the removal point
        let current = this.headNode;
        for (let i = 0; i < index - 1; i++) {
            // If we read the end before the index, we can't remove
            if (!current.nextNode) return null;
            current = current.nextNode;
        }

        // If the node to remove doesn't exist
        if (!current.nextNode) return null;
        
        // Remove the node
        const removedNode = current.nextNode;
        current.nextNode = removedNode.nextNode;
        return removedNode;
    }
}