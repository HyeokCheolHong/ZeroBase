// 즉시실행함수(IIFE)
// 함수 정의(표현)
const double = () => {
  console.log(123)
  // function으로 시작하지 않았으니 함수 표현
}
// 함수 실행(호출)
double()

// 함수 정의 및 실행 : 함수를 정의하면서 실행
// 즉시실행함수(IIFE, Immediately Invoked Function Expression)
// (함수)() // 함수데이터를 감싸서 실행한다는 의미

// 앞에 ;를 붙이는 이유는 이전명령과 섞이지 않게하기위함
;(function () {
  console.log(123)
})()
// 일반 함수

;(() => {
  console.log(123)
})()
// 화살표 함수

// '즉시실행함수'의 다양한 사용법
;(() => {})()         // (화살표함수)()
;(function () {})()   // (일반함수)()
;(function () {}())   // (일반함수())
;!function () {}()    // !일반함수()
;+function () {}()    // +일반함수()