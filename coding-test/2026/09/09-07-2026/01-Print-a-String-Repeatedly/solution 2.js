/**
 * 문제 제목: print a stirng Repeatedly 문자열 반복해서 출력하기
 * for문 사용
 */

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    const str = input[0]; // 문자열로 변환함
    const n = Number(input[1]); //숫자로 변환함
    
    let result = ''  //result = 'abc' + 'abc' 누적됨
    
    for (let i = 0; i < n; i++){
        result += str;
    }
    console.log(result);
});
