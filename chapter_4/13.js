function checkGlass(glass, mid, k) {
  //연속으로 깨진 유리판 개수
  let brokenCount = 0;

  for (let i = 0; i < glass.length; i++) {
    //유리판의 내구도가 미드보다 작거나 같으면 깨진유리
    if (glass[i] <= mid) {
      brokenCount++;
    } else {
      // 내구도가 미드보다 크면 연속으로 깨지지 않았음 따라서 초기화 0
      brokenCount = 0;
    }

    //연속으로 깨진 유리판이 k개 이상이면 건널 수 없음
    if (brokenCount >= k) {
      return false;
    }
  }

  return true;
}

function solution(glass, k) {
  let start = 1;
  //문제에서 제시된 배열 개수.
  let end = 200000000;

  //start가 end를 넘어서기 전까지 반복
  while (start <= end) {
    //mid값 계산
    let mid = Math.floor((start + end) / 2);
    //유리 내구도를 기준으로 mid명까지 건널 수 있으면 true
    if (checkGlass(glass, mid, k)) {
      //건널 수 있으면 start를 mid 다음으로 설정
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return start;
}

console.log(solution([5, 3, 1, 2, 1, 3, 5], 3));
console.log(solution([4, 2, 2, 1, 4], 2));
