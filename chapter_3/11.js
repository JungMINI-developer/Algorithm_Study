function solution(m, v) {
  m.sort((a, b) => a - b); //오름차순
  v.sort((a, b) => a - b); //오름차순
  let left = 0; //직원
  let right = 0; //선물

  let count = 0;

  while (left < m.length && right < v.length) {
    if (v[right] >= m[left]) {
      //현재 서물 가치 >= 직원 요구 가치 이면
      left++;
      right++;
      count++;
    } else {
      // 만족하지 못하면 다음 선물로 이동.
      right++;
    }
  }

  return count;
}

console.log(solution([2, 4, 6, 8, 10], [1, 3, 5, 7, 9, 11]));
console.log(solution([5, 10, 15], [5, 5]));
console.log(solution([2, 4], [1, 2, 3]));
