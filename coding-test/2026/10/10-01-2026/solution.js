/**
 * 문제 제목: median finding (중앙값 구하기)
 */
function solution(array) {
  array.sort((a, b) => a - b);
  //배열을 숫자 기준으로 오름차순 정렬한다. sort()만 사용하면 문자열 기준으로 정렬하므로, 숫자를 비교하는 함수를 넣어야 한다.

  const middleIndex = Math.floor(array.length / 2);
  // 가운데 인덱스 찾기, 배열 길이를 2로 나누고 소수점 아래를 버려 가운데 인덱스를 구한다.

  return array[middleIndex];
}

// 정렬된 배열: [-1, 0, 9]
// 가운데 인덱스: Math.floor(3 / 2) → 1
// 반환하는 값: array[1] → 0
