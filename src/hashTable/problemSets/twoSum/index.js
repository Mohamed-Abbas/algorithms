const twoSum = (nums, target) => {
  const prevHashTable = new Map();
  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];
    if (prevHashTable.get(diff) != undefined) {
      return [prevHashTable.get(diff), i];
    }
    prevHashTable.set(nums[i], i);
  }
};
