/**
 * 문제 제목: Add Fractions (분수의 덧셈)
 */
function solution(numer1, denom1, numer2, denom2) {
  // 1. 분수더하기
  let numer3 = numer1 * denom2 + numer2 * denom1;
  let denom3 = denom1 * denom2;

  // 2. 최대공약수를 저장할 변수
  let gcd = 1;

  // 3. 1부터 하나씩 확인하기
  for (let i = 1; i <= numer3 && i <= denom3; i++)
    // 분자와 분모가 둘 다 i로 나누어 떨어지는지 확인
    if (numer3 % i === 0 && denom3 % i === 0) {
      gcd = i; // 최대공약수 갱신
    }

  // 4. 분자와 분모를 최대공약수로 나누기
  return [numer3 / gcd, denom3 / gcd]; // 기약분수 반환
}
