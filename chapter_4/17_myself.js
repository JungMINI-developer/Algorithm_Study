function solution(n, roads, start) {
  //열의 개수
  const m = roads[0].length;

  const count = 0;

  //들렀는지 확인
  const check = Array.from({ length: n }, () => Array(m).fill(0));

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      const count = bfs(roads, i, j);
    }
  }
}

console.log(
  solution(
    6,
    [
      [1, 2],
      [1, 3],
      [2, 4],
      [3, 5],
      [5, 6],
      [4, 6],
    ],
    1
  )
);
console.log(
  solution(
    4,
    [
      [1, 2],
      [2, 3],
      [3, 4],
      [4, 2],
    ],
    1
  )
);
