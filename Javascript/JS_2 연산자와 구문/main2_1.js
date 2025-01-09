// 산술
console.log(1 + 2)  // 3
console.log(5 - 7)  // -2
console.log(3 * 4)  // 12
console.log(10 / 2) // 5
console.log(7 % 5)  // 2

// 할당
let a = 3 // 
console.log(a) // 3

// a = a + 2
a += 2
console.log(a) // 5

// a = a - 2
a -= 2
console.log(a) // 3

// a = a * 2
a *= 2
console.log(a) // 6

// a = a / 2
console.log(a) // 3

// a = a % 2
console.log(a) // 1

// --------------------------------------------------------

// 증감

// ++ 기호가 뒤에 있는 경우
let b = 3
console.log(b++)
console.log(b)

// ++ 기호가 뒤에 있는 경우
let c = 3
console.log(++c)
console.log(c)

// -- 기호가 뒤에 있는 경우
let d = 3
console.log(d--)
console.log(d)

// -- 기호가 뒤에 있는 경우
let e = 3
console.log(--e)
console.log(e)

// 증감 연산자보다, 할당 연산자를 사용하는 것을 추천합니다
let f = 3
f += 1
console.log(f)
f -= 1
console.log(f)