// Array(배열) 표준 내장 객체(Built-in Object)
// .map() - 배열의 모든 요소에 대해 각 콜백을 호출하고 반환된 결과로 새로운 배열로 반환합니다.

const numbers = [17, 20, 199, 5, 48]
const doubleNumbers = numbers.map(number => number * 2)
console.log(doubleNumbers) // [34, 40, 398, 10, 96]
console.log(numbers) // [17, 20, 199, 5, 48]

const fruits = ['Apple', 'Banana', 'Cherry']
const capitalizedFruits = fruits.map(fruit => fruit.toUpperCase())
// toUpperCase : 모두 대문자로 변경
console.log(capitalizedFruits) // ['APPLE', 'BANANA', 'CHERRY']
console.log(fruits) // ['Apple', 'Banana', 'Cherry']

const users = [
  {name: 'Neo', age: 12, email: 'Neo@heropy.dev'},
  {name: 'Evan', age: 47, email: 'evan@heropy.dev'},
  {name: 'Lewis', age: 24}
]
const userEmails = users.map(user => user.email)
console.log(userEmails) // ['Neo@heropy.dev', 'evan@heropy.dev',  undefined]]
console.log(userEmails.filter(email => email)) // ['Neo@heropy.dev', 'evan@heropy.dev']

console.log('----구분선----')

// .push() - 배열의 마지막에 하나 이상의 요소를 추가하고, 배열의 새로울 길이를 반환합니다.
// 배열 원본이 변경됩니다.
// const fruits = ['Apple', 'Banana', 'Cherry']
console.log(fruits.push('Durian')) // 4
console.log(fruits.length) // 4
console.log(fruits) // ['Apple', 'Banana', 'Cherry', 'Durian']

// const numbers = [17, 20, 199, 5, 48]
console.log(numbers.push(9, 10, 11)) // 8
console.log(numbers.length) // 8
console.log(numbers) // [17, 20, 199, 5, 48, 9, 10, 11]

console.log('----구분선----')

// .reduce() - 배열의 각 요소에 대해 콜백을 호출하고,
// 각 콜백의 반환 값을 다음 콜백으로 전달해 마지막 콜백의 반환 값을 최종 반환합니다.
const number1 = [17, 20, 199, 5, 48]
let sum1 = 0
number1.forEach(number => {
  // 배열의 각 아이템을 number매개변수로 받아 반복실행
  sum1 += number
})
console.log('합계:', sum1) // 합계 : 289

const sum2 = number1.reduce((accumulator, number) => {
  // 배열변수명.reduce( (리턴변수, 매개변수) -> { 콜백함수 }, 리턴변수 초기값)
  // 배열의 각 아이템을 number매개변수로 받아 함수를 실행하고 결과값을 리턴변수에 저장 후 다음 반복 실행
  return accumulator + number
}, 0)
const sum20 = number1.reduce((accumulator, number) => accumulator + number, 0)
// 함수에 return 밖에 없다면 {}(중괄호)는 생략할 수 있다
console.log('합계:', sum2) // 합계 : 289
console.log('합계:', sum20) // 합계 : 289

// const users = [
//   {name: 'Neo', age: 12, email: 'Neo@heropy.dev'},
//   {name: 'Evan', age: 47, email: 'evan@heropy.dev'},
//   {name: 'Lewis', age: 24}
// ]
const sum3 = users.reduce((acc, user) => acc + user.age, 0)
console.log(sum3) // 83 (12+47+24)