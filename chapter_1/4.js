function solution(commands) {
  const queue = [];
  let result = [];

  for (let item of commands) {
    // " " 기준으로 나눠서 구조 분해 할당한 것
    const [cmd, value] = item.split(" ");
    // console.log(command[1]);
    if (cmd === "ENQUEUE") {
      queue.push(value);
    } else if (cmd === "DEQUEUE") {
      if (queue.length === 0) {
        result.push("EMPTY");
      } else {
        result.push(queue.shift());
      }
    }
  }

  return result;
}
console.log(
  solution(["ENQUEUE 3", "ENQUEUE 5", "DEQUEUE", "DEQUEUE", "DEQUEUE"])
);
