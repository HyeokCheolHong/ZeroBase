// 함수(Function)란, 어떤 작업을 수행하기 위해 필요한 여러 코드의 집합으로,
// 코드를 추상화하고 재사용성을 확보합니다.
// 이 함수를 자바스크립트에서는 하나의 데이터 종류로 취급합니다.

// 함수 선언문(Declaration)
function add(a, b) {
    // a와 b의 각 변수를 생성하여 add에 저장
    // 해당 변수들은 해당 function에서만 사용 가능하다
    // console.log(a)
    // console.log(b)
    return a + b
    // return : 반환 한다
}

console.log(add)
// 호출하지 않고 그대로 사용한 경우
console.log(add(1, 3))
console.log(add(4, 12))
console.log(add(5, 7))
console.log(add('a', 1))
// 하나의 함수로 여러번 사용함으로써 재사용성을 높인다

// 함수 표현식(Expression)
const sub = function (a, b) {
    return a - b
}

console.log(sub)
console.log(sub(1, 3))
console.log(sub(4, 12))
console.log(sub(5, 7))
console.log(add('a', 1))