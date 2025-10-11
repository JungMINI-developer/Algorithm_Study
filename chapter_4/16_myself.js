function solution(maps) {
  // 💡 1. 입력 문자열 배열을 2차원 문자 배열로 변환

  // 탐색 중 방문 처리를 위해 원본 맵을 수정하기 쉽게 만듭니다.
  const mapGrid = maps.map((row) => row.split(""));

  const N = mapGrid.length; //행
  const M = mapGrid[0].length; //열

  const dx = [-1, 1, 0, 0]; // 행(x) 변화량: 상, 하
  const dy = [0, 0, -1, 1]; // 열(y) 변화량: 좌, 우

  const clusterSums = []; //정답배열

  // 2. 전체 순회 및 클러스터 탐색 시작
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      const currentCell = mapGrid[i][j];

      // 'X'가 아닌 숫자 칸을 발견하면 새로운 BFS 시작
      if (currentCell !== "X") {
        let currentSum = 0;
        const queue = [];

        // 현재 칸을 시작점으로 설정
        queue.push([i, j]);

        // 💡 첫 칸 합산 및 방문 처리
        // 문자열을 숫자로 변환 후 합산
        currentSum += Number(currentCell);
        // 방문 처리: 'X'로 바꿔서 재탐색을 막습니다.
        mapGrid[i][j] = "X";

        // BFS 본체: 연결된 모든 칸을 찾아 합산
        while (queue.length > 0) {
          const [x, y] = queue.shift();

          // 4방향 탐색
          for (let k = 0; k < 4; k++) {
            const nx = x + dx[k];
            const ny = y + dy[k];

            // 유효성 검사: (1) 지도 범위 내에 있고, (2) 'X'가 아닌 숫자 칸인 경우
            if (
              nx >= 0 &&
              nx < N &&
              ny >= 0 &&
              ny < M &&
              mapGrid[nx][ny] !== "X"
            ) {
              const nextCell = mapGrid[nx][ny];

              // 합산 및 방문 처리
              currentSum += Number(nextCell);
              mapGrid[nx][ny] = "X"; // 방문 처리

              // 큐에 추가
              queue.push([nx, ny]);
            }
          }
        } // 한 클러스터 BFS 종료

        // 3. 클러스터 합계를 결과 배열에 저장
        clusterSums.push(currentSum);
      }
    }
  }

  // 4. 최종 결과 반환
  if (clusterSums.length === 0) {
    return [-1]; // 감염 구역이 하나도 없는 경우
  } else {
    // 내림차순 정렬
    return clusterSums.sort((a, b) => a - b);
  }
}

console.log(solution(["X426X", "3X5X1", "XXX23", "7XX17"]));
console.log(solution(["X1X2X", "X1X2X", "X1X2X"]));
console.log(solution(["XXX", "XXX", "XXX"]));
