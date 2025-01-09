// Object(객체) 표준 내장 객체(Built-in Object)
// Object.assign(대상, 출처1, 출처2, ...)
// - 하나 이상의 '출처 객체(Source)'로부터 '대상 객체(Target)'로 속성을 복사하고 대상 객체를 반환합니다.

const target = { a: 1, b: 2}
const target1 = { a: 1, b: 2}
const source1 = { b: 3, c: 4}
const source2 = { c: 5, d: 6}
const result = Object.assign(target, source1, source2)
// target에 source1, source2의 속성을 복사하고 target을 반환한다
// JS에서 객체데이터의 속성은 '고유'해야 하므로 속성이 같다면 덮어쓴다
const result1 = Object.assign({}, target1, source1, source2)
// {}에 target1, source1, source2의 속성을 복사하고 {}를 반환한다.

console.log(target) // {a: 1, b: 3, c: 5, d: 6}
console.log(result) // {a: 1, b: 3, c: 5, d: 6}
console.log(target1) // {a: 1, b: 2}
console.log(result1) // {a: 1, b: 3, c: 5, d: 6}

const userA = {
  name: 'Neo',
  age: 85
}

const userB = {
  age: 22,
  email: 'thesecon@gmail.com',
  isValid: true
}
// const neo = Object.assign(userA, userB)
const neo = Object.assign({}, userA, userB)

console.log(neo) // {name: 'Neo', age: 22, email: 'thesecon@gmail.com', isValid: true}
console.log(userA) // {name: 'Neo', age: 85}

console.log('----구분선----')

// Object.keys() - 객체의 모든 키를 배열로 반환합니다.
// 순서는 보장하지 않습니다.
const user = {
  // key: value
  name: 'Neo',
  age: 85,
  email: 'neo@heropy.dev',
  isValid: true
}
const keys = Object.keys(user)
// 객체 데이터 user의 key값들을 배열로 만들어 keys에 저장한다
console.log(keys) // ['name', 'age', 'email', 'isValid']

keys.forEach(key => {
  const el = document.createElement('div')
  // 현재문서에서 el변수에 메모리 상에서 div tag로 생성한다
  el.innerHTML = `<strong>${key}</strong>: ${user[key]}`
  // el변수 를 HTML로 넣는다 = <문자Data>매개변수<문자Data종료>: value
  document.body.append(el)
  // 현재문서 body에 el을 추가한다.
})

console.log('----구분선----')

// Object.values() - 객체의 모든 값을 배열로 반환합니다.
// 순서는 보장되지 않습니다.
// const user = {
//   name: 'Neo',
//   age: 85,
//   email: 'neo@heropy.dev',
//   isValid: true
// }
const values = Object.values(user)
console.log(values) // ['Neo', 85, 'neo@heropy.dev', true]