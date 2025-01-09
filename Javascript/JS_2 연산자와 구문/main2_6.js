const age = 20
if (age >= 18) {
  console.log("성인")
}

const number = 7
if (number % 2 == 0) {
  console.log("짝수")
} else {
  console.log("홀수")
}

const score = 85
if (score >= 90) {
  console.log('A')
} else if (score >= 80) {
  console.log('B')
} else if (score >= 70) {
  console.log('C')
} else if (score >= 60) {
  console.log('D')
} else {
  console.log('F')
}

const inputEl = document.querySelector('input')
const buttonEl = document.querySelector('button')
const h1El = document.querySelector('h1')

// 현재 html에는 button tag가 존재하지 않으면 null이 표현되어 addEventListener이 동작이 안댐
buttonEl.addEventListener('click', function() {
  // buttinEl : 에 클릭이라는 이벤트가 발생시 동작
  const score = Number(inputEl.value)
  // 변수 score 의 숫자(inputEl.value : 사용자의 입력값)을 할당한다
  // 기존 input tag는 문자 데이터지만 앞에 Number을 붙임으로써 숫자로 바뀜
  if (score >= 90) {
    h1El.textContent = 'A'
    // h1 tag에 텍스트요소 'A'를 할당
  } else if (score >= 80) {
    h1El.textContent = 'B'
  } else if (score >= 70) {
    h1El.textContent = 'C'
  } else if (score >= 60) {
    h1El.textContent = 'd'
  } else {
    h1El.textContent = 'F'
  }
})