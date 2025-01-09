// String(문자) 표준 내장 객체(Built-in Object)
// .slice() - 문자에서 일부를 추출해 새로운 문자를 반환합니다.

const msg1 = 'Hello world!'
//            012345678901
const msg2 = 'The quick brown fox jumps over the lazy dog.'
//            01234567890123456789012345678901234567890123

console.log(msg1.slice(0, 5)) // 'Hello'
// slice(숫자, 숫자-1번째) 까지 추출함
// 실제 변수 msg1의 값이 변하진 않음
console.log(msg1.slice(6, -1)) // 'world'
// slice(숫자, -1(마지막부터 1번째 직전까지))
console.log(msg1.slice(6)) // 'world'
// slice(숫자) : 숫자이후 부터 전체 추출
console.log(msg2.slice(10, 19)) // 'brown fox'
// 10 ~ 18번 글자 추출
console.log(msg2.slice(35, -1)) // 'lazy dog'

// .split() - 문자를 구분자로 나누어 배열로 반환합니다.

const msg3 = 'Hello world!'
const msg4 = 'The quick brown fox jumps over the lazy dog.'

console.log(msg1.split(' ')) // [ 'Hello', 'world!']
// 공백을 기준으로 나누어 배열로 반환
console.log(msg2.split(' ')) // [ 'The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog.']

console.log(msg1.split(''))
// 빈문자를 기준으로 나누기에 각각 쪼개어 배열로 반환
console.log(msg1.split('').reverse().join(''))
// split().reverse().join : 메소드.메소드.메소드 연결하기에 메소드 체이닝 이라고 부름
// split으로 각각 쪼개어, reverse로 배열 순서를 뒤집은 후, join으로 다시 합친다

// .toLowerCase() - 문자를 영어 소문자로 바꾼 새로운 문자로 반환합니다.
// .toUpperCase() - 문자를 영어 대문자로 바꾼 새로운 문자로 반환합니다.

const msg5 = 'Hello world!'
const msg6 = 'The quick brown fox jumps over the lazy dog.'

console.log(msg1.toLowerCase())
// 실제 msg1에 데이터는 변하지 않는다.
// msg1의 글자를 모두 소문자로 변경한다.
console.log(msg2.toLowerCase())

console.log(msg1.toUpperCase())
// msg1의 글자를 모두 대문자로 변경한다.
console.log(msg2.toUpperCase())

// .trim() - 문자에서 앞뒤 공백을 제거한 새로운 문자를 반환합니다.

const msg = '  Hello world!   '

console.log(msg.trim()) // 'Hello world!'
// 문자 중간 공백을 제외한 (앞)'문자'(뒤) 앞과 뒤에 공백을 제거
console.log(msg) // '  Hello world!'

const inputEl = document.querySelector('input')
// input창에 적힌 값을 inputEl에 저장
const buttonEl = document.querySelector('button')

inputEl.addEventListener('keydown', event => {
  // inputEl은 keydown동작이 이루어 졌을때 event 함수(콜백) 실행
  if (event.key === 'Enter') {
    // event함수의 Enter키 동작과 동일하다면
    const value = inputEl.value.trim()
    // value 변수에 input값의 trim하여 할당
    if (value) {
      // value가 false가 되려면 null(빈문자)일때만 false
      console.log(`//${value}//`)
    }
  }
})

buttonEl.addEventListener('click', () => {
  // buttonEl가 클릭이 될때
  const value = inputEl.value.trim()
    if (value) {
      console.log(`//${value}//`)
    }
})
