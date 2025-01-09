// 전개 연산자(Spread operator)

// 배열 데이터
const numbers = [1, 2, 3]
console.log(numbers) // [1, 2, 3]
// ... : 전개 연산자(배열의 배열을 제거)
console.log(...numbers) // 1 2 3

const n1 = [1, 2, 3]
const n2 = [2, 3, 4]
// const n0 = [3, 4, 5]
// concat : 배열을 병합
const n3 = n1.concat(n2)
// const n5 = n3.concat(n0) 
const n4 = [...n1, ...n2]
console.log(n3) // [1, 2, 3, 2, 3, 4]
console.log(n4) // [1, 2, 3, 2, 3, 4]
// console.log(n5) // [1, 2, 3, 2, 3, 4, 3, 4, 5]



// 객체 데이터
const o1 = { a: 1, b: 2, c: 3}
const o2 = { b : 99, c: 100, d: 101}
// Object클래스에서 assign정적메소드 호출
const o3 = Object.assign({}, o1, o2)
// Object.assign은 첫번째 객체 데이터에 2, 3, 등등 모든것을 복사하여 집어 넣는다
// 동일 객체가 있다면 후순위로 덮어쓴다
// 출력되는 순서는 보장될수 없다.
const o4 = {...o1, ...o2}
console.log(o3) // { a: 1, b: 99, c: 100, d: 101}
console.log(o4) // { a: 1, b: 99, c: 100, d: 101}