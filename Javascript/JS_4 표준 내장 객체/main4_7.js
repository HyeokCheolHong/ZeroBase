// Array(배열) 표준 내장 객체(Built-in Object)
// .filter() - 배열에서 콜백 테스트를 통과하는 모든 요소로 새로운 배열을 만들어 반환합니다.
// 만약 모든 요소가 테스트를 통과하지 못하면 빈 배열을 반환합니다.
const numbers = [17, 20, 199, 5, 48]
const filteredNumbers = numbers.filter(number => number < 30)
// numbers의 배열데이터의 각 데이터들이 30을 넘는지 확인
// 넘지 않는것 끼리 새로운 배열데이터로 반환
// 모든 요소가 넘는다면 빈 배열데이터로 반환
console.log(filteredNumbers) // [17, 20, 5]

const users = [
  {name: 'Neo', age: 12, email: 'Neo@heropy.dev'},
  {name: 'Evan', age: 47, email: 'evan@heropy.dev'},
  {name: 'Lewis', age: 24}
]
const youngUsers = users.filter(user => user.age < 30)
console.log(youngUsers) // users[0], users[2]
const usersWithEmail = users.filter(user => user.email)
console.log(usersWithEmail) // users[0], users[1]
const usersWithPhone = users.filter(user => user.phone)
console.log(usersWithPhone) // []

console.log('----구분선----')
// .find() - 배열에서 콜백 테스트를 처음으로 통과하는 요소를 반환합니다.
// 만약 테스트를 통과하면, 이후 테스트는 진행하지 않습니다.
// 만약 모든 테스트가 실패하면, 'undefined'를 반환합니다.
const foundNumber = numbers.find(number => number < 30)
const foundNumberFalse = numbers.find(number => false)
console.log(foundNumber) // 17
console.log(foundNumberFalse) // undefined

const foundUser = users.find(user => !user.email)
// !user.email : users에서 user(매개변수).email이 없는지 확인
const foundUserNull = users.find(user => null)
console.log(foundUser) // users[2]
console.log(foundUserNull) // undefined
