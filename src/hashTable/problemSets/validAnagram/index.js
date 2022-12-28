const isAnagram = function (s, t) {
  const hashTableS = new Map();
  const hashTableT = new Map();
  let isBalanced = true;
  if (!s || !t) {
    return false;
  }
  if (s.length !== t.length) {
    return false;
  }

  for (let i = 0; i < s.length; i++) {
    if (hashTableS.has(s[i])) {
      hashTableS.set(s[i], hashTableS.get(s[i]) + 1);
    } else {
      hashTableS.set(s[i], 1);
    }
  }

  for (let k = 0; k < t.length; k++) {
    if (hashTableT.has(t[k])) {
      hashTableT.set(t[k], hashTableT.get(t[k]) + 1);
    } else {
      hashTableT.set(t[k], 1);
    }
  }

  for ([key, value] of hashTableS.entries()) {
    if (!hashTableT.has(key) || hashTableT.get(key) !== value) {
      isBalanced = false;
    }
  }
  return isBalanced;
};
