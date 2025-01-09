// 구조 분해 할당(Destruturing assignment)
// - 배열이나 객체의 구조에 맞게 바로 개별 변수에 값을 할당하는 방법으로,
// 필요한 값만 추출하여 변수에 할당할 수 있습니다.
const user = {
  name: 'Neo',
  age: 22,
  isValid: true,
}
// const name = user.name
// const age = user.age
// const isValid = user.isValid
const { name, age, isValid } = user
// 객체 분해 할당 방식
// 변수이름을 똑같이 작성해줘야 한다
// 객체는 순서가 없으므로 변수 선언 순서엔 상관이 없다

console.log(name)
console.log(age)
console.log(isValid)

console.log('----구분선----')

// 선언과 분리
const user10 = {
  name10: 'Neo',
  age10: 22,
  isValid10: true,
}
let name10
let age10
let isValid10
if(user10) {
  ;({name10, age10, isValid10} = user10)
  // 객체 구조 할당에서 작성할땐 ()로 한번 묶어줘야 한다.
  // 소괄호가 시작하는 앞쪽에 앞의 영역과 합치는걸 방지하기 위해 ; 를 작성
  // 선언과 분리를 따로 하는이유 : if 조건문에서 변수 선언시 if조건문 안에서만 사용가능 (유효범위)
}

console.log(name10, age10, isValid10)

console.log('----구분선----')

// 기본값
const user20 = {
  name20: 'Neo',
  age20: 22,
  // isValid20: true,
}
const { isValid20 = false} = user20
// 객체 구조 할당 기본값 지정
// user 변수에 isValid20이 없다면(undefined라면) 기본값을 넣어주세요
console.log(isValid20)

console.log('----구분선----')

// 변수명 변경
const user30 = {
  name30: 'Neo',
  age30: 22,
  isValid30: true,
}
const { name30: n30, age30: a30, isValid30: v30} = user30
// 객체 구조 분해할당 에서 변수명 변경하는 방법 { 속성: 변경 변수명, 속성1: 변경 변수명1}

console.log(n30, a30, v30)

console.log('----구분선----')

// 기본값 + 변수명 변경
const user40 = {
  name40: 'Neo',
  age40: 22,
  // isValid40: true,
}
const { name40: n40, age40: a40, isValid40: v40 = false} = user40

console.log(n40, a40, v40)

console.log('----구분선----')

// 나머지 할당
const user50 = {
  name50: 'Neo',
  age50: 22,
  isValid50: true,
}
const { name50, ...rest50} = user50
// 객체 구조 분해할당에서 name50을 제외한 나머지는 객체데이터로 rest50에 저장

console.log(name50, rest50)