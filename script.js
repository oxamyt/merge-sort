function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }

  const mid = Math.floor(array.length / 2);
  const left = mergeSort(array.slice(0, mid));
  const right = mergeSort(array.slice(mid));
  return merge(left, right);
}

function merge(left, right) {
  const mergedArray = [];

  while (left.length > 0 && right.length > 0) {
    const arrayMin = left[0] < right[0] ? left : right;
    const mergeElement = arrayMin.shift();
    mergedArray.push(mergeElement);
  }

  return mergedArray.concat(left, right);
}

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
