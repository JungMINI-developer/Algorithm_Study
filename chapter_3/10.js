// 내가 풀이하려고 시도한 것
// function solution(weights, limit) {
//   weights.sort((a, b) => a - b); //몸무게 오름차순 정렬

//   let count = 0;

//   for (let i = 0; i < weights.length; i++) {
//     for (let j = weights.length - 1; j > i; j--) {
//       if (weights[i] + weights[j] <= limit) {
//         // 두명의 몸무게 합이 리밋보다 작거나 같으면 카운트
//         count++;
//         i++;
//       } else {
//         j--;
//       }
//     }
//   }

//   return count;
// }
function solution(weights, limit) {
  weights.sort((a, b) => a - b);

  let left = 0; //왼쪽 포인터 설정
  let right = weights.length - 1; //오른쪽 포인터 설정
  let truck = 0; //트럭 갯수 설정

  while (left <= right) {
    // 왼쪽이랑 오른쪽이랑 겹칠 때 까지 반복
    if (weights[left] + weights[right] <= limit) {
      left++; // 두개의 합이 리미트가 안넘으면 왼쪽을 오른쪽으로 한칸 이동
    }
    right--; // 무게가 넘으면 오른쪽을 왼쪽으로 한칸 이동
    truck++; //이때 트럭을 한개 썻다고 함.
  }

  return truck;
}

console.log(solution([40, 50], 90));
console.log(solution([70, 50, 50, 30], 100));
console.log(solution([40, 50, 60, 90], 100));
console.log(solution([90, 90, 90, 90], 100));
