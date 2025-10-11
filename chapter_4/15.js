function solution(maps) {
  const n = maps.length; //행
  const m = maps[0].length; //열

  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];

  //행은 n 열은 m인 배열을 0으로 초기화
  //d: 거리 기록용 배열
  const d = Array.from({ length: n }, () => Array(m).fill(0));
  const queue = [];

  queue.push([0, 0]);
  //거리 기록 배열에 처음 시작지점 1로 설정
  d[0][0] = 1;
  //시작지점에 대한 실제 지도를 0으로 설정 => 다시 방문하지 않기 위해서
  maps[0][0] = 0;

  while (queue.length) {
    let [x, y] = queue.shift();

    for (let k = 0; k < 4; k++) {
      let nx = x + dx[k];
      let ny = y + dy[k];

      //지도 범위에 있고 방문가능한 곳일 때 큐에 넣어줌
      if (0 <= nx && nx < n && 0 <= ny && ny < m && maps[nx][ny] === 1) {
        queue.push([nx, ny]);
        maps[nx][ny] = 0;
        d[nx][ny] = d[x][y] + 1;
      }
    }
  }
  return d[n - 1][m - 1] || -1;
}

console.log(
  solution([
    [1, 1, 0, 1],
    [0, 1, 0, 1],
    [0, 1, 1, 1],
    [1, 0, 0, 1],
  ])
);
console.log(
  solution([
    [1, 0, 0],
    [1, 0, 0],
    [1, 1, 1],
  ])
);
console.log(
  solution([
    [1, 0, 1],
    [0, 0, 1],
    [1, 1, 1],
  ])
);
