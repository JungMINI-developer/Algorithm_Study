/**
 * 도시의 안전 거리 (BFS/그래프)
 * 특정 시작 교차로에서 가장 멀리 떨어진 교차로까지의 최소 거리를 구하는 함수입니다.
 * @param {number} n 총 교차로의 수 (노드 수)
 * @param {number[][]} roads 도로 정보 (간선 리스트, 양방향)
 * @param {number} start 시작 교차로 번호
 * @returns {number} 시작점에서 가장 먼 교차로까지의 최소 도로 개수
 */

function solution(n, roads, start) {
  // 1. 그래프 구축 (인접 리스트 방식)

  // 교차로 번호(1 ~ n)를 배열 인덱스(1 ~ n)로 직관적으로 사용하기 위해
  // 배열 길이를 n+1로 설정하고, 0번 인덱스는 버립니다.
  const graph = Array.from({ length: n + 1 }, () => []);

  // 도로 정보를 그래프(인접 리스트)에 추가합니다.
  // 예) 1번 도로는 2,3번 도로와 연결 => 따라서 graph[1] = [2,3] 이런식으로 저장됨.
  for (const [a, b] of roads) {
    graph[a].push(b); // a -> b 연결
    graph[b].push(a); // b -> a 연결 (양방향 도로이므로 양쪽 모두 추가)
  }
  console.log(graph);

  // 방문 여부를 기록하는 배열입니다.
  // 1번 노드부터 n번 노드까지 기록하기 위해 n+1 크기로 설정하고, false로 초기화합니다.
  const visited = Array(n + 1).fill(false);

  // 시작점으로부터의 최소 거리를 기록하는 배열입니다.
  // 마찬가지로 n+1 크기로 설정하고, 초기 거리는 0입니다.
  const d = Array(n + 1).fill(0);

  // 2. BFS 탐색 시작

  // BFS에 사용할 큐(Queue)를 시작 교차로(start)로 초기화합니다.
  const queue = [start];

  // 시작점을 방문 처리합니다.
  visited[start] = true;

  // 큐에 요소가 남아있는 동안 (탐색할 노드가 남아있는 동안) 반복합니다.
  while (queue.length) {
    // 큐에서 가장 먼저 들어온 노드를 꺼냅니다. (Dequeue)
    const node = queue.shift();

    // 현재 노드(node)와 연결된 모든 인접 노드(next)를 확인합니다.
    for (const next of graph[node]) {
      // 인접 노드가 아직 방문되지 않았다면 (최소 거리가 결정되지 않았다면)
      if (visited[next] == false) {
        // 1. 방문 처리: 다시는 이 노드를 탐색하지 않도록 true로 설정
        visited[next] = true;

        // 2. 거리 기록: 현재 노드의 거리(d[node])에 1을 더하여 최소 거리를 기록
        // (BFS는 최단 거리를 보장합니다.)
        d[next] = d[node] + 1;

        // 3. 큐에 추가: 다음 단계에서 이 노드부터 탐색을 확장하기 위해 큐에 넣음
        queue.push(next);
      }
    }
  }

  // 3. 거리 배열 중 최댓값 반환

  // d 배열 전체에서 가장 큰 값을 찾습니다.
  // 이 값은 시작점(start)에서부터 도달 가능한 교차로 중 가장 먼 교차로까지의 최소 거리가 됩니다.
  return Math.max(...d);
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
