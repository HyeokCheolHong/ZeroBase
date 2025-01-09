// DOM - 생성, 조회, 수정
// document.createElement(태그이름) - HTML 요소를 메모리상에 생성해 반환합니다.
const divEl = document.createElement('div')
// divEl 변수에 div tag 요소 생성
divEl.textContent = 'Hello world!'
divEl.classList.add('box')
// divEl 변수에 'box' class 요소 추가
console.log(divEl)

const inputEl = document.createElement('input')
inputEl.value = 'Hello world!'
// value : 처음 HTML 화면에 보일 값
console.log(inputEl)

const buttonEl = document.createElement('button')
buttonEl.textContent  = 'Click!'
console.log(buttonEl)

document.body.append(divEl, inputEl, buttonEl)
// 메모리상 추가한 각 요소들을 HTML body 추가

console.log('----구분선----')

// 요소.prepend(노드1, 노드2, ...) - 하나 이상의 노드를 요소의 첫 번째 자식으로 삽입합니다.
// 요소.append(노드1, 노드2, ...) - 하나 이상의 노드를 요소의 마지막 자식으로 삽입합니다.
// 노드.appendChild(노드1) - 하나의 노드를 노드의 마지막 자식으로 삽입하고 삽입한 노드를 반환합니다.
const parentEl10 = document.querySelector('.parent')
const divEl10 = document.createElement('div')
divEl10.textContent = '새로운 요소!'
const inputEl10 = document.createElement('input')

const res11 = parentEl10.prepend(new Comment(' 새로운 주석! '))
// res11 변수에 parentEl10요소의 첫번째 자식에 Commnet Class의 노드를 추가
const res12 = parentEl10.append(divEl10, '새로운 텍스트!')
// res12 변수에 parentEl10요소의 마지막 자식에 divEl10, '새로운 텍스트! 라는 2개의 노드를 추가
const res13 = parentEl10.appendChild(inputEl10).placeholder = '값을 입력하세요!'
// res13 변수에 parentEl10요소의 마지막 자식에 inputEl10 노드를 추가하고 inputEl10의 CSS선택자 placeholder 추가
// placeholder : css선택자로 입력창에 입력힌트 작성해주는 것

console.log(res11, res12) // undefined undefined
// 반환하는게 없다
console.log(res13) // 값을 입력하세요!

console.log('----구분선----')

// 요소.remove() - 요소를 제거합니다.
const el20 = document.querySelector('.child')
console.log(el20) // <div id="c1" class="child">사과</div>
el20.remove()
// HTML 화면에서 el20에 저장된 요소를 제거함

console.log('----구분선----')

// 노드.contains(노드) - 주어진 노드가 대상 노드를 포함한 후손인지 확인합니다.
const parentEl30 = document.querySelector('.parent')
const childEl30 = document.querySelector('.child')

console.log(parentEl30.contains(childEl30)) // true
// childEl30 요소가 parentEl30의 후손인지 확인
console.log(document.body.contains(parentEl30)) // true
console.log(document.body.contains(childEl30)) // true
console.log(document.body.contains(document.body)) // true
console.log(parentEl30.contains(parentEl30)) // true
// 자기 자신도 포함
console.log(parentEl30.contains(document.body)) // false
console.log(childEl30.contains(document.body)) // false