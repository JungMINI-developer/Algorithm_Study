function solution(boxes) {
  const stack = [];

  for (const box of boxes) {
    if (stack[stack.length - 1] !== box) {
      stack.push(box);
    }
  }

  return stack;
}

console.log(solution([2, 2, 5, 5, 1, 1]));
console.log(solution([7, 7, 8, 8, 0, 0, 0]));
