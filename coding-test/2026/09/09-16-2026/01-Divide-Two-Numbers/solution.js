/**
 * 문제 제목: Divide Two Numbers(두 수의 나눗셈)
 */

// 시도 1
function solution(num1, num2) {
  var answer = Math.trunc((num1 / num2) * 1000);
  return answer;
}

// Math.trunc()는 소수점 이하를 제거하고 정수 부분만 반환하는 함수이다.
// 따라서 num1을 num2로 나눈 후 1000을 곱한 값을 Math.trunc()로 처리하면
// 소수점 이하가 제거된 정수를 얻을 수 있다.

// 시도 2
function solution(num1, num2) {
  var answer = Math.floor((num1 / num2) * 1000);
  return answer;
}

// Math.floor()는 소수점 이하를 내림하여 정수 부분만 반환하는 함수이다.
// 따라서 num1을 num2로 나눈 후 1000을 곱한 값을 Math.floor()로 처리하면
// 소수점 이하가 제거된 정수를 얻을 수 있다.
