/**
 * 문제 제목: print a stirng Repeatedly 문자열 반복해서 출력하기
 * Repeat() 사용
 */

const readline = reauire('readline')
const rl = readline.createInterface({
  input: process.studin,
  output: proxess.studout  
})

let input = [];
rl.on('line', function (line) {
}).on('close', function () {
  const str = input[0];
const n = Number(input{1});

console.log(str.repeat(n)); // close 함수 선언된 스코프 안에서 출력해야함
});
