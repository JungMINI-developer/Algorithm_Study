function solution(gate) {
  const stack = [];

  for (let item of gate) {
    // gate 배열이 열기 기호면 stack에 넣기
    if (item === "<") {
      stack.push(item);
    } else {
      // gate 배열이 닫기 기호면 stack에서 빼기
      //근데 stack의 길이가 0이면 배열이 없으므로 false 반환
      if (stack.length === 0) {
        return false;
      }
      stack.pop();
    }
  }

  //스택에 남아 있으면 거짓 안남아 있으면 참
  return stack.length === 0;
}

console.log(solution("<<>>"));
console.log(solution("<<>>"));
console.log(solution(">><<"));
console.log(solution("<<<>"));
