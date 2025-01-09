// 콜백을 호출하는 타이머 설정
// setTimeout(함수데이터(콜백), 지연시간(ms))

const timeout = setTimeout(() => {
  // setTimeout이 호출될때 timeout변수에 타이머가 동작
  console.log('Hello~')
}, 5000)

// 타이머를 취소
const btnEl = document.querySelector('button')
btnEl.addEventListener('click', () => {
  console.log('타이머 취소')
  clearTimeout(timeout)
  // JS의 내장함수 clearTimeout(인수) : 인수값을 초기화
})

// 콜백을 반복 호출하는 타이머 설정
// setInterval(함수데이터(콜백), 지연시간(ms))
const timeout_1 = setInterval(() => {
  // setInterval로 작성된 시간마다 지속적으로 함수 호출을 진행
  console.log('Hello~')
}, 3000)

// 타이머를 취소
const btnEl_1 = document.querySelector('button')
btnEl.addEventListener('click', () => {
  console.log('타이머 취소')
  clearInterval(timeout)
  // JS의 내장함수 clearInterval(인수) : 인수값을 초기화
})