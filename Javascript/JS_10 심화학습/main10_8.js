// 클로저(Closure)는 함수가 선얼될 때의 렉시컬 스코프를 기어갛고 있다가,
// 함수가 호출될 때 그 스코프에 접근할 수 있는 개념(특성)을 말합니다.

let count1 = 0
function c1() { return count1 += 1}
console.log(c1()) // 1
console.log(c1()) // 2
console.log(c1()) // 3

let count2 = 77
function c2() { return count2 += 1}
console.log(c2()) // 78
console.log(c2()) // 89
console.log(c2()) // 80
// 동일한 내용을 2가지의 함수를 만들어서 사용하니 불합리하다.


function createCount(count) {
  // creteCount 함수에서 count매개변수를 받아들임
  // creteCount 함수를 호출시 익명함수를 반환함
  return function() {
    // 익명함수를 호출시 count += 1 하여 반환함
    return (count += 1)
    // Closure : count의 매개변수에 렉시컬 스코프값을 기억하고있음
    // count가 호출될때 마다 count 매개변수는 값을 누적할 수 있음
  }
}

const c3 = createCount(0)
console.log(c3()) // 1
console.log(c3()) // 2
console.log(c3()) // 3
const c4 = createCount(77)
console.log(c4()) // 78
console.log(c4()) // 79
console.log(c4()) // 80

console.log(c3 === c4) // false
// c3와 c4는 서로 다른 함수이다(count 매개변수도 다르다)

console.log('----구분선----')

const h1El = document.querySelector('h1')
const h2El = document.querySelector('h2')


// // 일반
// // h1El 이벤트가 발생했을때 상태를 결정짓는 h1IsRed가 함수밖에 관리되고 있다면
// // 다른 해당 클릭이벤트가 생기면 계속 만들어줘야하는 불편함이 생김
// let h1IsRed = false
// h1El.addEventListener('click', () => {
//   h1IsRed = !h1IsRed
//   // h1El요소가 click 될때 마다 h1IsRed에 h1IsRed를 반전한값을 할당
//   h1El.style.color = h1IsRed ? 'red' : 'black'
//   // h1IsRed가 참이면 Red 거짓이면 Block style 글자색상을 입힘
// })

// let h2IsRed = false
// h2El.addEventListener('click', () => {
//   h2IsRed = !h2IsRed
//   h2El.style.color = h2IsRed ? 'red' : 'black'
// })

const createToggleHandler = () => {
  // 함수 데이터 사용
  let isRed = false
  return event => {
    isRed = !isRed
    event.target.style.color = isRed ? 'red' : 'black'
    // evnet.target : 이벤트가 발생한 대상(h1El or h2El)
  }
}
h1El.addEventListener('click', createToggleHandler())
h2El.addEventListener('click', createToggleHandler())