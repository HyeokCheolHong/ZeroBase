// DOM - 검색과 탐색
// document.querySelector(선택자) - 선택자로 검색한 요소를 하나 반환합니다.
// 만약 검색 결과가 없으면, 'null'을 반환합니다.

const el = document.querySelector('.parent')
// 변수 el에 parent class 선택자를 할당한다
const el_test1 = document.querySelector('.child:nth-child(1)')
// 변수 el_test1에 child class 선택자 중 첫번째 자식을 할당한다
const el_test2 = document.querySelector('.child:nth-child(4)')

console.log(el)
console.log(el_test1) // <div id="c1" class="child">사과</div>
console.log(el_test2) // null

console.log(el.querySelector('div'))
// el에 .parent를 찾은 후 div태그를 찾기시 parent class 자식요소 중 첫번째 div태그를 찾는다

console.log('----구분선----')

// document.querySelectorAll(선택자)
// - 선택자로 검색한 모든 요소를 NodeList 객체로 반환합니다.
const nodeList = document.querySelectorAll('.child')
console.log(nodeList) // [div#c1.child, div.child, div.child]
console.log(nodeList[0], nodeList[1], nodeList[2])
  // <div id="c1" class="child">사과</div>
  // <div class="child">바나나</div>
  // <div class="child">체리</div>

console.log('----구분선----')

// NodeList 객체는 유사배열이며, `.forEach()` 메소드는 내장되어 있지만,
// 기타 배열 메소드는 사용할 수 없습니다.
nodeList.forEach((el, index) => console.log(index + 1, el))
// forEach : 배열의 아이템 개수만큼 반복 동작
  // <div id="c1" class="child">사과</div>
  // <div class="child">바나나</div>
  // <div class="child">체리</div>

  console.log('----구분선----')

// NodeList 객체는 `Array.from()` 메소드를 통해 배열로 변환할 수 있습니다.
const nodes = Array.from(nodeList)
const names = nodes.map(el => el.textContent)
// map : 각 아이템들을 새로운 배열로 만든다.
console.log(names) // ['사과', '바나나', '체리']

console.log('----구분선----')

// document.getElementById(아이디)
// - HTML `id` 속성(Attributes) 값으로 검색한 요소를 하나 반환합니다.
// 만약 검색 결과가 없으면, `null`을 반환합니다.
const idEl = document.getElementById('c1')
console.log(idEl) // <div id="c1" class="child">사과</div>

const selEl = document.querySelector('#c1')
console.log(selEl) // <div id="c1" class="child">사과</div>

console.log('----구분선----')

// 노드.parentElement - 노드의 부모 요소를 반환합니다.
const nodeEl = document.querySelector('.child')
// child class 첫번째 요소 반환
console.log(nodeEl) // <div id="c1" class="child">사과</div>
console.log(nodeEl.parentElement)
// child class의 부모 요소 반환

console.log('----구분선----')

// 요소.previousElementSibling - 요소의 이전 형제 요소를 반환합니다.
// 요소.nextElementSibling - 요소의 다음 형제 요소를 반환합니다.
const elEl = document.querySelector('.child') // <div id="c1" class="child">사과</div>
console.log(elEl.previousElementSibling) // null
console.log(elEl.nextElementSibling) // <div class="child">바나나</div>

console.log('----구분선----')

// 요소.children - 요소의 모든 자식 요소를 반환합니다.
// 요소.firstElementChild - 요소의 첫 번째 자식 요소를 반환합니다.
// 요소.lastElementChild - 요소의 마지막 자식 요소를 반환합니다.
const elCh = document.querySelector('.parent')
console.log(elCh.children) // [div#c1.child, div.child, div.child, c1: div#c1.child]
console.log(elCh.children[el.children.length - 1]) // <div class="child">체리</div>
console.log(elCh.firstElementChild) // <div id="c1" class="child">사과</div>
console.log(elCh.lastElementChild) // <div class="child">체리</div>