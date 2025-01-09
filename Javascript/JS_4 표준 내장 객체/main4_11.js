// Array(배열) 표준 내장 객체(Built-in Object)
// .splice(인덱스, 삭제개수, 추가요소) - 배열의 요소를  추가하거나 삭제하거나 교체합니다.
// 배열 원본에 변경됩니다

// 요소 추가
const fruits1 = ['Apple', 'Banana', 'Cherry']
fruits1.splice(2, 0, 'Durian')
console.log(fruits1) // ['Apple', 'Banana', 'Cherry', 'Durian']

// 요소 삭제
const fruits2 = ['Apple', 'Banana', 'Cherry']
fruits2.splice(1, 1)
console.log(fruits2) // ['Apple', 'Cherry']

// 요소 교체
const fruits3 = ['Apple', 'Banana', 'Cherry']
fruits3.splice(1, 1, 'Durian', 'Orange', 'Mango')
console.log(fruits3) //  // ['Apple', 'Durian', 'Orange', 'Mango', 'Cherry']

console.log('----구분선----')

// .unshift() - 배열의 시작 부분에 하나 이상의 요소를 추가하고, 배열의 새로운 길이를 반환합니다.
// .push()랑 반대 되는 개념
// 배열 원본이 변경됩니다.
const fruits = ['Apple', 'Banana', 'Cherry']
console.log(fruits.unshift('Durian')) // 4
console.log(fruits.length) // 4
console.log(fruits) // ['Durian', 'Apple', 'Banana', 'Cherry']

const numbers = [17, 20, 199, 5, 48]
console.log(numbers.unshift(9, 10 ,11)) // 6
console.log(numbers.length) // 6
console.log(numbers) // ['9, 10 ,11', 17, 20, 199, 5, 48]

console.log('----구분선----')

// 배열 메소드의 콜백은 항상 현재 반복의 인덱스를 얻을 수 있습니다.
const numbers1 = [17, 20, 199, 5, 48]
numbers1.every((num, idx) => {
  console.log(num, idx) // 17 0 \n 20 1 \n 199 2 \n 5 3 \n 48 4
  return true
})
numbers1.filter((num, idx) => {
  console.log(num, idx) // 17 0 \n 20 1 \n 199 2 \n 5 3 \n 48 4
  return true
})
numbers1.reduce((acc, cur, idx) => {
  console.log(acc, cur, idx) // 0 17 0 \n 17 20 1 \n 37 199 2 \n 235 5 3 \n 241 48 4
  return acc + cur
}, 0)

console.log('----구분선----')

// Array.isArray() - 배열 데이터인지 확인합니다.
const fruits4 = ['Apple', 'Banana', 'Cherry']
const arrayLikeFruits = {
  // 유사 배열(객체 데이터로 분류됨)
  0: 'Apple',
  1: 'Banana',
  2: 'Cherry',
  length: 3
}

console.log(fruits4) // ['Apple', 'Banana', 'Cherry']
console.log(arrayLikeFruits) // {0: 'Apple', 1: 'Banana', 2: 'Cherry', length: 3}
console.log(Array.isArray(fruits4)) // true
console.log(Array.isArray(arrayLikeFruits)) // false

console.log('----구분선----')

// Array.from() - 유사 배열(Array-like)을 실제 배열로 반환합니다.
// const fruits4 = ['Apple', 'Banana', 'Cherry']
// const arrayLikeFruits = {
  //   0: 'Apple',
  //   1: 'Banana',
  //   2: 'Cherry',
  //   length: 3
  // }
console.log(fruits4) // ['Apple', 'Banana', 'Cherry']
console.log(arrayLikeFruits) // {0: 'Apple', 1: 'Banana', 2: 'Cherry', length: 3}

console.log(fruits4[1]) // Banana
console.log(arrayLikeFruits[1]) // Banana

console.log(fruits4.length) // 3
console.log(arrayLikeFruits.length) // 3

console.log(Array.isArray(fruits4)) // true
console.log(Array.isArray(arrayLikeFruits)) // false

console.log(fruits4.map(fruit => fruit.toUpperCase())) // ['APPLE', 'BANANA', 'CHERRY']
// fruits4 배열의 각 아이템들을 대문자로 변환하여 새로운 배열로 만든다.
console.log(Array.from(arrayLikeFruits).map(fruit => fruit.toUpperCase())) // ['APPLE', 'BANANA', 'CHERRY']
// arrayLikeFruits의 객체 데이터를 Array.from을 통해 배열로 변환하여 각 아이템들을 대문자로 변환하여 새로운 배열로 만든다.