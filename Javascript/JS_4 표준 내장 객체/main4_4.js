// Math(수학) 표준 내장 객체(Built-in Object)
// Math.abs() - 주어진 숫자의 절댓값을 반환합니다.
console.log(Math.abs(7)) // 7
console.log(Math.abs(-7)) // 7
console.log(Math.abs(3.14)) // 3.14
console.log(Math.abs(-3.14)) // 3.14

console.log('----구분선----')
// Math.ceil() - 주어진 숫자를 올림해 정수를 반환합니다.
// Math.floor() - 주어진 숫자를 내림해 정수를 반환합니다.
// Math.round() - 주어진 숫자를 반올림해 정수를 반환합니다.
console.log(Math.ceil(3.1415926535)) // 4
console.log(Math.ceil(3.1415926535 * 100) /100) // 3.15
// 소수점 2자리까지 남기기위함

console.log(Math.floor(3.1415926535)) // 3
console.log(Math.floor(3.1415926535 * 100) / 100) // 3.14

console.log(Math.round(3.141)) // 3
console.log(Math.round(3.768)) // 4

console.log(Math.round(3.141 * 10) / 10) // 3.1
console.log(Math.round(3.768 * 10) / 10) // 3.8

console.log('----구분선----')
// Math.max() - 주어진 숫자 중 가장 큰 숫자를 반환합니다.
// Math.min() - 주어진 숫자 중 가장 작은 숫자를 반환합니다.
console.log(Math.max(10, 128, 12, 49, 7)) // 128
console.log(Math.min(10, 128, 12, 49, 7)) // 7

const numbers = [10, 128, 12, 49, 7]
console.log(Math.max(...numbers)) // 128
// ...(전개 연산자) : 배열 or 객체 데이터의 각 데이터들만 가져옴
console.log(Math.min(...numbers)) // 7

console.log('----구분선----')
// Math.random() - '0' 이상 '1' 미만의 난수(무작위 수)를 반환합니다.
console.log(Math.random())
console.log(Math.random())

//원하는 범위의 무작위 정수를 얻는 함수
function random(min = 0, max = 10) {
  // min 초기값 = 0, max 초기값 = 10
  return Math.floor(Math.random() * (max - min)) + min
  // 랜덤값 * (최대값 - 최소값) 후 소수점버림 이후 + 최소값
}
console.log(random()) // 0 ~ 9
console.log(random(0, 100)) // 0 ~ 99
// min = 0, max = 100의 각 인수를 random()함수의 매개변수에 할당
console.log(random(101, 200)) // 101 ~ 199
