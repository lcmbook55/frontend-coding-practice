/**
 * 문제 제목: Toggle Letter case 대소문자 바꿔서 출력하기
 */
const readline = require('readline');
const rl = readline.createInterface({
  input: process.studin,
  output: process.studout,
});

let input = [];
rl.on('line', function (line) {
  input = [line];
}).on('close', function () {
  str = input[0]; // 입력 문자열을 가져옴
  result = ''; // 결과를 담는 빈 문자열 생성

  for (let i = 0; i < str.length; i++) {
    // str을 처음부터 끝까지 순회(반복for문)
    if (str[i] === str[i].toUpperCase()) {
      //조건 1. 현재 문자가 대문자라면?
      result += str[i].toLowerCase(); // 소문자로 바꿔줘
    } else {
      result += str[i].toUpperCase(); // 조건 2. 현재 문자가 소문자라면 대문자로 바꿔줘
    }
  }

  console.log(result); // 결과를 출력해
});
