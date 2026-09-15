# Subtract Two Numbers (두수의 차 구하기)

- 출처: Programmers
- 난이도: Lv.0

## 문제 설명

정수 num1과 num2가 주어질 때, num1과 num2를 뺀 값을 retrun하도록 solution함수를 완성해주세요.

### 제한 사항

-50,000 ≤ num1 ≤ 50,000
-50,000 ≤ num2 ≤ 50,000

### 입출력 예

| num1 | num2 | result |
| ---- | ---- | ------ |
| 2    | 3    | -1     |
| 100  | 2    | 98     |

## 접근 방법

1. 뭐가 입력으로 들어오는지 보기
   - 정수 `num1`
   - 정수 `num2`

2. 그래서 뭘 해야 하는지 보기
   - `num1`에서 `num2`를 뺀다.
   - `-`연산자를 사용한다.

3. 어떤 값을 출력해야 하는지 보기
   - `num1 - num2`의 결과를 return해준다.

4. 코드작성
   - solution.js 참고

## 회고

num1과 num2는 함수에 들어오는 값.
num1이 정수 1이고 num2가 정수 3를 뺀 result -1 를 answer에 저장한 뒤 return했다.
어제와 마찬가지로 간단한 문제에서도 입력값 -> 연산 -> return 순으로 생각하는 문제였다.
