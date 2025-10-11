function swap(array, i, j) {
  [array[i], array[j]] = [array[j], array[i]];
}

function partition(array, left, right) {
  const pivotValue = array[right];
  let i = left; //피벗보다 작은 값을 쌓을 위치

  for (let j = left; j < right; j++) {
    if (array[j] < pivotValue) {
      swap(array, i, j);
      i++;
    }
  }

  swap(array, i, right);

  return i;
}

function quickSort2(array, left = 0, right = array.length - 1) {
  if (left < right) {
    const partitionIndex = partition(array, left, right);

    quickSort2(array, left, partitionIndex - 1);
    quickSort2(array, partitionIndex + 1, right);
  }
  return array;
}

console.log(quickSort2([5, 3, 4, 9, 7, 2, 1, 6, 8]));
