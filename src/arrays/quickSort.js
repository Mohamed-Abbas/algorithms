const partition = (arr, start, end) => {
  const pivot = arr[end];
  let j = start - 1;

  for (let i = start; i < end; i++) {
    if (arr[i] <= pivot) {
      ++j;
      const temp = arr[j];
      arr[j] = arr[i];
      arr[i] = temp;
    }
  }

  ++j;
  let temp = arr[j];
  arr[j] = pivot;
  arr[end] = temp;
  return j;
};

const qs = (arr, start, end) => {
  if (start >= end) {
    return;
  }
  const pivotIdx = partition(arr, start, end);
  qs(arr, start, pivotIdx - 1);
  qs(arr, pivotIdx + 1, end);
};

const quickSort = (arr = []) => {
  qs(arr, 0, arr.length - 1);
  return arr;
};

console.log(quickSort([9, 3, 7, 4, 69, 420, 42]));
