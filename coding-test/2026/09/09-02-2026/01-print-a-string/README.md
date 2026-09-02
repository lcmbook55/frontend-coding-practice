# Print a String(문자열 출력하기)

- 출처: Programmers
- 난이도: Lv.0

## 문제 설명

- 문자열 str이 주어질때, str을 출력하는 코드를 작성해보세요.

### 제한 사항

- 1 ≤ str의 길이 ≤ 1,000,000
- str에는 공백이 없으며, 첫째 줄에 한 줄로만 주어집니다.

### 입출력 예

- 입력 #1
  `HelloWorld!`
- 출력 #1
  `HelloWorld!`

## 접근 방법

1. 뭐가 입력으로 들어오는지 보기
   - `HelloWorld!`

2. 그래서 뭘 해야 하는지 보기
   - 입력받은 문자열을 그대로 출력

3. 어떤 값을 출력해야 하는지 보기
   - `HelloWorld!`
4. 코드작성

## 회고

- `let input = []` 을 통해 빈 배열을 선언하는 방식을 다시 확인했다.
- 문자열 `input[0]`이 입력 배열의 첫 번째 값이라는 것을 익혔다.
- `console.log()`를 이용한 기본 출력 방식을 복습하게되었다.

## 해석

`const readline = require('readline');`

- readline 입력 기능을 상수 readline에 저장

`const rl = readline.createInterface({
  input: process.stdin, // 입력
  output: process.stdout, // 출력
});`

- 입력과 출력을 사용하는 인터페이스를 만들고 그것을 상수 rl에 저장
