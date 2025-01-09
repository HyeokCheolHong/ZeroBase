// 구조 분해 할당(Destruturing assignment)
// - 배열이나 객체의 구조에 맞게 바로 개별 변수에 값을 할당하는 방법으로,
// 필요한 값만 추출하여 변수에 할당할 수 있습니다.

const numbers = [1, 2, 3]
const a = numbers[0]
const b = numbers[1]
const c = numbers[2]
// const [a, b, c] = numbers
// 배열 구조 분해 할당방식

console.log(a, b, c) // 1 2 3

console.log('----구분선----')

// 선언과 분리
const numbers10 = [4, 5, 6]
let d
let e
let f
// 변수 선언

if (numbers.length) {
  [d, e, f] = numbers10
  // 구조 분해 할당 방식 변수 분리
}
// 선언과 분리를 따로 하는이유 : if 조건문에서 변수 선언시 if조건문 안에서만 사용가능 (유효범위)

console.log(d, e, f) // 4 5 6

console.log('----구분선----')

// 기본값
const numbers20 = [, , 3]
const [g = 0, h, i] = numbers20
// g : 구조 분해 할당 반식 기본값 지정

console.log(g, h, i) // 0 undefined 3

console.log('----구분선----')

// 반환 값 무시
const number30 = [1, 2, 3]
const [, , l] = number30

console.log(l)

console.log('----구분선----')

// 나머지 할당
const number40 = [1, 2, 3]
const [m, ...rest] = number40
// 구조 분해 할당 방식
// 나머지 부분을 배열데이터로 한번에 저장

console.log(a, rest)