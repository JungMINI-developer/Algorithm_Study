function solution(score) {
  const sorted = score
    .map((s, index) => [s, index])
    .sort((a, b) => b[0] - a[0]); //내림차순 정렬
  // [점수, 원래의 인덱스]

  const n = score.length;
  const answer = Array(n);

  for (let rank = 0; rank < n; rank++) {
    const index = sorted[rank][1];
    //index에 rank에 해당하는 등수넣기

    if (rank < 3) {
      answer[index] = `Top ${rank + 1}`;
    } else {
      answer[index] = `Rank ${rank + 1}`;
    }
  }

  return answer;
}

console.log(solution([95, 85, 90, 70]));
console.log(solution([50, 100, 75]));
