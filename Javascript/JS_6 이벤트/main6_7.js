// 이벤트(Evnet) / 마우스와 포인터 이벤트

const parentEl = document.querySelector('.parent')
const childEls = document.querySelectorAll('.child')
// querySelectorAll : 유사배열

childEls.forEach(childEl => {
  // click - 클릭했을 때
  // dblclick - 더블 클릭했을 때
  childEl.addEventListener('click', () => {
    childEl.classList.toggle('active')
  })

  // contextmenu - 우클릭했을 때
  childEl.addEventListener('contextmenu', event => {
    event.preventDefault()
    console.log(childEl.textContent)
  })
})

// mousedown - 버튼을 누를 때
parentEl.addEventListener('mousedown', () => {
  parentEl.classList.add('active')
})
// mouseup - 버튼을 땔 때
parentEl.addEventListener('mouseup', () => {
  parentEl.classList.remove('active')
})
// mouseenter - 포인터가 요소로 들어갈 때
parentEl.addEventListener('mouseenter', () => {
  parentEl.classList.add('active')
})
// mouseleave - 포인터가 요소에서 나올 때
parentEl.addEventListener('mouseleave', () => {
  parentEl.classList.remove('active')
})
// mousemove - 포인터가 움직일 때
parentEl.addEventListener('mousemove', event => {
  console.log(event.x, event.y)
})
// wheel - 휠 버튼이 회전할 때
parentEl.addEventListener('wheel', event => {
  console.log('Parent Wheel!')
})