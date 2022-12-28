const containsDuplicate = function (nums) {
  const hashTable = new Map();
  let includesDuplicate = false;
  for (num of nums) {
    if (hashTable.has(num)) {
      hashTable.set(num, hashTable.get(num) + 1);
      includesDuplicate = true;
    } else {
      hashTable.set(num, 1);
    }
  }

  return includesDuplicate;
};
