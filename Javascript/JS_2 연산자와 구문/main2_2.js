// 부정 연산자(Negation Operator)는 참과 거짓의 반댓값을 불린 데이터로 반환합니다.
console.log(!true) // false
console.log(!false) // true

console.log(' 중첩 사용 ============')
console.log(!0) //true
console.log(!!0) //false
console.log(!!!0) //true
console.log(!!!!0) //false
console.log(!!!!!0)  //true

console.log('거짓(Falsy) ===========')
console.log(!null) //true
console.log(!NaN) //true
console.log(!undefined) //true
console.log(!'') //true

console.log('참(Truthy) ============')
console.log(!{}) //객체 데이터 (빈객체) false
console.log(![]) //배열 데이터 (빈배열) false
console.log(!'A') //문자 데이터 false

// ---------------------------------------------------------

// 비교 연산자(Comparison Operators)는 두 데이터를 비교할 때 사용합니다.
const a = 1
const b = 3

// 동등(형 변환!)
console.log(a == b) // false

// 부등(형 변환!)
console.log(a != b) // true

// 일치
console.log(a === b) // false

// 불일치
console.log(a !== b) // true

// 큼
console.log(a > b) // false

// 크거나 같음
console.log(a >= b) // false

// 작음
console.log(a < b) // true

// 작거나 같음
console.log(a <= b) // true