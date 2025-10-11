function selectionSort(array) {
  const n = array.length;

  //맨 마지막 인덱스는 이미 정렬상태
  for (let i = 0; i < n - 1; i++) {
    //일단 가장 작은 인덱스가 첫번째라고 가정
    let indexMin = i;
    //정렬되지 않은 indexMin부터 작은 요소 찾기 시작
    for (let j = i + 1; j < n; j++) {
      //초기 설정된 작은 값보다 작은 요소가 발견되면
      if (array[indexMin] > array[j]) {
        //indexMin의 값을 해당 작은 값의 index로 변경
        indexMin = j;
      }
    }
    //만약 가장 작은 인덱스가 처음 설정된 인덱스랑 다르면
    if (indexMin !== i) {
      //배열에서 바꿔줌
      [array[i], array[indexMin]] = [array[indexMin], array[i]];
    }
  }

  return array;
}

console.log(selectionSort([4, 3, 6, 1, 5, 22, 7]));
