// 이벤트(Event)
// 이벤트 버블링(Event Bubbling)
// - 하위 요소에서 발생한 이벤트가 동일한 요소를 가지고 있는 상위 요소로 전파 되는것
// evnet.stopPropagation() - 하위 요소에서 상위 요소로의 이벤트 전파(버블)를 정지합니다.

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
})
parentEl.addEventListener('click', (event) => {
  console.log('Parent!')
  event.stopPropagation() // 버블링 정지!
  // parentEl 요소까지 출력이 되고 그 상위요소는 전파되지 않음
})

childEl.addEventListener('click', () => {
  console.log('Child!')
})

anchorEl.addEventListener('click', () => {
  console.log('Anchor!')
})

// 사과 부분의 child를 누르면 tooltip class가 나타나게함
// const childEl = document.querySelector('.child')
const tooltipEl = document.querySelector('.tooltip')

childEl.addEventListener('click', () => {
  tooltipEl.classList.add('active')
})
window.addEventListener('click', () => {
  // 윈도우(Viewport)가 클릭이 되면 삭제되게
  // 현재는 parent요소 안에 버블링 정지가 되어 있으므로 parent밖 요소에 클릭해야함
  tooltipEl.classList.remove('active')
})