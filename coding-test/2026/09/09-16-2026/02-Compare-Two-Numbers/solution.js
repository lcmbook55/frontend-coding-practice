/**
 * 문제 제목: Compare Two Numbers (숫자 비교하기)
 */
function solution(num1, num2) {
  var answer = 0; // answer 변수를 만들고, 초기값으로 0을 넣어둔다.
  // (조건에 따라서 값을 재할당 할 예정이다)

  if (num1 === num2) {
    // num1 과 num2 가 같으면
    answer = 1; // 1 반환
  } else {
    answer = -1; // 다르면 -1 반환
  }
  return answer;
}
