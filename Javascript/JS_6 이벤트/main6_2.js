// 이벤트(Event) / 이벤트 객체
// .addEventListner() 핸들러의 첫 매개변수로, 발생한 이벤트의 정보를 가진 객체를 전달합니다.
const parentEl = document.querySelector('.parent')
parentEl.addEventListener('click', event => {
  console.log(parentEl)
  console.log(event)
  console.log(event.target)
  // 이벤트가 발생한 대상 : parentEl
})

const inputEl = document.querySelector('input')
inputEl.addEventListener('keydown', event => {
  console.log(event.key)
  // 사용자가 누른 keyboard값
  console.log(inputEl.value)
  // 기존에 저장되어있던 값
  console.log(event.target.value)
  // event.target : 이벤트가 발생한 대상 즉 inputEl.value 값
})