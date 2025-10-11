function insertionSort(array) {
  const n = array.length; // 배열의 길이를 변수 n에 저장

  // 1번째 인덱스부터 마지막 인덱스까지 순차적으로 처리
  for (let i = 1; i < n; i++) {
    // 현재 인덱스의 값을 'current' 변수에 저장
    let current = array[i];

    // 현재 요소보다 작은 요소들을 찾기 위해, j를 현재 요소의 직전 인덱스로 설정
    let j = i - 1;

    // 'current'보다 큰 요소들이 있을 경우, 그 요소들을 오른쪽으로 한 칸씩 이동
    // j가 0 이상이고, array[j]가 current보다 클 경우 반복
    while (j >= 0 && array[j] > current) {
      // array[j]를 한 칸 뒤로 밀어내기
      array[j + 1] = array[j];

      // j를 왼쪽으로 이동 (이전 요소를 비교하기 위해)
      j--;
    }

    // j+1 자리에 'current' 값을 삽입
    // 현재 요소보다 큰 값들이 밀리고 나서, 적합한 위치에 current를 삽입
    array[j + 1] = current;
  }

  return array; // 정렬된 배열 반환
}

console.log(insertionSort([4, 3, 6, 1, 5, 22, 7])); // [1, 3, 4, 5, 6, 7, 22]
