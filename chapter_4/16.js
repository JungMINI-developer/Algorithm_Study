function solution(maps) {
  const answer = [];
  const n = maps.length;
  const m = maps[0].length;

  //들렀는지 확인하는 배열을 전부 0으로 초기화
  const check = Array.from({ length: n }, () => Array(m).fill(0));

  function bfs(maps, x, y) {
    const dx = [-1, 0, 1, 0];
    const dy = [0, 1, 0, -1];

    //queue에 x,y좌표 등록
    const queue = [[x, y]];
    //감염자 수
    let count = Number(maps[x][y]);

    //처음 시작부분 방문한걸로 초기화
    check[x][y] = 1;

    //큐에 들어있는 개수만큼 반복
    while (queue.length) {
      //젤 처음 들어온 큐 확인
      const [x, y] = queue.shift();
      //상하좌우 확인
      for (let k = 0; k < 4; k++) {
        const nx = x + dx[k];
        const ny = y + dy[k];

        if (
          0 <= nx &&
          nx < n &&
          0 <= ny &&
          ny < m &&
          check[nx][ny] === 0 &&
          maps[nx][ny] !== "X"
        ) {
          check[nx][ny] = 1;
          queue.push([nx, ny]);
          count += Number(maps[nx][ny]);
        }
      }
    }
    return count;
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (maps[i][j] !== "X" && check[i][j] === 0) {
        const count = bfs(maps, i, j);
        answer.push(count);
      }
    }
  }

  answer.sort((a, b) => a - b);

  return answer.length ? answer : [-1];
}

console.log(solution(["X426X", "3X5X1", "XXX23", "7XX17"]));
console.log(solution(["X1X2X", "X1X2X", "X1X2X"]));
console.log(solution(["XXX", "XXX", "XXX"]));
