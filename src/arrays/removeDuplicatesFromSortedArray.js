function removeDuplicatesFromSortedArray(entires = []) {
  let scanner = 1; // Index of the next element to be examined
  let lastUniquePointer = 1; // Index where the next unique element should be stored

  while (scanner < entires.length) {
    // If the current element is not equal to the previous element
    if (entires[scanner] !== entires[scanner - 1]) {
      // Store the current element at the next unique position
      entires[lastUniquePointer] = entires[scanner];
      ++lastUniquePointer; // Move the unique pointer one position forward
    }
    ++scanner;
  }
  // Return a new array containing only the unique elements
  return entires.slice(0, lastUniquePointer);
}

console.log(removeDuplicatesFromSortedArray([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
