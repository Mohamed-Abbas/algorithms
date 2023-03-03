function concatenationOfArray(entires = []) {
  return [...entires, ...entires];
}

console.log(concatenationOfArray([1, 2, 3]));
