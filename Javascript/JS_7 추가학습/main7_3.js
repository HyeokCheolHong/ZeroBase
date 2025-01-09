// 선택적 체이닝(Optional Chaining)
// ?. - 대괄호 혹은 점 표기법의 대상이 null 혹은 undefined인 경우, 에러 대신 undefined를 반환합니다.

// console.log(null.abc) // Error.. Cannot read properties of null (reading 'abc')
console.log(null?.abc) // undefined
// 속성을 확인하는 . 표기법에서 내용이 없다면 ?. 표기로 에러가 뜨지 않게 사용
// console.log(undefined.abc) // Error.. Cannot read properties of undefined (reading 'abc')
console.log(undefined?.abc) // undefined

const el = document.querySelector('h1')
console.log(el.textContent)

const numbers = [1, 2, 3]
// const numbers = null
console.log(numbers?.[0])
// 대괄호 앞에 ?. 을 추가하여 Error 방지

// const user = {
//   name: 'Neo',
//   age: 22
// }
const user = null
console.log(user?.name)

console.log('----구분선----')

const evan = {
  name: 'Evan',
  address: {
    country: 'Korea',
    city: 'Seoul'
  },
  greet() {
    return `Hello, ${this.name}!`
  }
}
const neo = {
  name: 'Neo'
}

function logCity(user) {
  console.log(user.address?.city || '주소가 없어요!')
  // user의 address의 city가 있으면 값 표기 ||(또는) 없다면 '주소가 없어요!' 표기
}
function logGreeting(user) {
  console.log(user.greet?.())
}
logCity(evan) // Seoul!
logCity(neo) // 주소가 없어요!
logGreeting(evan) // Hello, Evan!
logGreeting(neo) // undefined