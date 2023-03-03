function removeElement(entires = [], val) {
  let scanner = 0;
  let removalPointer = 0;
  while (scanner < entires.length) {
    if (entires[scanner] !== val) {
      entires[removalPointer] = entires[scanner];
      ++removalPointer;
    }

    ++scanner;
  }

  return entires;
}

console.log(removeElement([0, 3, 1, 1, 1, 2, 2, 3, 3, 3], 3));
