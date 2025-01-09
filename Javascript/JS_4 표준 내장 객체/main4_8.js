// Array(배열) 표준 내장 객체(Built-in Object)
// .findIndex() - 배열에서 콜백 테스트를 처음으로 통과하는 요소의 인덱스를 반환합니다.
// 만약 테스트가 통과하면, 이후 테스트는 진행하지 않습니다.
// 만약 모든 테스트가 실패하면, '-1'를 반환합니다.
const numbers = [17, 20, 199, 5, 48]
const foundIndex = numbers.findIndex(number => number === 5)
const foundIndex1 = numbers.findIndex(number => number === 200)
console.log(foundIndex) // 3
console.log(foundIndex1) // -1

const users = [
  {name: 'Neo', age: 12, email: 'Neo@heropy.dev'},
  {name: 'Evan', age: 47, email: 'evan@heropy.dev'},
  {name: 'Lewis', age: 24}
]
const foundUserIndex = users.findIndex(user => !user.email)
console.log(foundUserIndex) // 2

console.log('----구분선----')

// .forEach() - 배열의 각 요소에 대해 콜백을 호출합니다.
// 만약 배열이 비어있다면, 아무런 동작도 하지 않습니다.
// 만약 반복을 종료하고 싶다면, for 반복문을 사용해야 합니다.
// const numbers = [17, 20, 199, 5, 48]
numbers.forEach(number => {
  // 배열의 아이템 개수만큼 반복 호출
  console.log(number) // 17 \n 20 \n 199 \n 5 \n 48
})

let sum = 0
numbers.forEach(number => {
  // forEach는 반복문을 도중에 종료 할 수 없음
  sum += number
})
console.log('합계', sum) // 합계 289

for (const number of numbers) {
  // for of 반복문
  // numbers 배열의 아이템마다 number의 매개변수로 넣어 반복실행
  if (number > 100) {
    break
    // 반복문 종료
  }
  console.log(number) // 17 \n 20
}

console.log('----구분선----')

// .includes() - 배열에서 특정 요소가 포함되어 있는지 확인합니다.
const fruits = ['Apple', 'Banana', 'Cherry']

console.log(fruits.includes('Apple')) // true
console.log(fruits.includes('banana')) //false
// 대소문자 구분은 확실히 해야함

// const numbers = [17, 20, 199, 5, 48]
console.log(numbers.includes(20)) // true
console.log(numbers.includes(200)) // false

console.log('----구분선----')

// .join() - 배열의 모든 요소를 연결해 하나의 문자열로 만듭니다.
// const fruits = ['Apple', 'Banana', 'Cherry']
console.log(fruits.join()) // Apple,Banana,Cherry (하나의 문자이지만 , 기호로 구분함)
console.log(fruits.join('')) //AppleBananaCherry
console.log(fruits.join(', ')) // Apple, Banana, Cherry
console.log(fruits.join('/')) // Apple/Banana/Cherry

const msg = 'Hello world!'
console.log(msg.split('').reverse().join('')) // !dlrow olleH
// 변수 msg를 split('') 한글자씩 쪼갠 후 reverse() 순서를 뒤집은 후 join('') 한글자씩 연결시킨다.