function solution(n, speeds) {
  //내가 푼 과정 (실패)
  // let left = speeds[0];
  // let right = speeds[1];
  // let count = 0;
  // let time = 0;

  // while (count < n) {
  //   if (left <= right) {
  //     count++;
  //     left += speeds[0];
  //     time = left;
  //   } else {
  //     count++;
  //     right += speeds[1];
  //     time = right;
  //   }
  // }

  let left = 1;
  // 최악경우: 가장 느린기계가 n개를 혼자 만들때 걸리는 시간
  let right = Math.max(...speeds) * n;

  while (left <= right) {
    // 왼쪽이 오른쪽보다 작을때 반복

    const mid = Math.floor((left + right) / 2);

    let total = 0;
    for (let time of speeds) {
      total += Math.floor(mid / time);
    }

    //위에 세줄과 동일
    // const total = speeds.reduce(
    //   (sum, time) => sunm + Math.floor(mid / time),
    //   0
    // );

    if (total >= n) {
      answer = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  console.log("reslut: ", answer);
}

console.log(solution(8, [5, 9]));

console.log(solution(6, [7, 10]));
