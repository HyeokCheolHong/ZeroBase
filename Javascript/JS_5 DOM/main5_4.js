// // DOM - 생성, 조회, 수정
// // 노드.textContent - 노드의 모든 텍스트를 확인(Get)하거나 지정(Set)합니다.
// // Get
// const el = document.querySelector('.child')
// console.log(el.textContent) // 사과

// // Set
// el.textContent = '오렌지'
// // 원래 문자에 덮어씀
// console.log(el.textContent) // 오렌지

// console.log('----구분선----')

// // 요소.innerHTML - 요소의 내부 HTML을 확인(Get)하거나 지정(Set)합니다.
// // Get
// const el10 = document.querySelector('.parent')
// console.log(el10.innerHTML)
//   // <!-- 주석 1 -->
//   // <div id="c1" class="child">사과</div>
//   // <div class="child">바나나</div>
//   // <div class="child">체리</div>
//   // <!-- 주석 2 -->
//   //  텍스트 1
//   //  텍스트 2

// // Set
// el.innerHTML = '<div class="child" style="font-size: 100px; color: red;">두리안</div>'
// // HTML 문법을 사용해서 덮어쓰기
// console.log(el.innerHTML) // <div class="child" style="font-size: 100px; color: red;">두리안</div>

console.log('----구분선----')

// 요소.dataset - 요소의 `data-` 속성을 확인(Get)하거나 지정(Set)합니다.
// JavaScript 요소들을 잠시나마 HTML에 저장하고 싶을 때 사용
const el20 = document.querySelector('.child')
const str20 = 'Hello world!'
const num20 = 123
const obj20 = { a: 1, b: 2 }
// HTML에서 직접 작성하려면 data-(속성)="문자" 형식으로 작성해도 된다

console.log(el20.dataset) // DOMStringMap {}

el20.dataset.helloWorld = str20
el20.dataset.number = num20
// 문자로 반환한다.
el20.dataset.object = JSON.stringify(obj20)
// JSON화 : 객체 데이터를 문자화 한다

console.log(el20.dataset)
  // DOMStringMap {helloWorld: 'Hello world!', number: '123', object: '{"a":1,"b":2}'}
console.log(el20.dataset.helloWorld) // 'Hello world!'
console.log(el20.dataset.number) // '123'
console.log(JSON.parse(el20.dataset.number)) // 123
// 문자데이터를 JSON.parse를 이용해서 숫자 데이터로 변환
console.log(el20.dataset.object) // {"a":1,"b":2}
console.log(JSON.parse(el20.dataset.object)) // {a: 1, b: 2}

const users20 = [
  { name: 'Neo', age: 22},
  { name: 'Evan', age: 48},
  { name: 'Lewis', age: 7}
]
const userEls20 = users20.map(user => {
  const divEl20 = document.createElement('div')
  divEl20.textContent = user.name
  divEl20.dataset.age = user.age
  return divEl20
})
document.querySelector('.parent').append(...userEls20)
  // HTML에 표기된다
  // <div data-age="22">Neo</div>
  // <div data-age="48">Evan</div>
  // <div data-age="7">Lewis</div>

console.log(document.querySelector('[data-age]').dataset.age)
// data-age 속성을 찾아서(가장 먼저 찾아진것) dataset.age를 출력해라
