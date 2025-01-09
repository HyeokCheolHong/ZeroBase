// Array(배열) 표준 내장 객체(Built-in Object)
// .reverse() - 배열의 순서를 반전합니다.
// 배열 원본이 변경됩니다.

const fruits1 = ['Apple', 'Banana', 'Cherry']
console.log(fruits1.reverse()) // ['Cherry', 'Banana', 'Apple']
console.log(fruits1) // ['Cherry', 'Banana', 'Apple']

const fruits2 = ['Apple', 'Banana', 'Cherry']
console.log([...fruits2].reverse()) // ['Cherry', 'Banana', 'Apple']
// ...(전개연산자) : 배열 []을 없애고 각 아이템만 나열
// 전개연산자로인해 fruits2의 배열은 없어졌지만 밖에 []있기에 새로운 배열데이터로 생성됨
console.log(fruits2) // ['Apple', 'Banana', 'Cherry']

const msg = 'Hello world!'
console.log(msg.split('').reverse().join('')) // !dlrow olleH

console.log('----구분선----')

// .slice() - 배열의 일부를 추출해 새로운 배열로 반환 합니다.
const numbers = [100, 200, 300, 400, 500, 600, 700, 800, 900]

console.log(numbers.slice(0, 3)) // [100, 200, 300]
// 0번째 부터 3번째 전까지 즉 총 3개 (0, 1, 2)
console.log(numbers.slice(4, -1)) // [500, 600, 700, 800]
console.log(numbers.slice(4)) // [500, 600, 700, 800, 900]
// 4번째 부터 마지막 까지
console.log(numbers.slice(-4)) // [600, 700, 800, 900]
// 뒤에서 4번째부터 마지막 까지
console.log(numbers.slice(-4, -1)) // [600, 700, 800]
console.log(numbers) // [100, 200, 300, 400, 500, 600, 700, 800, 900]
// 원본은 변하지 않음

console.log('----구분선----')

// .some() - 배열의 요소 중 콜백 테스트를 통과하는 요소가 하나라도 있는지 확인합니다.
// 만약 테스트가 통과하면, 이후 테스트는 진행하지 않습니다.

const numbers1 = [17, 20, 199, 5, 48]
const isValid = numbers1.some(number => number > 180)
console.log(isValid) // true

const users = [
  {name: 'Neo', age: 12, email: 'Neo@heropy.dev'},
  {name: 'Evan', age: 47, email: 'evan@heropy.dev'},
  {name: 'Lewis', age: 24}
]
console.log(users.some(user => user.email)) // true
console.log(users.some(user => user.phone)) // false

console.log('----구분선----')

// .sort() - 배열의 요소를 콜백의 반환 값에 따라 정렬합니다.
// 만약 콜백을 제공하지 않으면, 요소를 유니코드 포인트 순서대로 정렬합니다.
// 배열 원본이 변경됩니다.
// const numbers1 = [17, 20, 199, 5, 48]
numbers1.sort()
// 유니코드 포인트 순서 : 각 아이템의 첫번째 문자의 순서대로 정렬
console.log(numbers1) // [17, 199, 20, 48, 5]

numbers1.sort((a, b) => a - b) // [5, 17, 20, 48, 199]
// a - b일 때 반환값이 음수면 a가 먼저 정렬되어야 한다
console.log(numbers1)

numbers1.sort((a, b) => b - a) // [199, 48, 20, 17, 5]
console.log(numbers1)

// const users = [
//   {name: 'Neo', age: 12, email: 'Neo@heropy.dev'},
//   {name: 'Evan', age: 47, email: 'evan@heropy.dev'},
//   {name: 'Lewis', age: 24}
// ]
users.sort((a, b) => a.age - b.age)
// users에 각 객체데이터에서 나이 순으로 정렬 함
// 객체데이터를 콘솔창에 출력할 때는 
// 내용이 숨겨지지 않도록 ([{…}, {…}, {…}])
// 먼저 숨겨지지 않도록 해야함
console.log(...users)
// 전개연산자 사용 방법
users.sort((a, b) => b.age - a.age)
console.log(users)