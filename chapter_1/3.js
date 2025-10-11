function solution(s) {
  const stack = [];

  for (let item of s) {
    const top = stack[stack.length - 1]; //젤 위에를 정해준다.
    //charCodeAt => 문자열 입력값을 아스키 코드로 변환해주는 것.
    //Math.abs => 절대값을 구해주는 함수. |-32| = 32 로 바꿔주므로 대소문자 구별 없이 작성 가능
    if (top && Math.abs(top.charCodeAt() - item.charCodeAt()) === 32) {
      stack.pop();
    } else {
      stack.push(item);
    }
  }

  //join()은 배열의 모든 요소를 문자열로 만들어줌
  return stack.join("");
}

console.log(solution("infFflearn"));
console.log(solution("aAbBcC"));
console.log(solution("xYyX"));
console.log(solution("a"));
console.log(solution("Code"));
