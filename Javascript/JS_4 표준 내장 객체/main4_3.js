// Number(숫자) 표준 내장 객체(Built-in Object)
// .toFixed() - 숫자에서 지정된 자릿수까지 표현하는 새로운 문자를 반환합니다.

const num = 3.1415926535

console.log(num.toFixed(2)) // '3.14'
// 숫자 num변수에서 소수점 2자리수까지만 표현하여 '문자'로 반환
console.log(Number(num.toFixed(2))) // 3.14
// '문자'로 반환된 값을 Number로 숫자로 재 변환

// .toLocaleString() - 숫자에서 현지 언어 형식(3자리수 단위마다 ,)으로 바꾼 새로운 문자를 반환합니다.

const num1 = 1000
const num2 = 100000000
const num3 = num1.toLocaleString()
// 사용자가 보기쉽게 표기할때 주로 사용
const num4 = num2.toLocaleString()

console.log(num3) // '1,000'
console.log(num4) // '100,00,000'
console.log(Number(num3.replaceAll(',', ''))) // 1000
console.log(Number(num4.replaceAll(',', ''))) // 100000000

// 데이터.메소드() vs 클래스.메소드()
// 프로토타입 메소드(Prototype Method) : 데이터(인스턴스)에서 사용하는 메소드
// 정적 메소드(Static Method) : 클래스에서 직접 사용하는 메소드

// 클래스.메소드()
// Number(), Number.parseInt(), Number.parseFloat()

// 더 광범위하게 해석, 유연함
// 광범위하기에 사용자가 해석하기는 어려울 수 있음
console.log('Number(데이터)') // 데이터를 숫자로 변환합니다.
console.log(Number('123')) // 123
console.log(Number('123.456')) // 123.456
console.log(Number('abc123')) // NaN
console.log(Number('123abc')) // NaN
console.log(Number('')) // 0
console.log(Number('abc')) // NaN
console.log(Number(true)) // 1
console.log(Number(false)) // 0
console.log(Number({})) // NaN
console.log(Number([])) // 0

// 숫자를 추출해 명확하고 예측 가능하게 동작, 진법 지정 가능, 정수만 처리
console.log('Number.parseInt(문자, 진수)') // 문자를 정수로 변환합니다.
console.log(Number.parseInt('123', 10)) // 123
console.log(Number.parseInt('123.456', 10)) // 123
console.log(Number.parseInt('abc123', 10)) // NaN
console.log(Number.parseInt('123abc', 10)) // 123 (숫자로 시작하기 때문에 분석이 가능함)
console.log(Number.parseInt('', 10)) // NaN
console.log(Number.parseInt('abc', 10)) // NaN
console.log(Number.parseInt(true, 10)) // NaN
console.log(Number.parseInt(false, 10)) // NaN

// parseInt 장점에 더해, 부동소수점 실수까지 처리
console.log('Number.parseFloat(문자)') // 문자를 부동소수점 실수로 변환합니다.
console.log(Number.parseFloat('123')) // 123
console.log(Number.parseFloat('123.456')) // 123.456
console.log(Number.parseFloat('abc123')) // NaN
console.log(Number.parseFloat('123abc')) // 123

// Number.isInteger() - 데이터가 정수(숫자 데이터)인지 확인합니다.
console.log('Number.isInteger(데이터)')
console.log(Number.isInteger(123)) // true
console.log(Number.isInteger(3.14)) // false
console.log(Number.isInteger(-82)) // true
console.log(Number.isInteger(0)) // true
console.log(Number.isInteger('123')) // false
console.log(Number.isInteger('abc')) // false

// Number.isNaN() - 데이터가 'NaN'인지 확인합니다.
console.log('Number.isNaN(데이터)')
console.log(Number.isNaN(NaN)) // true
console.log(Number.isNaN(123)) // false
console.log(Number.isNaN(Infinity)) // false
// Infinity : 무한(숫자 데이터)
console.log(Number.isNaN('abc')) // false