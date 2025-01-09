// 얕은 복사(Shallow copy)는 참조형의 최상위 레벨만 복사하는 것을 말합니다.
// 깊은 복사(Deep copy)는 참조형의 모든 레벨을 복사하는 것을 말합니다.

const a = [
  // a변수 : []배열 데이터 (참조형)
  { x: 1, y: [1, 2] },
  // 각 배열의 아이템은 객체 데이터(참조형)
  // y는 객체 데이터의 배열 데이터로 할당(참조형)
  { x: 2, y: [3, 4] },
  { x: 3, y: [5, 6] }
]
// 즉 a변수의 배열데이터가 최상위 레벨

const c = {x: 1, y:2}
// c변수 : 객체데이터를 메모리에 저장(M1에 저장됨)
// 각 객체의 속성 값들은 M2, M3에 저장

// const d = c
  // 복사의 개념이 아닌 메모리주소 할당

const d = Object.assign({}, c)
// 얕은복사
// d변수에 새로운 리터럴방식의 객체데이터를 생성 하며 속성값으로 c를 복사하여 넣는다
// 아래와 동일하게 복사하는 방식임

// const d = { ...c}
// 얕은복사
// d변수에 c가 가지고있는 객체데이터중 속성만 가지고 새로운 객체데이터를 저장
// 새로운 객체 데이터를 만들었으니 새로운 메모리에 저장(M4에 저장됨)
d.x = 99
// 값 '99'를 메모리에 저장함(M5) 그 동시에 M4의 x가 읽어들이는 M2가 M5로 변경
console.log(c)
console.log(d)

const e = [1, 2, 3]
// e변수는 기존 메모리에 값 1, 2가 있으므로 M2, M3를 읽어드리고 값 3은 M7에 저장되어 값을 읽어드림

// const f = e
// const f = e.slice()
// slice()메소드도 잘라서 배열로 구분하지만 복사랑 동작은 같지만 복사 개념이랑은 다름

const f = [...e]
// f변수에 e가 가지고있는 객체데이터중 속성만 가지고 새로운 객체데이터를 저장
// 새로운 객체 데이터를 만들었으니 새로운 메모리에 저장(M8에 저장됨)

f[0] = 99
// f변수 0번째 아이템은 메모리에 값 99가 할당된 M5를 읽어드림
console.log(e)
console.log(f)

// 깊은복사
// 깊은복사를 사용하기 위해선 lodash에서 CDN을 읽어올 필요가 있음
const g = [{ x: 1, y: 2}, {x: 3, y: 4}]
const h = _.cloneDeep(g)
// h변수에 g데이터를 깊은복사하여 할당
h[0].x = 99
console.log(g)
console.log(h)

console.log("=========구분선=========")

const neo = {
  name: 'Neo',
  age: 85,
}

const evan = {
  name: 'evan',
  age: 22,
  parent: neo
}

//얕은복사
// const newEvan = { ...evan}
// newEvan변수에 객체데이터값으로 evan의 속성값들로 이루어짐
// newEvan의 내용을 수정하게 되면 원본인 neo와 evan의 데이터도 수정이 됨(같은 메모리주소를 읽어드려서)

const newEvan = _.cloneDeep(evan)
// newEvan = evan속성값으로 새로운 객체데이터를 생성함(메모리주소를 새로 생성함)
newEvan.name = 'Evan Yang'
newEvan.age = 11
newEvan.parent.name = 'Amy'

console.log(evan)
console.log(newEvan)
console.log(neo)


