// 함수의 반환과 종료
function sayHi(name) {
  // sayHi : 함수의 이름
  // name(매개변수) : 함수를 호출할때 받을 변수 명

  return `Hi, ${name}~`
  // 함수 Data 반환

  console.log('동작하지 않음')
  // return 이 실행되면 함수는 종료되므로 함수내부에서 return이후는 실행될 수 없다.
}

const h = sayHi('Neo')
// 함수에 'Neo' 입력값을 주고 반환값을 변수 h에 저장

console.log(h) // `Hi, Neo~`

console.log(sayHi('Neo')) // `Hi, Neo~`


function a() {
  //
  // return keyword가 생략되어 있는 것
}
function b() {
  return
  // return 이후 undefined가 생략되어 있는 것
}
function c() {
  return undefined
}
// 결과적으로 a, b, c는 같은 내용을 의미함
// 보이드 함수(Void Function) : 함수에서 정의되어 있지 않은 Data를 반환할때

console.log(a()) // undefined
console.log(b()) // undefined
console.log(c()) // undefined