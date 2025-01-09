// DOM - 생성, 조회, 수정
// 요소.classList - 요소의 'class' 속성을 제어합니다.
// 요소.classList.add() - 값을 추가
// 요소.classList.remove() - 값을 제거
// 요소.classList.toggle() - 값을 토글
// 요소.classList.contains() - 값을 확인
const el = document.querySelector('.child')

el.classList.add('active')
console.log(el.classList.contains('active')) // true

el.classList.remove('active')
console.log(el.classList.contains('active')) // false

el.addEventListener('click', () => {
  el.classList.toggle('active')
  console.log(el.classList.contains('active'))
})

console.log('----구분선----')

// 요소.style - 요소의 'style' 속성을 확인(Get)하거나 지정(Set)합니다.
const el10 = document.querySelector('.child')

// 개별 지정할 수 있습니다.
el10.style.width = '100px'
el10.style.fontSize = '20px'
el10.style.backgroundColor = 'green'
el10.style.position = 'absolute'
// inline 스타일 방식 추가

// 한번에 지정할 수 있습니다.
Object.assign(el10.style, {
  width: '100px',
  fontSize: '20px',
  backgroundColor: 'green',
  position: 'absolute'
})
// inline 스타일 방식 추가

console.log(el10.style)
  // CSSStyleDeclaration {0: 'width', 1: 'font-size', 2: 'background-color', 3: 'position', accentColor: '', additiveSymbols: '', alignContent: '', alignItems: '', alignSelf: '', …}
console.log(el10.style.width) // 100px
console.log(el10.style.fontSize) // 20px
console.log(el10.style.backgroundColor) // green
console.log(el10.style.position) // absolute

el10.style.backgroundColor = 'green'
el10.style.width = '100px'
el10.style.transition = '1s'

el10.addEventListener('click', () => {
  const width10 = Number.parseInt(el10.style.width, 10)
  // el10에 저장된 문자100px을 10진법으로 숫자로 바꿈 : 100
  el.style.width = `${width10 + 50}px`
})

console.log('----구분선----')

// 요소.getAttribute(속성) - 요소의 속성을 확인합니다.
// 요소.setAttribute(속성, 값) - 요소에 속성과 값을 지정합니다.
// 요소.hasAttribute(속성) - 요소에 속성이 있는지 확인합니다.
// 요소.removeAttribute(속성) - 요소에서 속성을 제거합니다.
// HTML속성 : Attributes
// CSS 및 JS 속성 : Properties
const el20 = document.querySelector('.child')

console.log(el20.getAttribute('class')) // child
console.log(el20.getAttribute('title')) // null

el20.setAttribute('class', 'hello world')
el20.setAttribute('title', 'Hello world!')

console.log(el20.hasAttribute('class')) // true
console.log(el20.hasAttribute('title')) // true
console.log(el20.hasAttribute('value')) // false

el20.removeAttribute('class')
el20.removeAttribute('title')