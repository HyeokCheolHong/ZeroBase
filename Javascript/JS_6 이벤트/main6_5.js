// 이벤트(Event) / 이벤트 캡처링(Event Capturing)
// .addEventListener(이벤트종류, 이벤트핸들러, 옵션)
// { capture: true} - 이벤트 캡처를 활성화합니다.

const parentEl = document.querySelector('.parent')
const childEl = document.querySelector('.child')
const anchorEl = document.querySelector('a')

window.addEventListener('click', () => {
  console.log('Window!')
})

document.documentElement.addEventListener('click', () => {
  console.log('HTML!')
})

document.body.addEventListener('click', () => {
  console.log('Body!')
}, {
  capture: true
  // 이벤트가 발생한 대상을 먼저 캡처(우선) 사용하겠다
  // 캡처요소가 있는 상위요소가 우선 사용
})
parentEl.addEventListener('click', () => {
  console.log('Parent!')
}, {
  capture: true
  // 이벤트가 발생한 대상을 먼저 캡처(우선) 사용하겠다
})

childEl.addEventListener('click', () => {
  console.log('Child!')
})

anchorEl.addEventListener('click', (event) => {
  event.preventDefault()
  // 기본동작 방지
  console.log('Anchor!')
})