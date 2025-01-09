// 화살표 함수

// 일반 함수
function hello1() {
  return 'Hello~'
}

const add1 = function(a, b) {
  // 익명 함수 function을 add1에 할당한다
  return a + b
}

const log1 = function(c) {
  console.log(c)
}

// -------- 구분선 --------

// 화살표 함수는 오른쪽 내용을 반환한다.
const hello2 = () => 'Hello~'
// 일반함수에서 return내용 밖에 없으면 {} 를 생략할 수있다.

const add2 = (a, b) => a + b
// (a, b) 매개변수랑 동일 / a + b 내용이 함수 밖으로 반환한다.
// 즉 const add2 = function(a, b) {
//    return a + b
//    }
// 와 동일하다

const log2 = c => {
  console.log(c)
}
// 매개변수가 1개만 존재한다면(c) 매개변수에 ()를 생략할 수 있다.

// -------- 구분선 --------

// 화살표 함수의 소괄호 생략
const a = () => {}
// 매개변수가 없을땐 소괄호를 작성해야함
const b = x => {}
// 매개변수가 1개만 존재하면 소괄호를 생략할 수 있음
const d = (x = 1) => {}
// 매개변수가 1개만 존재해도 기본값을 지정하기위해선 소괄호를 작성해야함
const c = (x, y) => {}
// 매개변수가 2개 이상이면 소괄호를 작성해야함

// -------- 구분선 --------

// 화살표 함수의 중괄호 생략
const i = x => {
  return x * x
}
const j = x => x * x
// i변수에서 중괄호를 생략한 같은 구조를 가진 j변수

const k = x => {
  console.log(x * x)
  return x * x
}
// 화살표 함수 후 return이 아닌 다른값이 있기에 중괄호 생략 불가

const l = () => {
  return [1, 2, 3]
}
const m = () => [1, 2, 3]
// l변수에서 중괄호를 생략한 같은 구조를 가진 m변수

const n = () => {
  return { a: 1}
}
const o = () => ({ a: 1})
// const p = () => { a: 1} // Error : Unexpected token ':'
// n변수에서 중괄호를 생략하려면 객체 데이터는 소괄호로 따로 작성해줘야함

// -------- 구분선 --------

// 객체 데이터의 메소드 축약
// fn : function의 축약
const obj = {
  fnA() {},
  // 일반 함수를 작성하는 축약법 (fnB의 축약버전)
  fnB: function () {},
  // 일반 함수
  fnC: () => {}
  // 화살표 함수
}

// 화살표함수와 일반함수 구분을 하는 이유 : this속성