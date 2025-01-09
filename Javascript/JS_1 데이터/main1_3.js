// boolean/null/undefined

// 불린(boolean)은 'true'와 'false' 두 가지 값인 참/거짓의 논리 데이터입니다.
const a = true
const b = false

console.log(a, b)

if (a) {
    console.log('참(Truthy)입니다!')
}

// 데이터를 서로 비교해, 참과 거짓을 판단합니다.
const a1 = 1
const a2 = 9

console.log(a1 > a2)

// 'null' 데이터는 존재하지 않는(nothing), 비어 있는(empty), 알 수 없는(unknown) 값을 명시적으로 나타냄)
let age = null

const h1El = document.querySelector('h1')
// h1E1 : h1 tag의 El(Element) 의 줄임말
// documnet : 해당 문서의
// querySelector : 검색하여 선택
console.log(h1El)
console.log(h1El.textContent)

// 'undefined' 데이터는, '값이 할당되지 않은 상태'를 나타낼 때 사용합니다.
// 변수는 선언했지만, 값을 할당하지 않았다면 해당 변수에 'undefined'가 임시적으로 할당
let age1
console.log(age1)

function fn() {
    // return 123
}

console.log(fn())