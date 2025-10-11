function solution(queue1, queue2, k) {
  // s1
  const queue = [...queue1, ...queue2];
  const result = [];

  while (result.length < k && queue.length > 0) {
    const person = queue.shift();
    //짝수이면 결과 배열에 push
    if (person % 2 === 0) {
      result.push(person);
    } else {
      //홀수 이면 queue에 push
      queue.push(person);
    }
  }

  return result;
}
console.log(solution([1, 3, 4], [6, 5, 8], 3));
