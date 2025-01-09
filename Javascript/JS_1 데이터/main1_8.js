// 형변환(Type Conversion)이란,
// 데이터가 상황에 따라 적절한 데이터 타입(자료형)으로 변환되는 것을 말합니다.

const a = 1
const b = '1'

// == 동등 연산자
console.log("동등", a == b)
// Data type이 달라도 결과값이 일치하면 True값 출력

// === 일치 연산자
console.log("일치", a === b)

// 다음 코드는 모두 true를 출력합니다.
console.log('=======구분선=======')
console.log(123 == '123')
console.log(1 == true)
console.log(0 == false)
console.log(null == undefined)
console.log('' == false)

// 다음 코드는 모두 false를 출력합니다.
console.log('=======구분선=======')
console.log(123 === '123')
console.log(1 === true)
console.log(0 === false)
console.log(null === undefined)
console.log('' === false)


const h1El = document.querySelector('h1')
// 해당문서에 h1 tag선택자를 검색한다.

console.log(h1El.textContent)
// h1El에 저장된 글자내용을 출력한다

const h2El = document.querySelector('h2')
// 해당문서에 h2 tage선택자를 검색하지만 존재하지 않기에 Error 발생

// console.log(h2El.textContent)
// h1El에 저장된 글자내용을 출력한다

if (h2El) {
    // 참일때만 출력됨으로 Error 가 뜨지 않는다.
    console.log(h2El.textContent)
}