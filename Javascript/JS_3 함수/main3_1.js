function hello() {
  return 'Hello~'
  // 함수 hello를 호출하면 'Hello~' 문자열이 반환됨
}

// 함수 데이터(Data)
console.log(hello)
// 함수 데이터로써 사용하면 함수가 바로 출력
console.log(typeof hello)
// 함수 데이터의 타입을 출력

// 함수 호출(Call)
console.log(hello())
// 함수 데이터를 호출하면 반환값 출력
console.log(typeof hello())
// 함수 반환값의 데이터 타입을 출력


const h1El = document.querySelector('h1')
// h1El은 문서의 h1 tag를 찾아 입력시킨다.
// 기명 함수 - function 이름() {}
function handler() {
  // handler라는 이름을 가진 함수
  console.log(h1El.textContent)
}
h1El.addEventListener('click', handler)
//                 (이벤트 내용, 함수(이름))
// h1El이 click되었을 때 handler 함수가 실행된다.

// 익명 함수 - function () {}
h1El.addEventListener('click', function () {
  //                 (이벤트 내용, 함수())
  // h1El의 클릭 이벤트 발생시 함수(이름없음)을 실행
  // 한번만 실행할경우 사용
  console.log(h1El.textContent)
})