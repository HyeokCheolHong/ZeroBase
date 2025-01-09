// 이벤트(Event)
// 대상.addEventListener(이벤트종류, 핸들러) 
// - 대상에서 청취(Listen)할 이벤트 종류와 이벤트가 발생했을 떄 호출할
// 콜백(Handler)을 등록합니다.

const parentEl = document.querySelector('.parent')
const childEl = document.querySelector('.child')

parentEl.addEventListener('click', () => {
  console.log('Parent!')
})
childEl.addEventListener('click', () => {
  console.log('Child!')
})

console.log('----구분선----')

// 대상.removeEventListener(이벤트종류, 핸들러)
// - 대상에 등록했던 이벤트 핸들러를 제거합니다.
const parentEl10 = document.querySelector('.parent')
const childEl10 = document.querySelector('.child')

const handler10 = () => {
  console.log('Parent!')
}

parentEl10.addEventListener('click', handler10)
// parentEl10 변수에 click이벤트가 발생시 handler10 실행
childEl10.addEventListener('click', () => {
  parentEl10.removeEventListener('click', handler10)
})