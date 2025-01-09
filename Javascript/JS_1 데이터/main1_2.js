// String/Number

// 숫자(Number)은 정수 및 부동소수점 숫자(floating point number)를 나타냅니다.
const n1 = 123
const n2 = 12.345

// 숫자가 아닌 숫자는 NaN(Not a Number)으로 표시됩니다.
const n3 = n1 + 'abc'
// 숫자와 문자를 더하면 문자를 우선시함으로 문자 데이터가 됨
const n4 = n2 + undefined

console.log(n3) // '123abc'
console.log(n4) // NaN