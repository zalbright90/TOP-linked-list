import LinkedList from './linkedList.mjs';

const list = new LinkedList();

console.log("--- TEST APPEND ---");
list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");
console.log("Initial list: ", list.toString());

console.log("\n--- PREPEND ---");
list.prepend("lizard");
console.log("List after prepending: ", list.toString());

console.log("\n--- SIZE ---");
console.log("Size of list: ", list.size());

console.log("\n--- HEAD ---");
console.log("Head of list: ", list.head().value);

console.log("\n--- TAIL ---");
console.log("Tail of list: ", list.tail().value);

console.log("\n --- AT(INDEX) ---");
for (let i = 0; i < list.size(); i++) {
    console.log(`Node at index ${i}:`, list.at(i).value);
}

console.log("\n--- CONTAINS ---");
console.log("Contains dog: ", list.contains("dog"));
console.log("Contains fish: ", list.contains("fish"));

console.log("\n--- FIND ---");
console.log("Index of dog: ", list.find("dog"));
console.log("Index of fish: ", list.find("fish"));

console.log("\n--- POP ---");
const poppedNode = list.pop();
console.log("Popped value: ", poppedNode.value);
console.log("List after popping: ", list.toString());

console.log("\n--- INSERT AT ---");
list.insertAt("fish", 5);
console.log("List after inserting fish at index 5: ", list.toString());

console.log("\n--- REMOVE AT ---");
const removedNode = list.removeAt(1);
console.log("Removed value: ", removedNode.value);
console.log("List after removing index 1: ", list.toString());

console.log("\n--- EDGE CASES ---");
const emptyList = new LinkedList();
console.log("Empty list size:", emptyList.size());
console.log("Empty list head: ", emptyList.head());
console.log("Empty list tail: ", emptyList.tail());
console.log("Empty list toString:", emptyList.toString());