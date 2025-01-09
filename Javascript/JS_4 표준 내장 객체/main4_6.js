// Array(배열) 표준 내장 객체(Built-in Object)
// .length - 배열의 길이(숫자)를 반환합니다.
const fruits = ['Apple', 'Banana', 'Cherry']

console.log(fruits.length)

console.log('----구분선----')
// .at - 배열을 인덱싱하며, 만약 음수를 사용하면 뒤에서부터 인덱싱합니다.
console.log(fruits[1])
console.log(fruits.at(1))

console.log(fruits[fruits.length - 1])
// 함수 길이 - 1 (즉 마지막 번째 인덱싱)
console.log(fruits.at(-1))
// 뒤에서부터 1번째(마지막) 인덱싱


console.log('----구분선----')
// .concat - 배열에서 주어진 배열을 병합해 새로운 배열을 반환합니다.

const fruits1 = ['Apple', 'Banana', 'Cherry']
const fruits2 = ['Cherry', 'Durian']
const fruits3 = fruits1.concat(fruits2) // ['Apple', 'Banana', 'Cherry', 'Cherry', 'Durian']
// fruits1배열에 fruits2배열을 병합한다. (중복되는 아이템도 그대로 각각 나열된다)
const fruits4 = [...fruits1, ...fruits2] // ['Apple', 'Banana', 'Cherry', 'Cherry', 'Durian']
// ...(전개연산자) : 배열의 []을 없에 데이터만 남음
console.log(fruits1)
console.log(fruits2)
console.log(fruits3)
console.log(fruits4)

console.log('----구분선----')
// .every() - 배열의 모든 요소가 콜백 테스트를 통과하는지 확인합니다.
// 만약 테스트가 하나라도 실패하면, 이후 테스트는 진행하지 않고 'false'를 반환합니다.
const numbers = [17, 20, 199, 5, 48]
const isValid = numbers.every(item => item < 200)
// 콜백 함수 : 호출로 들어가지는 인수가 함수인것
// 콜백은 배열/객체 의 아이템 개수만큼 반복 동작한다
// item이라는 매개변수가 숫자 200보다 작은지 확인
// {} 없기때문에 return값은 'item < 200' 이다
console.log(isValid)

const users = [
  {name: 'Neo', age: 12, email: 'Neo@heropy.dev'},
  {name: 'Evan', age: 47, email: 'evan@heropy.dev'},
  {name: 'Lewis', age: 24}
  // 3개의 객체 데이터 생성
]
console.log(users.every(user => user.email))
// user가 users의 각각의 객체데이터 이다
// Lewis의 email이 존재하지않음(undefined) 으로 false 출력
console.log(users.every(user => user.age))