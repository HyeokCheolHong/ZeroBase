// DOM - 크기와 좌표
// window.innerWidth - 화면(Viewport)의 너비를 얻습니다.
// window.innerHeight - 화면(Viewport)의 높이를 얻습니다.
// window.scrollX - 화면에서 스크롤된 x축의 위치를 얻습니다.
// window.xcrollY - 화면에서 스크롤된 y축의 위치를 얻습니다.

console.log(window.innerWidth)
console.log(window.innerHeight)

console.log(window.scrollX)
console.log(window.scrollY)

window.addEventListener('scroll', () => {
  console.log(window.scrollX)
  console.log(window.scrollY)
  // console.log(Math.round(window.scrollX))
  // console.log(Math.round(window.scrollY))
})

console.log('----구분선----')

// window.scrollTo(), 요소.scrollTo() - 지정된 좌표로 대상을 스크롤합니다.
// 대상.scrollTo(X좌표, Y좌표)
// 대상.scrollTo({
//    left: X좌표,
//    Top: Y좌표,
//    behavior: 'smooth'
//    })

setTimeout(() => {
  window.scrollTo(0, 200)
  // window.scrollTo({
  //    top: 200,
  //    left: 200,
  //    behavior: 'smooth'
  //    })
}, 2000)

const parentEl10 = document.querySelector('.parent')
const childEl10 = document.querySelector('.child')
childEl10.addEventListener('click', () => {
  // window.scrollTo({
  //    top: 200,
  //    left: 200,
  //    behavior: 'smooth'
  //    })
  parentEl10.scrollTo({
    top: 200,
    left: 0,
    behavior: 'smooth'
  })
})

console.log('----구분선----')

// 요소.offsetWidth - 테두리 선을 포함한 요소의 너비를 얻습니다.
// 요소.offsetheight - 테두리 선을 포함한 요소의 높이를 얻습니다.
// 요소.clientWidth - 테두리 선을 제외한 요소의 너비를 얻습니다.
// 요소.clientHeight - 테두리 선을 제외한 요소의 높이를 얻습니다.
// 요소.scrollWidth - 테두리 선을 제외한 요소의 스크롤 영역 너비를 얻습니다.
// 요소.scrollHeight - 테두리 선을 제외한 요소의 스크롤 영역 높이를 얻습니다.
const parentEl20 = document.querySelector('.parent')
const childEl20 = document.querySelector('.child')

console.log(parentEl20.clientWidth, parentEl20.clientHeight) // 323 240
console.log(childEl20.clientWidth, childEl20.clientHeight) // 263 100

console.log(parentEl20.offsetWidth, parentEl20.offsetHeight) // 360 260
console.log(childEl20.offsetWidth, childEl20.offsetHeight) // 283 120

console.log(parentEl20.scrollWidth, parentEl20.scrollHeight) // 323 481
console.log(childEl20.scrollWidth, childEl20.scrollHeight) // 263 100

