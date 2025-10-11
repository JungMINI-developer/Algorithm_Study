//DFS로 구현
// function solution(n, stations) {
//   let answer = 0;

//   //길이가 n인 visited배열이고 모든 요소가 0으로 초기화
//   let visited = Array.from({ length: n }, () => 0);

//   //dfs함수
//   function dfs(station) {
//     visited[station] = 1;

//     for (let i = 0; i < n; i++) {
//       if (stations[station][i] === 1 && visited[i] === 0) {
//         dfs(i);
//       }
//     }
//   }

//   for (let i = 0; i < n; i++) {
//     //visited가 0이면 방문을 안한 곳.
//     if (visited[i] === 0) {
//       dfs(i);
//       answer++;
//     }
//   }
//   return answer;
// }

//BFS로 구현
function solution(n, stations) {
  let answer = 0;

  const visited = Array.from({ length: n }, () => 0);

  const queue = [];

  for (let i = 0; i < n; i++) {
    if (visited[i] === 0) {
      answer++;

      queue.push(i);
      visited[i] = 1;

      while (queue.length) {
        const x = queue.shift();

        for (let j = 0; j < n; j++) {
          if (stations[x][j] === 1 && visited[j] === 0) {
            queue.push(j);
            visited[j] = 1;
          }
        }
      }
    }
  }
  return answer;
}

console.log(
  solution(3, [
    [1, 0, 1],
    [0, 1, 0],
    [1, 0, 1],
  ])
);
console.log(
  solution(4, [
    [1, 1, 1, 0],
    [1, 1, 0, 0],
    [1, 0, 1, 1],
    [0, 0, 1, 1],
  ])
);
